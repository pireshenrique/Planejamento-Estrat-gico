import os
import re
import json

with open('src/components/layout/StrategicPortal.tsx') as f:
    portal_code = f.read()

# Let's inspect sidebar groups
# children inside sidebar groups
print("=== SIDEBAR GROUPS ===")
# parse JSON-like structure of sidebarGroups
match = re.search(r'const sidebarGroups\s*=\s*(\[[\s\S]*?\]);', portal_code)
if match:
    raw_groups = match.group(1)
    # clean comments or object references like icons
    cleaned = re.sub(r'icon:\s*\w+,?', '', raw_groups)
    cleaned = re.sub(r'(\w+):', r'"\1":', cleaned)
    cleaned = re.sub(r",\s*]", "]", cleaned)
    cleaned = re.sub(r",\s*}", "}", cleaned)
    try:
        groups = json.loads(cleaned)
        subthemes_sidebar = []
        for g in groups:
            for child in g.get('children', []):
                if isinstance(child, str):
                    subthemes_sidebar.append(child)
                elif isinstance(child, dict):
                    # nested group like Economia Mundial
                    for sc in child.get('children', []):
                        subthemes_sidebar.append(sc)
        print(f"Direct subthemes in sidebar: {len(subthemes_sidebar)}")
        for st in subthemes_sidebar:
            print("  *", st)
    except Exception as e:
        print("Parse error:", e)

# Also let's inspect all unique pages supported in StrategicPortal
page_matches = re.findall(r'activePage\s*===?\s*[\'\"`]([^\'\"`]+)[\'\"`]', portal_code)
unique_pages = set(page_matches)
print(f"\nUnique activePages explicitly handled in code: {len(unique_pages)}")
for p in sorted(unique_pages):
    print("  >", p)
