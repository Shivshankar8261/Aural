import { GoogleGenAI, Modality, Type } from '@google/genai';

export const geminiService = {
  async generateSpeech(text: string): Promise<string | null> {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) return null;
    const ai = new GoogleGenAI({ apiKey });
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-tts',
        contents: [{ parts: [{ text: `Recite this text clearly, slowly, and melodiously with a traditional ancient Indian accent, like a sage or priest: ${text}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        return base64Audio;
      }
      return null;
    } catch (e) {
      console.error('Gemini TTS error:', e);
      return null;
    }
  },

  async evaluatePronunciation(audioBase64: string, targetText: string, mimeType: string = 'audio/webm') {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) return null;
    const ai = new GoogleGenAI({ apiKey });
    try {
      // Clean base64 string if it has data URI prefix
      const base64Data = audioBase64.split(',')[1] || audioBase64;
      
      const cleanMimeType = mimeType.split(';')[0] || 'audio/webm';
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: {
          parts: [
            {
              inlineData: {
                mimeType: cleanMimeType,
                data: base64Data,
              },
            },
            {
              text: `You are a language pronunciation coach. The user was supposed to say: "${targetText}".
Listen to the audio and evaluate their pronunciation.
Return a JSON object with the following structure exactly:
{
  "score": <overall score between 0 and 100>,
  "accuracy": <accuracy score between 0 and 100>,
  "fluency": <fluency score between 0 and 100>,
  "pronunciation": <pronunciation score between 0 and 100>,
  "recognizedText": "<what the user actually said>",
  "weakWord": "<the word they struggled with most, or null if perfect>",
  "feedback": "<one short, simple sentence of encouraging feedback>"
}`,
            },
          ],
        },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              score: { type: Type.INTEGER, description: "Overall score between 0 and 100" },
              accuracy: { type: Type.INTEGER, description: "Accuracy score between 0 and 100" },
              fluency: { type: Type.INTEGER, description: "Fluency score between 0 and 100" },
              pronunciation: { type: Type.INTEGER, description: "Pronunciation score between 0 and 100" },
              recognizedText: { type: Type.STRING, description: "What the user actually said" },
              weakWord: { type: Type.STRING, description: "The word they struggled with most, or empty string if perfect" },
              feedback: { type: Type.STRING, description: "One short, simple sentence of encouraging feedback" }
            },
            required: ["score", "accuracy", "fluency", "pronunciation", "recognizedText", "feedback", "weakWord"]
          }
        },
      });

      let text = response.text;
      if (text) {
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(text);
      }
      return null;
    } catch (e) {
      console.error('Gemini Pronunciation Evaluation error:', e);
      return null;
    }
  }
};
