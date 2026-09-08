with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

import_block_start = content.find("import {\n  TrendingUp,")
if import_block_start != -1:
    import_block_end = content.find("} from 'lucide-react';", import_block_start)
    imports_str = content[import_block_start:import_block_end]
    
    needed = ["ArrowLeftRight", "Wallet", "Link2", "ListChecks"]
    for icon in needed:
        if icon not in imports_str:
            imports_str += f"  {icon},\n"
            
    new_content = content[:import_block_start] + imports_str + content[import_block_end:]
    
    with open('src/components/economia-brasileira/ReformaTributariaView.tsx', 'w', encoding='utf-8') as f:
        f.write(new_content)
