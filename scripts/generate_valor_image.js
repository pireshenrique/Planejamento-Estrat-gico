import { createCanvas } from '@napi-rs/canvas';
import fs from 'fs';
import path from 'path';

// Canvas dimensions
const width = 1200;
const height = 660;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// White background
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, width, height);

// Margins
const paddingX = 30;
let currentY = 35;

// Main Title
ctx.fillStyle = '#111827';
ctx.font = 'bold 28px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('Construtoras seguram lançamentos e vendas crescem menos', paddingX, currentY);

// Subtitle
currentY += 28;
ctx.fillStyle = '#374151';
ctx.font = 'normal 17px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('Desempenho no 2º trimestre e no primeiro semestre, em relação aos mesmos períodos de 2025', paddingX, currentY);

// Divider
currentY += 15;
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(paddingX, currentY);
ctx.lineTo(width - paddingX, currentY);
ctx.stroke();

// Section 1: Dados apontam para desaceleração operacional
currentY += 24;
ctx.fillStyle = '#111827';
ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('Dados apontam para desaceleração operacional', paddingX, currentY);

// TABLE DEFINITION
currentY += 12;
const tableTop = currentY;
const tableWidth = width - (paddingX * 2);

// Columns: [Label(170), MCMV(130), Var1(110), MAP(130), Var2(110), Total(140), Var3(110)]
const colWidths = [180, 150, 110, 150, 110, 160, 120];
const colX = [];
let accX = paddingX;
for (let w of colWidths) {
  colX.push(accX);
  accX += w;
}

const drawTableHeader = (y, periodLabel) => {
  const rowHeight = 28;
  // Background
  ctx.fillStyle = '#eaf2f8';
  ctx.fillRect(paddingX, y, tableWidth, rowHeight);

  // Total Column special background
  ctx.fillStyle = '#d5e5f3';
  ctx.fillRect(colX[5], y, colWidths[5] + colWidths[6], rowHeight);

  ctx.strokeStyle = '#cbd5e1';
  ctx.lineWidth = 1;
  ctx.strokeRect(paddingX, y, tableWidth, rowHeight);

  ctx.fillStyle = '#111827';
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(periodLabel, colX[0] + 8, y + 19);

  ctx.textAlign = 'right';
  ctx.fillText('MCMV¹', colX[1] + colWidths[1] - 12, y + 19);
  ctx.fillText('Variação', colX[2] + colWidths[2] - 12, y + 19);
  ctx.fillText('MAP¹', colX[3] + colWidths[3] - 12, y + 19);
  ctx.fillText('Variação', colX[4] + colWidths[4] - 12, y + 19);
  ctx.fillText('Total', colX[5] + colWidths[5] - 12, y + 19);
  ctx.fillText('Variação', colX[6] + colWidths[6] - 12, y + 19);
  
  return y + rowHeight;
};

const drawTableRow = (y, label, v1, var1, v2, var2, v3, var3, isAlt) => {
  const rowHeight = 27;
  
  // Background
  if (isAlt) {
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(paddingX, y, tableWidth, rowHeight);
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(paddingX, y, tableWidth, rowHeight);
  }

  // Total Column light tint
  ctx.fillStyle = isAlt ? '#e7f0f8' : '#edf4fa';
  ctx.fillRect(colX[5], y, colWidths[5] + colWidths[6], rowHeight);

  // Border bottom
  ctx.strokeStyle = '#e2e8f0';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(paddingX, y + rowHeight);
  ctx.lineTo(width - paddingX, y + rowHeight);
  ctx.stroke();

  // Content
  ctx.fillStyle = '#1e293b';
  ctx.font = 'normal 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(label, colX[0] + 8, y + 19);

  ctx.textAlign = 'right';
  ctx.fillText(v1, colX[1] + colWidths[1] - 12, y + 19);
  ctx.fillText(var1, colX[2] + colWidths[2] - 12, y + 19);
  ctx.fillText(v2, colX[3] + colWidths[3] - 12, y + 19);
  ctx.fillText(var2, colX[4] + colWidths[4] - 12, y + 19);
  
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
  ctx.fillText(v3, colX[5] + colWidths[5] - 12, y + 19);
  ctx.fillText(var3, colX[6] + colWidths[6] - 12, y + 19);

  return y + rowHeight;
};

let tableY = currentY;
// 2º tri/2026
tableY = drawTableHeader(tableY, '2º tri/2026');
tableY = drawTableRow(tableY, 'Lançamentos', '9.010,50', '-1%', '7.471,80', '-2,3%', '16.482,30', '-1,9%', false);
tableY = drawTableRow(tableY, 'Vendas', '8.099,0', '3,4%', '5.837,50', '-5,1%', '13.936,50', '-1%', true);

// 1º sem/2026
tableY = drawTableHeader(tableY, '1º sem/2026');
tableY = drawTableRow(tableY, 'Lançamentos', '17.348,20', '0,7%', '13.056,70', '0,4%', '30.404,90', '0,2%', false);
tableY = drawTableRow(tableY, 'Vendas', '16.143,60', '7,8%', '11.483,30', '7,2%', '27.626,90', '7,5%', true);

// SECTION 2 DIVIDER
currentY = tableY + 16;
ctx.strokeStyle = '#000000';
ctx.lineWidth = 2;
ctx.beginPath();
ctx.moveTo(paddingX, currentY);
ctx.lineTo(width - paddingX, currentY);
ctx.stroke();

// Section 2 Header: Velocidade de venda recua, em %
currentY += 24;
ctx.textAlign = 'left';
ctx.fillStyle = '#111827';
ctx.font = 'bold 18px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('Velocidade de venda recua, em %', paddingX, currentY);

// Legend
currentY += 24;
// Legend item 1: VSO 2º tri 2025
ctx.fillStyle = '#005b82';
ctx.beginPath();
ctx.arc(paddingX + 8, currentY - 5, 6, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#111827';
ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('VSO² 2º tri 2025', paddingX + 22, currentY);

// Legend item 2: VSO 2º tri 2026
const legendX2 = paddingX + 160;
ctx.fillStyle = '#d96b27';
ctx.beginPath();
ctx.arc(legendX2 + 8, currentY - 5, 6, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = '#111827';
ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('VSO² 2º tri 2026', legendX2 + 22, currentY);

// BAR CHART
currentY += 20;
const chartTop = currentY;
const chartBottom = chartTop + 140;
const chartLeft = paddingX + 40;
const chartRight = width - paddingX - 40;
const chartWidth = chartRight - chartLeft;

// Grid lines at 0, 10, 20, 30, 40
const yLevels = [0, 10, 20, 30, 40];
ctx.textAlign = 'right';
ctx.font = 'bold 14px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';

for (let lvl of yLevels) {
  const yPos = chartBottom - (lvl / 40) * (chartBottom - chartTop);
  
  ctx.strokeStyle = lvl === 0 ? '#334155' : '#cbd5e1';
  ctx.lineWidth = lvl === 0 ? 2 : 1;
  ctx.beginPath();
  ctx.moveTo(chartLeft, yPos);
  ctx.lineTo(chartRight, yPos);
  ctx.stroke();

  ctx.fillStyle = '#1e293b';
  ctx.fillText(lvl.toString(), chartLeft - 10, yPos + 5);
}

// Chart Groups
const groups = [
  { label: 'MCMV', v2025: 31.5, v2025Str: '31,5', v2026: 27.8, v2026Str: '27,8' },
  { label: 'MAP', v2025: 18.7, v2025Str: '18,7', v2026: 12.7, v2026Str: '12,7' },
  { label: 'Total', v2025: 23.0, v2025Str: '23', v2026: 17.7, v2026Str: '17,7' }
];

const groupSpacing = chartWidth / 3;
const barWidth = 72;
const barGap = 12;

groups.forEach((g, idx) => {
  const groupCenterX = chartLeft + (idx + 0.5) * groupSpacing;
  
  // Bar 1: 2025 (Blue)
  const bar1X = groupCenterX - barWidth - (barGap / 2);
  const bar1Height = (g.v2025 / 40) * (chartBottom - chartTop);
  const bar1Y = chartBottom - bar1Height;

  ctx.fillStyle = '#005b82';
  ctx.fillRect(bar1X, bar1Y, barWidth, bar1Height);

  // Label 1
  ctx.textAlign = 'center';
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 16px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
  ctx.fillText(g.v2025Str, bar1X + (barWidth / 2), bar1Y - 8);

  // Bar 2: 2026 (Orange)
  const bar2X = groupCenterX + (barGap / 2);
  const bar2Height = (g.v2026 / 40) * (chartBottom - chartTop);
  const bar2Y = chartBottom - bar2Height;

  ctx.fillStyle = '#d96b27';
  ctx.fillRect(bar2X, bar2Y, barWidth, bar2Height);

  // Label 2
  ctx.fillStyle = '#111827';
  ctx.fillText(g.v2026Str, bar2X + (barWidth / 2), bar2Y - 8);

  // Group Label
  ctx.fillStyle = '#111827';
  ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
  ctx.fillText(g.label, groupCenterX, chartBottom + 25);
});

// FOOTNOTE
const footnoteY = chartBottom + 52;
ctx.textAlign = 'left';
ctx.fillStyle = '#475569';
ctx.font = 'normal 12px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif';
ctx.fillText('Fonte: prévias operacionais de 14 companhias; valores consideram a participação das empresas nos projetos. Dados em R$ milhões. ¹ Minha Casa, Minha Vida e Médio', paddingX, footnoteY);
ctx.fillText('e Alto Padrão. ² Venda sobre oferta, na média entre as empresas', paddingX, footnoteY + 16);

// Write to public/valor_incorporadoras_2t2026.png
const buffer = canvas.toBuffer('image/png');
const outPublic = path.join(process.cwd(), 'public', 'valor_incorporadoras_2t2026.png');
fs.writeFileSync(outPublic, buffer);
console.log('Successfully written to', outPublic);

// Also copy to dist if dist exists
const distDir = path.join(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'valor_incorporadoras_2t2026.png'), buffer);
  console.log('Also copied to dist/valor_incorporadoras_2t2026.png');
}
