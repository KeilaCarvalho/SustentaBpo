# SUSTENTA BPO

PROMPT COMPLETO PARA O LOVABLE — Site Institucional BPO Financeiro

Copie e cole o conteúdo abaixo direto no chat do Lovable. Foi escrito como uma única instrução técnica, no mesmo padrão de especificação usado por agências (assets, layer stack, regras de animação) — assim o Lovable tem o mínimo de ambiguidade possível.

PROMPT (cole tudo a partir daqui)

Crie uma landing page institucional de uma página (one-page, com âncoras de navegação) para uma empresa de BPO Financeiro que atende micro e pequenos empreendedores no Brasil. Use Tailwind CSS (via CDN) e JavaScript vanilla. A estética é "industrial/blueprint técnica", com grid de fundo, cantos retos (sem rounded), tipografia condensada e cor de destaque laranja queimado.

STACK / DEPENDÊNCIAS

HTML + Tailwind CSS (cdn.tailwindcss.com) com config customizada para perspectiva 3D.

Ícones: iconify-icon (bibliotecas lucide e md).

Fontes Google Fonts: Inter (texto geral) + Geist Mono ou Space Mono (rótulos técnicos, números, labels).

Sem framework de componentes — tudo em um único HTML.

ESTILO GLOBAL

body: bg-white text-neutral-900 overflow-x-hidden.

Seleção de texto: selection:bg-orange-600 selection:text-white.

Scrollbar customizada: 8px de largura, trilho #f5f5f5, polegar #ea580c.

Grid de fundo técnico em seções-chave: linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px), tamanho 40px 40px, opacidade baixíssima (3–5%) — nunca deixar competir com o texto.

Paleta:

Laranja primário: #ea580c (CTAs, destaques, hover ativo)

Texto principal: #171717

Texto secundário: #737373

Fundo claro alternativo: #f5f5f5

Branco: #ffffff

Bordas: #e5e5e5

Cantos retos em todos os botões e cards (rounded-none). Círculos só em indicadores de status (pulse) e elementos decorativos.

Transição padrão de UI: 300ms. Transição de imagens (hover scale/grayscale→cor): 1000ms, ease-out.

SEÇÃO 1 — NAVEGAÇÃO (fixed top-0, z-50, backdrop-blur-sm, borda inferior 1px neutral-200)

Logo: quadrado laranja 16x16px + nome da marca em text-xl font-semibold tracking-tighter (usar [NOME DA MARCA] — ainda em definição, ver nota no final).

Links centrais (text-sm text-neutral-600): Sobre, Como Funciona, Depoimentos, Contato.

CTA à direita: botão "Diagnóstico Financeiro Gratuito" — fundo neutral-900, hover orange-600, texto branco, px-6 py-2.5, ancora para a seção de agendamento (#agendar).

SEÇÃO 2 — HERO

Grid de 12 colunas. Esquerda 7 colunas (conteúdo), direita 5 colunas (visual).

Conteúdo (esquerda):

Pequeno rótulo mono acima do título: // BPO FINANCEIRO PARA PMEs em text-xs font-mono tracking-widest text-orange-600.

Headline text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9]: algo como "SEU FINANCEIRO, SOB CONTROLE." — a palavra final em gradiente laranja usando bg-clip-text (bg-gradient-to-r from-orange-600 to-orange-400).

Subtítulo com border-l-2 border-neutral-300 pl-6 text-neutral-500: explicação curta da proposta de valor (ex: "Terceirizamos contas a pagar, a receber, conciliação bancária e fluxo de caixa do seu negócio — com clareza, segurança e relatórios que você realmente entende.").

Dois CTAs: botão primário laranja "Agendar Diagnóstico Gratuito" (âncora #agendar) e link secundário sublinhado "Ver como funciona" (âncora #como-funciona).

Linha de prova social discreta abaixo: 3 logos/selos ou texto tipo "+150 empreendedores atendidos" em mono, pequeno.

Visual (direita) — pilha de camadas com perspectiva 3D (perspective: 800px no container pai):

Container base com transform-style: preserve-3d, leve rotate-y (3–5deg) que se ajusta no hover.

Imagem principal: foto de empreendedor(a) revisando finanças/dashboard num notebook, ambiente claro e profissional (buscar no Unsplash algo como "small business owner reviewing finances laptop" ou "entrepreneur checking financial report"). Efeito grayscale → cor no hover, scale-105 duration-1000 ease-out.

Grid técnico sutil sobreposto (absolute inset-0, branco a 5% opacidade) só nesse painel.

Card de dados flutuante (absolute bottom-8 left-0 z-10, fundo orange-600, texto branco): mostrando um indicador fictício tipo "Fluxo de Caixa: Saudável" com um ícone de check.

Card técnico flutuante (absolute top-12 -left-4 z-20, fundo white/90, borda fina, sombra leve): mini-readout mono tipo "Conciliação: 100%" / "Status: Atualizado" com um ponto verde pulsante (animate-pulse).

Retículo de "scanning" central, opacidade 0 → 100 no hover do grupo, rotação contínua animate-[spin_10s_linear_infinite], escala 90→100.

SEÇÃO 3 — O QUE É BPO FINANCEIRO (explicativa)

Título curto: "O que é BPO Financeiro" + texto explicando de forma simples: terceirização das rotinas financeiras (contas a pagar, a receber, conciliação bancária, fluxo de caixa, emissão de boletos/notas) para uma equipe especializada, liberando o empreendedor para focar no core business.

Layout: texto à esquerda + 4 cards pequenos à direita ou abaixo, em grid grid-cols-2, cada um com ícone + rótulo curto: "Contas a Pagar", "Contas a Receber", "Conciliação Bancária", "Relatórios Gerenciais".

SEÇÃO 4 — PROPOSTA DE VALOR / DIFERENCIAIS

Layout grid-cols-1 md:grid-cols-3 com gap-[1px] bg-neutral-200 (cria linhas finas de divisão entre os cards, fundo branco).

Card hover: transição de fundo branco → neutral-900, ícone troca de laranja para branco.

3 a 4 diferenciais, exemplos de copy (ajuste ao seu posicionamento real):

Clareza, não jargão — relatórios financeiros que qualquer empreendedor entende, sem economês.

Atendimento humano — você fala com uma pessoa, não com um ticket. Comunicação direta via WhatsApp.

Segurança e organização — rotinas padronizadas, conciliação diária, dados sempre atualizados.

(opcional) Sob medida para PMEs — planos modulares que cabem no momento atual do seu negócio.

SEÇÃO 5 — MÉTRICAS / NÚMEROS (estilo "Our Reach")

Grid de 4 colunas. Primeira coluna é o rótulo "Nosso Impacto" em texto pequeno/mono.

Números fictícios a ajustar com seus dados reais, ex: "150+" empresas atendidas, "R$ XXM" movimentados/conciliados, "98%" satisfação, "0" multas por atraso.

Hover: número muda de neutral-900 para orange-600.

Cada métrica com border-l border-neutral-900 pl-4.

SEÇÃO 6 — DEPOIMENTOS

Título: "O que dizem os empreendedores que confiam no seu financeiro a nós" (ajustar).

Layout: carrossel simples (JS vanilla, sem libs) ou grid 3 colunas de cards.

Cada card: aspas grandes decorativas em laranja a 20% opacidade, texto do depoimento, nome + cargo/empresa abaixo, separados por linha fina.

Placeholder de copy (substituir por depoimentos reais quando tiver):

"Antes eu perdia fim de semana revisando planilha. Hoje recebo um relatório que realmente entendo." — Nome, Tipo de negócio.

"Profissionalizou meu financeiro sem eu precisar contratar ninguém." — Nome, Tipo de negócio.

"Atendimento rápido, direto no WhatsApp. Isso fez toda diferença." — Nome, Tipo de negócio.

SEÇÃO 7 — CASE / COMO FUNCIONA (estilo asimétrico 2 colunas)

Esquerda: imagem (pessoa em reunião/diagnóstico financeiro, ou um mockup de dashboard/relatório).

Direita: rótulo tracking-widest tipo "PROCESSO" + 3-4 passos numerados em mono (ex: "01 — Diagnóstico gratuito", "02 — Mapeamento das rotinas", "03 — Implantação", "04 — Acompanhamento contínuo"), com border-l-2 border-orange-600 pl-4 na descrição de cada passo.

SEÇÃO 8 — CTA FINAL / AGENDAR (id="agendar")

Fundo bg-orange-600 text-white (ou neutral-900 para contraste — escolha conforme o resto da página).

Headline grande: "Vamos diagnosticar o financeiro do seu negócio — de graça."

Botão de ação central, fundo branco, texto laranja/neutral-900, hover invertendo cores.

Sobre a função do botão de agendamento (decisão pendente que você tinha em aberto): recomendo abrir um link do WhatsApp pré-preenchido (https://wa.me/55SEUNUMERO?text=Quero%20meu%20diagn%C3%B3stico%20financeiro%20gratuito) como ação principal — é o canal que seu público de PME já usa e elimina fricção de agendamento formal. Se quiser algo mais estruturado, o Lovable também pode embutir um Calendly. Deixei o botão preparado para os dois casos; você só decide o link/embed final.

RODAPÉ

Fundo neutral-900, texto neutral-400. Logo + nome, links rápidos, contato (WhatsApp/e-mail), CNPJ se aplicável, ano atual.

REGRAS GLOBAIS DE ANIMAÇÃO

Hover em imagens: scale-105 duration-1000 ease-out + grayscale→cor.

Retículo de scanning: animate-[spin_10s_linear_infinite].

Indicadores de status: animate-pulse.

Botões/links: transição 300ms em todas as propriedades de cor.

ERROS A EVITAR

Não deixar o grid de fundo competir visualmente com o texto (opacidade muito baixa).

Não esquecer o bg-clip-text na palavra de destaque do headline.

Garantir que a perspectiva 3D do hero esteja ativa (senão o hover da imagem fica "chapado").

Não usar rounded em botões/cards — manter o visual de cantos retos.

Notas para você antes de colar no Lovable

Nome da marca: o prompt usa [NOME DA MARCA] como placeholder porque ainda está em definição (Esteio, Arrimo, Filão, etc.). Substitua antes de colar, ou cole assim mesmo e peça ao Lovable pra trocar depois — é uma edição de 1 linha.

Imagens reais: troquei os assets do template original (que eram de uma empresa de engenharia) por descrições de busca no Unsplash voltadas a finanças/PME. Se você já tiver fotos profissionais suas ou de clientes, me diga e eu ajusto o prompt com os links exatos.

Depoimentos: os textos no prompt são placeholders de estrutura. Quando tiver depoimentos reais (mesmo que só 2 ou 3), me envie que eu reescrevo essa seção com o conteúdo definitivo antes de você rodar no Lovable de novo.

CTA de agendamento: deixei a recomendação (WhatsApp direto) dentro do próprio prompt — se preferir Calendly/Google Agenda, me avisa que eu adapto essa seção.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://sustentabpo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c51dd819-780b-4ae2-bc9a-69807587e8fd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
