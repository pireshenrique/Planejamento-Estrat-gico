import re

with open('src/components/layout/StrategicPortal.tsx', 'r') as f:
    content = f.read()

btn_replacement = """            <button
              onClick={() => {
                if (window.innerWidth < 1024) {
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                } else {
                  setIsSidebarCollapsed(!isSidebarCollapsed);
                }
              }}
              className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle menu"
            >"""

content = re.sub(
    r'<button\s*onClick=\{\(\) => setIsSidebarCollapsed\(\!isSidebarCollapsed\)\}\s*className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"\s*aria-label="Toggle menu"\s*>',
    btn_replacement,
    content
)

with open('src/components/layout/StrategicPortal.tsx', 'w') as f:
    f.write(content)

print("Patched button successfully.")
