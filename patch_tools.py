import re

with open('src/components/layout/StrategicPortal.tsx', 'r') as f:
    content = f.read()

# For A-
content = content.replace(
    'className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2 cursor-pointer"\n              aria-label="Diminuir fonte"',
    'className="w-10 h-10 rounded-full hidden sm:flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2 cursor-pointer"\n              aria-label="Diminuir fonte"'
)

# For A+
content = content.replace(
    'className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2 cursor-pointer"\n              aria-label="Aumentar fonte"',
    'className="w-10 h-10 rounded-full hidden sm:flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors mr-2 cursor-pointer"\n              aria-label="Aumentar fonte"'
)

# For Fullscreen
content = re.sub(
    r'className=\{(?:`w-10 h-10 rounded-full flex items-center justify-center transition-colors mr-3 cursor-pointer \$\{) \s*isFullscreen \s*\? \'bg-blue-600 text-white hover:bg-blue-700\' \s*: \'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700\' \s*\}\}`\}',
    '`w-10 h-10 rounded-full hidden sm:flex items-center justify-center transition-colors mr-3 cursor-pointer ${isFullscreen ? \'bg-blue-600 text-white hover:bg-blue-700\' : \'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700\'}`',
    content
)


with open('src/components/layout/StrategicPortal.tsx', 'w') as f:
    f.write(content)
