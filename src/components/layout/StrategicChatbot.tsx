import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Maximize2, Minimize2, X, Search } from 'lucide-react';
import { CENTRAL_EVIDENCES_REGISTRY } from '../../data/evidencesRegistry';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export function StrategicChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    if (!isExpanded) setIsExpanded(true);

    try {
      // Create context summary from evidences
      const allEvidences = Object.values(CENTRAL_EVIDENCES_REGISTRY).flat();
      const contextData = allEvidences.map(e => `[ID: ${e.id}] (${e.source}) ${e.title}: ${e.summary}`).join('\n');
      
      // Determine complexity (simple heuristic for example purposes)
      let taskComplexity = 'general';
      if (userMessage.length > 200 || userMessage.toLowerCase().includes('analise detalhada') || userMessage.toLowerCase().includes('impacto profundo')) {
        taskComplexity = 'complex';
      } else if (userMessage.length < 20 && !userMessage.includes('?')) {
        taskComplexity = 'fast';
      }

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages,
          contextData,
          taskComplexity
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Erro ao comunicar com o servidor');
      }

      setMessages([...newMessages, { role: 'model', content: data.text }]);
    } catch (error) {
      console.error(error);
      setMessages([...newMessages, { role: 'model', content: 'Desculpe, ocorreu um erro ao processar sua solicitação.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  if (!isExpanded && messages.length === 0) {
    return (
      <div className="relative mb-3 sm:mb-4 group">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Pergunte ao Chatbot Estratégico sobre temas, países ou indicadores..." 
          className="w-full h-11 sm:h-[52px] pl-4 sm:pl-5 pr-12 sm:pr-14 text-[15px] sm:text-[17px] border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white dark:bg-[#121c32] placeholder:text-slate-400 dark:text-slate-400 shadow-sm transition-all"
        />
        <button 
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="absolute right-2 sm:right-3 top-1.5 sm:top-2 p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg transition-colors"
        >
          <Search className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className={`bg-white dark:bg-[#121c32] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm mb-6 flex flex-col transition-all duration-300 ${isExpanded ? 'h-[500px]' : 'h-[300px]'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-[#0c162c]/50 rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white text-sm sm:text-base">Chatbot Estratégico</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Consulte evidências e insights</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title={isExpanded ? "Reduzir" : "Expandir"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => { setMessages([]); setIsExpanded(false); setInput(''); }}
            className="p-1.5 text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 rounded-md hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors"
            title="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-5 custom-scrollbar bg-slate-50/30 dark:bg-transparent">
        <div className="space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-slate-500 dark:text-slate-400 text-sm py-10">
              Olá! Como posso ajudar com as informações estratégicas hoje?
            </div>
          )}
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex flex-shrink-0 items-center justify-center text-blue-600 dark:text-blue-400 mt-1">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              <div 
                className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-3.5 sm:p-4 text-[14px] sm:text-[15px] leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-sm' 
                    : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex flex-shrink-0 items-center justify-center text-blue-600 dark:text-blue-400 mt-1">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-tl-sm p-4 shadow-sm flex items-center">
                <Loader2 className="w-5 h-5 text-blue-500 animate-spin" />
                <span className="ml-3 text-sm text-slate-500 dark:text-slate-400 font-medium">Buscando nas evidências...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800/50 bg-white dark:bg-[#121c32] rounded-b-2xl">
        <form onSubmit={handleSubmit} className="relative flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua pergunta estratégica..."
            className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 rounded-xl py-3 pl-4 pr-12 text-[14px] sm:text-[15px] text-slate-700 dark:text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none min-h-[52px] max-h-[120px] custom-scrollbar"
            rows={1}
            style={{ height: 'auto' }}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="absolute right-2 bottom-2 p-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg transition-colors flex-shrink-0 shadow-sm"
          >
            {isLoading ? <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" /> : <Send className="w-4 h-4 sm:w-5 sm:h-5" />}
          </button>
        </form>
      </div>
    </div>
  );
}
