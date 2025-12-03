import { GoogleGenAI, Chat } from "@google/genai";

// Initialize Gemini Client
// Note: In a production environment, API keys should be handled via a backend proxy to avoid exposure.
// For this demo, we assume the environment variable is injected securely.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
Eres el asistente virtual inteligente de "GaorSystem Perú". 
Tu objetivo es ayudar a clientes potenciales respondiendo dudas sobre los servicios de GaorSystem.
Responde de manera profesional, amigable y concisa (máximo 3 oraciones por respuesta a menos que se pida más detalle).

Información de la empresa:
- Nombre: GaorSystem Perú
- Especialidad: Tecnología para negocios, implementación de sistemas, automatización y soluciones digitales.

Servicios Principales:
1. Implementación de Odoo: Para todo tipo de negocio (Farmacias, tiendas, restaurantes). Incluye POS, Inventario, Facturación SUNAT, Contabilidad.
2. Automatizaciones con n8n + APIs: Bots de ventas, integración WhatsApp API, pedidos TikTok Live, conexión con Google Sheets/Supabase.
3. Asistente Virtual IA: Chatbots inteligentes para atención 24/7.
4. Landing Pages: Desarrollo web moderno para captar clientes (React, Tailwind).
5. Soluciones Personalizadas: Sistemas de turnos, apps internas, control de inventarios a medida.

Propuesta de valor: Experiencia real, ahorro de tiempo, soporte continuo y comunicación clara.
Contacto: Sugiere contactar por WhatsApp para una demo o cotización.
`;

let chatSession: Chat | null = null;

export const initChat = () => {
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initChat();
  }
  
  if (!chatSession) {
      return "Lo siento, no puedo conectar con el servidor de IA en este momento. Por favor verifica la configuración de la API Key.";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Disculpa, no entendí bien. ¿Puedes reformular?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Hubo un error temporal al procesar tu consulta. Por favor intenta de nuevo o contáctanos por WhatsApp.";
  }
};