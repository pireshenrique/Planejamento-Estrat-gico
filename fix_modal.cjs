const fs = require('fs');
let content = fs.readFileSync('src/components/layout/StrategicReportView.tsx', 'utf-8');

content = content.replace("</div>\n        </div>\n      )}</div>\n        </div>\n      )}", "</div>\n        </div>\n      )}");

fs.writeFileSync('src/components/layout/StrategicReportView.tsx', content);
