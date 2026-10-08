# FinanciaPasso

Landing page de **conteúdo exclusivamente educativo e informativo** para explicar como um consumidor pode localizar canais oficiais relacionados a segunda via de boleto, saldo e quitação de financiamento automóvel.

> **Aviso principal:** este projeto não é a Volkswagen, a Volkswagen do Brasil, a Volkswagen Financial Services, o Banco Volkswagen, uma concessionária, um banco, um correspondente bancário ou um parceiro autorizado. Não oferece financiamento, não intermedeia contratos, não emite boletos, não calcula quitação, não cobra taxas e não recolhe dados pessoais ou financeiros.

O projeto não usa o CNPJ, nome empresarial, endereço, telefone, e-mail ou logótipo de outra empresa como identificação do operador. Um cartão CNPJ de terceiro não comprova autorização de marca, representação financeira ou direito de atendimento.

## Executar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar o build:

```bash
npm run lint
npm run typecheck
npm run build
```

O projeto não possui backend, banco de dados, cookies, analytics, formulários ou campos para CPF, senha, dados bancários ou dados de contrato.

## Fontes e manutenção

Os links atuais foram identificados no site da Volkswagen Financial Services Brasil em outubro de 2026:

- `https://www.vwfs.com.br/`
- `https://www.vwfs.com.br/atendimento/acesso-do-cliente.html`
- `https://www.vwfs.com.br/atendimento/canais-de-atendimento.html`
- `https://www.vwfs.com.br/golpes.html`

Eles são referências externas, não uma declaração de afiliação. Confirme manualmente cada domínio antes de publicar alterações. Para contratos de outros agentes, não reutilize estes links.

## Google Ads e transparência

A interface usa uma marca própria, apresenta avisos de não afiliação de forma visível, identifica os destinos externos e evita promessas de aprovação, economia, urgência ou quitação. Isso não garante aprovação de anúncios: o Google avalia anunciante, domínio, anúncio, identidade, conteúdo e documentação.

Antes de qualquer campanha, o operador real do site deve fornecer sua própria identificação comercial verdadeira, endereço físico, política de privacidade e informações exigidas pela legislação aplicável. Não publique dados de outra empresa sem autorização formal e não alegue ser parceiro autorizado sem documentação verificável.

Consulte as políticas atuais do [Google Ads sobre deturpação](https://support.google.com/adspolicy/answer/6020955?hl=pt-BR) e [produtos e serviços financeiros](https://support.google.com/adspolicy/answer/2464998?hl=pt-BR) antes de anunciar.

## Publicar na Render

O projeto gera uma exportação estática na pasta `out`, adequada para **Static Site**. Configure o serviço com:

- Build command: `npm install && npm run build`
- Publish directory: `out`
- Branch: `main`
- Auto-deploy: ativado

Configure o domínio público antes de adicionar canonical, `og:url`, sitemap absoluto ou campanhas.

## GitHub

Não adicione `.env`, tokens, credenciais ou dados de clientes. O repositório gerido contém o código pronto; para sincronizar com o repositório GitHub existente `volkseagem`, é necessário usar o URL completo e o proprietário correto, sem substituir conteúdo não relacionado.
