import os
import re

def analyze_sources_and_evidences():
    evidence_objects = []
    
    # We want to identify all real strategic evidence records
    # Let's inspect objects that have { ... title, source, url ... } or { ... title, url ... }
    
    for root, dirs, files in os.walk('src'):
        for f in files:
            if f.endswith(('.ts', '.tsx')):
                filepath = os.path.join(root, f)
                with open(filepath, 'r', encoding='utf-8', errors='ignore') as file:
                    content = file.read()
                    
                    # Check if file has evidence declarations
                    # Pattern for object literals with title, source, and url
                    # Let's find regex matches of objects having title, source, url
                    matches = re.finditer(
                        r'\{\s*(?:[^{}]*?(?:title|headline|source|url|dateStr)\s*:\s*[\'"`][^\'"`]+[\'"`][^{}]*?){2,}\}',
                        content
                    )
                    count_in_file = 0
                    for m in matches:
                        block = m.group(0)
                        # Ensure it looks like an evidence item
                        title_m = re.search(r'title\s*:\s*[\'"`]([^\'"`]+)[\'"`]', block)
                        source_m = re.search(r'source\s*:\s*[\'"`]([^\'"`]+)[\'"`]', block)
                        url_m = re.search(r'url\s*:\s*[\'"`]([^\'"`]+)[\'"`]', block)
                        
                        if (title_m and (source_m or url_m)) or (source_m and url_m):
                            count_in_file += 1
                            evidence_objects.append({
                                'file': filepath,
                                'title': title_m.group(1) if title_m else '',
                                'source': source_m.group(1) if source_m else '',
                                'url': url_m.group(1) if url_m else ''
                            })
                    if count_in_file > 0:
                        print(f"{filepath}: {count_in_file} evidences found")

    print(f"\nTotal raw evidence objects detected: {len(evidence_objects)}")

analyze_sources_and_evidences()
