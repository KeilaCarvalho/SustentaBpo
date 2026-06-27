## Objetivo
Reestruturar a arquitetura visual do site para que ele deixe de parecer "quadrado, denso e cortado". Mesmas palavras de copy, mas nova respiração, hierarquia e responsividade real em todas as larguras (320 → 1920px).

## Diagnóstico do que está quebrado hoje
- **Hero**: `text-[8.5rem]` no XL gera quebras feias entre 1024–1280px e o título encosta nos cards flutuantes. Em mobile, título grudado no parágrafo (sem hierarquia entre eyebrow → headline → sub).
- **WhatIs (Sobre)**: eyebrow sticky cria coluna vazia gigante; headline em `text-[6.5rem]` corta em telas médias; descrição "flutua" embaixo desalinhada dos cards.
- **Values (O que NÃO fazemos)**: stagger `mt-12 / mt-24` em desktop joga o terceiro card para fora do campo visual e cria "buraco" à esquerda. Em tablet o texto fica colado nos cards.
- **Metrics**: valores ("Diário", "Contínuo") usam fonte serif gigante em 4 colunas estreitas → quebra de sílabas e sobreposição com label abaixo.
- **Testimonials**: sticky com `top: 100 + i*24px` em md (768px) cria empilhamento confuso porque a coluna do título é só 5/12 e some no scroll. Aspas gigantes encostam no blockquote.
- **Process**: header dentro de `site-grid` aninhado em outro `site-grid` quebra alinhamento; mídia sticky em md vira "imagem solta" porque a coluna de steps é 7/12 e o conteúdo cabe sem scroll.
- **Final CTA**: dois headlines centralizados consecutivos sem ritmo; em mobile o `text-8xl` estoura.
- **Global**: tipografia salta direto de `text-[2.5rem]` (mobile) para `text-6xl` (sm) sem passos intermediários; faltam breakpoints reais (`lg`, `xl`) e `clamp()` para o tipo respirar.

## Mudanças por seção (sem tocar nas palavras)

### 1. Sistema tipográfico responsivo (`src/styles.css`)
Trocar fontes fixas por utilitários `clamp()` que escalam suave entre 320px e 1440px:
- `.display-xxl` → `clamp(2.5rem, 8vw, 8rem)` (hero)
- `.display-xl` → `clamp(2.25rem, 6vw, 6rem)` (section headlines)
- `.display-lg` → `clamp(2rem, 4.5vw, 4.5rem)` (metrics, final CTA sub)
- `.body-lg`, `.body-md`, `.eyebrow` para padronizar
Substituir as longas cadeias `text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[Xrem]` por essas classes.

### 2. Hero
- Mudar grid: em `lg` deixar título em `col-span-7` e cards em `col-span-5` com `gap-12` real (hoje encostam).
- Adicionar passo intermediário `md`: título em 1 coluna, cards aparecem (não esperam `lg`).
- Aumentar `pt` do bloco de conteúdo (`pt-40 lg:pt-48`) para descolar da nav.
- CTA: garantir `flex-wrap` e `gap-y-3` para não cortar em 360px.
- Cards flutuantes: `max-w` em vez de `min-w` para nunca estourar viewport.

### 3. WhatIs (Sobre)
- Remover sticky do eyebrow (causa coluna vazia).
- Reorganizar em 2 linhas claras:
  - Linha 1 (12 col): eyebrow + headline lado a lado (`md:col-span-4` / `md:col-span-8`)
  - Linha 2 (12 col): descrição em `md:col-start-5 md:col-span-7` alinhada ao headline
  - Linha 3 (12 col): grid de cards `grid-cols-1 md:grid-cols-2 xl:grid-cols-4` (introduz passo `md` 2-col que hoje pula direto para 4 em `lg`)
- Aumentar `gap-y` entre linhas (`row-gap-16 md:row-gap-24`).

### 4. Values (O que NÃO fazemos)
- Eliminar stagger `mt-12/mt-24` (responsável pelos "buracos"). Manter alinhamento topo.
- Trocar alinhamento `text-right` por `md:text-right` apenas em `xl+` (em `md` fica esquisito).
- Cards em `md:grid-cols-2 xl:grid-cols-3` (passo intermediário).

### 5. Metrics
- Reduzir display dos valores para `.display-lg` com `clamp()` para não quebrar sílabas.
- Em mobile: 1 col com divisor; em `sm` 2 col; em `lg` 4 col com `gap-x-12`.
- Adicionar `border-t border-white/10 pt-8` em cada item para virar lista visual.

### 6. Testimonials
- Quebrar layout em 2 etapas: até `lg`, título e cards empilhados (não sticky). Em `lg+`, título em `col-span-5` sticky e cards em `col-span-6 col-start-7`.
- Reduzir aspa gigante (`text-5xl` em vez de `text-7xl`) e dar `mb-4` para descolar do blockquote.
- Padding interno do card: `p-8 lg:p-10` (hoje `p-12` esmaga em tablet).

### 7. Process
- Remover `site-grid` aninhado dentro de outro `site-grid` (quebra alinhamento). Header vira linha simples em 12 col.
- Sticky da mídia só a partir de `xl` (em `lg` a coluna de steps é curta demais para justificar).
- Espaçamento entre steps: `space-y-4 md:space-y-5` (hoje `space-y-6` cria scroll vazio).

### 8. Final CTA
- Inverter hierarquia: headline primeiro (grande), subheadline depois (pequeno), parágrafo final.
- Aplicar `.display-xl` no h2, `.body-lg` nos parágrafos.
- Botões: `w-full sm:w-auto` para ocupar bem no mobile.

### 9. Footer
- Trocar `grid-cols-4` direto por `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` (hoje pula etapa).
- Linha inferior: `flex-col sm:flex-row gap-3` para não esmagar em mobile.

### 10. Nav
- Reduzir altura em mobile (`h-16` em vez de `h-20`) para o hero respirar.
- Logo + CTA com `min-w-0` e `truncate` para não estourar em 320px.

## Não muda
- Nenhuma palavra de copy.
- Imagens, vídeo, paleta, fontes (DM Serif Display + Fira Sans + JetBrains Mono).
- Animações (reveal-mask, marquee, parallax, sticky stack onde fizer sentido).
- Estrutura de seções e ordem.

## Validação após implementar
Rodar Playwright em 4 viewports (375, 768, 1024, 1440) e capturar screenshot de cada seção para confirmar que não há texto cortado, sobreposição ou "buraco" de layout.
