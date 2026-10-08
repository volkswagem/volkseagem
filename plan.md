# Plano — FinanciaPasso

## Escopo
Landing page estática de uma só página, em português do Brasil, para orientar consumidores a localizar canais oficiais relacionados a segunda via de boleto, consulta de saldo e quitação de financiamento automóvel. A página não oferece financiamento, não intermedeia contratação, não cobra taxas e não recolhe dados pessoais ou financeiros.

## Decisões de conformidade
- Identidade própria **FinanciaPasso**, sem logótipo, símbolo ou aparência oficial da Volkswagen.
- Aviso de independência imediatamente visível no cabeçalho, perto das ações e no rodapé.
- Apenas os links oficiais confirmados em `vwfs.com.br` serão acionáveis: Acesso do Cliente, Canais de Atendimento, página institucional e WhatsApp indicado pelo próprio site oficial.
- Nenhum formulário, campo de CPF, palavra-passe, dados bancários ou contrato.
- A página informa que marcas citadas pertencem aos seus titulares e orienta o utilizador a confirmar o domínio antes de inserir dados.
- O conteúdo não usa promessas de aprovação, quitação imediata, economia garantida, urgência artificial ou linguagem de afiliado autorizado.
- Antes de qualquer campanha de Google Ads, o responsável deve preencher identificação empresarial e endereço físico reais, bem como validar regras locais aplicáveis.

## Direção de design
- **Movimento:** editorial utilitário / fintech discreta, com sensação de painel de orientação e não de portal bancário.
- **Princípios:** clareza antes de conversão; hierarquia visual forte; confiança sem simular autoridade; acessibilidade por padrão.
- **Paleta:** azul-petróleo profundo para estabilidade, branco quente para leitura e ciano-menta próprio para ações; evita reproduzir a identidade visual oficial citada.
- **Paradigma:** composição assimétrica com barra lateral de progresso, faixa de aviso no topo e cartões empilhados em trilho; evita um mosaico centralizado genérico.
- **Elementos assinatura:** marcador vertical “01/02/03”; etiqueta “guia independente”; cartões com linha de acento e estado de verificação.
- **Interação:** links externos informam que levam a outro domínio; cards mantêm ações simples e previsíveis; guia usa `<details>` nativo sem depender de JavaScript.
- **Animação:** apenas transições curtas de elevação, cor e foco; respeita `prefers-reduced-motion`.
- **Tipografia:** sistema sans-serif nativo, títulos compactos e encorpados, corpo de pelo menos 16px e labels em caixa alta com espaçamento.
- **Essência:** orientação pública e prudente para encontrar o canal certo do próprio agente financeiro; personalidade clara, sóbria e protetora.
- **Voz:** direta, educativa e sem exagero. Exemplos: “Comece pelo agente que aparece no seu contrato.” e “Não digite dados sensíveis nesta página.”
- **Wordmark:** palavra FinanciaPasso com um pequeno traço vertical ciano e numeral de rota; não usa ícones ou formas de marcas de veículos.
- **Cor de assinatura:** `#16C7B7` (menta elétrica), usada somente para ação e confirmação.

## Estrutura do projeto
- `app/layout.tsx`: metadados, idioma e shell global.
- `app/page.tsx`: conteúdo indexável da landing page e composição das secções.
- `app/globals.css`: tokens, layout responsivo, acessibilidade e microinterações.
- `components/Header.tsx`: navegação e aviso de independência.
- `components/Hero.tsx`: proposta de valor e ilustração abstrata de fluxo documental.
- `components/QuickActions.tsx`: cards das três tarefas mais comuns.
- `components/ActionCard.tsx`: card reutilizável com estado de link externo e nota de segurança.
- `components/StepGuide.tsx`: guia nativo em passos expansíveis.
- `components/Footer.tsx`: privacidade, limites, fontes oficiais e disclaimer.
- `public/manus-routes.json`: declaração de rota pública exigida pelo Webdev.
- `README.md`: execução, verificação de fontes e instruções para Render/GitHub.

## Implementação e execução
Next.js 14 com App Router, React 18, TypeScript e Tailwind CSS. A página é renderizada no servidor para que texto, headings e metadados estejam no HTML inicial. Não há backend, cookies, analytics, pixels, armazenamento ou dependências de dados sensíveis. O comando de desenvolvimento escuta em `0.0.0.0:3000`.

## Revisão visual aprovada

A referência visual enviada pelo utilizador substitui a composição editorial ampla pela apresentação de um painel móvel compacto: fundo azul-noite com anéis radiais subtis, emblema circular luminoso próprio no topo, etiqueta “Guia independente”, quatro ações empilhadas com ícones e setas, secções expansíveis compactas e rodapé de transparência. O emblema usa somente a palavra FinanciaPasso e não reproduz o logótipo ou símbolo de qualquer fabricante.
