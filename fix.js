const fs = require('fs');
let file = fs.readFileSync('src/components/economia-brasileira/IdhView.tsx', 'utf8');

file = file.replace(
  '<span className="text-[36px] md:text-[44px] font-bold text-amber-100 dark:text-amber-900/40 le                  <div className="flex flex-col gap-3.5 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">',
  `<span className="text-[36px] md:text-[44px] font-bold text-amber-100 dark:text-amber-900/40 leading-none shrink-0 select-none">
                      02
                    </span>
                  </div>

                  <div className="flex flex-col gap-3.5 text-[14px] text-slate-600 dark:text-slate-400 leading-relaxed md:pl-[64px]">`
);

fs.writeFileSync('src/components/economia-brasileira/IdhView.tsx', file);
