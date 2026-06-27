## Objetivo
Deixar o fundo do site bem mais escuro, no estilo do Nova Axis (preto profundo `#0A0A0A`, contraste maior, vinheta, sem competir com o texto).

## Mudanças

**1. `src/styles.css` — tokens de cor**
- `--background`: `#000000` → `#0A0A0A` (preto levemente quente, mesma referência).
- `--surface`: ajustar para `#111111` para cards terem leve separação.
- Manter laranja `#fe4c00` como único acento.

**2. `src/routes/index.tsx` — Hero**
- Reforçar o overlay sobre o vídeo:
  - Gradient atual `from-black/90 via-black/70 to-black` → `from-black via-black/85 to-black` (escurece tudo, principalmente o meio onde mora o título).
  - Reduzir opacidade do vídeo (`opacity-60`) para o fundo virar protagonista escuro e o vídeo virar textura sutil.
  - Adicionar vinheta radial nas bordas (`radial-gradient` preto → transparente no centro) pra fechar os cantos.
- Reduzir `grid-lines` para `opacity-15`.

**3. Demais seções**
- Nada muda estruturalmente; elas já herdam `bg-background`, então ficam automaticamente no novo preto.
- Cards `glass-card`: aumentar o preto base de `rgba(9,9,11,0.4)` para `rgba(10,10,10,0.65)` pra combinar com o fundo mais escuro sem perder o glass.

## Não muda
- Tipografia, layout, copy, imagens, vídeo, animações, parallax, glow laranja — tudo preservado.
