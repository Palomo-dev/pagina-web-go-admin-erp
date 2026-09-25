/**
 * Textos legais em português do Brasil. Tradução de referência de lib/content/legal.ts;
 * a versão em espanhol é a que prevalece.
 */
import type * as Es from '@/lib/content/legal'
import { CONTACT } from '@/lib/site'

export const PRIVACY: typeof Es.PRIVACY = {
  title: 'Política de privacidade',
  updated: '15 de janeiro de 2024',
  intro:
    'No GO Admin, protegemos suas informações pessoais com os mais altos padrões de segurança e transparência. Saiba como coletamos, usamos e protegemos seus dados.',
  principles: [
    { title: 'Transparência total', text: 'Explicamos com clareza quais dados coletamos e por quê.' },
    { title: 'Segurança', text: 'Protegemos suas informações com altos padrões.' },
    { title: 'Controle do usuário', text: 'Você decide quais informações compartilhar e como usá-las.' },
    { title: 'Minimização de dados', text: 'Só coletamos as informações necessárias para o serviço.' },
  ],
  sections: [
    {
      title: '1. Informações que coletamos',
      items: [
        'Informações da conta: nome, e-mail, telefone e dados de faturamento (Art. 5 Ley 1581)',
        'Dados de uso: como você interage com nossa plataforma e serviços',
        'Informações técnicas: endereço IP, tipo de navegador, sistema operacional',
        'Dados do negócio: informações inseridas nos módulos do ERP (tratamento conforme consentimento)',
        'Cookies e tecnologias semelhantes para melhorar a experiência (GDPR Art. 7, CCPA Seção 1798.100)',
        'Informações de contato e comunicações (com consentimento prévio)',
      ],
    },
    {
      title: '2. Como usamos suas informações',
      items: [
        'Fornecer e manter nossos serviços (Art. 6 GDPR - Execução do contrato)',
        'Processar transações e gerenciar sua conta (Ley 1581 - Finalidade contratual)',
        'Comunicar-nos com você sobre atualizações e suporte (com consentimento prévio)',
        'Melhorar nossos produtos e desenvolver novas funcionalidades (GDPR Art. 6.1.f)',
        'Cumprir obrigações legais, fiscais e tributárias colombianas',
        'Prevenir fraudes, garantir a segurança e proteger direitos (GDPR Art. 6.1.f - Interesse legítimo)',
      ],
    },
    {
      title: '3. Compartilhamento de informações',
      items: [
        'Não vendemos suas informações pessoais a terceiros (CCPA Seção 1798.100(d))',
        'Compartilhamos dados somente quando necessário para o serviço (Art. 7 Ley 1581)',
        'Prestadores de serviços sob rigorosos acordos de confidencialidade e DPA',
        'Autoridades, quando exigido pela lei colombiana ou por normas internacionais',
        'Em caso de fusão ou aquisição (com aviso prévio e opção de opt-out)',
        'Cumprimento de exigências judiciais ou governamentais',
      ],
    },
    {
      title: '4. Segurança dos dados',
      items: [
        'Criptografia end-to-end de todos os dados sensíveis (AES-256, TLS 1.3)',
        'Servidores seguros com certificações SOC 2, ISO 27001:2022',
        'Acesso restrito somente a pessoal autorizado com autenticação multifator',
        'Monitoramento contínuo de segurança 24/7 com IDS/IPS avançados',
        'Backups automáticos e planos de recuperação de desastres',
        'Auditorias de segurança regulares e independentes (cumprimento do GDPR Art. 32)',
        'Controles de acesso físico em data centers certificados',
      ],
    },
    {
      title: '5. Seus direitos',
      items: [
        'Direito de acesso: obter confirmação de que tratamos seus dados (Art. 15 GDPR, Art. 12 Ley 1581)',
        'Direito de retificação: corrigir dados inexatos ou incompletos (Art. 16 GDPR)',
        'Direito ao esquecimento: solicitar a exclusão das suas informações (Art. 17 GDPR)',
        'Direito à portabilidade: obter os dados em formato estruturado (Art. 20 GDPR)',
        'Direito de oposição: contestar o tratamento em certos casos (CCPA Seção 1798.120)',
        'Direito de retirar o consentimento: a qualquer momento, sem penalidade',
        'Direitos CCPA: acessar, excluir e conhecer a origem dos dados compartilhados',
      ],
    },
    {
      title: '6. Retenção de dados',
      items: [
        'Informações da conta: mantidas enquanto sua conta estiver ativa (Art. 5 Ley 1581)',
        'Dados de faturamento: conservados por 7 anos conforme a legislação tributária colombiana',
        'Logs de segurança: mantidos por 2 anos para auditoria e conformidade',
        'Dados de navegação: armazenados por no máximo 90 dias (GDPR Art. 5.1.e)',
        'Exclusão segura: dados apagados permanentemente por métodos certificados',
        'Direito de solicitar exclusão: você pode solicitar a exclusão ao encerrar sua conta',
      ],
    },
    {
      title: '7. Transferências internacionais de dados',
      items: [
        'Seus dados podem ser tratados em diferentes países conforme a infraestrutura (GDPR Cap. V)',
        'Utilizamos cláusulas contratuais padrão (SCCs) aprovadas pela UE',
        'Garantimos o mesmo nível de proteção em todos os locais',
        'Cumprimos marcos de transferência reconhecidos internacionalmente',
        'Para usuários na UE: cumprimento total do GDPR, incluindo transferências seguras',
        'Informações de localização: disponíveis mediante solicitação (direito de acesso)',
      ],
    },
    {
      title: '8. Direitos específicos por jurisdição',
      items: [
        'Colômbia (Ley 1581): Autoridade de supervisão: Superintendencia de Industria y Comercio',
        'UE (GDPR): Direitos ampliados, incluindo consentimento prévio e avaliação de impacto',
        'Califórnia (CCPA): Direito de não ser discriminado por exercer direitos de privacidade',
        'Acesso aos dados: você pode solicitar acesso em até 30 dias úteis (Ley 1581 Art. 12)',
        'Reclamações: entre em contato com nosso DPO para resolver dúvidas antes de recorrer às autoridades',
        'Proteção de menores: não coletamos dados de menores de 13 anos (COPPA)',
      ],
    },
    {
      title: '9. Cookies e tecnologias de rastreamento',
      items: [
        'Cookies essenciais: necessários para o funcionamento do serviço',
        'Cookies de análise: opcionais, melhoram a experiência (consentimento por banner)',
        'Gestão de preferências: você pode controlar os cookies no seu navegador',
        'Não utilizamos: cookies de publicidade de terceiros nem rastreamento invasivo',
        'Transparência: lista completa de cookies e terceiros disponível mediante solicitação',
        'Retirada do consentimento: disponível a qualquer momento',
      ],
    },
    {
      title: '10. Alterações nesta política',
      items: [
        'Reservamo-nos o direito de atualizar esta política (com 30 dias de aviso)',
        'Alterações significativas serão comunicadas por e-mail',
        'A continuidade do uso implica a aceitação das alterações',
        'Versão anterior disponível mediante solicitação',
      ],
    },
  ] as Es.LegalSection[],
  contacts: [
    { title: 'Encarregado de proteção de dados', text: 'Consultas específicas sobre privacidade.', email: CONTACT.email },
    { title: 'Exercer seus direitos', text: 'Solicite acesso, correção ou exclusão dos seus dados pessoais.', email: 'privacidad@goadmin.io' },
  ],
}

export const DATA_DELETION: typeof Es.DATA_DELETION = {
  title: 'Exclusão de dados',
  intro:
    'Respeitamos seu direito à privacidade. Você pode solicitar a exclusão completa dos seus dados pessoais a qualquer momento. Veja aqui como fazer.',
  methods: [
    { title: 'E-mail', text: 'Envie sua solicitação para', contact: CONTACT.email, href: `mailto:${CONTACT.email}`, details: 'Inclua: nome completo, e-mail da conta e motivo da solicitação.' },
    { title: 'Telefone', text: 'Ligue para nossa equipe', contact: CONTACT.phoneDisplay, href: CONTACT.phoneHref, details: 'Segunda a sexta, 8h – 18h (horário da Colômbia).' },
    { title: 'Na sua conta', text: 'No seu perfil em', contact: 'app.goadmin.io/perfil', href: 'https://app.goadmin.io/perfil', details: 'Selecione «Solicitar exclusão de dados» nas configurações.' },
  ],
  steps: [
    { title: 'Solicitar a exclusão', text: 'Entre em contato com nossa equipe de privacidade por e-mail ou telefone com sua solicitação de exclusão de dados.' },
    { title: 'Verificação de identidade', text: 'Verificaremos sua identidade e se você é o titular da conta, para proteger sua segurança.' },
    { title: 'Processamento', text: 'Sua solicitação é processada em até 10 dias úteis (Ley 1581) ou 45 dias (GDPR/CCPA).' },
    { title: 'Confirmação', text: 'Você receberá a confirmação de que seus dados foram excluídos permanentemente dos nossos sistemas.' },
  ],
  retention: [
    { type: 'Dados da conta', period: 'Excluídos de forma segura (30 dias de exclusão lógica)' },
    { type: 'Dados de faturamento', period: 'Conservados por 7 anos (exigência tributária)' },
    { type: 'Dados do negócio', period: 'Excluídos completamente' },
    { type: 'Logs de segurança', period: 'Eliminados após 30 dias (auditoria concluída)' },
    { type: 'Cópias de backup', period: 'Excluídas no ciclo de backup seguinte (máx. 90 dias)' },
  ],
  frameworks: [
    { title: 'Ley 1581 (Colômbia)', text: '10 dias úteis para responder. Art. 12-15.' },
    { title: 'GDPR', text: '45 dias para processar. Art. 17.' },
    { title: 'CCPA', text: '45 dias para processar. Seção 1798.105.' },
  ],
  faq: [
    { q: 'Posso recuperar meus dados depois de solicitar a exclusão?', a: 'Não. Uma vez iniciado o processo de exclusão, os dados são apagados permanentemente. Eles não poderão ser recuperados.' },
    { q: 'Meus dados de faturamento serão excluídos?', a: 'Os dados de faturamento são conservados por 7 anos, conforme as exigências legais tributárias colombianas. O restante dos dados é excluído completamente.' },
    { q: 'Quanto tempo leva a exclusão?', a: 'Na Colômbia: 10 dias úteis. Na UE/EUA (GDPR/CCPA): 45 dias. Você receberá uma confirmação quando for concluída.' },
  ],
}

/**
 * Termos e condições. RASCUNHO em revisão jurídica (tradução de referência de lib/content/legal.ts).
 */
export const TERMS: typeof Es.TERMS = {
  title: 'Termos e condições',
  updated: '25 de setembro de 2026',
  draft: true,
  intro:
    'Estas condições regulam o uso do GO Admin, o software de gestão para negócios da GO Admin S.A.S. Leia com calma: ao criar uma conta ou usar o serviço, você as aceita.',
  sections: [
    {
      title: '1. Quem somos e aceitação',
      items: [
        `O GO Admin é um serviço da ${CONTACT.legalName}, identificada com NIT ${CONTACT.nit}, com sede em ${CONTACT.city}.`,
        'Ao se cadastrar, iniciar um teste ou usar qualquer módulo, você aceita estes termos, a Política de privacidade e a Política de cookies.',
        'Se você usa o GO Admin em nome de uma empresa, declara que tem autorização para aceitar estes termos em nome dela.',
      ],
    },
    {
      title: '2. O serviço',
      items: [
        'O GO Admin é um software na nuvem (SaaS) com módulos de vendas e PDV, estoque, faturamento, contabilidade, clientes, folha de pagamento, relatórios, canais digitais e inteligência artificial, entre outros.',
        'Os módulos disponíveis dependem do plano contratado e do país. As informações de cada plano estão na página de preços.',
        'Podemos melhorar, alterar ou retirar funções. Se uma alteração reduzir de forma significativa o que você contratou, avisaremos com antecedência.',
      ],
    },
    {
      title: '3. Sua conta',
      items: [
        'Você deve fornecer informações verdadeiras e mantê-las atualizadas.',
        'Você é responsável pelas credenciais da sua conta e pelos usuários que convidar. Atribua a cada pessoa a função e as permissões de que ela precisa.',
        'Avise-nos imediatamente se suspeitar de um acesso não autorizado.',
      ],
    },
    {
      title: '4. Planos, testes e pagamentos',
      items: [
        'Os planos são cobrados por mês ou por ano, antecipadamente. Na Colômbia, o preço é expresso em pesos colombianos (COP); nos demais países, em dólares americanos (USD).',
        'Alguns planos incluem um período de teste gratuito. Ao final do teste, o plano só é cobrado se você decidir continuar.',
        'A assinatura é renovada automaticamente ao final de cada período até que você a cancele.',
        'Usuários, filiais, créditos de IA e documentos adicionais são cobrados conforme as tarifas vigentes.',
        'Podemos alterar os preços. As alterações se aplicam a partir do período seguinte e avisaremos você antes.',
      ],
    },
    {
      title: '5. Cancelamento',
      items: [
        'Você pode cancelar sua assinatura quando quiser pela sua conta. O serviço continua ativo até o final do período pago.',
        'Os pagamentos de períodos já iniciados não são reembolsados, salvo disposição em contrário da lei aplicável.',
        'Antes de cancelar, você pode exportar suas informações. Após o encerramento, conservamos os dados conforme a Política de privacidade e as obrigações legais.',
        'Podemos suspender ou encerrar uma conta que descumpra estes termos ou tenha pagamentos vencidos, avisando antes quando possível.',
      ],
    },
    {
      title: '6. Seus dados',
      items: [
        'As informações que você registra no GO Admin são suas. Nós as tratamos para prestar o serviço, conforme a Política de privacidade.',
        'Você decide quais dados dos seus clientes, funcionários e fornecedores registra e responde por ter a autorização para tratá-los.',
        'Aplicamos medidas de segurança como criptografia, cópias de backup e controle de acesso por funções.',
      ],
    },
    {
      title: '7. Uso aceitável',
      items: [
        'Não use o GO Admin para atividades ilegais, fraude, envio de mensagens não solicitadas nem para violar direitos de terceiros.',
        'Não tente acessar contas alheias, interromper o serviço nem extrair informações de forma automatizada sem autorização.',
        'Os limites de cada plano (usuários, filiais, documentos, créditos de IA) se aplicam a cada conta.',
      ],
    },
    {
      title: '8. Faturamento eletrônico e obrigações tributárias',
      items: [
        'Na Colômbia, o GO Admin emite e valida documentos eletrônicos perante a DIAN por meio de um provedor tecnológico. Em outros países, a emissão eletrônica perante a autoridade pode não estar disponível; a página de cada país indica o status.',
        'Você é responsável pelas informações tributárias que registra (resoluções, impostos, dados de clientes) e pelo cumprimento das suas obrigações fiscais.',
        'O GO Admin é uma ferramenta: não substitui a assessoria do seu contador.',
      ],
    },
    {
      title: '9. Canais digitais e conteúdo',
      items: [
        'Se você usa o site, a loja on-line, o motor de reservas ou o chat, é responsável pelo conteúdo, preços, produtos e condições que publica.',
        'Você nos autoriza a hospedar e exibir esse conteúdo com o único fim de prestar o serviço.',
        'Os domínios que você comprar por meio do GO Admin também ficam sujeitos às regras do registrador.',
      ],
    },
    {
      title: '10. Inteligência artificial',
      items: [
        'As funções de IA geram sugestões, textos e análises a partir das suas informações. Revise-os antes de usá-los: podem conter erros.',
        'O uso de IA consome créditos conforme o seu plano.',
        'As informações usadas pelas funções de IA são tratadas conforme a Política de privacidade.',
      ],
    },
    {
      title: '11. Serviços de terceiros',
      items: [
        'O GO Admin se integra com serviços de terceiros (gateways de pagamento, mensagens, canais de venda, provedores tecnológicos).',
        'O uso desses serviços também é regido pelos seus próprios termos. Não respondemos por falhas ou alterações desses serviços.',
      ],
    },
    {
      title: '12. Disponibilidade e suporte',
      items: [
        'Trabalhamos para que o GO Admin esteja disponível de forma contínua, mas pode haver interrupções por manutenção ou por causas alheias a nós.',
        'Avisaremos com antecedência sobre as manutenções programadas quando possível.',
        'O suporte é prestado pelos canais publicados na página de suporte, nos horários indicados.',
      ],
    },
    {
      title: '13. Propriedade intelectual',
      items: [
        'O software, a marca GO Admin, os designs e a documentação pertencem à GO Admin S.A.S.',
        'Concedemos a você uma licença de uso não exclusiva e intransferível enquanto sua assinatura estiver ativa.',
        'Você não pode copiar, modificar, revender nem fazer engenharia reversa do software.',
      ],
    },
    {
      title: '14. Responsabilidade',
      items: [
        'Prestamos o serviço com diligência profissional. Na medida em que a lei permitir, não respondemos por danos indiretos, lucros cessantes nem perda de oportunidades.',
        'Nossa responsabilidade total perante você se limita ao valor que você pagou pelo serviço nos doze meses anteriores ao fato que a originou.',
        'Nada nestes termos limita os direitos que a lei de proteção ao consumidor reconheça a você.',
      ],
    },
    {
      title: '15. Alterações nestes termos',
      items: [
        'Podemos atualizar estes termos. Publicaremos a nova versão com a respectiva data e avisaremos você por e-mail se a alteração for importante.',
        'Se você não concordar com uma alteração, pode cancelar antes que ela entre em vigor.',
      ],
    },
    {
      title: '16. Lei aplicável',
      items: [
        'Estes termos são regidos pelas leis da República da Colômbia.',
        'Buscaremos resolver qualquer divergência de forma direta. Se não for possível, ela será resolvida pelos juízes de Medellín, Colômbia, salvo disposição em contrário da lei aplicável.',
      ],
    },
  ],
  contact: { title: 'Tem dúvidas sobre estes termos?', text: 'Escreva para nós e responderemos.', email: CONTACT.email },
}

/**
 * Política de cookies (tradução de referência de lib/content/legal.ts).
 */
export const COOKIES: typeof Es.COOKIES = {
  title: 'Política de cookies',
  updated: '25 de setembro de 2026',
  intro:
    'Usamos pouquíssimos cookies em goadmin.io. Aqui contamos quais são, para que servem e como alterar sua escolha.',
  what: 'Um cookie é um arquivo pequeno que o site salva no seu navegador para lembrar algo, como seu país ou idioma. Tecnologias parecidas, como o armazenamento local do navegador, são tratadas da mesma forma nesta política.',
  categories: [
    {
      id: 'necessary',
      title: 'Necessários',
      text: 'Fazem o site funcionar e lembram suas escolhas. Não podem ser desativados.',
      always: true,
    },
    {
      id: 'analytics',
      title: 'Analíticos',
      text: 'Nos ajudam a saber quais páginas são visitadas para melhorar o site. Os dados são agregados e não identificam você. Só são ativados se você os aceitar.',
      always: false,
    },
  ],
  table: [
    { name: 'GOADMIN_MARKET', category: 'Necessários', purpose: 'Lembra o país e o idioma que você escolheu.', duration: '1 ano', provider: 'GO Admin' },
    { name: 'goadmin_consent', category: 'Necessários', purpose: 'Salva sua escolha sobre cookies para não perguntar de novo.', duration: '1 ano', provider: 'GO Admin' },
    { name: 'Vercel Web Analytics', category: 'Analíticos', purpose: 'Mede visitas às páginas de forma agregada, sem cookies de rastreamento nem identificadores pessoais.', duration: 'Não salva cookies', provider: 'Vercel Inc.' },
  ],
  notUsed: 'Não usamos cookies de publicidade nem compartilhamos dados de navegação com redes de publicidade.',
  app: 'O aplicativo GO Admin (app.goadmin.io) usa seus próprios cookies de sessão, necessários para manter você conectado e proteger sua conta.',
  manage: [
    'Você pode alterar sua escolha a qualquer momento com o botão «Configurar cookies» desta página ou do rodapé.',
    'Você também pode apagar ou bloquear cookies nas configurações do seu navegador. Se bloquear os necessários, o site pode não lembrar seu país e idioma.',
  ],
  contact: { title: 'Tem dúvidas sobre cookies?', text: 'Escreva para nós e responderemos.', email: 'privacidad@goadmin.io' },
}
