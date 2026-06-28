## Objetivo
Substituir os CTAs atuais do site FINCORE por textos mais diretos e orientados à conversão, aumentando o tamanho físico dos botões e sua proeminência nas seções principais de ação.

## Diagnóstico
Atualmente o site possui três CTAs com o texto "Diagnóstico Gratuito" / "Diagnóstico Financeiro Gratuito":
1. **Navbar** (topo direito): "Diagnóstico Gratuito"
2. **Hero** (botão primário laranja): "Diagnóstico Financeiro Gratuito"
3. **Final CTA** (botão WhatsApp): "Diagnóstico Financeiro Gratuito"
4. **Processo** (badge sobre mídia): "Diagnóstico · gratuito · sem compromisso"
5. **Footer** (link): "Diagnóstico"

O usuário quer que os CTAs principais (Hero e Final CTA) sejam mais diretos, maiores fisicamente e mais expostos.

## Mudanças

### 1. Hero — Botão primário
- **Texto atual**: "Diagnóstico Financeiro Gratuito"
- **Novo texto**: "Falar com Especialista"
- **Tamanho**: Aumentar padding para `px-8 py-4` → `px-10 py-5` (ou maior), fonte para `text-base`/`text-lg`.
- **Exposição**: Garantir que ocupe largura confortável em mobile (`w-full sm:w-auto` já existe, mas verificar se está bem posicionado).

### 2. Hero — Link secundário
- **Texto atual**: "Conhecer a operação →"
- **Novo texto**: "Agendar uma Reunião" (ou manter se quiser, mas usuário pediu para simplificar)
- **Ajuste**: Transformar em botão outline/borda para dar mais peso visual, ou manter como link se preferir.

### 3. Final CTA (seção #agendar) — Botão primário WhatsApp
- **Texto atual**: "Diagnóstico Financeiro Gratuito"
- **Novo texto**: "Simplificar Minha Empresa"
- **Tamanho**: Aumentar padding para `px-10 py-5`, fonte `text-base`.

### 4. Final CTA — Botão secundário (e-mail)
- **Texto atual**: "Enviar e-mail"
- **Novo texto**: "Agendar uma Reunião"
- **Tamanho**: Aumentar proporcionalmente para manter alinhamento.

### 5. Navbar (direito)
- **Texto atual**: "Diagnóstico Gratuito" / "Diagnóstico"
- **Novo texto**: "Falar com Especialista" (abreviado em mobile: "Especialista" ou manter "Falar com Especialista" com `truncate`)
- **Tamanho**: Aumentar padding levemente.

### 6. Processo — Badge sobre mídia
- **Texto atual**: "Diagnóstico · gratuito · sem compromisso"
- **Novo texto**: "Reunião · sem compromisso" ou "Diagnóstico · sem compromisso" (manter a ideia, remover redundância)

### 7. Footer — Link
- **Texto atual**: "Diagnóstico"
- **Novo texto**: "Contato" (ou "Falar com Especialista", mas no footer um link curto é melhor)

### 8. Parâmetro WhatsApp
- Atualizar a URL do WhatsApp (`WHATSAPP` constante) para refletir o novo texto da mensagem, ex: `?text=Quero%20falar%20com%20um%20especialista`.

### 9. Tamanho físico global
- Aplicar classes de tamanho aumentado em todos os botões de ação (primários e secundários) do Hero e Final CTA.
- Manter consistência de altura/padding entre botões lado a lado.

## Validação
- Verificar build sem erros.
- Confirmar que botões não quebram em 375px (mobile).
- Confirmar que textos longos ("Falar com Especialista") cabem no navbar mobile.