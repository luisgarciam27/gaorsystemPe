import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! 👋 Soy el asistente IA de GaorSystem. ¿En qué te ayudo hoy? Pregúntame sobre Odoo o Automatizaciones.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    const aiResponseText = await sendMessageToGemini(inputValue);
    
    const aiMsg: ChatMessage = { role: 'model', text: aiResponseText };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 p-4 bg-brand-600 hover:bg-brand-500 text-white rounded-full shadow-2xl shadow-brand-500/30 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 group ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare size={24} />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-bold whitespace-nowrap">
            Asistente Virtual
        </span>
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-500"></span>
        </span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300 sm:w-[380px]">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm border border-white/20">
                <Sparkles size={18} className="text-accent-300" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Asistente GaorSystem</h4>
                <p className="text-xs text-brand-100 flex items-center gap-1">
                  <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span> En línea (Gemini AI)
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-brand-200 hover:text-white transition-colors bg-white/10 hover:bg-white/20 p-1 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 h-96 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed font-medium ${
                    msg.role === 'user' 
                      ? 'bg-brand-600 text-white rounded-tr-none shadow-md shadow-brand-200' 
                      : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm">
                  <Loader2 size={16} className="animate-spin text-brand-600" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu consulta..."
                className="flex-1 px-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:border-brand-500 text-sm font-medium bg-slate-50 focus:bg-white transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-brand-600 hover:bg-brand-500 disabled:bg-slate-300 text-white p-3 rounded-full transition-all shadow-md hover:shadow-lg disabled:shadow-none"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">
              Powered by Google Gemini.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;