// fale comigo em portugues
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import caseImg from "@/assets/case-meeting.jpg";
import heroEntrepreneur from "@/assets/hero-entrepreneur.jpg";
import heroVideo from "@/assets/hero-bg3.mp4.asset.json";
import logoAsset from "@/assets/sustenta-logo-gold.png.asset.json";
const logoRefined = logoAsset.url;

const BASE_URL = "https://craft-your-finance.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sustenta BPO | Gestão Financeira Estratégica" },
      {
        name: "description",
        content:
          "A Sustenta BPO assume a operação financeira completa: contas a pagar, a receber, conciliação bancária e fluxo de caixa, com rotina diária.",
      },
      { property: "og:title", content: "Sustenta BPO | Gestão Financeira Estratégica" },
      {
        property: "og:description",
        content:
          "A Sustenta BPO assume a operação financeira completa: contas a pagar, a receber, conciliação bancária e fluxo de caixa, com rotina diária.",
      },
      { property: "og:url", content: BASE_URL },
      { property: "og:image", content: `${BASE_URL}/og-image.jpg` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: `${BASE_URL}/og-image.jpg` },
    ],
    links: [
      { rel: "canonical", href: BASE_URL },
    ],
  }),
  component: Landing,
});

const BRAND = "Sustenta BPO";
const WHATSAPP =
  "https://wa.me/556282651121?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Sustenta%20BPO.";
const CALENDAR_URL = "mailto:contato@sustentabpo.com.br?subject=Reuni%C3%A3o%20com%20a%20Sustenta BPO";
const ORCAMENTO_URL = "#orcamento";
const WEB3FORMS_KEY = "46724494-dfa9-4a14-8ba4-029f5185b6a2";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <iconify-icon icon={name} className={className} />;
}

/* ---------- Mouse parallax + focus/hover glow hook ---------- */
function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (reduce) return;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };

    const selector = "a, button, [role='button']";
    const setGlowFromTarget = (target: Element) => {
      const rect = el.getBoundingClientRect();
      const tr = (target as HTMLElement).getBoundingClientRect();
      const gx = ((tr.left + tr.width / 2 - rect.left) / rect.width) * 100;
      const gy = ((tr.top + tr.height / 2 - rect.top) / rect.height) * 100;
      el.style.setProperty("--gx", `${gx.toFixed(2)}%`);
      el.style.setProperty("--gy", `${gy.toFixed(2)}%`);
      el.style.setProperty("--gi", "1");
    };
    const clearGlow = () => el.style.setProperty("--gi", "0");

    const closestInteractive = (n: EventTarget | null) =>
      n instanceof Element ? n.closest(selector) : null;

    const onOver = (e: Event) => {
      const t = closestInteractive(e.target);
      if (t) setGlowFromTarget(t);
    };
    const onOut = (e: Event) => {
      if (closestInteractive(e.target)) clearGlow();
    };
    const onFocusIn = (e: FocusEvent) => {
      const t = closestInteractive(e.target);
      if (t) setGlowFromTarget(t);
    };
    const onFocusOut = (e: FocusEvent) => {
      if (closestInteractive(e.target)) clearGlow();
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseover", onOver);
    el.addEventListener("mouseout", onOut);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseover", onOver);
      el.removeEventListener("mouseout", onOut);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <a href="#main-content" className="skip-to-content">Pular para o conteúdo</a>
      <Nav />
      <main id="main-content">
        <Hero />
        <WhatIs />
        <Values />
        <Metrics />
        <Testimonials />
        <Process />
        <QuoteForm />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}


/* ---------- Nav ---------- */
const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#fazemos", label: "O que fazemos" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#agendar", label: "Contato" },
];

function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 md:pt-5 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="pointer-events-auto max-w-[90rem] mx-auto h-16 md:h-20 flex items-center justify-between gap-3 px-6 sm:px-8 rounded-full bg-[#111827]/85 backdrop-blur-xl border border-ice-subtle shadow-float">
        <a href="#top" className="flex items-center gap-3 min-w-0">
          <img src={logoRefined} alt="Sustenta BPO" className="h-10 sm:h-12 w-auto shrink-0" />
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#F5F5F5] truncate">{BRAND}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 lg:gap-10 text-base text-[#F5F5F5]/75 font-medium">
          {NAV_LINKS.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-[#F5F5F5] transition-colors">{l.label}</a></li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex bg-[#C9A35B] hover:bg-[#F5F5F5] hover:text-[#111827] text-white text-base px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap"
          >
            Falar com Especialista
          </a>
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-ice-strong text-[#F5F5F5] hover:border-[#C9A35B] hover:text-[#C9A35B] transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></>
              ) : (
                <><line x1="3" y1="7" x2="21" y2="7" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="17" x2="21" y2="17" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-0 z-40 pointer-events-auto transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        aria-hidden={!open}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-[#111827]/70 backdrop-blur-sm" />
      </div>
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-[82%] max-w-sm bg-[#111827] border-l border-ice-subtle shadow-lift pointer-events-auto transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-5 h-16 border-b border-ice-subtle">
          <span className="font-display text-lg text-[#F5F5F5]">{BRAND}</span>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-ice-strong text-[#F5F5F5] hover:border-[#C9A35B] hover:text-[#C9A35B]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col px-5 py-6 gap-1 text-[#F5F5F5]">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-display border-b border-ice-subtle hover:text-[#C9A35B] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-5 pt-4 flex flex-col gap-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-center bg-[#C9A35B] hover:bg-[#F5F5F5] hover:text-[#111827] text-white text-sm px-5 py-3 rounded-full font-medium transition-colors"
          >
            Falar com Especialista
          </a>
        </div>
      </aside>
    </nav>
  );
}



/* ---------- Hero ---------- */
function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#111827]"
    >
      <img src={heroEntrepreneur} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      {/* Data Visualization Background — "Fluxo de Dados" layer */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A35B]/30 to-transparent" />
        <div className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-transparent via-[#C9A35B]/20 to-transparent" />
        <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A35B]/10 to-transparent" />
      </div>

      {/* Video layer (parallax) — tinted and blurred for a sophisticated "glassy" depth */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--mx) * -15px), calc(var(--my) * -15px), 0) scale(1.05)",
        }}
      >
        <video
          src="https://assets.mixkit.co/videos/preview/mixkit-business-charts-on-a-tablet-screen-42589-large.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden"
          style={{
            filter: "brightness(0.8) contrast(1.1) saturate(0.9)",
          }}
        />
      </div>

      {/* Aurora — redesigned for a more "liquid" financial feel */}
      <div className="absolute inset-0 pointer-events-none aurora opacity-80 hidden" />

      {/* Multi-layered scrims for depth and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/60 via-transparent to-[#111827]/90" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 30% 50%, rgba(201,163,91,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[1px] pointer-events-none" />

      {/* Floating particles/points representing "financial nodes" */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden">
        <div className="absolute top-[20%] left-[10%] w-1.5 h-1.5 rounded-full bg-[#C9A35B] opacity-40 blur-[1px] animate-pulse" />
        <div className="absolute top-[60%] left-[40%] w-2 h-2 rounded-full bg-[#F5F5F5] opacity-20 blur-[2px] animate-pulse [animation-delay:1s]" />
        <div className="absolute top-[40%] right-[15%] w-1.5 h-1.5 rounded-full bg-[#C9A35B] opacity-30 blur-[1px] animate-pulse [animation-delay:2s]" />
      </div>


      {/* Left-side readability scrim — only behind text */}
      <div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(17,24,39,0.55) 0%, rgba(17,24,39,0.35) 30%, rgba(17,24,39,0.05) 55%, transparent 70%)",
        }}
      />
      {/* Mobile scrim */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{
          background:
            "linear-gradient(to bottom, rgba(17,24,39,0.4) 0%, rgba(17,24,39,0.15) 40%, rgba(17,24,39,0.55) 100%)",
        }}
      />




      {/* Content */}
      <div
        className="relative z-10 min-h-[100svh] site-container pt-28 sm:pt-36 lg:pt-44 pb-20 site-grid items-center text-white"
      >
        <div className="col-span-4 md:col-span-12 lg:col-span-7 overflow-visible">
          <p className="eyebrow mb-5 sm:mb-6">
            // BPO FINANCEIRO · OPERAÇÃO DIÁRIA
          </p>
          <h1 className="display-xxl">
            O financeiro da sua empresa não deveria depender <em className="italic text-[#C9A35B]">do seu tempo.</em>
          </h1>
          <p className="mt-6 sm:mt-8 body-lg text-white/85 max-w-3xl">
            Assumimos contas a pagar, contas a receber, conciliação bancária e fluxo de caixa. Você acompanha os números, aprova as decisões e volta a focar no crescimento da empresa.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-start gap-3 sm:gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#C9A35B] hover:bg-[#111827] hover:text-[#C9A35B] text-white px-6 sm:px-10 py-3.5 sm:py-5 rounded-full text-button font-medium inline-flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
            >
              Falar com Especialista
              <Icon name="lucide:arrow-up-right" className="text-base group-hover:rotate-45 transition-transform" />
            </a>
            <a href="#como-funciona" className="px-6 sm:px-8 py-3.5 sm:py-5 text-button font-medium text-white hover:text-[#C9A35B] transition-colors w-full sm:w-auto text-center">Entenda como funciona</a>
          </div>

        </div>

      </div>
    </section>
  );
}

/* ---------- WhatIs ---------- */
function WhatIs() {
  const services = [
    { icon: "lucide:arrow-up-right", label: "Contas a Pagar", desc: "Controle e execução, com agendamentos e baixas." },
    { icon: "lucide:arrow-down-left", label: "Contas a Receber", desc: "Lançamentos, acompanhamento e organização dos recebimentos." },
    { icon: "lucide:git-compare-arrows", label: "Conciliação Bancária", desc: "Conferência contínua dos extratos contra o sistema." },
    { icon: "lucide:bar-chart-3", label: "Fluxo de Caixa Diário", desc: "Caixa atualizado todos os dias, com informação organizada para decisão." },
  ];
  return (
    <section id="sobre" className="py-24 sm:py-32 lg:py-44 bg-[#111827] relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] glow-orange pointer-events-none" />
      <div id="fazemos" className="relative site-container site-grid" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        {/* Row 1 — Eyebrow above, headline left-aligned */}
        <div className="col-span-4 md:col-span-12 lg:col-span-10">
          <p className="eyebrow mb-4 sm:mb-5">
            // 01 — SOBRE A Sustenta BPO
          </p>
          <h2 className="display-xl text-white text-left">
            Operação financeira{" "}
            <em className="italic text-[#C9A35B]">que funciona</em>{" "}
            todos os dias.
          </h2>
        </div>

        {/* Row 2 — Description left-aligned under headline */}
        <p className="col-span-4 md:col-span-10 lg:col-span-9 body-lg text-white/65 max-w-3xl">
          A Sustenta BPO nasce da experiência prática no financeiro de empresas reais. Assumimos
          a operação para que o empresário não precise lidar com o dia a dia operacional
          apenas acompanhar e aprovar. Trabalhamos com processos definidos e execução
          contínua em sistema.
        </p>

        {/* Row 3 — Cards full width with progressive grid */}
        <div className="col-span-4 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {services.map((s, i) => (
            <div
              key={s.label}
              className="glass-card rounded-3xl p-6 sm:p-7 group hover:border-gold transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-baseline justify-between">
                <Icon name={s.icon} className="text-3xl text-[#F5F5F5]" />
                <span className="font-mono text-micro tracking-[0.3em] text-[#F5F5F5]/30">0{i + 1}</span>
              </div>
              <p className="mt-8 text-card-title text-[#F5F5F5]">{s.label}</p>
              <p className="mt-2 text-sm text-[#F5F5F5]/50 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}




/* ---------- Section Nav (sticky side dots) ---------- */
function SectionNav() {
  const [active, setActive] = useState("");
  useEffect(() => {
    const sections = [
      { id: "top", label: "Início" },
      { id: "sobre", label: "Sobre" },
      { id: "limites", label: "Limites" },
      { id: "resultados", label: "Resultados" },
      { id: "para-quem", label: "Para quem" },
      { id: "como-funciona", label: "Como funciona" },
      { id: "agendar", label: "Contato" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const items = [
    { id: "top", label: "Início" },
    { id: "sobre", label: "Sobre" },
    { id: "limites", label: "Limites" },
    { id: "resultados", label: "Resultados" },
    { id: "para-quem", label: "Para quem" },
    { id: "como-funciona", label: "Como funciona" },
    { id: "agendar", label: "Contato" },
  ];

  return (
    <nav
      aria-label="Seções da página"
      className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-5"
    >
      {items.map((item) => {
        const isActive = active === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="group flex items-center gap-3 focus-visible:outline-none"
          >
            <span
              className={`text-micro font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "text-[#C9A35B] translate-x-0 opacity-100"
                  : "text-white/50 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 shrink-0 ${
                isActive
                  ? "w-3 h-3 bg-[#C9A35B] shadow-gold-glow"
                  : "w-2 h-2 bg-[#C9A35B]/30 group-hover:bg-[#C9A35B]/60"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}

/* ---------- Values ---------- */
function Values() {
  const items = [
    { icon: "lucide:eye", title: "Você mantém o controle", desc: "As decisões continuam com você. A Sustenta organiza as informações para que você decida com clareza." },
    { icon: "lucide:repeat-2", title: "Rotina que acontece", desc: "O trabalho não termina em um diagnóstico: a operação financeira é acompanhada todos os dias." },
    { icon: "lucide:shield-check", title: "Processo com transparência", desc: "Escopo, rotina e responsabilidades definidos desde o início, sem promessas irreais." },
  ];
  return (
    <section id="limites" className="py-24 sm:py-32 lg:py-44 bg-[#111827] relative">
      <div className="site-container site-grid" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        <div className="col-span-4 md:col-span-12 xl:col-start-4 xl:col-span-9">
          <p className="eyebrow mb-5 sm:mb-6 xl:text-right">
            // 02 — COMO TRABALHAMOS
          </p>
          <h2 className="display-xl text-white xl:text-right">
            Seu financeiro organizado, com{" "}
            <em className="italic text-[#C9A35B]">você no controle.</em>
          </h2>
        </div>

        {/* Cards — clean grid, no stagger */}
        <div className="col-span-4 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="glass-card rounded-3xl p-7 sm:p-8 lg:p-10 group hover:bg-[#C9A35B] hover:border-[#C9A35B] transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <Icon name={it.icon} className="text-4xl text-[#F5F5F5] group-hover:text-[#111827] transition-colors" />
                <span className="font-mono text-micro tracking-[0.3em] text-[#F5F5F5]/40 group-hover:text-[#111827]/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl sm:text-2xl text-[#F5F5F5] group-hover:text-[#111827] transition-colors leading-tight">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-[#F5F5F5]/50 group-hover:text-[#111827]/70 leading-relaxed transition-colors">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------- Metrics ---------- */
function Metrics() {
  const stats = [
    { v: "Diário", l: "Contas a pagar e a receber organizadas" },
    { v: "Contínuo", l: "Conciliação bancária acompanhada" },
    { v: "Atualizado", l: "Fluxo de caixa todos os dias" },
    { v: "Em sistema", l: "Rotina estruturada em sistema" },
  ];
  return (
    <section id="resultados" className="py-24 sm:py-32 lg:py-44 bg-[#111827] text-white border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] glow-orange pointer-events-none" />
      <div className="relative site-container">
        <p className="eyebrow mb-12 lg:mb-16">// O QUE VOCÊ ENXERGA NA PRÁTICA</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-6 lg:gap-x-10">
          {stats.map((s) => (
            <div key={s.l} className="group min-w-0 border-t border-ice-subtle pt-6 sm:pt-8">
              <p className="display-lg text-[#F5F5F5]">
                {s.v}
              </p>
              <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F5]/50 leading-relaxed">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Ideal customer profiles ---------- */
function Testimonials() {
  const list = [
    { q: "Sua empresa está crescendo e a rotina financeira já não cabe em planilhas e improvisos.", n: "Empresa em expansão" },
    { q: "Você quer previsibilidade de caixa sem precisar contratar e gerir um time financeiro interno.", n: "Empresa enxuta" },
    { q: "A operação financeira ocupa tempo demais da liderança e precisa de um processo confiável.", n: "Gestor sobrecarregado" },
  ];
  return (
    <section id="para-quem" className="bg-[#111827] py-24 sm:py-32 lg:py-44 relative">
      <div className="site-container site-grid items-start" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        <div className="col-span-4 md:col-span-12 lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow mb-5 sm:mb-6">
            // 03 — PARA QUEM É A SUSTENTA BPO
          </p>
          <h2 className="display-xl text-white">
            Para empresas que querem o{" "}
            <em className="italic text-[#C9A35B]">financeiro</em>{" "}
            funcionando todo dia.
          </h2>
        </div>
        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 space-y-3 sm:space-y-4">
          {list.map((t) => (
            <article
              key={t.n}
              className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8"
            >
              <p className="text-quote text-[#F5F5F5]">
                {t.q}
              </p>
              <p className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-ice-subtle font-mono text-micro sm:text-xs uppercase tracking-[0.2em] text-[#C9A35B]">{t.n}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------- Process with image → video on hover ---------- */
function ProcessMedia() {
  const [hover, setHover] = useState(false);
  const vRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (hover) vRef.current?.play().catch(() => {});
    else vRef.current?.pause();
  }, [hover]);
  return (
    <div
      className="relative group overflow-hidden rounded-3xl border border-gold-soft h-[360px] sm:h-[460px] md:h-[560px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        src={caseImg}
        alt="Sessão de diagnóstico financeiro"
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hover ? "opacity-0" : "opacity-100"} grayscale`}
      />
      <video
        ref={vRef}
        src={heroVideo.url}
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hover ? "opacity-100 scale-105" : "opacity-0"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/30 to-transparent" />
      <div className="absolute top-6 left-6 glass-card rounded-full px-4 py-2 font-mono text-micro uppercase tracking-[0.2em] text-white">
        Reunião · sem compromisso
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <p className="font-display text-2xl text-white max-w-xs leading-tight">
          Entendemos como sua operação financeira funciona hoje.
        </p>
        <span className="pinwheel w-10 h-10 rounded-full border border-dashed border-[#C9A35B] flex items-center justify-center">
          <span className="w-2 h-2 bg-[#C9A35B] rounded-full" />
        </span>
      </div>
    </div>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Diagnóstico", d: "Entendemos como a operação financeira funciona hoje e o nível de organização existente." },
    { n: "02", t: "Implantação", d: "Organizamos sistema, processos e rotina financeira dentro da operação." },
    { n: "03", t: "Execução diária", d: "Assumimos a operação financeira com execução diária e acompanhamento contínuo." },
    { n: "04", t: "Acompanhamento", d: "Mantemos o financeiro atualizado e alinhado com o gestor da empresa." },
  ];
  return (
    <section id="como-funciona" className="py-24 sm:py-32 lg:py-44 bg-[#F5F5F5] text-[#111827]">
      <div className="site-container">
        <div className="max-w-4xl mb-16 lg:mb-24">
          <p className="eyebrow text-[#C9A35B] mb-5">// 04 — COMO FUNCIONA</p>
          <h2 className="display-xl text-[#111827]">
            Um caminho simples, do primeiro contato ao <em className="italic text-[#C9A35B]">acompanhamento contínuo.</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5 xl:col-span-4">
            <ProcessMedia />
          </div>

          <div className="lg:col-span-7 xl:col-span-7 xl:col-start-6">
            <div className="relative space-y-16 sm:space-y-20">
              {/* Vertical line connector */}
              <div className="absolute left-[1.375rem] top-8 bottom-8 w-[1px] bg-[#111827]/10" />

              {steps.map((s, idx) => (
                <div key={s.n} className="relative pl-16 group">
                  {/* Step Number Circle */}
                  <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-gradient-to-br from-[#C9A35B] to-[#B08A45] text-white flex items-center justify-center font-display text-lg shadow-lg z-10">
                    {idx + 1}
                  </div>
                  
                  <div className="pt-1">
                    <h3 className="font-display text-2xl sm:text-3xl text-[#111827] leading-tight mb-4 group-hover:text-[#C9A35B] transition-colors">
                      {s.t}
                    </h3>
                    <p className="text-md sm:text-lg text-[#111827]/70 leading-relaxed max-w-xl">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ---------- Final CTA ---------- */
function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot
    if ((fd.get("botcheck") as string)?.length) {
      setStatus("ok");
      form.reset();
      return;
    }

    fd.append("access_key", WEB3FORMS_KEY);
    fd.append("subject", `Novo pedido de orçamento — ${fd.get("nome") || "site"}`);
    fd.append("from_name", "Site Sustenta BPO");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Não foi possível enviar. Tente novamente.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erro de conexão. Tente novamente em instantes.");
    }
  }

  const inputCls =
    "w-full bg-[#C9A35B]/5 border border-ice-subtle rounded-xl px-4 py-3 text-[#F5F5F5] placeholder-[#F5F5F5]/30 focus:outline-none focus:border-[#C9A35B] transition-colors";
  const labelCls = "block text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F5]/60 mb-2";

  return (
    <section id="orcamento" className="py-24 sm:py-32 lg:py-44 bg-[#111827] border-y border-white/5 relative overflow-hidden">
      <div className="site-container max-w-3xl">
        <p className="eyebrow text-[#C9A35B] mb-6 sm:mb-8">// SOLICITAR ORÇAMENTO</p>
        <h2 className="display-xl">
          Conte pra gente o que <span className="text-[#C9A35B]">seu financeiro precisa.</span>
        </h2>
        <p className="mt-6 body-lg text-white/70">
          Preencha o formulário abaixo. Respondemos em até 1 dia útil com uma proposta sob medida.
        </p>

        {status === "ok" ? (
          <div className="mt-10 rounded-2xl border border-gold bg-[#C9A35B]/5 p-8">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="lucide:check-circle-2" className="text-2xl text-[#C9A35B]" />
              <h3 className="text-xl font-semibold text-white">Pedido enviado!</h3>
            </div>
            <p className="text-white/70">
              Recebemos sua solicitação. Nossa equipe entrará em contato pelo e-mail informado em até 1 dia útil.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-[#C9A35B] hover:underline"
            >
              Enviar outro pedido
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="sm:col-span-1">
              <label htmlFor="nome" className={labelCls}>Nome*</label>
              <input id="nome" name="nome" type="text" required maxLength={100} className={inputCls} placeholder="Seu nome completo" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="empresa" className={labelCls}>Empresa</label>
              <input id="empresa" name="empresa" type="text" maxLength={100} className={inputCls} placeholder="Nome da empresa" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="email" className={labelCls}>E-mail*</label>
              <input id="email" name="email" type="email" required maxLength={150} className={inputCls} placeholder="voce@empresa.com" />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="telefone" className={labelCls}>Telefone / WhatsApp*</label>
              <input id="telefone" name="telefone" type="tel" required maxLength={30} className={inputCls} placeholder="(11) 99999-9999" />
            </div>
            <div className="sm:col-span-2 min-w-0">
              <label htmlFor="servico" className={labelCls}>Serviço de interesse*</label>
              <select
                id="servico"
                name="servico"
                required
                className={`${inputCls} [&>option]:bg-[#111827] [&>option]:text-white max-w-full truncate`}
              >
                <option value="" disabled>Selecione…</option>
                <option value="BPO Financeiro completo">BPO Financeiro completo</option>
                <option value="Contas a pagar / a receber">Contas a pagar / a receber</option>
                <option value="Conciliação bancária">Conciliação bancária</option>
                <option value="Fluxo de caixa e relatórios">Fluxo de caixa e relatórios</option>
                <option value="Diagnóstico / consultoria">Diagnóstico / consultoria</option>
                <option value="Outro">Outro</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="mensagem" className={labelCls}>Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={4} maxLength={1000} className={inputCls} placeholder="Descreva brevemente sua operação, número de lançamentos por mês, sistema usado, etc." />
            </div>

            {status === "error" && (
              <div className="sm:col-span-2 text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                {errorMsg}
              </div>
            )}

            <div className="sm:col-span-2 mt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-[#C9A35B] hover:bg-[#111827] hover:text-[#C9A35B] text-white px-10 py-5 rounded-full text-base font-medium tracking-wide transition-colors inline-flex items-center justify-center gap-3 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Icon name="lucide:loader-2" className="text-lg animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    <Icon name="lucide:send" className="text-lg" />
                    Enviar pedido de orçamento
                  </>
                )}
              </button>
              <p className="mt-4 text-xs text-white/40">
                Ao enviar, você concorda em ser contatado sobre sua solicitação.
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="agendar"
      className="relative bg-[#111827] text-white py-28 sm:py-40 lg:py-52 overflow-hidden"
    >
      <img
        src={heroEntrepreneur}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/80 via-[#111827]/50 to-[#111827]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_circle_at_50%_50%,rgba(201,163,91,0.20),transparent_60%)]" />
      <div className="relative site-container max-w-5xl">
        <p className="eyebrow text-[#C9A35B] mb-6 sm:mb-8">// PRÓXIMO PASSO</p>
        <h2 className="display-xl max-w-4xl">
          Seu financeiro pode rodar assim <span className="text-[#C9A35B]">todos os dias.</span>
        </h2>
        <p className="mt-8 sm:mt-10 body-lg text-white/80 max-w-2xl">
          Cada mês sem rotina financeira é decisão tomada sem dado atualizado, conciliação atrasada e dinheiro que você só descobre que faltou depois. Isso tem custo e ele só cresce enquanto ninguém assume a operação.
        </p>
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#C9A35B] hover:bg-[#111827] hover:text-[#C9A35B] text-white px-10 sm:px-12 py-5 sm:py-6 rounded-full text-base font-medium tracking-wide transition-colors inline-flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Icon name="lucide:message-circle" className="text-lg" />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#111827] text-[#F5F5F5]/60 py-20 border-t border-ice-subtle">
      <div className="site-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logoRefined} alt="Sustenta BPO" className="h-11 w-auto shrink-0" />
            <span className="font-display text-xl font-bold tracking-tight text-[#F5F5F5]">{BRAND}</span>
          </div>
          <p className="mt-4 text-sm max-w-2xl">
            BPO Financeiro com rotina diária, organização em sistema e execução contínua.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F5]/40 mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-[#C9A35B]">Sobre</a></li>
            <li><a href="#fazemos" className="hover:text-[#C9A35B]">O que fazemos</a></li>
            <li><a href="#como-funciona" className="hover:text-[#C9A35B]">Como funciona</a></li>
            <li><a href="#para-quem" className="hover:text-[#C9A35B]">Para quem é</a></li>
            <li><a href="#agendar" className="hover:text-[#C9A35B]">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#F5F5F5]/40 mb-4">Contato</p>
          <ul className="space-y-2 text-sm">
            <li><a href={WHATSAPP} className="hover:text-[#C9A35B]">WhatsApp</a></li>
            <li><a href={ORCAMENTO_URL} className="hover:text-[#C9A35B]">Solicitar Orçamento</a></li>
            <li><a href="mailto:contato@sustentabpo.com.br" className="hover:text-[#C9A35B] break-all">contato@sustentabpo.com.br</a></li>
          </ul>
        </div>
      </div>
      <div className="site-container mt-12 sm:mt-16 pt-6 border-t border-ice-subtle text-xs font-mono text-[#F5F5F5]/40 flex flex-col sm:flex-row gap-3 sm:justify-between">
        <span>© {new Date().getFullYear()} {BRAND}</span>
        <span>// SISTEMA OPERACIONAL</span>
      </div>

    </footer>
  );
}
