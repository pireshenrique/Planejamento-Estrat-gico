import os
import re
import json

evidence_files = []
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.ts', '.tsx', '.js', '.json')):
            evidence_files.append(os.path.join(root, file))

print(f"Total files scanned: {len(evidence_files)}")

# Look for evidences arrays / objects
# Common patterns:
# - CENTRAL_EVIDENCES_REGISTRY
# - Array with title, source, url or dateStr
# - objects with url or source
