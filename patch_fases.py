import re

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace(
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                  </div>''',
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                    <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE A — ORIGEM DA OPERAÇÃO</span>
                    <div className="h-px bg-blue-600 flex-1 opacity-40"></div>
                  </div>'''
)

content = content.replace(
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                  </div>''',
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                    <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE B — PROCESSAMENTO</span>
                    <div className="h-px bg-indigo-600 flex-1 opacity-40"></div>
                  </div>'''
)

content = content.replace(
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0"></div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-1.5 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                  </div>''',
'''<div className="flex items-center w-full h-4 mb-1.5">
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                    <span className="text-[11px] font-bold text-teal-600 dark:text-teal-500 uppercase tracking-widest px-2.5 whitespace-nowrap">FASE C — FINALIZAÇÃO</span>
                    <div className="h-px bg-teal-500 flex-1 opacity-40"></div>
                  </div>'''
)

with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
