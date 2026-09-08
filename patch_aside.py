import re

with open('src/components/layout/StrategicPortal.tsx', 'r') as f:
    content = f.read()

aside_replacement = """      {/* OVERLAY FOR MOBILE */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      
      {/* SIDEBAR */}
      <aside className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 print:hidden ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } ${isSidebarCollapsed ? "lg:w-[80px]" : "lg:w-[280px]"} w-[280px] bg-[#0c162c] text-slate-300 flex flex-col flex-shrink-0 h-full overflow-hidden`}>"""

content = re.sub(
    r'\{\/\* SIDEBAR \*\/\}\s*<aside className=\{\`print:hidden \$\{isSidebarCollapsed \? "w-\[80px\]" : "w-\[280px\]"\} bg-\[\#0c162c\] text-slate-300 flex flex-col flex-shrink-0 h-full overflow-hidden transition-all duration-300\`\}>',
    aside_replacement,
    content
)

with open('src/components/layout/StrategicPortal.tsx', 'w') as f:
    f.write(content)

print("Patched aside successfully.")
