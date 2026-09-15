const fs = require('fs');
const filePath = './server.ts';
let content = fs.readFileSync(filePath, 'utf-8');

// The route /api/strategic-report starts at app.post("/api/strategic-report", async (req, res) => {
// and goes all the way up to app.post("/api/chat"

const startIndex = content.indexOf('app.post("/api/strategic-report"');
const endIndex = content.indexOf('app.post("/api/chat"');

if (startIndex !== -1 && endIndex !== -1) {
    content = content.slice(0, startIndex) + content.slice(endIndex);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Removed /api/strategic-report");
}
