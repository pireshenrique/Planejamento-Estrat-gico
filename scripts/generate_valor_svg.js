import fs from 'fs';
import path from 'path';

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 660" width="100%" height="100%" style="background: #ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
  <!-- Title & Subtitle -->
  <text x="30" y="38" fill="#111827" font-size="28" font-weight="bold" letter-spacing="-0.5">
    Construtoras seguram lançamentos e vendas crescem menos
  </text>
  <text x="30" y="68" fill="#374151" font-size="17" font-weight="normal">
    Desempenho no 2º trimestre e no primeiro semestre, em relação aos mesmos períodos de 2025
  </text>

  <!-- Top Divider -->
  <line x1="30" y1="84" x2="1170" y2="84" stroke="#000000" stroke-width="2" />

  <!-- Section 1 Header -->
  <text x="30" y="112" fill="#111827" font-size="18" font-weight="bold">
    Dados apontam para desaceleração operacional
  </text>

  <!-- TABLE 1: 2º tri/2026 -->
  <g transform="translate(30, 126)">
    <!-- Header Row -->
    <rect x="0" y="0" width="1140" height="28" fill="#eaf2f8" stroke="#cbd5e1" stroke-width="1" />
    <rect x="830" y="0" width="310" height="28" fill="#d5e5f3" stroke="#cbd5e1" stroke-width="1" />
    <text x="12" y="19" fill="#111827" font-size="15" font-weight="bold">2º tri/2026</text>
    <text x="318" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">MCMV¹</text>
    <text x="428" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>
    <text x="568" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">MAP¹</text>
    <text x="678" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>
    <text x="980" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Total</text>
    <text x="1128" y="19" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>

    <!-- Row 1: Lançamentos -->
    <rect x="0" y="28" width="1140" height="27" fill="#ffffff" />
    <rect x="830" y="28" width="310" height="27" fill="#edf4fa" />
    <line x1="0" y1="55" x2="1140" y2="55" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="47" fill="#1e293b" font-size="15">Lançamentos</text>
    <text x="318" y="47" fill="#1e293b" font-size="15" text-anchor="end">9.010,50</text>
    <text x="428" y="47" fill="#1e293b" font-size="15" text-anchor="end">-1%</text>
    <text x="568" y="47" fill="#1e293b" font-size="15" text-anchor="end">7.471,80</text>
    <text x="678" y="47" fill="#1e293b" font-size="15" text-anchor="end">-2,3%</text>
    <text x="980" y="47" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">16.482,30</text>
    <text x="1128" y="47" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">-1,9%</text>

    <!-- Row 2: Vendas -->
    <rect x="0" y="55" width="1140" height="27" fill="#f8fafc" />
    <rect x="830" y="55" width="310" height="27" fill="#e7f0f8" />
    <line x1="0" y1="82" x2="1140" y2="82" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="74" fill="#1e293b" font-size="15">Vendas</text>
    <text x="318" y="74" fill="#1e293b" font-size="15" text-anchor="end">8.099,0</text>
    <text x="428" y="74" fill="#1e293b" font-size="15" text-anchor="end">3,4%</text>
    <text x="568" y="74" fill="#1e293b" font-size="15" text-anchor="end">5.837,50</text>
    <text x="678" y="74" fill="#1e293b" font-size="15" text-anchor="end">-5,1%</text>
    <text x="980" y="74" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">13.936,50</text>
    <text x="1128" y="74" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">-1%</text>

    <!-- TABLE 2: 1º sem/2026 -->
    <!-- Header Row -->
    <rect x="0" y="82" width="1140" height="28" fill="#eaf2f8" stroke="#cbd5e1" stroke-width="1" />
    <rect x="830" y="82" width="310" height="28" fill="#d5e5f3" stroke="#cbd5e1" stroke-width="1" />
    <text x="12" y="101" fill="#111827" font-size="15" font-weight="bold">1º sem/2026</text>
    <text x="318" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">MCMV¹</text>
    <text x="428" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>
    <text x="568" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">MAP¹</text>
    <text x="678" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>
    <text x="980" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Total</text>
    <text x="1128" y="101" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">Variação</text>

    <!-- Row 1: Lançamentos -->
    <rect x="0" y="110" width="1140" height="27" fill="#ffffff" />
    <rect x="830" y="110" width="310" height="27" fill="#edf4fa" />
    <line x1="0" y1="137" x2="1140" y2="137" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="129" fill="#1e293b" font-size="15">Lançamentos</text>
    <text x="318" y="129" fill="#1e293b" font-size="15" text-anchor="end">17.348,20</text>
    <text x="428" y="129" fill="#1e293b" font-size="15" text-anchor="end">0,7%</text>
    <text x="568" y="129" fill="#1e293b" font-size="15" text-anchor="end">13.056,70</text>
    <text x="678" y="129" fill="#1e293b" font-size="15" text-anchor="end">0,4%</text>
    <text x="980" y="129" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">30.404,90</text>
    <text x="1128" y="129" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">0,2%</text>

    <!-- Row 2: Vendas -->
    <rect x="0" y="137" width="1140" height="27" fill="#f8fafc" />
    <rect x="830" y="137" width="310" height="27" fill="#e7f0f8" />
    <line x1="0" y1="164" x2="1140" y2="164" stroke="#e2e8f0" stroke-width="1" />
    <text x="12" y="156" fill="#1e293b" font-size="15">Vendas</text>
    <text x="318" y="156" fill="#1e293b" font-size="15" text-anchor="end">16.143,60</text>
    <text x="428" y="156" fill="#1e293b" font-size="15" text-anchor="end">7,8%</text>
    <text x="568" y="156" fill="#1e293b" font-size="15" text-anchor="end">11.483,30</text>
    <text x="678" y="156" fill="#1e293b" font-size="15" text-anchor="end">7,2%</text>
    <text x="980" y="156" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">27.626,90</text>
    <text x="1128" y="156" fill="#111827" font-size="15" font-weight="bold" text-anchor="end">7,5%</text>
  </g>

  <!-- Mid Divider -->
  <line x1="30" y1="310" x2="1170" y2="310" stroke="#000000" stroke-width="2" />

  <!-- Section 2 Header: Velocidade de venda recua -->
  <text x="30" y="336" fill="#111827" font-size="18" font-weight="bold">
    Velocidade de venda recua, em %
  </text>

  <!-- Legend -->
  <circle cx="38" cy="358" r="6" fill="#005b82" />
  <text x="50" y="363" fill="#111827" font-size="14" font-weight="bold">VSO² 2º tri 2025</text>

  <circle cx="196" cy="358" r="6" fill="#d96b27" />
  <text x="208" y="363" fill="#111827" font-size="14" font-weight="bold">VSO² 2º tri 2026</text>

  <!-- CHART AREA: Y goes from 40 down to 0 -->
  <!-- Top: 395, Bottom: 535, Height: 140 -->
  <g transform="translate(70, 395)">
    <!-- Y-axis labels and grid lines -->
    <!-- 40: y=0 -->
    <line x1="0" y1="0" x2="1060" y2="0" stroke="#cbd5e1" stroke-width="1" />
    <text x="-12" y="5" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="end">40</text>

    <!-- 30: y=35 -->
    <line x1="0" y1="35" x2="1060" y2="35" stroke="#cbd5e1" stroke-width="1" />
    <text x="-12" y="40" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="end">30</text>

    <!-- 20: y=70 -->
    <line x1="0" y1="70" x2="1060" y2="70" stroke="#cbd5e1" stroke-width="1" />
    <text x="-12" y="75" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="end">20</text>

    <!-- 10: y=105 -->
    <line x1="0" y1="105" x2="1060" y2="105" stroke="#cbd5e1" stroke-width="1" />
    <text x="-12" y="110" fill="#1e293b" font-size="14" font-weight="bold" text-anchor="end">10</text>

    <!-- 0: y=140 -->
    <line x1="0" y1="140" x2="1060" y2="140" stroke="#334155" stroke-width="2" />

    <!-- Group 1: MCMV (Center at 176) -->
    <!-- 2025: 31.5 -> height = 31.5/40 * 140 = 110.25, y = 140 - 110.25 = 29.75 -->
    <rect x="98" y="29.75" width="72" height="110.25" fill="#005b82" />
    <text x="134" y="21" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">31,5</text>

    <!-- 2026: 27.8 -> height = 27.8/40 * 140 = 97.3, y = 140 - 97.3 = 42.7 -->
    <rect x="182" y="42.7" width="72" height="97.3" fill="#d96b27" />
    <text x="218" y="34" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">27,8</text>

    <text x="176" y="165" fill="#111827" font-size="15" font-weight="bold" text-anchor="middle">MCMV</text>

    <!-- Group 2: MAP (Center at 530) -->
    <!-- 2025: 18.7 -> height = 18.7/40 * 140 = 65.45, y = 140 - 65.45 = 74.55 -->
    <rect x="452" y="74.55" width="72" height="65.45" fill="#005b82" />
    <text x="488" y="66" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">18,7</text>

    <!-- 2026: 12.7 -> height = 12.7/40 * 140 = 44.45, y = 140 - 44.45 = 95.55 -->
    <rect x="536" y="95.55" width="72" height="44.45" fill="#d96b27" />
    <text x="572" y="87" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">12,7</text>

    <text x="530" y="165" fill="#111827" font-size="15" font-weight="bold" text-anchor="middle">MAP</text>

    <!-- Group 3: Total (Center at 884) -->
    <!-- 2025: 23 -> height = 23/40 * 140 = 80.5, y = 140 - 80.5 = 59.5 -->
    <rect x="806" y="59.5" width="72" height="80.5" fill="#005b82" />
    <text x="842" y="51" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">23</text>

    <!-- 2026: 17.7 -> height = 17.7/40 * 140 = 61.95, y = 140 - 61.95 = 78.05 -->
    <rect x="890" y="78.05" width="72" height="61.95" fill="#d96b27" />
    <text x="926" y="70" fill="#111827" font-size="16" font-weight="bold" text-anchor="middle">17,7</text>

    <text x="884" y="165" fill="#111827" font-size="15" font-weight="bold" text-anchor="middle">Total</text>
  </g>

  <!-- Footnote -->
  <text x="30" y="618" fill="#475569" font-size="12">
    Fonte: prévias operacionais de 14 companhias; valores consideram a participação das empresas nos projetos. Dados em R$ milhões. ¹ Minha Casa, Minha Vida e Médio
  </text>
  <text x="30" y="636" fill="#475569" font-size="12">
    e Alto Padrão. ² Venda sobre oferta, na média entre as empresas
  </text>
</svg>`;

const outPublicSvg = path.join(process.cwd(), 'public', 'valor_incorporadoras_2t2026.svg');
fs.writeFileSync(outPublicSvg, svgContent);
console.log('Successfully written to', outPublicSvg);

const distDir = path.join(process.cwd(), 'dist');
if (fs.existsSync(distDir)) {
  fs.writeFileSync(path.join(distDir, 'valor_incorporadoras_2t2026.svg'), svgContent);
  console.log('Also copied to dist/valor_incorporadoras_2t2026.svg');
}
