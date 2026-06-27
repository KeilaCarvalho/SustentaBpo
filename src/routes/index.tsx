import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FINCORE — BPO Financeiro | Operação financeira que funciona todos os dias" },
      {
        name: "description",
        content:
          "A FINCORE assume a operação financeira da sua empresa: contas a pagar, contas a receber, conciliação bancária e fluxo de caixa — com rotina estruturada no Conta Azul.",
      },
      { property: "og:title", content: "FINCORE — BPO Financeiro" },
      {
        property: "og:description",
        content:
          "Você acompanha. Aprova. Decide. Nós executamos. Operação financeira completa para empresas em crescimento.",
      },
    ],
  }),
  component: Landing,
});

const BRAND = "FINCORE";
const WHATSAPP =
  "https://wa.me/5511999999999?text=Quero%20meu%20diagn%C3%B3stico%20financeiro%20gratuito";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <iconify-icon icon={name} className={className} />;
}

function Landing() {
  return (
    <div className="min-h-screen bg-white text-navy font-sans">
      <Header />
      <main>
        <Hero />
        <Bullets />
        <About />
        <Services />
        <NotDoing />
        <HowItWorks />
        <ForWhom />
        <Positioning />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#enxerga", label: "O que você enxerga" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#para-quem", label: "Para quem é" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-navy/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-navy" />
          <span className="font-display text-2xl tracking-tight text-navy">{BRAND}</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-navy/70 transition-colors hover:text-navy"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-navy/90 lg:inline-flex"
        >
          Diagnóstico Gratuito
          <Icon name="lucide:arrow-right" className="text-base" />
        </a>

        <a
          href={WHATSAPP}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-medium text-white lg:hidden"
        >
          Diagnóstico
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-32">
      {/* Soft navy gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-navy/[0.04] blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#0a1f44 1px, transparent 1px), linear-gradient(90deg, #0a1f44 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-navy/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            BPO Financeiro · Conta Azul
          </div>

          <h1 className="font-display text-5xl leading-[1.05] text-navy md:text-6xl lg:text-7xl">
            O financeiro da sua empresa não deveria depender do seu tempo.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-navy/70 md:text-xl">
            Ele precisa funcionar todos os dias — com organização, rotina e
            execução consistente.
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/60">
            A FINCORE assume a operação financeira completa da sua empresa:
            contas a pagar, contas a receber, conciliação bancária e controle de
            fluxo de caixa — tudo organizado em sistema e com acompanhamento
            diário.
          </p>

          <p className="mt-4 max-w-2xl font-display text-xl text-navy md:text-2xl">
            Você acompanha. Aprova. Decide. <span className="text-navy/50">Nós executamos.</span>
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 text-base font-medium text-white transition-all hover:bg-navy/90"
            >
              Diagnóstico Financeiro Gratuito
              <Icon name="lucide:arrow-right" className="text-lg" />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 bg-white px-7 py-4 text-base font-medium text-navy transition-all hover:border-navy hover:bg-navy/[0.03]"
            >
              Conhecer a operação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Bullets: O que você enxerga ---------- */
function Bullets() {
  const items = [
    { icon: "lucide:calendar-check", label: "Organização diária das contas a pagar e receber" },
    { icon: "lucide:repeat", label: "Conciliação bancária contínua" },
    { icon: "lucide:trending-up", label: "Fluxo de caixa atualizado" },
    { icon: "lucide:layout-grid", label: "Rotina financeira estruturada em sistema" },
    { icon: "lucide:file-text", label: "Informações organizadas para tomada de decisão" },
    { icon: "lucide:activity", label: "Operação executada com acompanhamento constante" },
  ];

  return (
    <section id="enxerga" className="border-t border-navy/10 bg-navy/[0.02] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>02 — Resultado prático</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy md:text-5xl">
          O que você enxerga na prática.
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.label}
              className="group flex items-start gap-4 bg-white p-8 transition-colors hover:bg-navy/[0.02]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-white">
                <Icon name={item.icon} className="text-lg" />
              </div>
              <p className="text-base leading-relaxed text-navy/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- About ---------- */
function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel>03 — Sobre a FINCORE</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
            Experiência prática no financeiro de empresas reais.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-navy/75 lg:col-span-7">
          <p>
            A FINCORE nasce da experiência prática no financeiro de empresas
            reais. Com anos de atuação na operação financeira dentro de empresas
            de BPO, estruturamos um modelo que prioriza consistência,
            organização e controle diário da rotina financeira.
          </p>
          <p>
            Assumimos a operação financeira para que o empresário não precise
            lidar com o dia a dia operacional — apenas acompanhar e aprovar o
            que é necessário.
          </p>
          <p>
            Trabalhamos com processos definidos e execução contínua dentro do{" "}
            <span className="font-medium text-navy">Conta Azul</span>,
            garantindo que a informação financeira esteja sempre organizada e
            acessível.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Services: O que fazemos ---------- */
function Services() {
  const items = [
    {
      icon: "lucide:credit-card",
      title: "Contas a pagar",
      desc: "Controle e execução de pagamentos com rotina diária.",
    },
    {
      icon: "lucide:wallet",
      title: "Contas a receber",
      desc: "Lançamentos e acompanhamento de recebíveis.",
    },
    {
      icon: "lucide:landmark",
      title: "Conciliação bancária",
      desc: "Fechamento contínuo entre extrato e sistema.",
    },
    {
      icon: "lucide:line-chart",
      title: "Fluxo de caixa diário",
      desc: "Posição de caixa atualizada para decisões rápidas.",
    },
    {
      icon: "lucide:database",
      title: "Organização financeira em sistema",
      desc: "Estrutura e padronização dentro do Conta Azul.",
    },
    {
      icon: "lucide:hand-coins",
      title: "Apoio na rotina operacional",
      desc: "Execução financeira contínua com acompanhamento.",
    },
  ];

  return (
    <section id="servicos" className="border-t border-navy/10 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>04 — O que fazemos</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy md:text-5xl">
          Operação financeira completa, executada com método.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-navy/10 bg-white p-8 transition-all hover:border-navy hover:shadow-[0_24px_60px_-24px_rgba(10,31,68,0.18)]"
            >
              <Icon name={s.icon} className="text-3xl text-navy" />
              <h3 className="mt-5 font-display text-2xl text-navy">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Not Doing ---------- */
function NotDoing() {
  const items = [
    "Não substituímos a decisão do empresário",
    "Não atuamos como consultoria estratégica isolada",
    "Não fazemos promessas fora da realidade operacional",
    "Não trabalhamos sem processo e organização mínima do cliente",
  ];

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-3xl border-l-4 border-navy bg-navy/[0.04] p-10 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionLabel>05 — Transparência</SectionLabel>
              <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
                O que não fazemos.
              </h2>
              <p className="mt-5 text-base text-navy/65">
                Clareza sobre o escopo evita ruídos e protege a entrega.
              </p>
            </div>
            <ul className="space-y-4 lg:col-span-7">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-4 border-b border-navy/10 pb-4 last:border-0"
                >
                  <Icon
                    name="lucide:x"
                    className="mt-1 shrink-0 text-lg text-navy/40"
                  />
                  <span className="text-lg text-navy/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Diagnóstico",
      desc: "Entendemos como a operação financeira funciona hoje e identificamos o nível de desorganização ou estrutura existente.",
    },
    {
      n: "02",
      title: "Implantação",
      desc: "Organizamos o sistema, processos e rotina financeira dentro da operação.",
    },
    {
      n: "03",
      title: "Execução diária",
      desc: "Assumimos a operação financeira com rotina estruturada e acompanhamento contínuo.",
    },
    {
      n: "04",
      title: "Acompanhamento",
      desc: "Mantemos o financeiro atualizado e alinhado com o gestor da empresa.",
    },
  ];

  return (
    <section id="como-funciona" className="border-t border-navy/10 bg-navy/[0.02] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionLabel>06 — Como funciona</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight text-navy md:text-5xl">
          Um processo, quatro etapas.
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-5xl text-navy/20">{s.n}</span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-navy/15 lg:block" />
                )}
              </div>
              <h3 className="mt-4 font-display text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/65">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- For Whom ---------- */
function ForWhom() {
  const items = [
    "Estão em crescimento e precisam de organização financeira real",
    "Não conseguem manter rotina consistente no financeiro",
    "Querem previsibilidade e controle do caixa",
    "Precisam tirar o peso da operação do dia a dia",
    "Querem profissionalizar o financeiro sem contratar equipe interna",
  ];

  return (
    <section id="para-quem" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel>07 — Para quem é</SectionLabel>
          <h2 className="mt-4 font-display text-4xl leading-tight text-navy md:text-5xl">
            A FINCORE é para empresas que:
          </h2>
        </div>
        <ul className="space-y-5 lg:col-span-7">
          {items.map((it) => (
            <li
              key={it}
              className="flex items-start gap-4 border-b border-navy/10 pb-5"
            >
              <Icon
                name="lucide:check"
                className="mt-1 shrink-0 text-xl text-navy"
              />
              <span className="text-lg leading-relaxed text-navy/85">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------- Positioning ---------- */
function Positioning() {
  return (
    <section className="bg-navy py-28 text-white lg:py-40">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <SectionLabel light>08 — Posicionamento</SectionLabel>
        <p className="mt-8 font-display text-4xl leading-tight md:text-5xl lg:text-6xl">
          A FINCORE não é apenas um BPO financeiro.
        </p>
        <p className="mt-6 font-display text-2xl leading-snug text-white/70 md:text-3xl">
          É a estrutura que garante que o financeiro da empresa funcione todos
          os dias com consistência.
        </p>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section className="border-t border-navy/10 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="font-display text-4xl leading-tight text-navy md:text-5xl">
          Agende um diagnóstico e entenda como sua operação financeira pode
          funcionar com mais organização, previsibilidade e controle.
        </h2>
        <div className="mt-10">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-medium text-white transition-all hover:bg-navy/90"
          >
            Diagnóstico Financeiro Gratuito
            <Icon name="lucide:arrow-right" className="text-lg" />
          </a>
        </div>
        <p className="mt-5 text-sm text-navy/55">
          Atendimento inicial via WhatsApp · Resposta no mesmo dia útil
        </p>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-navy" />
          <span className="font-display text-xl text-navy">{BRAND}</span>
          <span className="ml-4 text-xs text-navy/50">
            BPO Financeiro · Conta Azul
          </span>
        </div>
        <p className="text-xs text-navy/55">
          © {new Date().getFullYear()} FINCORE. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ---------- Helpers ---------- */
function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] ${
        light ? "text-white/60" : "text-navy/50"
      }`}
    >
      <span
        className={`h-px w-8 ${light ? "bg-white/40" : "bg-navy/30"}`}
      />
      {children}
    </div>
  );
}
