// Evidências Estratégicas Consolidadas dos Temas e Setores
export interface EvidenciaSetorial {
  id: string;
  tag?: string;
  dateStr?: string;
  title: string;
  headline?: string;
  source: string;
  url: string;
  category?: string;
}

export const EVIDENCIAS_SETORIAIS: EvidenciaSetorial[] = [
  {
    "id": "ass-noticia-01-trt8",
    "title": "Justiça do Trabalho recebeu 600 mil casos de assédio moral em seis anos",
    "source": "Justiça do Trabalho / TRT-8",
    "url": "https://www.trt8.jus.br/noticias/2026/assedio-moral-justica-do-trabalho-recebeu-600-mil-casos-de-2020-2025",
    "tag": "Judicialização / TRT-8",
    "dateStr": "2026",
    "headline": "Entre 2020 e 2025, cerca de 600 mil processos relacionados a assédio moral chegaram à Justiça do Trabalho, evidenciando a dimensão jurídica e organizacional do problema.",
    "category": "AssedioTrabalho"
  },
  {
    "id": "ass-noticia-02-valor",
    "title": "Ações por assédio moral e sexual avançam na Justiça do Trabalho",
    "source": "Valor Econômico",
    "url": "https://valor.globo.com/legislacao/noticia/2026/02/28/cresce-volume-de-acoes-por-assedio-moral-e-sexual-na-justica-do-trabalho.ghtml",
    "tag": "Passivo Trabalhista / Valor Econômico",
    "dateStr": "28/02/2026",
    "headline": "O crescimento das ações relacionadas a assédio moral e sexual aumenta a exposição jurídica das organizações e reforça a importância de mecanismos preventivos e de investigação.",
    "category": "AssedioTrabalho"
  },
  {
    "id": "ass-noticia-03-estadao",
    "title": "Empresas registram recorde de denúncias nos canais internos",
    "source": "Estadão (Governança)",
    "url": "https://www.estadao.com.br/economia/governanca/empresas-no-brasil-registram-recorde-de-denuncias-internas-mulheres-recorrem-mais-aos-canais/",
    "tag": "Governança & Compliance / Estadão",
    "dateStr": "2026",
    "headline": "O aumento dos relatos internos reforça a importância dos canais de denúncia como instrumento de identificação de comportamentos inadequados e de governança corporativa.",
    "category": "AssedioTrabalho"
  },
  {
    "id": "ass-outras-01-valor",
    "title": "Cresce volume de ações por assédio moral e sexual",
    "source": "Valor Econômico",
    "url": "https://valor.globo.com/legislacao/noticia/2026/02/28/cresce-volume-de-acoes-por-assedio-moral-e-sexual-na-justica-do-trabalho.ghtml",
    "tag": "Passivo Trabalhista / Valor Econômico",
    "dateStr": "28/02/2026",
    "headline": "Aumento da busca pelo judiciário trabalhista eleva o risco financeiro e reputacional de condutas corporativas abusivas não mitigadas.",
    "category": "AssedioTrabalho"
  },
  {
    "id": "ass-outras-04-tst-eleitoral",
    "title": "Pesquisa traça panorama do assédio eleitoral no Brasil",
    "source": "Tribunal Superior do Trabalho (TST)",
    "url": "https://www.tst.jus.br/-/pesquisa-da-justica-do-trabalho-traca-panorama-do-assedio-eleitoral-no-brasil",
    "tag": "Fonte Institucional / TST",
    "dateStr": "2026",
    "headline": "Tribunal Superior do Trabalho consolida levantamento nacional sobre denúncias, formas de coação e condenações por interferência no voto de empregados.",
    "category": "AssedioTrabalho"
  },
  {
    "id": "div-b3-folha-2026",
    "title": "Diversidade chega a 83% das empresas da Bolsa, mas presença racial ainda é baixa",
    "source": "Folha de S.Paulo",
    "url": "https://www1.folha.uol.com.br/mercado/2026/08/diversidade-chega-a-83-das-empresas-da-bolsa-mas-presenca-racial-ainda-e-baixa.shtml",
    "tag": "Mercado & Alta Gestão / Folha de S.Paulo",
    "dateStr": "12/08/2026",
    "headline": "Levantamento da B3 com o Instituto Locomotiva mostra avanço da diversidade na alta gestão das empresas listadas, mas revela diferenças expressivas entre os recortes de gênero, raça e pessoas com deficiência.",
    "category": "DiversidadeInclusao"
  },
  {
    "id": "div-b3-exame-2026",
    "title": "A mulher chegou à alta liderança — mas muitas vezes continua sozinha",
    "source": "Exame",
    "url": "https://exame.com/carreira/a-mulher-chegou-a-alta-lideranca-mas-muitas-vezes-continua-sozinha/",
    "tag": "Carreira & Governança / Exame",
    "dateStr": "20/08/2026",
    "headline": "A presença feminina em diretorias e conselhos atingiu o maior nível desde o início do monitoramento da B3, mas muitas companhias ainda possuem apenas uma mulher nesses espaços de liderança (51% têm ao menos uma na diretoria estatutária, sendo 33% exatamente uma e 18% duas ou mais).",
    "category": "DiversidadeInclusao"
  },
  {
    "id": "div-forbes-evermonte-ceo-2026",
    "title": "Mulheres São Apenas 5,2% dos CEOs no Brasil",
    "source": "Forbes Brasil",
    "url": "https://forbes.com.br/forbes-mulher/2026/07/mulheres-sao-apenas-52-dos-ceos-no-brasil/",
    "tag": "Liderança Executiva / Forbes Brasil",
    "dateStr": "17/07/2026",
    "headline": "Levantamento do Evermonte Institute com histórico de 2.153 empresas brasileiras mostra baixa participação feminina no cargo de CEO e identifica a transição entre gerência e diretoria como um dos principais gargalos da trajetória até o topo executivo.",
    "category": "DiversidadeInclusao"
  },
  {
    "id": "div-wef-future-jobs-dei-v2",
    "title": "83% dos empregadores globais adotam medidas de diversidade, equidade e inclusão em suas estratégias",
    "source": "World Economic Forum (Future of Jobs Report)",
    "url": "https://www.weforum.org/publications/the-future-of-jobs-report-2025/in-full/4-workforce-strategies/",
    "tag": "Cenário Global / World Economic Forum",
    "dateStr": "Future of Jobs 2025",
    "headline": "Relatório global do Fórum Econômico Mundial documenta que a priorização de DEI saltou de 67% (2023) para 83% (2025), com foco principal em treinamentos corporativos (51%), atração/retenção direcionadas (48%) e metas estruturadas (42%).",
    "category": "DiversidadeInclusao"
  },
  {
    "id": "div-uol-lideranca-avanco-v2",
    "title": "Presença de mulheres e negros na liderança das empresas tem avanço gradual no Brasil",
    "source": "UOL Economia / Estadão Conteúdo",
    "url": "https://economia.uol.com.br/noticias/estadao-conteudo/2024/05/28/presenca-de-mulheres-e-negros-na-lideranca-das-empresas-tem-avanco-lento-mostra-estudo.htm",
    "tag": "Mercado & Gestão / UOL Economia",
    "dateStr": "Cobertura Especial",
    "headline": "Reportagem analisa os dados do Instituto Ethos evidenciando a distância entre a representatividade na base operacional e os níveis executivos, destacando a necessidade de programas internos de mentoria e aceleração de liderança.",
    "category": "DiversidadeInclusao"
  },
  {
    "id": "nr1-g1-vigor-regras",
    "title": "NR-1 entra em vigor e amplia gestão dos riscos psicossociais",
    "source": "G1 (Trabalho e Carreira)",
    "url": "https://g1.globo.com/trabalho-e-carreira/noticia/2026/05/25/nr-1-regra-entra-em-vigor-veja-o-que-muda.ghtml",
    "tag": "Marco Regulatório / G1",
    "dateStr": "25/05/2026",
    "headline": "A nova redação da NR-1 passou a vigorar em 26 de maio de 2026 e incluiu expressamente fatores de risco psicossociais relacionados ao trabalho no Gerenciamento de Riscos Ocupacionais (GRO).",
    "category": "Nr1"
  },
  {
    "id": "nr1-exame-44-mapeamento",
    "title": "Apenas 44% das empresas já haviam mapeado riscos psicossociais",
    "source": "Exame / Protiviti",
    "url": "https://exame.com/carreira/apesar-da-nr-1-apenas-44-das-empresas-mapeiam-riscos-de-saude-mental-no-brasil/",
    "tag": "Maturidade / Exame",
    "dateStr": "Panorama 2026",
    "headline": "Pesquisa sobre maturidade organizacional revelou que a adaptação ainda é desigual: 44% das organizações afirmavam ter mapeado os riscos, enquanto 39% ainda não haviam realizado o processo e 17% não sabiam informar.",
    "category": "Nr1"
  },
  {
    "id": "nr1-cnn-indicadores-gap",
    "title": "Empresas dizem estar preparadas, mas poucos indicadores são monitorados",
    "source": "CNN Brasil (Negócios)",
    "url": "https://www.cnnbrasil.com.br/economia/negocios/empresas-ignoram-indicadores-de-saude-mental-exigidos-pela-nr-1-diz-estudo/",
    "tag": "Percepção vs Prática / CNN Brasil",
    "dateStr": "Estudo Swile/Poli-USP",
    "headline": "Levantamento divulgado pela CNN apontou uma distância entre percepção e prática: 58,9% das empresas se consideravam preparadas, mas apenas uma parcela monitorava indicadores reais como horas extras (11,7%) e clima (23,9%).",
    "category": "Nr1"
  },
  {
    "id": "nr1-infomoney-cobranca-metas",
    "title": "Cobrança por resultado não é risco psicossocial: especialista esclarece a nova NR-1",
    "source": "InfoMoney (Carreira)",
    "url": "https://www.infomoney.com.br/carreira/cobranca-por-resultado-nao-e-risco-psicossocial-especialista-esclarece-a-nova-nr-1/",
    "tag": "Gestão de Metas & Limites / InfoMoney",
    "dateStr": "2026",
    "headline": "Especialistas esclarecem que a exigência de metas e desempenho integra a atividade empresarial legítima; o risco reside na humilhação, jornadas abusivas, falta de clareza e ausência de suporte estrutural.",
    "category": "Nr1"
  },
  {
    "id": "nr1-epoca-ambiente-trabalho",
    "title": "Como a NR-1 altera a governança da saúde mental nas empresas brasileiras",
    "source": "Época Negócios (Futuro do Trabalho)",
    "url": "https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/03/salario-e-maior-motivacao-para-aceitar-emprego-mas-nao-garante-permanencia-na-empresa-diz-pesquisa.ghtml",
    "tag": "Governança & Clima / Época Negócios",
    "dateStr": "2026",
    "headline": "Com a inclusão dos riscos psicossociais no PGR, companhias passam a ser auditadas por medidas concretas de prevenção, canais de escuta e gestão de sobrecarga nos ambientes corporativos e fabris.",
    "category": "Nr1"
  },
  {
    "id": "nr1-mte-portal-inspecao",
    "title": "Diretrizes Oficiais de Inspeção do Trabalho — Capítulo 1.5 da NR-1 (GRO/PGR)",
    "source": "MTE / Governo Federal",
    "url": "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho",
    "tag": "Fonte Oficial / Ministério do Trabalho e Emprego",
    "dateStr": "2026",
    "headline": "Texto normativo integral do Ministério do Trabalho e Emprego que estabelece o Gerenciamento de Riscos Ocupacionais e orienta as fiscalizações da Auditoria-Fiscal do Trabalho em todo o território nacional.",
    "category": "Nr1"
  },
  {
    "id": "sm-g1-burnout-800",
    "title": "Afastamentos por burnout crescem mais de 800% em quatro anos",
    "source": "G1 (Trabalho e Carreira)",
    "url": "https://g1.globo.com/trabalho-e-carreira/noticia/2026/05/01/afastamentos-por-burnout-crescem-mais-de-800percent-em-quatro-anos-entenda-o-que-esta-por-tras-do-esgotamento-no-trabalho.ghtml",
    "tag": "Esgotamento / G1",
    "dateStr": "01/05/2026",
    "headline": "O avanço dos afastamentos associados ao burnout evidencia a crescente relevância do esgotamento relacionado ao trabalho e amplia a discussão sobre prevenção e organização das atividades.",
    "category": "SaudeMental"
  },
  {
    "id": "sm-fundacentro-104-pospandemia",
    "title": "Benefícios por transtornos mentais mais que dobram após a pandemia",
    "source": "Fundacentro / Ministério da Previdência",
    "url": "https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2026/marco/concessao-de-beneficios-por-transtornos-mentais-e-comportamentais-cresce-mais-de-100-apos-pandemia",
    "tag": "Previdência Social / Fundacentro",
    "dateStr": "Março de 2026",
    "headline": "Dados da Previdência analisados pela Fundacentro mostram crescimento de 104,1% nas concessões por transtornos mentais e comportamentais entre 2019 e 2024.",
    "category": "SaudeMental"
  },
  {
    "id": "sm-exame-gestao-pessoas",
    "title": "Saúde mental ganha peso nas decisões sobre trabalho e gestão de pessoas",
    "source": "Exame (Bússola)",
    "url": "https://exame.com/bussola/nr-1-muda-regras-de-saude-mental-e-amplia-pressao-da-geracao-z-sobre-empresas/",
    "tag": "Gestão Estratégica / Exame",
    "dateStr": "2026",
    "headline": "As mudanças regulatórias e as novas expectativas dos profissionais ampliam a pressão para que empresas avancem da discussão sobre bem-estar para ações estruturadas de prevenção.",
    "category": "SaudeMental"
  },
  {
    "id": "sm-fundacentro-fgv-desafio",
    "title": "Saúde mental no trabalho avança como desafio no Brasil",
    "source": "Fundacentro / FGV-EAESP",
    "url": "https://www.gov.br/fundacentro/pt-br/comunicacao/noticias/noticias/2026/abril/saude-mental-no-trabalho-avanca-como-desafio-no-brasil",
    "tag": "Estudo Conceitual / Fundacentro + FGV",
    "dateStr": "Abril de 2026",
    "headline": "Pesquisa conjunta entre Fundacentro e FGV-EAESP analisa a multifatorialidade do sofrimento psíquico ocupacional e reforça a necessidade de atuação sistêmica entre indivíduo, organização e ambiente institucional.",
    "category": "SaudeMental"
  },
  {
    "id": "sm-mte-canpat-2026",
    "title": "Prevenção dos riscos psicossociais ganha destaque nacional",
    "source": "Ministério do Trabalho e Emprego (MTE)",
    "url": "https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/canpat-2/canpat-2025",
    "tag": "Fonte Institucional / CANPAT 2026",
    "dateStr": "2026",
    "headline": "Campanha Nacional de Prevenção de Acidentes do Trabalho (CANPAT) do Ministério do Trabalho e Emprego orienta auditorias fiscais e estabelece diretrizes educativas para ambientes industriais e corporativos.",
    "category": "SaudeMental"
  },
  {
    "id": "emp-sebrae-2a-maior-populacao",
    "title": "Brasil tem a 2ª maior população potencial empreendedora do mundo",
    "source": "Agência Sebrae",
    "url": "https://agenciasebrae.com.br/dados/brasil-tem-a-2a-maior-populacao-potencial-empreendedora-do-mundo/",
    "tag": "Potencial Global / Agência Sebrae",
    "dateStr": "2026",
    "headline": "Levantamento oficial do Sebrae com base em dados demográficos e de intenção produtiva posiciona o Brasil como a segunda maior nação do planeta em contingente de pessoas que desejam ou planejam abrir seu próprio empreendimento.",
    "category": "Empreendedorismo"
  },
  {
    "id": "emp-exame-13mil-empresas-dia",
    "title": "Brasil abriu 13 mil empresas por dia",
    "source": "Exame Bússola / Sebrae",
    "url": "https://exame.com/bussola/brasil-abriu-13-mil-empresas-por-dia-em-2025/",
    "tag": "Ritmo de Abertura / Exame Bússola",
    "dateStr": "2025/2026",
    "headline": "Estatísticas de registro mercantil e dinamismo empresarial compiladas pela Exame Bússola apontam a abertura média diária de cerca de 13 mil novas empresas no território nacional, somando-se à alta de 14% registrada pelo Sebrae em 2026.",
    "category": "Empreendedorismo"
  },
  {
    "id": "emp-oglobo-jovens-1a-empresa",
    "title": "Em vez do 1º emprego, a 1ª empresa: cresce número de jovens que começam a vida profissional pelo empreendedorismo",
    "source": "O Globo",
    "url": "https://oglobo.globo.com/economia/noticia/2026/06/14/em-vez-do-1o-emprego-a-1a-empresa-cresce-numero-de-jovens-que-comecam-a-vida-profissional-pelo-empreendedorismo.ghtml",
    "tag": "Juventude & Empreendedorismo / O Globo",
    "dateStr": "2026",
    "headline": "Matéria de O Globo detalha o movimento crescente de jovens que, ao invés de buscar a inserção inicial via emprego com carteira assinada (CLT), optam por iniciar sua trajetória profissional diretamente como fundadores de pequenos negócios, prestadores autônomos ou prestadores MEI.",
    "category": "Empreendedorismo"
  },
  {
    "id": "emp-sebrae-cresce-14pct-2026",
    "title": "Empreendedorismo em alta: abertura de novos pequenos negócios cresce 14% em 2026",
    "source": "Agência Sebrae",
    "url": "https://agenciasebrae.com.br/dados/empreendedorismo-em-alta-abertura-de-novos-pequenos-negocios-cresce-14-em-2026/",
    "tag": "Abertura de Negócios / Agência Sebrae",
    "dateStr": "2026",
    "headline": "Dados consolidados da Agência Sebrae registram uma expansão de 14% no ritmo de criação e formalização de novos pequenos negócios e microempresas no país em 2026, impulsionada por serviços especializados, comércio e construção civil.",
    "category": "Empreendedorismo"
  },
  {
    "id": "emp-oglobo-teto-mei",
    "title": "Governo avalia elevar o teto de faturamento para enquadrar empreendedor no MEI",
    "source": "O Globo",
    "url": "https://oglobo.globo.com/economia/noticia/2026/06/02/governo-cogita-elevar-o-teto-de-faturamento-para-enquadrar-empreendedor-no-mei-veja-o-que-pode-mudar.",
    "tag": "Regulação & Tributação / O Globo",
    "dateStr": "2026",
    "headline": "Reportagem de O Globo informa que o governo federal discute e avalia propostas para a elevação do limite máximo de faturamento anual do Microempreendedor Individual (MEI), visando adequar a faixa de enquadramento à inflação e evitar a exclusão de autônomos em crescimento.",
    "category": "Empreendedorismo"
  },
  {
    "id": "emp-anamaco-prescritores",
    "title": "Anamaco aponta que instaladores autônomos influenciam 68% das compras de duchas e materiais hidráulicos",
    "source": "Associação Nacional dos Comerciantes de Material de Construção (Anamaco)",
    "url": "https://www.anamaco.com.br/",
    "tag": "Canais de Prescrição / Anamaco",
    "dateStr": "2026",
    "headline": "Sondagem com o varejo de materiais de construção indica que o eletricista e o instalador hidráulico autônomo (MEI) atuam como principais prescritores técnicos de marcas e modelos no ponto de venda junto ao consumidor final.",
    "category": "Empreendedorismo"
  },
  {
    "id": "escala-agenciabrasil-ultimaupdate",
    "title": "Senado deve votar fim da escala 6x1 após as eleições",
    "source": "Agência Brasil (Política)",
    "url": "https://agenciabrasil.ebc.com.br/politica/noticia/2026-09/alcolumbre-diz-que-senado-vota-fim-da-escala-6x1-apos-eleicoes",
    "tag": "Última Atualização / Agência Brasil",
    "dateStr": "03/09/2026",
    "headline": "Após a aprovação na CCJ, a votação no Plenário não ocorreu. O presidente do Senado afirmou que a proposta será apreciada após as eleições.",
    "category": "Escala6x1"
  },
  {
    "id": "escala-cbn-produtividade",
    "title": "Experimentos com jornadas reduzidas apontam ganhos de produtividade e qualidade de vida",
    "source": "CBN (Economia & Trabalho)",
    "url": "https://cbn.globo.com/brasil/noticia/2025/09/26/jornada-de-trabalho-reduzida-melhora-produtividade-aumenta-receita-e-qualidade-de-vida-segundo-pesquisa.ghtml",
    "tag": "Produtividade & Bem-estar / CBN",
    "dateStr": "2025/2026",
    "headline": "Estudos e experimentos sobre redução da jornada apresentam evidências de possíveis efeitos sobre produtividade, bem-estar, retenção e desempenho empresarial em pilotos controlados.",
    "category": "Escala6x1"
  },
  {
    "id": "escala-cni-deficit-produtividade",
    "title": "Brasil pode levar até 30 anos para compensar déficit de produtividade com jornada de 40 horas, diz CNI",
    "source": "CNI (Conexão Trabalho)",
    "url": "https://conexaotrabalho.portaldaindustria.com.br/noticias/detalhe/trabalhista/-geral/brasil-pode-levar-ate-30-anos-para-compensar-deficit-de-produtividade-com-jornada-de-40-horas-diz-cni/",
    "tag": "Produtividade Industrial / CNI",
    "dateStr": "2026",
    "headline": "Estudo da Confederação Nacional da Indústria aponta que a redução da jornada semanal para 40 horas sem ganhos equivalentes de produtividade pode exigir até três décadas para compensar o déficit gerado nos custos da produção.",
    "category": "Escala6x1"
  },
  {
    "id": "mud-cnn-40pct-mudar-carreira",
    "title": "Mais de 40% dos profissionais pretendem mudar de carreira, diz pesquisa",
    "source": "CNN Brasil",
    "url": "https://www.cnnbrasil.com.br/economia/macroeconomia/mais-de-40-dos-profissionais-pretendem-mudar-de-carreira-diz-pesquisa/",
    "tag": "Macroeconomia & Carreira / CNN Brasil",
    "dateStr": "2026",
    "headline": "Pesquisa macroeconômica indica que mais de 40% dos profissionais atuantes no mercado pretendem realizar uma mudança estrutural de carreira, impulsionados pela busca de novas perspectivas, reavaliação de prioridades profissionais e transformações setoriais.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "mud-exame-50pct-mudar-emprego",
    "title": "Mais de 50% dos brasileiros querem mudar de emprego em 2026, aponta pesquisa do LinkedIn",
    "source": "Exame / LinkedIn",
    "url": "https://exame.com/carreira/mais-de-50-dos-brasileiros-querem-mudar-de-emprego-em-2026-aponta-pesquisa-do-linkedin/",
    "tag": "Mercado de Trabalho / Exame (LinkedIn)",
    "dateStr": "2026",
    "headline": "Levantamento conduzido pelo LinkedIn revela que mais da metade dos profissionais brasileiros (mais de 50%) têm como meta a troca de emprego em 2026, refletindo um movimento massivo de mobilidade e busca ativa por novas oportunidades no mercado.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "mud-forbes-salario-permanecer",
    "title": "Em 2026, o Que Faz as Pessoas Permanecerem no Trabalho Quando o Salário Já Não É Suficiente?",
    "source": "Forbes Brasil",
    "url": "https://forbes.com.br/forbes-saude/2026/07/em-2026-o-que-faz-as-pessoas-permanecerem-no-trabalho-quando-o-salario-ja-nao-e-suficiente/?utm_source=NewsDaily&utm_medium=Social&utm_campaign=unicornios_do_futuro_as_proximas_20_startups_de_us_1_bilhao_-_2907",
    "tag": "Saúde & Gestão / Forbes Brasil",
    "dateStr": "2026",
    "headline": "Análise sobre engajamento e retenção profissional destaca que, em um cenário onde a remuneração financeira isolada deixa de garantir a fixação dos talentos, fatores como cultura corporativa saudável, bem-estar psicológico, flexibilidade e desenvolvimento contínuo tornam-se determinantes para a permanência.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "mud-g1-por-que-sair-emprego",
    "title": "Por que tantos brasileiros querem sair do emprego",
    "source": "G1",
    "url": "https://g1.globo.com/trabalho-e-carreira/noticia/2026/01/05/por-que-tantos-brasileiros-querem-sair-do-emprego.ghtml",
    "tag": "Trabalho e Carreira / G1",
    "dateStr": "2026",
    "headline": "Reportagem investigativa detalha os fatores centrais que motivam a intenção de desligamento voluntário no Brasil, abrangendo a busca por equilíbrio entre vida pessoal e profissional, esgotamento em rotinas tradicionais, desalinhamento cultural e expectativas de progressão.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "mud-cni-carreira-y-retencao",
    "title": "Indústria brasileira adota carreira em Y para reter especialistas em automação e ferramentaria",
    "source": "Confederação Nacional da Indústria (CNI) / ABRH",
    "url": "https://www.portaldaindustria.com.br/",
    "tag": "Indústria & Retenção / CNI & ABRH",
    "dateStr": "2026",
    "headline": "Pesquisa da CNI e da Associação Brasileira de Recursos Humanos (ABRH) mostra que indústrias de manufatura avançada aumentaram em 42% a oferta de trilhas técnicas especialistas com remuneração equivalente à de gerentes, visando conter a rotatividade de técnicos experientes.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "mud-senai-mapa-transicoes",
    "title": "Trabalhadores da indústria buscam requalificação em eletromecânica e sustentabilidade",
    "source": "SENAI / IPEA",
    "url": "https://www.portaldaindustria.com.br/senai/",
    "tag": "Transição Intersetorial / SENAI & IPEA",
    "dateStr": "2026",
    "headline": "Dados do Mapa do Trabalho Industrial do SENAI apontam que profissionais de áreas operacionais tradicionais estão migrando para funções de manutenção preditiva, gestão de resíduos industriais e controle de qualidade automatizado.",
    "category": "MudancaCarreiras"
  },
  {
    "id": "ev-fundacao-dados-pulverizacao",
    "title": "Estrutura, capilaridade e pulverização do varejo de materiais de construção",
    "source": "Fundação de Dados",
    "url": "https://fundacaodedados.com.br/2026/09/02/varejo-de-materiais-de-construcao-permanece-como-o-mais-pulverizado-do-brasil/",
    "tag": "Fonte Principal · PAC 2024",
    "dateStr": "02/09/2026",
    "headline": "Varejo de materiais de construção permanece como o mais pulverizado do Brasil",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-fundacao-dados-atacado-sellout",
    "title": "Participação estimada do atacado no abastecimento do varejo de materiais de construção",
    "source": "Fundação de Dados",
    "url": "https://fundacaodedados.com.br/2025/10/22/atacado-de-materiais-de-construcao-responde-pela-maior-parte-do-sell-out-do-segmento/",
    "tag": "Evidência Complementar · PAC 2023",
    "dateStr": "22/10/2025",
    "headline": "Atacado de materiais de construção responde pela maior parte do sell-out do segmento",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-fundacao-dados-razao-varejistas-atacadista",
    "title": "Relação entre empresas atacadistas e varejistas no setor",
    "source": "Fundação de Dados",
    "url": "https://fundacaodedados.com.br/2025/10/29/para-cada-atacadista-ha-103-varejistas-de-materiais-de-construcao/",
    "tag": "Evidência Complementar · PAC 2023",
    "dateStr": "29/10/2025",
    "headline": "Para cada atacadista, há 10,3 varejistas de materiais de construção",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-fundacao-dados-expansao-atacadistas",
    "title": "Expansão e concorrência no atacado de materiais de construção",
    "source": "Fundação de Dados",
    "url": "https://fundacaodedados.com.br/2025/11/05/atacadistas-de-materiais-de-construcao-faturaram-em-media-r-680-33300-por-mes/",
    "tag": "Evidência Complementar · PAC 2023",
    "dateStr": "05/11/2025",
    "headline": "Atacadistas de materiais de construção faturaram, em média, R$ 680.333,00 por mês",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-anamaco-estudo-cenario-2025",
    "title": "Distribuição regional, evolução da rede e perfil dos estabelecimentos do varejo de materiais de construção",
    "source": "Instituto de Pesquisas Anamaco",
    "url": "https://anamaco.com.br/post/estudo-cenario-varejo-material-construcao-brasil/",
    "tag": "Fonte Principal · Bloco 02 (Anamaco 2025)",
    "dateStr": "2025",
    "headline": "Estudo do Instituto de Pesquisas Anamaco revela cenário do varejo de material de construção no Brasil",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-anamaco-pequenos-negocios-2025",
    "title": "Pequenos negócios e presença local no varejo de materiais de construção",
    "source": "Anamaco",
    "url": "https://anamaco.com.br/post/dimensao-varejo-material-construcao-pequenos-negocios-2025-anamaco/",
    "tag": "Evidência Complementar · Bloco 02 (Anamaco 2025)",
    "dateStr": "2025",
    "headline": "A dimensão do varejo de material de construção e o papel dos pequenos negócios",
    "category": "EstruturaFormatos"
  },
  {
    "id": "ev-globo-casa-construcao-2025",
    "title": "Intenção de reforma e planejamento da compra de materiais para o lar",
    "source": "Globo · Casa & Construção 2025",
    "url": "https://gente.globo.com/tijolo-a-tijolo-um-estudo-sobre-decisoes-que-moldam-o-lar.ghtml",
    "tag": "Estudo Online",
    "dateStr": "2025",
    "headline": "Tijolo a Tijolo — um estudo sobre decisões que moldam o lar",
    "category": "JornadaExperiencia"
  },
  {
    "id": "ev-fundacao-dados-2026",
    "title": "Pesquisa e comparação de materiais de construção na fase pré-obra",
    "source": "Fundação de Dados",
    "url": "https://fundacaodedados.com.br/2026/03/04/consumidores-pesquisam-materiais-de-construcao-combinando-lojas-fisicas-e-virtuais-youtube-e-a-principal-midia-social/",
    "tag": "Estudo Online",
    "dateStr": "04/03/2026",
    "headline": "Consumidores pesquisam materiais de construção combinando lojas físicas e virtuais; YouTube é a principal mídia social",
    "category": "JornadaExperiencia"
  },
  {
    "id": "ev-opinion-box-octadesk-cx-trends-2026",
    "title": "CX Trends 2026: dados e tendências de customer experience no Brasil",
    "source": "Opinion Box + Octadesk",
    "url": "https://blog.opinionbox.com/tendencias-de-customer-experience/",
    "tag": "Estudo Online",
    "dateStr": "30/04/2026",
    "headline": "Confiança, experiência e fatores que confirmam ou interrompem a decisão de compra",
    "category": "JornadaExperiencia"
  },
  {
    "id": "dc-infomoney-100bi",
    "title": "Data centers de IA podem destravar R$ 100 bilhões por ano no Brasil",
    "source": "InfoMoney",
    "url": "https://www.infomoney.com.br/mercados/data-centers-da-ia-podem-destravar-r-100-bi-por-ano-no-brasil-quais-acoes-ganharao/",
    "tag": "Mercado & IA / Infraestrutura",
    "dateStr": "2025/2026",
    "headline": "A expansão acelerada da inteligência artificial transforma data centers de uma pauta puramente computacional em uma nova frente de infraestrutura pesada, mobilizando grandes blocos de geração de energia, expansão da rede de transmissão, construção civil e captação no mercado de capitais.",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-epe-planejamento-eletrico",
    "title": "Data centers entram no planejamento elétrico brasileiro",
    "source": "EPE — Empresa de Pesquisa Energética",
    "url": "https://www.epe.gov.br/pt/areas-de-atuacao/energia-eletrica/consumo-de-energia-el%C3%A9trica/consumo-de-data-centers",
    "tag": "Planejamento Setorial / EPE",
    "dateStr": "2025/2026",
    "headline": "A rápida expansão dos pedidos de conexão de data centers passa a ser tratada como prioridade no planejamento do Sistema Interligado Nacional. A elevada demanda contínua por potência exige planejamento fino e coordenação com a infraestrutura de transmissão e distribuição local.",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-epe-workshop-sp-ne",
    "title": "Novos projetos exigem expansão da transmissão em São Paulo e no Nordeste",
    "source": "EPE (Workshop Grandes Cargas)",
    "url": "https://www.epe.gov.br/pt/imprensa/noticias/workshop-da-epe-aborda-planejamento-da-transmissao-de-energia-para-conectar-grandes-cargas",
    "tag": "Grandes Cargas / EPE Workshop",
    "dateStr": "2025/2026",
    "headline": "Estudo apresentado no workshop da EPE indica concentração de 8,8 GW de potenciais grandes cargas no estado de São Paulo e o registro de 30 novos projetos de data centers no Nordeste, totalizando 8,3 GW de interesse de carga até 2038, demandando novos bipolos e subestações.",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-istoedinheiro-dobrar-2030",
    "title": "Mercado de data centers no Brasil deve dobrar até 2030",
    "source": "IstoÉ Dinheiro",
    "url": "https://istoedinheiro.com.br/infraestrutura-digital-brasil-expansao-data-centers-pressao-setor-eletrico",
    "tag": "Mercado & Capacidade",
    "dateStr": "2025/2026",
    "headline": "A expansão da infraestrutura digital impulsionada por inteligência artificial aumenta simultaneamente as perspectivas de investimento e a pressão sobre a infraestrutura elétrica nacional.",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-infomoney-azquest-1tri",
    "title": "Data centers podem trazer US$ 1 trilhão para o Brasil em cinco anos, projeta AZ Quest",
    "source": "InfoMoney / AZ Quest",
    "url": "https://www.infomoney.com.br/onde-investir/data-centers-podem-trazer-us-1-tri-para-o-brasil-em-5-anos-projeta-az-quest/",
    "tag": "Projeção de Mercado / AZ Quest",
    "dateStr": "2025/2026",
    "headline": "A estimativa da gestora AZ Quest demonstra o elevado nível de expectativa financeira em torno da expansão de infraestrutura digital no país (projeção privada de mercado; não representa estimativa oficial de governo).",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-poder360-1-3bi-financiamento",
    "title": "Governo libera R$ 1,3 bilhão para financiar data centers",
    "source": "Poder360",
    "url": "https://www.poder360.com.br/poder-governo/governo-libera-r-13-bilhao-para-financiar-data-centers",
    "tag": "Financiamento Público / Governo",
    "dateStr": "2025/2026",
    "headline": "O financiamento público adiciona nova dimensão à expansão do setor, aproximando infraestrutura digital de políticas industriais, de inovação e de desenvolvimento econômico.",
    "category": "DataCentersInfra"
  },
  {
    "id": "dc-metropoles-incentivos-2026",
    "title": "Câmara aprova projeto que permite incentivos a data centers já em 2026",
    "source": "Metrópoles",
    "url": "https://www.metropoles.com/brasil/camara-aprova-projeto-que-permite-incentivos-a-data-centers-ja-em-2026",
    "tag": "Legislação & Incentivos / Congresso",
    "dateStr": "2026",
    "headline": "A Câmara dos Deputados aprovou projeto de lei que autoriza a concessão de incentivos fiscais e regulatórios para atração e expansão de data centers no país com vigência já a partir de 2026, associando a infraestrutura de inteligência artificial a regimes especiais de estímulo e transição energética.",
    "category": "DataCentersInfra"
  },
  {
    "id": "solar-3tw-global-2026",
    "title": "Solar ultrapassa 3 TW e lidera expansão mundial das renováveis",
    "source": "Canal Solar — Mundo supera 3 TW de energia solar",
    "url": "https://canalsolar.com.br/mundo-energia-solar-caem-brasil/",
    "tag": "Capacidade Global / Solar",
    "dateStr": "Início de 2026",
    "headline": "A capacidade solar mundial superou 3 TW no início de 2026, menos de dois anos depois de atingir 2 TW. Em 2025 foram adicionados 664 GW, e a fonte respondeu por 77% de toda a nova capacidade renovável instalada no mundo.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "renovaveis-carvao-marco-historico",
    "title": "Renováveis ultrapassam carvão na geração elétrica mundial",
    "source": "G1 — Renováveis ultrapassam carvão pela primeira vez",
    "url": "https://g1.globo.com/economia/noticia/2025/10/07/renovaveis-ultrapassam-carvao-e-se-tornam-maior-fonte-de-energia-eletrica-pela-1a-vez-na-historia.ghtml",
    "tag": "Matriz Elétrica Global / Marco Histórico",
    "dateStr": "Outubro 2025",
    "headline": "A expansão acelerada de solar e eólica levou as fontes renováveis a ultrapassarem o carvão na geração mundial de eletricidade pela primeira vez, reforçando uma mudança estrutural da matriz elétrica global.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "wef-transicao-estagnou-3tri",
    "title": "Transição recebe US$ 3,3 trilhões, mas infraestrutura freia avanço",
    "source": "CNN Brasil / WEF — Transição energética estagnou apesar de investimento recorde",
    "url": "https://www.cnnbrasil.com.br/infra/transicao-energetica-estagnou-apesar-de-investimento-recorde-diz-relatorio/",
    "tag": "Transição Energética / Fórum Econômico Mundial",
    "dateStr": "2026",
    "headline": "Apesar do volume recorde investido em 2025, o Energy Transition Index 2026, do Fórum Econômico Mundial, aponta estagnação do ritmo global. Tensões geopolíticas, gargalos de infraestrutura e dificuldades de implementação passaram a limitar a transformação dos sistemas energéticos.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "global-custos-despencam",
    "title": "Custos de solar e baterias despencam",
    "source": "CNN Brasil — Custos das renováveis despencam",
    "url": "https://www.cnnbrasil.com.br/infra/custo-de-fontes-renovaveis-de-energia-despenca-em-15-anos-aponta-irena/",
    "tag": "Custos de Capital / IRENA",
    "dateStr": "2025/2026",
    "headline": "Desde 2010, custos instalados caíram 87% para solar fotovoltaica, 55% para eólica terrestre e 93% para baterias de armazenamento, segundo levantamento da IRENA.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "global-china-carvao-termica",
    "title": "China volta a ampliar geração térmica",
    "source": "CNN Brasil — Geração a carvão cresce na China",
    "url": "https://www.cnnbrasil.com.br/economia/geracao-de-energia-a-carvao-na-china-volta-a-crescer-em-2026/",
    "tag": "Geopolítica Energética / China",
    "dateStr": "2026",
    "headline": "Mesmo liderando a implantação de renováveis, a China aumentou sua geração térmica em 3,4% nos primeiros cinco meses de 2026, mostrando que segurança energética e crescimento da demanda ainda sustentam combustíveis fósseis.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "epe-ben-2026-matriz-renovavel",
    "title": "Brasil mantém matriz energética próxima de 50% renovável, com forte avanço da energia solar e eólica em 2025",
    "source": "EPE — Relatório Síntese do Balanço Energético Nacional (BEN 2026)",
    "url": "https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026",
    "tag": "EPE / BEN 2026 • Notícia Principal 01",
    "dateStr": "Relatório Síntese 2026 (Ano-base 2025)",
    "headline": "A matriz elétrica alcançou 86,8% de fontes renováveis, e solar e eólica já representam juntas 26,4% da geração de eletricidade do país. No balanço energético geral (incluindo transportes e indústria), o Brasil sustenta quase metade de todo o seu suprimento por fontes renováveis, consolidando liderança mundial.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "epe-ben-2026-consumo-transportes-eletricidade",
    "title": "Consumo de energia cresce no Brasil, impulsionado principalmente por transportes e eletricidade",
    "source": "EPE — Relatório Síntese do Balanço Energético Nacional (BEN 2026)",
    "url": "https://www.epe.gov.br/pt/imprensa/noticias/epe-publica-o-relatorio-sintese-do-balanco-energetico-nacional-2026",
    "tag": "EPE / BEN 2026 • Notícia Principal 02",
    "dateStr": "Relatório Síntese 2026 (Ano-base 2025)",
    "headline": "O consumo energético total avançou 1,1% em 2025, enquanto o setor de transportes cresceu 3,5%, com destaque para o aumento do biodiesel e do etanol. A expansão da demanda por eletricidade nos setores residencial e industrial reforçou a pressão sobre a infraestrutura da rede.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "epe-mme-consumo-eletricidade-3-3-2035",
    "title": "Consumo de eletricidade no Brasil deve crescer em média 3,3% ao ano até 2035, indica estudo do MME e da EPE",
    "source": "MME / EPE — Estudo de Demanda de Eletricidade até 2035",
    "url": "https://www.epe.gov.br/pt/imprensa/noticias/consumo-de-eletricidade-no-brasil-deve-crescer-em-media-3-3-ao-ano-ate-2035-indica-estudo-do-mme-e-da-epe",
    "tag": "MME & EPE • Notícia Principal 03",
    "dateStr": "Planejamento Decenal (Horizonte até 2035)",
    "headline": "Estudo conjunto do Ministério de Minas e Energia (MME) e da Empresa de Pesquisa Energética (EPE) para o PDE 2035 projeta expansão média da demanda elétrica em 3,3% ao ano até 2035, demandando investimentos contínuos em geração limpa, reforço de transmissão e gestão de carga domiciliar.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "brasil-solar-90-conta-2027",
    "title": "Energia solar já corta 90% da conta de luz e pode dobrar de tamanho no Brasil até 2027",
    "source": "O Presente Rural — Energia solar já corta 90% da conta de luz",
    "url": "https://opresenterural.com.br/energia-solar-ja-corta-90-da-conta-de-luz-e-pode-dobrar-de-tamanho-no-brasil-ate-2027/",
    "tag": "Geração Distribuída / Economia",
    "dateStr": "2026",
    "headline": "Com economia de até 90% na conta de energia para residências, comércios e propriedades rurais, a geração própria de energia solar segue em forte expansão no Brasil, com projeções indicando que o segmento pode dobrar de capacidade instalada até 2027.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "brasil-lcoe-solar-cai-25",
    "title": "Custo da energia solar cai 25% no Brasil e coloca o país entre os mais competitivos do mundo",
    "source": "Canal Solar — Custo nivelado (LCOE) de energia solar no Brasil / IRENA",
    "url": "https://canalsolar.com.br/custo-nivelado-lcoe-energia-solar-brasil-irena/",
    "tag": "Competitividade & LCOE / IRENA",
    "dateStr": "2025/2026",
    "headline": "O custo nivelado de energia (LCOE) da solar fotovoltaica caiu 25% no Brasil segundo levantamento internacional da IRENA, posicionando o país entre os ambientes mais competitivos do planeta para geração solar em virtude da alta irradiação e custos decrescentes de equipamentos.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "brasil-eletricos-frota-2035-bradesco",
    "title": "Elétricos serão 1/3 da frota em 2035 e consumo de combustíveis vai cair 20%",
    "source": "CNN Brasil / Bradesco BBI & EPE",
    "url": "https://www.cnnbrasil.com.br/infra/eletricos-serao-1-3-da-frota-em-2035-e-consumo-de-combustiveis-vai-cair-20/",
    "tag": "Eletromobilidade / Frota & Combustíveis",
    "dateStr": "2026",
    "headline": "Relatório do Bradesco BBI projeta avanço substancial dos veículos elétricos e híbridos no país (atingindo até 31% da frota circulante em 2035). O estudo estima queda de 20% no consumo de combustíveis líquidos (gasolina e etanol), gerando novos desafios de arrecadação e uma grande migração para a demanda elétrica.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "brasil-eletromobilidade-pde-2035",
    "title": "Eletromobilidade avança no país e PDE 2035 projeta expansão da eletrificação no transporte rodoviário",
    "source": "EPE — Eletromobilidade no Transporte Rodoviário / PDE 2035",
    "url": "https://www.epe.gov.br/pt/imprensa/noticias/eletromobilidade-avanca-no-pais-e-pde-2035-projeta-expansao-da-eletrificacao-no-transporte-rodoviario",
    "tag": "Eletromobilidade Rodoviária / PDE 2035",
    "dateStr": "2026",
    "headline": "Nota técnica da EPE para o Plano Decenal de Expansão de Energia (PDE 2035) detalha o avanço da eletrificação veicular no Brasil (já atingindo 16% dos emplacamentos de leves) e projeta os requisitos de infraestrutura para recarga residencial, comercial e em eixos rodoviários.",
    "category": "EnergiaRenovavel"
  },
  {
    "id": "reg-cni-saneamento-2033",
    "title": "CNI defende agenda estruturada para ampliar cobertura de saneamento até 2033",
    "source": "CNI — Confederação Nacional da Indústria",
    "url": "https://imprensa.portaldaindustria.com.br/posicionamentos/cni-defende-agenda-estruturada-para-que-o-pais-tenha-ampla-cobertura-de-saneamento-ate-2033/",
    "tag": "Saneamento • Marco Legal",
    "dateStr": "2026",
    "headline": "A agenda do setor passa a depender cada vez mais da capacidade de transformar contratos e metas regulatórias em investimentos e obras efetivamente executados.",
    "category": "MarcosRegulatorios"
  },
  {
    "id": "reg-anp-gas-release-cp16",
    "title": "ANP avança em programa para ampliar concorrência no mercado de gás",
    "source": "ANP",
    "url": "https://www.gov.br/anp/pt-br/canais_atendimento/imprensa/noticias-comunicados/gas-release-anp-aprova-relatorio-e-abertura-de-consulta-publica-sobre-programa-para-ampliar-concorrencia-no-mercado-de-gas-natural",
    "tag": "Gás Natural • Consulta Pública nº 16/2026",
    "dateStr": "2026",
    "headline": "A Consulta Pública nº 16/2026 discute a implementação de um programa de Gas Release voltado à desconcentração e ao aumento da competição na oferta de gás natural.",
    "category": "MarcosRegulatorios"
  },
  {
    "id": "reg-eixos-acesso-infra-gas",
    "title": "Novas regras discutem acesso à infraestrutura essencial de gás",
    "source": "Eixos",
    "url": "https://eixos.com.br/politica/a-regulamentacao-que-pode-destravar-o-mercado-brasileiro-de-gas-natural/",
    "tag": "Gás Natural • Consulta Pública nº 13/2026",
    "dateStr": "2026",
    "headline": "A Consulta Pública nº 13/2026 discute regras para acesso negociado e não discriminatório às infraestruturas essenciais, incluindo escoamento e unidades de processamento de gás natural (UPGN).",
    "category": "MarcosRegulatorios"
  },
  {
    "id": "reg-revistane-custo-brasil-saneamento",
    "title": "CNI defende nova agenda de investimentos em saneamento a partir de 2027",
    "source": "Revista Nordeste",
    "url": "https://revistane.com.br/2026/08/19/cni-defende-nova-agenda-de-investimentos-em-saneamento-a-partir-de-2027/",
    "tag": "Infraestrutura e Custo Brasil",
    "dateStr": "19/08/2026",
    "headline": "Gargalos estruturais de infraestrutura no Brasil ajudam a contextualizar os desafios para transformar metas regulatórias em investimentos e obras efetivamente executados.",
    "category": "MarcosRegulatorios"
  },
  {
    "id": "carb-noticia-01-cnn",
    "title": "Mercado de Carbono no Brasil entra na fase que define preço",
    "source": "CNN Brasil",
    "url": "https://www.cnnbrasil.com.br/blogs/pedro-cortes/economia/money/macroeconomia/mercado-de-carbono-no-brasil-entra-na-fase-que-define-preco/",
    "tag": "Precificação & Mercado / CNN Brasil",
    "dateStr": "20/04/2026",
    "headline": "O avanço da regulamentação do SBCE leva o mercado brasileiro a uma nova etapa, em que a precificação das emissões pode começar a influenciar custos de produção, competitividade e decisões de investimento.",
    "category": "MercadoCarbono"
  },
  {
    "id": "carb-noticia-02-mrv-fazenda",
    "title": "Aberta consulta pública sobre proposta de cronograma para Monitoramento Relato e Verificação (MRV) no Mercado Regulado de Carbono",
    "source": "Ministério da Fazenda",
    "url": "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/julho/aberta-consulta-publica-sobre-proposta-de-cronograma-para-monitoramento-relato-e-verificacao-mrv%29-no-mercado-regulado-de-carbono",
    "tag": "Implementação do SBCE / Ministério da Fazenda",
    "dateStr": "28/07/2026",
    "headline": "O governo apresentou proposta para a entrada gradual dos setores nas obrigações de monitoramento, relato e verificação de emissões, etapa fundamental para a construção da base de dados do SBCE.",
    "category": "MercadoCarbono"
  },
  {
    "id": "carb-noticia-03-itmo-fazenda",
    "title": "Aberta consulta pública sobre regras para a transferência internacional de créditos de carbono",
    "source": "Ministério da Fazenda",
    "url": "https://www.gov.br/fazenda/pt-br/assuntos/noticias/2026/julho/aberta-consulta-publica-sobre-regras-para-a-transferencia-internacional-de-creditos-de-carbono",
    "tag": "Conexão Internacional / Artigo 6 / Ministério da Fazenda",
    "dateStr": "15/07/2026",
    "headline": "A regulamentação dos ITMOs avança para definir como resultados de mitigação brasileiros poderão ser transferidos internacionalmente, conectando o mercado nacional aos mecanismos do Artigo 6 do Acordo de Paris.",
    "category": "MercadoCarbono"
  },
  {
    "id": "carb-outras-01-cnn-desafio",
    "title": "Para 2026, a regulação do mercado de carbono é um grande desafio",
    "source": "CNN Brasil",
    "url": "https://www.cnnbrasil.com.br/blogs/pedro-cortes/nacional/brasil/para-2026-a-regulacao-do-mercado-de-carbono-e-um-grande-desafio/",
    "tag": "Regulação / CNN Brasil",
    "dateStr": "2026",
    "headline": "A complexidade institucional de criar a governança do SBCE, sistemas de registro, metodologias de mensuração e acomodação dos setores produtivos representa o principal desafio do ano.",
    "category": "MercadoCarbono"
  },
  {
    "id": "carb-outras-02-sbce-fazenda-portal",
    "title": "Sistema Brasileiro de Comércio de Emissões",
    "source": "Ministério da Fazenda",
    "url": "https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/sobre",
    "tag": "Institucional / Ministério da Fazenda",
    "dateStr": "2026",
    "headline": "Página institucional para acompanhamento da implementação, regulamentação e infraestrutura do SBCE.",
    "category": "MercadoCarbono"
  },
  {
    "id": "carb-outras-03-coalizao-fazenda",
    "title": "Coalizão Aberta para Mercados Regulados de Carbono",
    "source": "Ministério da Fazenda",
    "url": "https://www.gov.br/fazenda/pt-br/composicao/orgaos/mercado-de-carbono/coalizao-internacional-mercados-de-carbono",
    "tag": "Cooperação Internacional / Fazenda",
    "dateStr": "2026",
    "headline": "Iniciativa internacional para cooperação em precificação, MRV, contabilidade de carbono e regras de offsets.",
    "category": "MercadoCarbono"
  },
  {
    "id": "esg-merco-natura-1",
    "title": "Ranking Merco ESG: Natura lidera responsabilidade corporativa no Brasil pela 12ª vez consecutiva",
    "source": "Exame ESG / Merco Brasil",
    "url": "https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/",
    "tag": "Ranking Merco Brasil / Liderança ESG",
    "dateStr": "2025/2026",
    "headline": "A Natura conquistou novamente a 1ª colocação geral no Ranking Merco de Responsabilidade ESG no Brasil. Ao lado do Grupo Boticário, lidera o subranking ambiental com foco em descarbonização e proteção de biomas, através do monitoramento de rastreabilidade reversa de ativos da biodiversidade e embalagens recicláveis pós-consumo.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-times-ranking-2",
    "title": "Ranking ESG Brasil: Natura, Grupo Boticário e Mercado Livre compõem o topo nacional",
    "source": "Times Brasil",
    "url": "https://timesbrasil.com.br/brasil/ranking-esg-2025-natura-boticario-mercado-livre/",
    "tag": "Ranking ESG Brasil / Top Líderes",
    "dateStr": "2025/2026",
    "headline": "O Mercado Livre avançou para o Top 3 geral no ranking ESG impulsionado pela integração de frotas elétricas nativas à malha logística e eco-eficiência em centros de distribuição (saltando da 12ª para a 8ª posição ambiental). Itaú Unibanco (7ª colocação) e Toyota destacam-se em práticas éticas e transparência de governança.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-dexco-obs-3",
    "title": "Dexco conclui ciclo de estratégia de sustentabilidade atingindo 75% dos compromissos assumidos",
    "source": "Observatório do 3º Setor",
    "url": "https://observatorio3setor.org.br/dexco-conclui-ciclo-de-estrategia-de-sustentabilidade-e-atinge-75-dos-compromissos-assumidos/",
    "tag": "Concorrência / Dexco (Deca, Portinari, Hydra)",
    "dateStr": "2025/2026",
    "headline": "O grupo Dexco encerrou seu ciclo corporativo de metas com 75% dos compromissos ESG integralmente cumpridos. A companhia realizou reestruturação de portfólio para focar em produtos de alto padrão e ecoeficiência fabril, além de vincular metas climáticas à remuneração dos executivos.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-dexco-oficial-4",
    "title": "Dexco atinge 100% de Aterro Zero em Metais e Painéis e 36% de liderança feminina",
    "source": "Dexco ESG / Relações com Investidores",
    "url": "https://www.dex.co/esg/",
    "tag": "Concorrência / Dexco ESG",
    "dateStr": "2026",
    "headline": "A Dexco conquistou o índice de 100% de Aterro Zero nas divisões de Metais (Deca/Hydra), Painéis Brasil e Revestimentos Cerâmicos (Portinari), eliminando o envio de resíduos industriais a aterros. Atingiu 36% de mulheres em posições de liderança e reconfigurou seu balanço ao vender as marcas Corona e Thermosystem.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-docol-residuos-5",
    "title": "Docol recicla mais de 3,7 mil toneladas de resíduos e projeta reduzir em 70% o consumo de água até 2030",
    "source": "Jornal do Brás",
    "url": "https://jornaldobras.com.br/noticia/81424/docol-recicla-mais-de-3-7-mil-toneladas-de-residuos-e-projeta-reduzir-em-70-o-consumo-de-agua-ate-2030",
    "tag": "Concorrência / Docol Metais",
    "dateStr": "2025/2026",
    "headline": "A Docol reciclou mais de 3,7 mil toneladas de resíduos industriais em suas fundições de metais e estabeleceu meta pública de reduzir em 70% o consumo de água até 2030. Conquistou o Selo de Compromisso EcoVadis e desenvolve portfólio de economizadores de água voltados a Prédios Verdes e certificações LEED.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-zagonel-fiesc-6",
    "title": "Zagonel adquire marcas Corona e Thermosystem e assume parque fabril em Aracaju-SE",
    "source": "Federação das Indústrias do Estado de Santa Catarina (FIESC)",
    "url": "https://fiesc.com.br/pt-br/imprensa/zagonel-de-pinhalzinho-compra-marcas-corona-e-thermosystem",
    "tag": "Concorrência / Zagonel Termoplásticos",
    "dateStr": "2025/2026",
    "headline": "A fabricante catarinense Zagonel assumiu as operações das marcas Corona e Thermosystem e o parque industrial de Aracaju-SE, despontando em volume de chuveiros e torneiras termoplásticas. A empresa assumiu o desafio logístico de absorver e reestruturar os planos de Logística Reversa e Economia Circular pós-consumo (PNRS), focando em P&D para produtos híbridos inteligentes de alta eficiência energética.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-zagonel-gptw-7",
    "title": "Zagonel recebe certificação Great Place to Work (GPTW) em gestão de pessoas e clima organizacional",
    "source": "Great Place to Work Brasil / LinkedIn Oficial",
    "url": "https://www.linkedin.com/posts/gptw-greatplacetowork-orgulhodeserzagonel-share-7490490673465298944-W-PP/",
    "tag": "Concorrência / Zagonel Pilar Social",
    "dateStr": "2025/2026",
    "headline": "A Zagonel obteve a certificação oficial Great Place to Work (GPTW), atestando a conformidade de suas práticas corporativas de gestão do trabalho, clima organizacional e valorização dos colaboradores no segmento industrial de termoplásticos.",
    "category": "ConcorrentesEsg"
  },
  {
    "id": "esg-merco-natura-1",
    "title": "Natura lidera ESG no Brasil pelo 12º ano consecutivo",
    "source": "EXAME",
    "url": "https://exame.com/esg/ranking-merco-natura-lidera-esg-nas-empresas-pela-12a-vez/",
    "tag": "Ranking Merco Brasil • Liderança ESG",
    "dateStr": "16/04/2026",
    "headline": "O ranking Merco mantém a Natura na primeira posição, seguida por Grupo Boticário e Mercado Livre. A Natura também ficou em primeiro lugar nas dimensões Ambiental, Social e Governança, indicando uma liderança que não depende apenas de um dos pilares ESG. Pódio Geral: 1º Natura → 2º Grupo Boticário → 3º Mercado Livre.",
    "category": "TopEmpresasEsg"
  },
  {
    "id": "esg-fleury-empresa-ano-2",
    "title": "Grupo Fleury é eleito Empresa do Ano no Melhores do ESG 2026",
    "source": "EXAME",
    "url": "https://exame.com/esg/melhores-do-esg-grupo-fleury-e-a-empresa-do-ano-veja-demais-vencedores-por-setor/",
    "tag": "Melhores do ESG 2026 • Empresa do Ano",
    "dateStr": "26/05/2026",
    "headline": "A EXAME reconheceu o Fleury como empresa do ano. Um dos destaques é uma emissão de R$ 1 bilhão em debêntures ligada a uma meta social: atender 1 milhão de usuários das classes C, D e E sem plano de saúde. A companhia alcançou 1,8 milhão, dois anos antes do prazo estabelecido.",
    "category": "TopEmpresasEsg"
  },
  {
    "id": "esg-boticario-divida-metas-3",
    "title": "Grupo Boticário atrela 65% da dívida bruta a metas ESG",
    "source": "EXAME",
    "url": "https://exame.com/revista-exame/grupo-boticario-2/",
    "tag": "Finanças Sustentáveis • Títulos ESG",
    "dateStr": "27/05/2026",
    "headline": "Cerca de 65% da dívida bruta do Grupo Boticário está vinculada a metas ESG por meio de títulos sustentáveis. A empresa captou R$ 2 bilhões nessa modalidade e estabeleceu compromissos como redução de 62% das emissões de Escopos 1 e 2 até 2034.",
    "category": "TopEmpresasEsg"
  },
  {
    "id": "esg-ambev-fazendeiros-4",
    "title": "Ambev chega a 100% dos fazendeiros parceiros capacitados",
    "source": "EXAME — Ambev",
    "url": "https://exame.com/revista-exame/ambev/",
    "tag": "Cadeia de Valor & Ecoeficiência • Ambev",
    "dateStr": "2026",
    "headline": "A empresa informou que atingiu em 2025 100% dos fazendeiros parceiros capacitados e financeiramente empoderados. Além disso, 70,5% das embalagens eram retornáveis ou majoritariamente recicladas, 97,5% da eletricidade comprada vinha de fontes renováveis e a intensidade de emissões dos Escopos 1, 2 e 3 caiu 25%.",
    "category": "TopEmpresasEsg"
  },
  {
    "id": "esg-boticario-ia-produtos-5",
    "title": "Boticário usa IA e ciência de dados para avaliar impacto de produtos",
    "source": "EXAME — Grupo Boticário",
    "url": "https://exame.com/esg/seu-cosmetico-polui-as-aguas-boticario-consolida-metodologia-para-reduzir-impacto-ambiental/",
    "tag": "Inovação & Biodegradabilidade • Grupo Boticário",
    "dateStr": "2026",
    "headline": "O grupo informou que seu índice ambiental já analisa mais de 54 mil formulações; 98% dos shampoos e 100% dos sabonetes e óleos enxaguáveis avaliados atendiam ao critério de biodegradabilidade divulgado pela empresa.",
    "category": "TopEmpresasEsg"
  },
  {
    "id": "ev-aquecimento-sp-usp-cnn-2026",
    "title": "São Paulo aqueceu mais que a média global no último século",
    "source": "CNN Brasil / Pesquisadores da USP / IPCC",
    "url": "https://www.cnnbrasil.com.br/nacional/sudeste/sp/temperatura-em-sao-paulo-superou-media-global-no-ultimo-seculo-diz-estudo/",
    "tag": "Climatologia Regional • CNN Brasil / USP",
    "dateStr": "17/05/2026",
    "headline": "Estudos apresentados por pesquisadores da USP mostram que, desde 1900, enquanto a temperatura média global aumentou cerca de 1,2°C, São Paulo registrou elevação de 2,4°C nas máximas diárias e 2,8°C nas mínimas. Em áreas urbanizadas críticas da Grande São Paulo, a temperatura da superfície pode chegar a 60°C, contra cerca de 25°C em áreas mais vegetadas.",
    "category": "AquecimentoGlobal"
  },
  {
    "id": "ev-aquecimento-antropico-cnn-2026",
    "title": "Aquecimento causado pela atividade humana chega a 1,37°C",
    "source": "CNN Brasil / Estudo com 73 cientistas",
    "url": "https://www.cnnbrasil.com.br/",
    "tag": "Estudo Internacional • CNN Brasil",
    "dateStr": "11/06/2026",
    "headline": "Estudo internacional com 73 cientistas aponta que o aquecimento provocado pela atividade humana chegou a aproximadamente 1,37°C em 2025. A taxa atual é de 0,27°C por década e, mantido o ritmo, o nível de aquecimento de longo prazo pode atingir 1,5°C por volta de 2030.",
    "category": "AquecimentoGlobal"
  },
  {
    "id": "ev-aquecimento-oceanos-julho2026",
    "title": "Temperatura dos oceanos bate novo recorde em julho de 2026",
    "source": "Agência Brasil (Copernicus / Relatórios Oficiais)",
    "url": "https://agenciabrasil.ebc.com.br/",
    "tag": "Recorde Oceânico • Agência Brasil",
    "dateStr": "10/08/2026",
    "headline": "A temperatura média da superfície dos oceanos fora das regiões polares chegou a 20,96°C em julho, superando o recorde anterior de 20,89°C. No mesmo mês, a temperatura média global do ar alcançou 16,90°C, ficando 1,47°C acima do período pré-industrial.",
    "category": "AquecimentoGlobal"
  },
  {
    "id": "ev-aquecimento-calor-extremo-folha-2026",
    "title": "Calor extremo se torna mais frequente, intenso e duradouro",
    "source": "Folha de S.Paulo / Reuters (Alerta OMM)",
    "url": "https://www1.folha.uol.com.br/",
    "tag": "Ondas de Calor • Folha de S.Paulo / Reuters",
    "dateStr": "11/08/2026",
    "headline": "A Organização Meteorológica Mundial alerta que episódios de calor extremo estão se tornando mais frequentes, intensos, duradouros e geograficamente abrangentes. Oceanos mais quentes e solos secos contribuem para intensificar as temperaturas observadas em terra.",
    "category": "AquecimentoGlobal"
  },
  {
    "id": "ev-aquecimento-unep-politicas-28c",
    "title": "Políticas atuais ainda apontam para cerca de 2,8°C",
    "source": "UNEP — Emissions Gap Report 2025",
    "url": "https://www.unep.org/resources/emissions-gap-report-2024",
    "tag": "Cenários Globais • UNEP",
    "dateStr": "2025 / 2026",
    "headline": "O cenário baseado apenas nas políticas atualmente implementadas permanece muito acima do objetivo do Acordo de Paris, reforçando a pressão por adaptação estrutural na infraestrutura urbana e edificações.",
    "category": "AquecimentoGlobal"
  },
  {
    "id": "ev-governo-reforco-13bi",
    "title": "Governo anuncia reforço de R$ 1,3 bi para enfrentar efeitos do El Niño",
    "source": "UOL Economia / The News",
    "url": "https://economia.uol.com.br/noticias/redacao/2026/07/29/governo-anuncia-reforco-de-r-13-bi-para-enfrentar-efeitos-do-el-nino.ghtm?utm_source=the_news&utm_medium=newsletter&utm_campaign=30-07-2026&cmpid",
    "tag": "Ações Governamentais / UOL Economia",
    "dateStr": "29/07/2026",
    "headline": "O governo federal anunciou a liberação de aporte de R$ 1,3 bilhão destinado a ações de contingência, socorro a municípios e enfrentamento dos impactos climáticos do El Niño.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-onu-g1-2026",
    "title": "El Niño vai ficar muito forte e deve persistir até fevereiro de 2027, diz ONU",
    "source": "G1 / Meio Ambiente (ONU / OMM)",
    "url": "https://g1.globo.com/meio-ambiente/noticia/2026/09/03/el-nino-vai-ficar-muito-forte-e-deve-persistir-ate-fevereiro-de-2027-diz-onu.ghtml",
    "tag": "Projeção Global / ONU & OMM",
    "dateStr": "03/09/2026",
    "headline": "A Organização Meteorológica Mundial (OMM/ONU) projeta que o fenômeno El Niño atingirá intensidade ",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-veja-secas-alimentos",
    "title": "El Niño já provoca secas, perdas agrícolas e pressão sobre alimentos em três continentes",
    "source": "Veja / Agenda Verde",
    "url": "https://veja.abril.com.br/agenda-verde/el-nino-ja-provoca-secas-perdas-agricolas-e-pressao-sobre-alimentos-em-tres-continentes/",
    "tag": "Impactos Globais / Veja",
    "dateStr": "2026",
    "headline": "O fenômeno El Niño já desencadeia secas severas, perdas na produtividade agropecuária e pressão de alta sobre os preços dos alimentos em três continentes simultaneamente.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-noaa-roni-2026",
    "title": "NOAA adota oficialmente índice RONI para refinar previsões e resposta atmosférica do El Niño",
    "source": "National Oceanic and Atmospheric Administration (NOAA)",
    "url": "https://www.noaa.gov/news-release/el-nino-forms-expected-to-strengthen-say-noaa-forecasters#:~:text=Past%20El%20Nino%20episodes%20have%20also%20enhanced,forecasting%20El%20Nino%20and%20La%20Nina%20events.",
    "tag": "Métrica de Monitoramento / NOAA",
    "dateStr": "2026",
    "headline": "A NOAA adotou oficialmente em 2026 o índice RONI (Relative Oceanic Niño Index) para refinar as previsões e entender melhor a resposta atmosférica ao aquecimento das águas tropicais no Pacífico.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-g1-ondas-calor-2026",
    "title": "El Niño: Brasil deve ter ao menos seis ondas de calor até o fim do ano",
    "source": "G1 / Meio Ambiente",
    "url": "https://g1.globo.com/meio-ambiente/noticia/2026/08/29/el-nino-brasil-deve-ter-ao-menos-seis-ondas-de-calor-ate-o-fim-do-ano.ghtml",
    "tag": "Ondas de Calor / G1",
    "dateStr": "29/08/2026",
    "headline": "Sob influência do El Niño, projeções meteorológicas apontam que o Brasil deve registrar ao menos seis ondas de calor até o fim do ano, intensificando picos térmicos em diversas regiões do país.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-rs-inmet-inundacoes",
    "title": "RS deve enfrentar El Niño ",
    "source": "GZH / Inmet",
    "url": "https://gauchazh.clicrbs.com.br/ambiente/noticia/2026/08/rs-deve-enfrentar-el-nino-muito-forte-e-risco-de-inundacoes-ate-2027-diz-inmet-cmsdopsls00a7013lq3k1b7ng.html",
    "tag": "Impactos RS / GZH & Inmet",
    "dateStr": "08/2026",
    "headline": "O Inmet projeta que o Rio Grande do Sul deve enfrentar os impactos de um El Niño muito forte, mantendo riscos elevados de cheias de rios, inundações recorrentes e tempestades até 2027.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-canal-rural-safra",
    "title": "Super El Niño pode ameaçar safra 2026/27 com seca, calor de 40°C e chuva extrema",
    "source": "Canal Rural",
    "url": "https://www.canalrural.com.br/videos/super-el-nino-pode-ameacar-safra-2026-27-com-seca-calor-de-40c-e-chuva-extrema/",
    "tag": "Impactos RS & Safra / Canal Rural",
    "dateStr": "2026",
    "headline": "Análise técnica detalha as ameaças do Super El Niño para a safra 2026/27 no Rio Grande do Sul e Centro-Sul com alternância de estiagens severas, picos de calor de 40°C e chuvas extremas concentradas.",
    "category": "FenomenosClimaticos"
  },
  {
    "id": "ev-folha-desastres-28bi-2025",
    "title": "Desastres climáticos causaram R$ 28,4 bilhões em prejuízos no Brasil em 2025",
    "source": "Folha de S.Paulo / Aon",
    "url": "https://www1.folha.uol.com.br/ambiente/2026/02/desastres-climaticos-causaram-prejuizos-de-r-28-bilhoes-ao-brasil-em-2025-diz-relatorio.shtml",
    "tag": "Economia & Perdas • Folha de S.Paulo",
    "dateStr": "05/02/2026",
    "headline": "Eventos climáticos extremos provocaram aproximadamente US$ 5,4 bilhões (R$ 28,4 bilhões) em perdas econômicas no Brasil em 2025, segundo levantamento da Aon. As secas responderam por 88% das perdas, mostrando como extremos climáticos já representam um risco econômico relevante para o país.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-omm-11-anos-recorde-2025",
    "title": "Últimos 11 anos confirmam mudança estrutural do clima global",
    "source": "OMM / WMO (World Meteorological Organization)",
    "url": "https://wmo.int/",
    "tag": "Climatologia Global • OMM/WMO",
    "dateStr": "2025 / 2026",
    "headline": "A OMM confirmou que 2015–2025 foram os 11 anos mais quentes já registrados. Em 2025, a temperatura ficou aproximadamente 1,43°C acima do período pré-industrial, acompanhada por recordes de calor oceânico e extremos climáticos.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-omm-america-latina-extremos-2025",
    "title": "América Latina enfrenta ciclo cada vez mais extremo entre secas e chuvas intensas",
    "source": "OMM / WMO (Relatório Regional América Latina e Caribe)",
    "url": "https://wmo.int/",
    "tag": "Extremos Hídricos • OMM Regional",
    "dateStr": "2025 / 2026",
    "headline": "A OMM registra aumento de extremos hídricos na região, combinando calor, secas persistentes, precipitações intensas, retração de geleiras e elevação do nível do mar. Os efeitos alcançam agricultura, infraestrutura, energia e economias.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-cnn-municipios-desastres-hidricos",
    "title": "Nove em cada dez municípios brasileiros já sofreram desastres relacionados à água",
    "source": "CNN Brasil (Cemaden, INPE, USP e UFSCar)",
    "url": "https://www.cnnbrasil.com.br/nacional/brasil/nove-em-cada-10-municipios-brasileiros-ja-sofreram-com-desastres-hidricos/",
    "tag": "Desastres Hídricos • CNN Brasil",
    "dateStr": "15/07/2026",
    "headline": "Estudo de Cemaden, INPE, USP e UFSCar mostra que 90% dos municípios brasileiros já registraram pelo menos um desastre relacionado à água, incluindo inundações, secas, tempestades e deslizamentos. Mais de 20% das cidades já enfrentaram três das quatro categorias analisadas.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-cnn-ondas-calor-120mil-mortes",
    "title": "Ondas de calor estão associadas a 120 mil mortes no Brasil em 20 anos",
    "source": "CNN Brasil (Estudo SUS / 5.566 Municípios)",
    "url": "https://www.cnnbrasil.com.br/saude/ondas-de-calor-no-brasil-registrou-120-mil-mortes-associadas-em-20-anos/",
    "tag": "Saúde Pública • CNN Brasil",
    "dateStr": "17/06/2026",
    "headline": "Estudo baseado em registros do SUS de 5.566 municípios identificou pelo menos 120 mil mortes associadas às ondas de calor no Brasil nas últimas duas décadas. O número equivale a aproximadamente 0,6% da mortalidade analisada, evidenciando que o calor extremo também representa um problema de saúde pública.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-agenciabrasil-desertificacao-39mi",
    "title": "39 milhões de brasileiros vivem em áreas ameaçadas pela desertificação",
    "source": "Agência Brasil (EBC)",
    "url": "https://agenciabrasil.ebc.com.br/meio-ambiente/noticia/2026-08/risco-de-desertificacao-no-brasil-ameaca-seguranca-hidrica-e-alimentar",
    "tag": "Segurança Hídrica • Agência Brasil",
    "dateStr": "15/08/2026",
    "headline": "Cerca de 39 milhões de brasileiros vivem atualmente em regiões ameaçadas pela desertificação. A degradação reduz a capacidade do solo de reter água e sustentar atividades produtivas, ampliando riscos relacionados à segurança hídrica, agricultura e disponibilidade de alimentos.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "ev-percepcao-brasileiros-clima-2026",
    "title": "Mudança climática já impacta o cotidiano de 85% da população brasileira, aponta pesquisa",
    "source": "Instituto Ar",
    "url": "https://institutoar.org.br/noticias/mudanca-climatica-impactam-brasileiros/",
    "tag": "Percepção Social • Instituto Ar",
    "dateStr": "2026",
    "headline": "Pesquisa aponta que as mudanças climáticas já interferem no cotidiano de 85% da população brasileira, influenciando o dia a dia, a percepção de calor e os hábitos de consumo das famílias.",
    "category": "MudancasClimaticas"
  },
  {
    "id": "aut-g1-openai-pib-1tri",
    "title": "OpenAI, do ChatGPT, diz que IA pode adicionar R$ 1 trilhão ao PIB do Brasil em três anos",
    "source": "G1",
    "url": "https://g1.globo.com/tecnologia/noticia/2026/08/13/openai-do-chatgpt-diz-que-ia-pode-adicionar-r-1-trilhao-ao-pib-do-brasil-em-tres-anos.ghtml",
    "tag": "Macroeconomia & IA / G1",
    "dateStr": "2026",
    "headline": "Estimativa da OpenAI projeta que a difusão e adoção em escala de ferramentas de inteligência artificial e processos automatizados têm o potencial de acrescentar R$ 1 trilhão à economia brasileira em um período de três anos.",
    "category": "Automacao"
  },
  {
    "id": "aut-g1-etep-44pct-tarefas",
    "title": "As grandes tendências do mercado de trabalho: digitalização acelerada e estimativas apontam que 44% das tarefas administrativas estarão automatizadas até 2027.",
    "source": "G1 / ETEP",
    "url": "https://g1.globo.com/sp/vale-do-paraiba-regiao/especial-publicitario/etep-etep-ead/noticia/2025/12/10/etep-ead-as-8-tendencias-que-vao-moldar-o-mercado-de-trabalho-em-2026.ghtml",
    "tag": "Tendências do Trabalho / G1",
    "dateStr": "2025/2026",
    "headline": "Levantamento sobre a transformação do mercado profissional indica aceleração na digitalização corporativa e projeta que 44% das atividades administrativas e rotineiras estarão completamente automatizadas até 2027.",
    "category": "Automacao"
  },
  {
    "id": "aut-exame-6em10-demissoes-tech",
    "title": "IA já é a justificativa para 6 em cada 10 demissões no setor de tecnologia",
    "source": "Exame",
    "url": "https://exame.com/inteligencia-artificial/ia-ja-e-a-justificativa-para-6-em-cada-10-demissoes-no-setor-de-tecnologia/",
    "tag": "Setor de Tecnologia / Exame",
    "dateStr": "2026",
    "headline": "Mapeamento setorial aponta que a automação e o emprego de soluções de inteligência artificial já correspondem à justificativa de 60% dos desligamentos de profissionais no setor de tecnologia, redefinindo quadros operacionais.",
    "category": "Automacao"
  },
  {
    "id": "aut-valor-cargos-entrada",
    "title": "IA está reduzindo contratações para cargos de entrada, aponta pesquisa",
    "source": "Valor Econômico",
    "url": "https://valor.globo.com/carreira/noticia/2026/08/07/ia-esta-reduzindo-contratacoes-para-cargos-de-entrada-aponta-pesquisa.ghtml",
    "tag": "Mercado de Trabalho / Valor Econômico",
    "dateStr": "2026",
    "headline": "Pesquisa revela retração na abertura de postos de trabalho de nível júnior e início de carreira decorrente da absorção de tarefas básicas por sistemas automatizados e modelos de inteligência artificial.",
    "category": "Automacao"
  },
  {
    "id": "aut-exame-ganhos-empresas-br",
    "title": "Por que empresas brasileiras têm mais a ganhar com automação do que imaginam",
    "source": "Exame",
    "url": "https://exame.com/lideres-extraordinarios/por-que-empresas-brasileiras-tem-mais-a-ganhar-com-automacao-do-que-imaginam/",
    "tag": "Competitividade & Eficiência / Exame",
    "dateStr": "2026",
    "headline": "Análise corporativa evidencia o espaço existente para ampliação de produtividade e redução de ineficiências em empresas nacionais através da automação estruturada de processos industriais e administrativos.",
    "category": "Automacao"
  },
  {
    "id": "ia-ev-epoca-quatro-cenarios",
    "title": "O futuro do trabalho em quatro cenários: como a IA pode transformar (ou travar) a economia global",
    "source": "Época Negócios",
    "url": "https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/02/o-futuro-do-trabalho-em-quatro-cenarios-como-a-ia-pode-transformar-ou-travar-a-economia-global.ghtml",
    "tag": "Cenários Globais / Época Negócios",
    "dateStr": "02/2026",
    "headline": "Análise prospectiva apresenta quatro possíveis caminhos para o impacto da inteligência artificial sobre produtividade, crescimento econômico e reorganização do trabalho.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-epoca-novos-colegas-agentes",
    "title": "Os novos colegas de trabalho: como os agentes de IA estão entrando na rotina das empresas",
    "source": "Época Negócios",
    "url": "https://epocanegocios.globo.com/futuro-do-trabalho/noticia/2026/05/os-novos-colegas-de-trabalho-como-os-agentes-de-ia-estao-entrando-na-rotina-das-empresas.ghtml",
    "tag": "Organização do Trabalho / Época Negócios",
    "dateStr": "05/2026",
    "headline": "A convivência entre profissionais humanos e agentes de IA começa a avançar nas organizações, trazendo novas questões sobre supervisão, segurança, governança e regulação.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-estadao-cargos-entrada",
    "title": "O redesenho do trabalho: IA pode transformar primeiro os cargos de entrada",
    "source": "Estadão",
    "url": "https://www.estadao.com.br/economia/o-impacto-da-ia-nao-e-demissao-e-o-desaparecimento-dos-cargos-de-entrada-afirma-pesquisadora/",
    "tag": "Cargos de Entrada / Estadão",
    "dateStr": "2026",
    "headline": "Em vez de uma substituição imediata e generalizada de trabalhadores, a automação de tarefas iniciais pode alterar funções de entrada e os caminhos tradicionais de formação profissional.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-exame-trabalho-hibrido-agentes",
    "title": "Na era da IA, existe um novo significado para o trabalho híbrido",
    "source": "Exame (Carreira)",
    "url": "https://exame.com/carreira/na-era-da-ia-existe-um-novo-significado-para-o-trabalho-hibrido/",
    "tag": "Trabalho Híbrido & Agentes / Exame",
    "dateStr": "2026",
    "headline": "Convivência entre profissionais humanos e agentes de IA começa a ganhar força dentro das organizações; com isso, cresce a preocupação com segurança, governança e regulação na rotina das empresas.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-pwc-estadao-barometro-2026",
    "title": "IA remodela o mercado de trabalho global e gera forte valorização de competências estritamente humanas",
    "source": "Estadão Blue Studio / PwC",
    "url": "https://bluestudio.estadao.com.br/agencia-de-comunicacao/prnewswire/ia-remodela-mercado-de-trabalho-global-em-dois-caminhos-distintos-e-valoriza-competencias-humanas-aponta-barometro-global-de-empregos-em-ia-2026-da-pwc/",
    "tag": "Barômetro Global / PwC & Estadão",
    "dateStr": "2026",
    "headline": "Barômetro Global de Empregos em IA 2026 da PwC aponta que a tecnologia remodela o mercado de trabalho global em dois caminhos distintos e gera forte valorização de competências estritamente humanas.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-valor-cortes-recentes",
    "title": "A IA é realmente responsável pelos cortes de empregos recentes?",
    "source": "Valor Econômico",
    "url": "https://valor.globo.com/carreira/noticia/2026/09/07/a-ia-e-realmente-responsavel-pelos-cortes-de-empregos-recentes.ghtml",
    "tag": "Cortes de Vagas / Valor Econômico",
    "dateStr": "07/09/2026",
    "headline": "Investigação do mercado corporativo avalia se os cortes recentes de empregos foram motivados diretamente por automação com IA ou por ajustes orçamentários, pressões de custos e reestruturações pós-expansão.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "ia-ev-exame-devolver-tempo",
    "title": "IA e futuro do trabalho: devolver tempo às pessoas é a transformação real",
    "source": "Exame (Bússola)",
    "url": "https://exame.com/bussola/ia-e-futuro-do-trabalho-devolver-tempo-as-pessoas-e-a-transformacao-real/",
    "tag": "Produtividade & Tempo / Exame",
    "dateStr": "2026",
    "headline": "Análise estratégica argumenta que o papel mais significativo e transformador da inteligência artificial no ambiente corporativo é eliminar fricções e tarefas repetitivas, devolvendo tempo para as pessoas exercerem criatividade e julgamento.",
    "category": "IaFuturoTrabalho"
  },
  {
    "id": "mob-folha-escassez-80",
    "title": "Escassez de mão de obra atinge 80% dos empregadores",
    "source": "Folha de S.Paulo",
    "url": "https://www1.folha.uol.com.br/mercado/2026/07/escassez-de-mao-de-obra-atinge-80-dos-empregadores-no-brasil-aponta-pesquisa.shtml",
    "tag": "Pesquisa Nacional / Folha de S.Paulo",
    "dateStr": "2026",
    "headline": "Pesquisa nacional revela que 80% dos empregadores no Brasil enfrentam escassez de candidatos qualificados para preencher postos de trabalho abertos, atingindo patamares históricos nos setores industriais e técnicos.",
    "category": "MaoDeObraQualificada"
  },
  {
    "id": "mob-exame-custo-335bi",
    "title": "Escassez de mão de obra qualificada custa R$ 335 bilhões ao Brasil, diz estudo",
    "source": "Exame",
    "url": "https://exame.com/brasil/escassez-de-mao-de-obra-qualificada-custa-r-335-bilhoes-ao-brasil-diz-estudo/",
    "tag": "Impacto Econômico / Exame",
    "dateStr": "2026",
    "headline": "Estudo quantifica as perdas econômicas decorrentes do déficit de mão de obra técnica e especializada no país, calculando um impacto anual de R$ 335 bilhões gerado por ociosidade produtiva, atrasos em investimentos e ineficiências operacionais.",
    "category": "MaoDeObraQualificada"
  },
  {
    "id": "mob-forbes-tech-98",
    "title": "Escassez de Talentos em Tecnologia Desafia 98% das Empresas no Brasil",
    "source": "Forbes Brasil",
    "url": "https://forbes.com.br/carreira/2026/04/escassez-de-talentos-em-tecnologia-desafia-98-das-empresas-no-brasil/",
    "tag": "Tecnologia & Operações / Forbes Brasil",
    "dateStr": "2026",
    "headline": "Dados apontam que 98% das organizações no Brasil enfrentam escassez severa na atração e retenção de especialistas técnicos em automação, engenharia de software e infraestrutura digital, intensificando a necessidade de capacitação interna.",
    "category": "MaoDeObraQualificada"
  },
  {
    "id": "mob-cnn-dificuldade-vagas",
    "title": "Mão de obra escassa: 80% das empresas têm dificuldade para preencher vagas",
    "source": "CNN Brasil",
    "url": "https://www.cnnbrasil.com.br/economia/macroeconomia/mao-de-obra-escassa-80-das-empresas-tem-dificuldade-para-preencher-vagas/",
    "tag": "Macroeconomia / CNN Brasil",
    "dateStr": "2026",
    "headline": "Levantamento econômico detalha que 8 em cada 10 companhias no Brasil relatam obstáculos críticos para preencher vagas técnicas e operacionais, afetando cronogramas de entrega e produtividade fabril.",
    "category": "MaoDeObraQualificada"
  },
  {
    "id": "soft-exame-ia-contratacoes",
    "title": "IA avança, mas as soft skills continuam decidindo contratações",
    "source": "Exame (Inteligência Artificial)",
    "url": "https://exame.com/inteligencia-artificial/ia-avanca-nas-empresas-mas-soft-skills-seguem-decidindo-contratações",
    "tag": "IA & Contratações / Exame",
    "dateStr": "2026",
    "headline": "Mesmo com o avanço acelerado da inteligência artificial e a automação de processos nas empresas, as competências comportamentais e humanas seguem como critério determinante na decisão final de contratação.",
    "category": "SoftSkills"
  },
  {
    "id": "soft-exame-linkedin-comunicacao",
    "title": "Comunicação já aparece entre as habilidades que mais crescem no Brasil",
    "source": "Exame (Carreira / LinkedIn)",
    "url": "https://exame.com/carreira/essas-sao-as-15-habilidades-em-alta-para-2025-no-brasil-segundo-o-linkedin/",
    "tag": "Competências em Alta / Exame (LinkedIn)",
    "dateStr": "2026",
    "headline": "Levantamento oficial do LinkedIn divulgado pela Exame destaca a habilidade de comunicação entre as 15 competências em maior ascensão no mercado de trabalho brasileiro, refletindo a demanda por clareza e alinhamento.",
    "category": "SoftSkills"
  },
  {
    "id": "soft-infomoney-inteligencia-emocional",
    "title": "Inteligência emocional e pensamento crítico estão entre as competências mais difíceis de encontrar",
    "source": "InfoMoney (Carreira)",
    "url": "https://www.infomoney.com.br/carreira/o-que-empregadores-buscam-processos-seletivos-ti/",
    "tag": "Seleção & Escassez / InfoMoney",
    "dateStr": "2026",
    "headline": "Mapeamento de processos seletivos e contratações aponta que inteligência emocional e pensamento crítico figuram entre as competências mais demandadas e, ao mesmo tempo, mais escassas entre os candidatos.",
    "category": "SoftSkills"
  },
  {
    "id": "soft-wef-future-jobs",
    "title": "WEF lista pensamento crítico, resiliência e comunicação como competências centrais até 2030",
    "source": "World Economic Forum (WEF)",
    "url": "https://www.weforum.org/",
    "tag": "Tendências Globais / WEF",
    "dateStr": "2026",
    "headline": "Relatório do Fórum Econômico Mundial confirma que habilidades socioemocionais constituem a principal barreira contra a obsolescência profissional frente ao avanço de modelos cognitivos e automação.",
    "category": "SoftSkills"
  },
  {
    "id": "soft-cni-lideranca-fabril",
    "title": "Indústria nacional direciona investimentos para capacitação comportamental de encarregados",
    "source": "Confederação Nacional da Indústria (CNI)",
    "url": "https://www.portaldaindustria.com.br/",
    "tag": "Indústria Nacional / CNI & ABRH",
    "dateStr": "2026",
    "headline": "Pesquisa da CNI e ABRH indica que programas voltados a diálogo empático, mediação de conflitos e inteligência emocional em turnos operacionais reduzem ruídos de produção e aprimoram a retenção.",
    "category": "SoftSkills"
  },
  {
    "id": "soft-senai-socioemocionais",
    "title": "SENAI integra módulos socioemocionais em cursos técnicos industriais",
    "source": "SENAI Nacional",
    "url": "https://www.portaldaindustria.com.br/senai/",
    "tag": "Educação Profissional / SENAI",
    "dateStr": "2026",
    "headline": "Currículos de formação técnica passam a incluir avaliação e práticas de comunicação assertiva, trabalho colaborativo e resolução de problemas complexos em conjunto com matérias técnicas.",
    "category": "SoftSkills"
  }
];
