import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/fontes")({
  component: FontPreviewPage,
  head: () => ({
    meta: [
      { title: "Prévia de Fontes | Sustenta BPO" },
      { name: "description", content: "Comparação lado a lado de combinações tipográficas para o site Sustenta BPO." },
    ],
  }),
});

const combinations = [
  {
    id: "nunito-merriweather",
    name: "Nunito + Merriweather",
    displayFont: "'Merriweather', Georgia, serif",
    bodyFont: "'Nunito', ui-sans-serif, system-ui, sans-serif",
    monoFont: "'JetBrains Mono', ui-monospace, monospace",
    description: "Sans arredondado amigável com serif clássica e acolhedora. Cria contraste elegante e humano.",
  },
  {
    id: "nunito-inter",
    name: "Nunito + Inter",
    displayFont: "'Nunito', ui-sans-serif, system-ui, sans-serif",
    bodyFont: "'Inter', ui-sans-serif, system-ui, sans-serif",
    monoFont: "'JetBrains Mono', ui-monospace, monospace",
    description: "Sans arredondado nos títulos com sans neutra e estruturada no corpo. Máxima legibilidade e hierarquia limpa.",
  },
  {
    id: "quicksand-source",
    name: "Quicksand + Source Sans 3",
    displayFont: "'Quicksand', ui-sans-serif, system-ui, sans-serif",
    bodyFont: "'Source Sans 3', ui-sans-serif, system-ui, sans-serif",
    monoFont: "'JetBrains Mono', ui-monospace, monospace",
    description: "Alternativa mais leve e moderna ao Nunito, com sans institucional e legível no corpo. Visual clean e confiável.",
  },
];

function FontPreviewPage() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <header className="site-container py-8 border-b border-[rgba(201,163,91,0.15)]">
        <div className="flex items-center justify-between">
          <div>
            <p className="eyebrow mb-2">Prévia Tipográfica</p>
            <h1 className="font-display text-3xl md:text-4xl">Comparação de Fontes</h1>
            <p className="mt-2 text-sm text-[#C9A35B]/80 max-w-xl">
              Três combinações inspiradas no visual do allbpo.com (Filson Soft), mas com fontes gratuitas do Google Fonts e mais contraste tipográfico.
            </p>
          </div>
          <Link
            to="/"
            className="hidden md:inline-flex items-center justify-center rounded-md border border-[rgba(201,163,91,0.3)] bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgba(201,163,91,0.1)]"
          >
            Voltar ao site
          </Link>
        </div>
      </header>

      <main className="site-container py-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {combinations.map((combo) => (
            <article
              key={combo.id}
              className="rounded-xl border border-[rgba(201,163,91,0.15)] bg-[rgba(17,24,39,0.7)] p-6 md:p-8 flex flex-col"
            >
              <div className="mb-6 pb-6 border-b border-[rgba(201,163,91,0.15)]">
                <span className="eyebrow">{combo.name}</span>
                <p className="mt-3 text-sm text-white/70 leading-relaxed" style={{ fontFamily: combo.bodyFont }}>
                  {combo.description}
                </p>
              </div>

              <div className="space-y-8 flex-1" style={{ fontFamily: combo.bodyFont }}>
                {/* Hero headline sample */}
                <section>
                  <p className="eyebrow mb-3">Título Principal</p>
                  <h2
                    className="text-3xl md:text-4xl leading-tight"
                    style={{ fontFamily: combo.displayFont, fontWeight: 400, letterSpacing: "-0.02em" }}
                  >
                    Gestão Financeira Estratégica
                  </h2>
                </section>

                {/* Subhead + body */}
                <section>
                  <p className="eyebrow mb-3">Subtítulo + Corpo</p>
                  <h3
                    className="text-xl md:text-2xl mb-3"
                    style={{ fontFamily: combo.displayFont, fontWeight: 400, lineHeight: 1.2 }}
                  >
                    BPO Financeiro para empresas em crescimento
                  </h3>
                  <p className="text-base leading-relaxed text-white/85">
                    Terceirizamos as rotinas financeiras do seu negócio — contas a pagar, a receber, conciliação bancária e fluxo de caixa — com rotina diária e relatórios claros.
                  </p>
                </section>

                {/* Stats */}
                <section>
                  <p className="eyebrow mb-3">Números / Destaque</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span
                        className="block text-4xl md:text-5xl text-[#C9A35B]"
                        style={{ fontFamily: combo.displayFont, fontWeight: 400, lineHeight: 1 }}
                      >
                        98%
                      </span>
                      <span className="text-sm text-white/70">de assertividade</span>
                    </div>
                    <div>
                      <span
                        className="block text-4xl md:text-5xl text-[#C9A35B]"
                        style={{ fontFamily: combo.displayFont, fontWeight: 400, lineHeight: 1 }}
                      >
                        +150
                      </span>
                      <span className="text-sm text-white/70">clientes atendidos</span>
                    </div>
                  </div>
                </section>

                {/* Quote */}
                <section>
                  <p className="eyebrow mb-3">Citação</p>
                  <blockquote
                    className="text-lg md:text-xl leading-snug border-l-2 border-[#C9A35B] pl-4"
                    style={{ fontFamily: combo.displayFont, fontWeight: 400, letterSpacing: "-0.01em" }}
                  >
                    "A Sustenta BPO transformou nossa rotina financeira em um processo previsível e escalável."
                  </blockquote>
                </section>

                {/* Button + label */}
                <section>
                  <p className="eyebrow mb-3">Botão / Label</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      className="inline-flex items-center justify-center rounded-md bg-[#C9A35B] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#C9A35B]/90"
                      style={{ fontFamily: combo.bodyFont }}
                    >
                      Fale com um especialista
                    </button>
                    <span
                      className="text-xs uppercase tracking-widest text-white/60"
                      style={{ fontFamily: combo.monoFont }}
                    >
                      BPO Financeiro
                    </span>
                  </div>
                </section>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-white/60 mb-4">
            Escolha uma combinação para aplicar em todo o site.
          </p>
          <Link
            to="/"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-[rgba(201,163,91,0.3)] bg-transparent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[rgba(201,163,91,0.1)]"
          >
            Voltar ao site
          </Link>
        </div>
      </main>
    </div>
  );
}
