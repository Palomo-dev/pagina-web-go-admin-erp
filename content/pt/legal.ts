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
