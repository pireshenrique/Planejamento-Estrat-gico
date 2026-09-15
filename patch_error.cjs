const fs = require('fs');
let server = fs.readFileSync('server.ts', 'utf-8');

const targetStr = `    } catch (err: any) {
      console.error("[Strategic Report API Error]:", err.message);
      return res.json({
        status: "success",
        dataAnalise: formattedDate,
        fromAI: false,
        error: err.message
      });
    }`;

const newStr = `    } catch (err: any) {
      console.error("[Strategic Report API Error]:", err.message);
      return res.status(500).json({
        status: "error",
        dataAnalise: formattedDate,
        fromAI: false,
        error: err.message
      });
    }`;

server = server.replace(targetStr, newStr);

// Also remove mockData from /api/brics-trends
const bricsErrorTarget = `    } catch (error: any) {
      console.error("Internal service fallback triggered due to exception.");
      const mockData = {`;

const bricsNewTarget = `    } catch (error: any) {
      console.error("API falhou e fallbacks foram desativados:", error.message);
      return res.status(500).json({ error: error.message });
      /*`;

server = server.replace(bricsErrorTarget, bricsNewTarget);
server = server.replace(`      return res.json(mockData);\n    }`, `      */\n    }`);

fs.writeFileSync('server.ts', server);
