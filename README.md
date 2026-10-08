# FinanciaPasso

Landing page independente para orientar consumidores a localizar canais oficiais relacionados a segunda via de boleto, saldo e quitação de financiamento automóvel.

> **Importante:** este projeto não é um portal oficial, representante ou parceiro autorizado da Volkswagen ou da Volkswagen Financial Services. Não oferece financiamento, não intermedeia contratos, não cobra taxas e não recolhe dados pessoais ou financeiros.

## Executar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`. Para validar o build de produção:

```bash
npm run typecheck
npm run build
npm run start
```

O servidor deve escutar em `0.0.0.0` quando executado no ambiente de publicação. O projeto não possui backend, banco de dados, cookies, analytics ou formulários.

## Fontes oficiais e manutenção

Os links atuais dos cards foram conferidos no site da Volkswagen Financial Services Brasil em outubro de 2026:

- `https://www.vwfs.com.br/`
- `https://www.vwfs.com.br/atendimento/acesso-do-cliente.html`
- `https://www.vwfs.com.br/atendimento/canais-de-atendimento.html`
- `https://www.vwfs.com.br/golpes.html`

Antes de publicar uma alteração, confirme manualmente cada domínio e cada página. Se a estrutura do site oficial mudar, substitua os links em `components/QuickActions.tsx` e `components/StepGuide.tsx`. Para contratos de outros agentes financeiros, não reutilize estes links.

## Google Ads e transparência

A página foi estruturada para evitar representação enganosa: a marca do guia é própria, a independência aparece de forma visível, os CTAs descrevem o destino, não há promessas de aprovação ou economia e não há recolha de dados sensíveis.

Antes de anunciar, o responsável deve incluir identificação comercial real, endereço físico e demais informações exigidas pela legislação e pelas políticas aplicáveis ao local segmentado. Não publique endereço, telefone, e-mail, autorização de marca ou certificação que não possam ser comprovados.

As referências de política utilizadas no conteúdo são a [política de Deturpação do Google Ads](https://support.google.com/adspolicy/answer/6020955?hl=pt-BR) e a [política de Produtos e serviços financeiros](https://support.google.com/adspolicy/answer/2464998?hl=pt-BR). Elas podem ser atualizadas; faça uma nova revisão antes de iniciar uma campanha.

## Publicar na Render

1. Conecte este repositório no GitHub à Render como **Web Service** ou **Static Site**.
2. Para Web Service, use `npm install` no build e `npm run start` no comando de execução. A Render fornece `PORT`; o Next.js deve escutá-la.
3. Para um Static Site, use `npm install && npm run build` e publique a pasta `.next` apenas se a configuração de exportação estática for adicionada. A configuração atual é otimizada para execução Node/Next, portanto Web Service é a opção mais simples.
4. Configure o domínio público antes de adicionar canonical, `og:url`, sitemap absoluto ou campanhas.

## GitHub

O projeto é compatível com um repositório novo. Não adicione `.env`, tokens, credenciais ou dados de clientes. A conexão com GitHub deve ser feita pelo fluxo de repositório do Webdev/Manus ou pelo seu próprio Git local; não force-push nem substitua conteúdo não relacionado.
