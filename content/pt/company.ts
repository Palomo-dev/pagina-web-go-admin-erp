/**
 * Conteúdo da empresa em português do Brasil: sobre, carreiras, treinamentos e blog.
 * Mesma forma que lib/content/company.ts (texto base em espanhol).
 */
import type * as Es from '@/lib/content/company'
import type { IconName } from '@/lib/site'

// ---------------------------------------------------------------------------
// Sobre
// ---------------------------------------------------------------------------
export const ABOUT: typeof Es.ABOUT = {
  mission: 'Reunir as ferramentas para organizar a operação das pequenas e médias empresas, para que entender o que acontece no negócio e poder agir faça parte do dia a dia.',
  audience: 'Falamos com o dono ou gestor que divide o tempo entre atender clientes, tomar decisões e cuidar de tarefas operacionais. Ele precisa de clareza, informação útil e ferramentas que acompanhem seu trabalho.',
  values: [
    { title: 'Diretos', text: 'Damos nome ao problema e dizemos o que pode ser feito.', icon: 'zap' as IconName },
    { title: 'Competentes', text: 'Explicamos com precisão e demonstramos o que afirmamos.', icon: 'shield' as IconName },
    { title: 'Próximos', text: 'Entendemos a rotina de trabalho e respeitamos seu tempo.', icon: 'heart-handshake' as IconName },
    { title: 'Com personalidade', text: 'Uma pergunta, uma imagem ou uma ideia marcante, sem perder a clareza.', icon: 'sparkles' as IconName },
  ],
}

// ---------------------------------------------------------------------------
// Carreiras
// ---------------------------------------------------------------------------
/** Vagas abertas. Vazio = mostra o convite para enviar currículo. */
export const POSITIONS: Es.Position[] = []

export const WORK_PRINCIPLES: typeof Es.WORK_PRINCIPLES = [
  { title: 'Trabalho que aparece', text: 'O que construímos é usado por um negócio real no dia seguinte.', icon: 'rocket' as IconName },
  { title: 'Da Colômbia', text: 'Equipe em Medellín com trabalho remoto conforme a função.', icon: 'map-pin' as IconName },
  { title: 'Aprender de verdade', text: 'Tempo e acompanhamento para crescer no seu ofício.', icon: 'graduation' as IconName },
  { title: 'Clareza', text: 'Metas, responsáveis e decisões por escrito.', icon: 'book' as IconName },
]

export const HIRING_STEPS: typeof Es.HIRING_STEPS = [
  { title: 'Candidate-se', text: 'Envie seu currículo e conte o que gostaria de construir.' },
  { title: 'Vamos conversar', text: 'Uma ligação para nos conhecermos.' },
  { title: 'Desafio curto', text: 'Um exercício delimitado, relacionado à função.' },
  { title: 'Proposta', text: 'Resposta clara, seja qual for.' },
]

// ---------------------------------------------------------------------------
// Treinamentos
// ---------------------------------------------------------------------------
export const TRAINING_FORMATS: typeof Es.TRAINING_FORMATS = [
  { title: 'Implantação 1:1', text: 'Uma pessoa configura com você empresa, filiais, produtos e faturamento.', meta: 'No começo', icon: 'heart-handshake' as IconName },
  { title: 'Sessões ao vivo', text: 'Grupos pequenos por tema, com perguntas no final.', meta: 'Toda semana', icon: 'users' as IconName },
  { title: 'Trilhas por função', text: 'Caixa, depósito, contabilidade e administração: o que cada um precisa.', meta: 'No seu ritmo', icon: 'graduation' as IconName },
  { title: 'Guias passo a passo', text: 'Artigos com capturas de tela e vídeos curtos na central de ajuda.', meta: 'Sempre', icon: 'book' as IconName },
]

export const LEARNING_PATHS: typeof Es.LEARNING_PATHS = [
  { role: 'Caixa e vendas', icon: 'cart', lessons: ['Abrir e fechar o caixa', 'Vender e receber', 'Devoluções', 'Faturar pelo PDV'] },
  { role: 'Depósito', icon: 'package', lessons: ['Cadastrar produtos', 'Receber compras', 'Transferências', 'Contagens e ajustes'] },
  { role: 'Contabilidade', icon: 'calculator', lessons: ['Plano de contas', 'Contas a receber e pagamentos', 'Conciliação', 'Fechamento do mês'] },
  { role: 'Administração', icon: 'building', lessons: ['Filiais e usuários', 'Perfis e permissões', 'Relatórios', 'Site e loja'] },
]

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------
export const POSTS: Es.Post[] = [
  {
    slug: 'vendiste-mas-o-ganaste-mas',
    title: 'Você vendeu mais ou ganhou mais?',
    excerpt: 'Vender mais nem sempre significa ganhar mais. Três números que vale a pena olhar toda semana.',
    category: 'Finanças',
    date: '2026-09-15',
    readingMinutes: 4,
    body: [
      { paragraphs: ['Um mês com mais vendas pode terminar com menos dinheiro no caixa. Isso acontece quando os custos sobem, quando você vende mais do que deixa pouca margem ou quando as contas a receber crescem.'] },
      { heading: '1. Margem por produto', paragraphs: ['Veja quanto cada produto deixa depois do seu custo. Os mais vendidos nem sempre são os que mais contribuem.'] },
      { heading: '2. Custo real do que foi vendido', paragraphs: ['Com o estoque atualizado e o custo médio, o custo do que foi vendido deixa de ser uma estimativa.'] },
      { heading: '3. O que devem a você', paragraphs: ['Uma venda a prazo é receita no relatório, mas não no banco. Revise as contas a receber por antiguidade.'] },
      { heading: 'O que fazer esta semana', paragraphs: [], list: ['Identifique seus cinco produtos com maior margem.', 'Veja se algum é vendido com descontos que o deixam no prejuízo.', 'Ligue para os três clientes com as dívidas mais antigas.'] },
    ],
  },
  {
    slug: 'antes-de-cerrar-caja',
    title: 'Antes de fechar o caixa',
    excerpt: 'Uma lista curta para o fechamento bater e as diferenças terem explicação.',
    category: 'Operação',
    date: '2026-09-08',
    readingMinutes: 3,
    body: [
      { paragraphs: ['O fechamento de caixa é o momento em que o dia vira números. Estas verificações evitam a maioria das diferenças.'] },
      { heading: 'Lista de fechamento', paragraphs: [], list: ['Conte o dinheiro por cédula e moeda.', 'Compare os pagamentos com cartão com o relatório da maquininha.', 'Confira transferências e pagamentos por QR recebidos.', 'Registre as despesas pagas com o dinheiro do caixa, com comprovante.', 'Anote o motivo de qualquer diferença.'] },
      { heading: 'Quando algo não bate', paragraphs: ['Uma diferença pequena e repetida costuma vir de troco ou de pagamentos mistos mal registrados. Um sistema que separa as formas de pagamento em cada venda faz a diferença aparecer em minutos.'] },
    ],
  },
  {
    slug: 'tu-negocio-en-internet',
    title: 'Seu negócio na internet sem contratar uma agência',
    excerpt: 'Site, loja on-line e reservas conectados ao que você já tem no sistema.',
    category: 'Canais digitais',
    date: '2026-09-01',
    readingMinutes: 5,
    body: [
      { paragraphs: ['Muitos negócios têm redes sociais, mas não um lugar próprio onde os clientes vejam produtos, preços e horários e possam comprar ou reservar.'] },
      { heading: 'O que um site que vende precisa', paragraphs: [], list: ['Informação atualizada: preços e disponibilidade reais.', 'Uma ação clara: comprar, reservar ou escrever.', 'Um endereço fácil de lembrar.', 'Carregamento rápido no celular.'] },
      { heading: 'Conectado ou desatualizado', paragraphs: ['Um site separado do estoque fica desatualizado em semanas. Quando o site sai do mesmo catálogo do sistema, mudar um preço no caixa muda também na internet.'] },
    ],
  },
  {
    slug: 'facturacion-electronica-que-necesitas',
    title: 'Nota fiscal eletrônica: o que você precisa para começar',
    excerpt: 'Os elementos básicos para emitir sua primeira nota fiscal eletrônica na Colômbia.',
    category: 'Guias',
    date: '2026-08-25',
    readingMinutes: 4,
    countries: ['COL'],
    body: [
      { paragraphs: ['Emitir nota fiscal eletrônica exige alguns passos prévios junto à DIAN e um sistema que gere e envie os documentos. Esta é uma lista de referência; confirme os requisitos vigentes com seu contador.'] },
      { heading: 'O básico', paragraphs: [], list: ['RUT atualizado com a responsabilidade correspondente.', 'Habilitação como emissor eletrônico.', 'Resolução de numeração.', 'Certificado de assinatura digital.'] },
      { heading: 'No dia a dia', paragraphs: ['O importante é que a nota saia do mesmo lugar onde você vende, com os dados do cliente corretos e o status de validação à vista.'] },
    ],
  },
]

// ---------------------------------------------------------------------------
// Novidades do produto (mesma forma e ordem que lib/content/company.ts)
// ---------------------------------------------------------------------------
export const CHANGELOG: typeof Es.CHANGELOG = [
  {
    month: '2026-09',
    items: [
      { title: 'GO Assistant', text: 'Um assistente dentro do GO Admin que responde perguntas sobre o seu negócio e leva você à tela de que precisa.', area: 'IA', icon: 'bot' },
      { title: 'Tela para o cliente no PDV', text: 'Seu cliente vê em uma segunda tela o que você está cobrando, o total e o troco.', area: 'Vendas e PDV', icon: 'cart' },
      { title: 'PDV de desktop sem conexão', text: 'O aplicativo de desktop continua vendendo se a internet cair e sincroniza quando a conexão volta.', area: 'Vendas e PDV', icon: 'zap' },
      { title: 'Números de série e fechamento de caixa cego', text: 'Controle produtos por número de série. No fechamento, o operador de caixa conta o dinheiro sem ver o valor esperado.', area: 'Estoque', icon: 'boxes' },
      { title: 'Painéis por função', text: 'Cada pessoa entra em um início com os indicadores do seu trabalho: caixa, vendas, estoque ou administração.', area: 'Relatórios', icon: 'chart' },
      { title: 'Chamadas pelo GO Admin', text: 'Faça e receba chamadas pelo navegador e deixe o registro na ficha do cliente.', area: 'Clientes (CRM)', icon: 'message' },
      { title: 'Filiais separadas em todos os módulos', text: 'Cada filial vê seu próprio estoque, vendas e caixa. A administração vê o consolidado.', area: 'Organização', icon: 'building' },
      { title: 'Vários pontos de venda e domínio por filial', text: 'Abra mais de um ponto de venda por filial e compre um domínio próprio para o site de cada uma.', area: 'Canais digitais', icon: 'globe' },
      { title: 'Painel em quatro idiomas', text: 'O GO Admin está disponível em espanhol, inglês, português e francês.', area: 'Plataforma', icon: 'globe' },
    ],
  },
  {
    month: '2026-08',
    items: [
      { title: 'Cobrança internacional', text: 'Seus clientes pagam de outros países na sua loja e no motor de reservas.', area: 'Canais digitais', icon: 'credit-card' },
      { title: 'Catálogo para Facebook e Instagram', text: 'Publique seus produtos no catálogo da Meta com preços em várias moedas.', area: 'Canais digitais', icon: 'store' },
      { title: 'Editor de site', text: 'Monte o site público do seu negócio com blocos e publique no seu domínio.', area: 'Canais digitais', icon: 'layout' },
      { title: 'Notificações push', text: 'Receba avisos de vendas, pedidos e reservas no celular, mesmo sem o GO Admin aberto.', area: 'Plataforma', icon: 'bell' },
      { title: 'Pedidos web pagos confirmados automaticamente', text: 'Quando o pagamento on-line é aprovado, o pedido passa para preparação sem que você precise confirmá-lo.', area: 'Loja on-line', icon: 'truck' },
      { title: 'Pagamentos com Bold e QR codes', text: 'Cobre com a maquininha Bold e com QR da Bancolombia, Bre-B e Redeban pelo PDV.', area: 'Pagamentos', icon: 'qr', countries: ['COL'] },
      { title: 'Conexão com seus bancos', text: 'Sincronize movimentações bancárias e concilie com a ajuda da IA.', area: 'Finanças', icon: 'landmark', countries: ['COL'] },
      { title: 'App móvel com impressão Bluetooth', text: 'Venda pelo celular e imprima em impressoras térmicas por Bluetooth.', area: 'Vendas e PDV', icon: 'cart' },
      { title: 'Consulta de dados junto a {theAuthority}', text: 'Ao criar um cliente, traz o nome e os dados tributários dele com o {taxId}.', area: '{invoicing}', icon: 'search', countries: ['COL'] },
      { title: 'Relatórios com IA e fechamentos em PDF', text: 'Peça um relatório com suas palavras e baixe os fechamentos de caixa em PDF.', area: 'Relatórios', icon: 'sparkles' },
      { title: 'Fólios na hotelaria e gaveta de dinheiro', text: 'Cobranças agrupadas por hóspede no hotel e abertura automática da gaveta ao cobrar.', area: 'Hotelaria', icon: 'bed' },
    ],
  },
  {
    month: '2026-07',
    items: [
      { title: 'Faturamento eletrônico junto a {theAuthority}', text: 'Emita notas fiscais eletrônicas validadas a partir do PDV e das vendas.', area: '{invoicing}', icon: 'receipt', countries: ['COL'] },
      { title: 'Comandas para a cozinha', text: 'Envie os pedidos para a cozinha impressos ou na tela, com observações por produto.', area: 'Restaurantes', icon: 'utensils' },
      { title: 'Impressão pelo desktop', text: 'Um agente de impressão detecta suas impressoras e tenta novamente em outra se uma falhar.', area: 'Vendas e PDV', icon: 'file-text' },
      { title: 'Receitas e produção', text: 'Defina receitas, registre a produção e desconte os insumos do estoque.', area: 'Estoque', icon: 'package' },
      { title: 'Estoque por filial e variantes', text: 'Controle o estoque por filial, também por tamanho, cor ou outra variante.', area: 'Estoque', icon: 'boxes' },
      { title: 'Entregas e guias', text: 'Atribua entregadores, imprima guias e salve fotos como comprovante de entrega.', area: 'Transporte', icon: 'truck' },
      { title: 'Modo claro e escuro', text: 'Todo o GO Admin se adapta ao tema do seu dispositivo e fica bem no celular.', area: 'Plataforma', icon: 'palette' },
    ],
  },
]
