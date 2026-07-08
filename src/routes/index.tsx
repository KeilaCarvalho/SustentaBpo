import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import caseImg from "@/assets/case-meeting.jpg";
import heroEntrepreneur from "@/assets/hero-entrepreneur.jpg";
import heroVideo from "@/assets/hero-bg3.mp4.asset.json";
import logoRefined from "@/assets/logo-refined.png";

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
  "https://wa.me/5511999999999?text=Quero%20falar%20com%20um%20especialista";
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
      <SectionNav />
      <main id="main-content">
        <Hero />
        <Marquee />
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
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[#141414]/40 border-b border-white/5">
      <div className="site-container h-16 md:h-20 lg:h-24 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <img src={logoRefined} alt="Sustenta BPO" className="h-8 sm:h-10 w-auto shrink-0" />
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-white truncate">{BRAND}</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-sm text-white/75 font-medium">
          <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#fazemos" className="hover:text-white transition-colors">O que fazemos</a></li>
          <li><a href="#como-funciona" className="hover:text-white transition-colors">Como funciona</a></li>
          <li><a href="#para-quem" className="hover:text-white transition-colors">Para quem é</a></li>
          <li><a href="#agendar" className="hover:text-white transition-colors">Contato</a></li>
        </ul>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={ORCAMENTO_URL}
            className="hidden sm:inline-flex border border-white/30 hover:border-[#fe4c00] hover:text-[#fe4c00] text-white text-sm px-4 lg:px-5 py-2.5 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap"
          >
            Solicitar Orçamento
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fe4c00] hover:bg-white hover:text-black text-white text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-colors whitespace-nowrap"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
    </nav>
  );
}


/* ---------- Hero with mouse parallax + video bg ---------- */
function Hero() {
  const ref = useMouseParallax();
  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#141414]"
      style={{ ["--mx" as never]: 0, ["--my" as never]: 0 }}
    >
      {/* Video layer (parallax) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform:
            "translate3d(calc(var(--mx) * -20px), calc(var(--my) * -20px), 0) scale(1.08)",
        }}
      >
        <video
          src={heroVideo.url}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Gradient + vignette + grid overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-black" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.85) 100%)",
        }}
      />
      <div className="absolute inset-0 grid-lines opacity-15 pointer-events-none" />

      {/* Radial glow following mouse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at calc(50% + var(--mx) * 300px) calc(50% + var(--my) * 300px), rgba(254,76,0,0.18), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none mix-blend-screen transition-opacity duration-500 ease-out"
        style={{
          opacity: "calc(var(--gi, 0) * 0.55)",
          background:
            "radial-gradient(280px circle at var(--gx, 50%) var(--gy, 50%), rgba(254,76,0,0.45), rgba(254,76,0,0.12) 40%, transparent 70%)",
        }}
      />


      {/* Content */}
      <div
        className="relative z-10 min-h-[100svh] site-container pt-28 sm:pt-36 lg:pt-44 pb-20 site-grid items-center text-white"

        style={{
          transform:
            "translate3d(calc(var(--mx) * 8px), calc(var(--my) * 8px), 0)",
        }}
      >
        <div className="col-span-4 md:col-span-12 lg:col-span-7 overflow-visible">
          <p className="eyebrow mb-5 sm:mb-6 reveal-mask">
            // BPO FINANCEIRO · OPERAÇÃO DIÁRIA
          </p>
          <h1 className="display-xxl">
            <span className="block overflow-hidden">
              <span className="block reveal-mask delay-1">O financeiro da sua empresa não deveria depender</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block reveal-mask delay-2">
                <em className="italic text-[#fe4c00]">do seu tempo.</em>
              </span>
            </span>
          </h1>
          <div className="overflow-hidden mt-6 sm:mt-8">
            <p className="reveal-mask delay-3 body-lg text-white/70">
              A Sustenta BPO assume a operação financeira completa da sua empresa: contas a pagar,
              contas a receber, conciliação bancária e fluxo de caixa organizados em sistema,
              com rotina e execução diária. Você acompanha. Aprova. Decide. Nós executamos.
            </p>
          </div>
          <div className="mt-8 sm:mt-10 reveal-mask delay-4 flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#fe4c00] hover:bg-white hover:text-black text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              Falar com Especialista
              <Icon name="lucide:arrow-up-right" className="text-base group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href={ORCAMENTO_URL}
              className="group border border-white/30 hover:border-[#fe4c00] hover:text-[#fe4c00] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full text-base font-medium inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              Solicitar Orçamento
              <Icon name="lucide:mail" className="text-base group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Floating glass cards w/ parallax */}
        <div
          className="col-span-4 md:col-span-12 lg:col-span-5 hidden lg:flex flex-col gap-4 items-end"
          style={{
            transform:
              "translate3d(calc(var(--mx) * -24px), calc(var(--my) * -24px), 0)",
          }}
        >
          <div className="glass-card rounded-2xl px-5 py-4 font-mono text-[11px] text-white/80 max-w-[260px] w-full">
            <div className="flex items-center gap-2 text-white/50 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Sistema
            </div>
            <p className="mt-2 text-white">Conciliação · em dia</p>
            <p className="text-white/60">Atualizado: hoje</p>
          </div>
          <div className="rounded-2xl bg-[#fe4c00] text-white px-6 py-5 shadow-[0_20px_60px_-20px_rgba(254,76,0,0.6)] max-w-[300px] w-full">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-80">// Rotina</p>
            <p className="mt-2 text-base font-medium flex items-center gap-2">
              <Icon name="lucide:trending-up" className="text-lg" />
              Fluxo de caixa atualizado
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4 flex items-center gap-3 max-w-[260px] w-full">
            <div className="pinwheel w-10 h-10 rounded-full border border-dashed border-[#fe4c00] flex items-center justify-center shrink-0">
              <span className="w-2 h-2 bg-[#fe4c00] rounded-full" />
            </div>
            <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest min-w-0">
              Operação ativa
              <p className="text-white/90 normal-case tracking-normal text-xs">Execução diária</p>
            </div>
          </div>
        </div>
      </div>


      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-white/40 font-mono text-[10px] uppercase tracking-widest hidden md:flex flex-col items-center gap-2">
        <span>Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const items = [
    "Contas a Pagar",
    "Contas a Receber",
    "Conciliação Bancária",
    "Fluxo de Caixa Diário",
    "Rotina Estruturada",
    "Organização em Sistema",
    "Acompanhamento Contínuo",
    "Execução Contínua",
  ];
  const row = [...items, ...items];
  return (
    <div className="bg-[#fe4c00] border-y border-[#fe4c00] py-6 overflow-hidden">
      <div className="marquee">
        <div className="marquee-track font-display text-2xl md:text-4xl font-bold text-black uppercase tracking-tight">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-16">
              {t}
              <span className="text-black/60">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
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
    <section id="sobre" className="py-24 sm:py-32 lg:py-44 bg-[#141414] relative overflow-hidden">
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
            <em className="italic text-[#fe4c00]">que funciona</em>{" "}
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
              className="glass-card rounded-3xl p-6 sm:p-7 group hover:border-[#fe4c00]/50 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-baseline justify-between">
                <Icon name={s.icon} className="text-3xl text-[#fe4c00]" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/30">0{i + 1}</span>
              </div>
              <p className="mt-8 font-display text-2xl text-white leading-tight">{s.label}</p>
              <p className="mt-2 text-sm text-white/50 leading-relaxed">{s.desc}</p>
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
              className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "text-[#fe4c00] translate-x-0 opacity-100"
                  : "text-white/50 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 shrink-0 ${
                isActive
                  ? "w-3 h-3 bg-[#fe4c00] shadow-[0_0_12px_rgba(254,76,0,0.6)]"
                  : "w-2 h-2 bg-white/30 group-hover:bg-white/60"
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
    { icon: "lucide:x", title: "Não substituímos a decisão", desc: "A decisão estratégica continua sendo do empresário. Nós damos a base organizada para ela acontecer." },
    { icon: "lucide:x", title: "Não somos consultoria isolada", desc: "Não atuamos como consultoria estratégica desconectada da rotina. Nosso trabalho é a operação diária." },
    { icon: "lucide:x", title: "Não prometemos fora da realidade", desc: "Sem promessas mágicas. Trabalhamos com processo, consistência e organização mínima do cliente." },
  ];
  return (
    <section id="limites" className="py-24 sm:py-32 lg:py-44 bg-[#141414] relative">
      <div className="site-container site-grid" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        <div className="col-span-4 md:col-span-12 xl:col-start-4 xl:col-span-9">
          <p className="eyebrow mb-5 sm:mb-6 xl:text-right">
            // 02 — O QUE NÃO FAZEMOS
          </p>
          <h2 className="display-xl text-white xl:text-right">
            Transparência sobre os{" "}
            <em className="italic text-[#fe4c00]">nossos limites.</em>
          </h2>
        </div>

        {/* Cards — clean grid, no stagger */}
        <div className="col-span-4 md:col-span-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="glass-card rounded-3xl p-7 sm:p-8 lg:p-10 group hover:bg-[#fe4c00] hover:border-[#fe4c00] transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <Icon name={it.icon} className="text-4xl text-[#fe4c00] group-hover:text-black transition-colors" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 group-hover:text-black/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-8 font-display text-xl sm:text-2xl text-white group-hover:text-black transition-colors leading-tight">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-white/50 group-hover:text-black/70 leading-relaxed transition-colors">
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
    <section id="resultados" className="py-24 sm:py-32 lg:py-44 bg-[#09090b] text-white border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] glow-orange pointer-events-none" />
      <div className="relative site-container">
        <p className="eyebrow mb-12 lg:mb-16">// O QUE VOCÊ ENXERGA NA PRÁTICA</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 sm:gap-y-12 gap-x-6 lg:gap-x-10">
          {stats.map((s) => (
            <div key={s.l} className="group min-w-0 border-t border-white/10 pt-6 sm:pt-8">
              <p className="display-lg text-[#fe4c00]">
                {s.v}
              </p>
              <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-white/50 leading-relaxed">
                {s.l}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ---------- Testimonials (sticky stack) ---------- */
function Testimonials() {
  const list = [
    { q: "Está em crescimento e precisa de organização financeira real, não só planilha.", n: "Perfil 01", r: "Empresa em expansão" },
    { q: "Quer previsibilidade e controle do caixa sem precisar montar um time financeiro interno.", n: "Perfil 02", r: "PME enxuta" },
    { q: "Precisa tirar o peso da operação financeira do dia a dia e profissionalizar a rotina.", n: "Perfil 03", r: "Gestor sobrecarregado" },
  ];
  return (
    <section id="para-quem" className="bg-[#141414] py-24 sm:py-32 lg:py-44 relative">
      <div className="site-container site-grid items-start" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        <div className="col-span-4 md:col-span-12 lg:col-span-5 lg:sticky lg:top-32">
          <p className="eyebrow mb-5 sm:mb-6">
            // 03 — PARA QUEM É A Sustenta BPO
          </p>
          <h2 className="display-xl text-white">
            Para empresas que querem o{" "}
            <em className="italic text-[#fe4c00]">financeiro</em>{" "}
            funcionando todo dia.
          </h2>
        </div>
        <div className="col-span-4 md:col-span-12 lg:col-span-6 lg:col-start-7 space-y-3 sm:space-y-4">
          {list.map((t) => (
            <figure
              key={t.n}
              className="glass-card rounded-3xl p-5 sm:p-6 lg:p-8"
            >
              <span className="block font-display text-5xl text-[#fe4c00] leading-none italic mb-3">"</span>
              <blockquote className="font-display text-lg sm:text-xl lg:text-2xl text-white tracking-tight leading-snug">
                {t.q}
              </blockquote>
              <figcaption className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-white">{t.n}</span>
                <span className="text-white/50">· {t.r}</span>
              </figcaption>
            </figure>
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
      className="relative group overflow-hidden rounded-3xl border border-white/10 h-[360px] sm:h-[460px] md:h-[560px]"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="absolute top-6 left-6 glass-card rounded-full px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
        Reunião · sem compromisso
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <p className="font-display text-2xl text-white max-w-xs leading-tight">
          Entendemos como sua operação financeira funciona hoje.
        </p>
        <span className="pinwheel w-10 h-10 rounded-full border border-dashed border-[#fe4c00] flex items-center justify-center">
          <span className="w-2 h-2 bg-[#fe4c00] rounded-full" />
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
    <section id="como-funciona" className="py-24 sm:py-32 lg:py-44 bg-[#09090b] border-y border-white/5">
      <div className="site-container site-grid items-start" style={{ rowGap: "clamp(2.5rem, 5vw, 5rem)" }}>
        {/* Title block — flat 12-col header, no nested grid */}
        <p className="col-span-4 md:col-span-4 eyebrow md:pt-4">
          // 04 — COMO FUNCIONA
        </p>
        <h2 className="col-span-4 md:col-span-8 display-xl text-white">
          Quatro passos para{" "}
          <em className="italic text-[#fe4c00]">estruturar</em> a rotina.
        </h2>

        {/* Media — sticky only at xl */}
        <div className="col-span-4 md:col-span-12 lg:col-span-5 xl:sticky xl:top-32">
          <ProcessMedia />
        </div>

        {/* Steps */}
        <ul className="col-span-4 md:col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7 space-y-4 sm:space-y-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="glass-card rounded-2xl p-5 sm:p-6 lg:p-8 grid grid-cols-[auto_1fr] gap-4 sm:gap-6 hover:border-[#fe4c00]/50 transition-colors"
            >
              <span className="font-mono text-sm text-[#fe4c00] pt-2">{s.n}</span>
              <div className="min-w-0">
                <h3 className="font-display text-xl sm:text-2xl text-white leading-tight">{s.t}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ul>
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
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#fe4c00] transition-colors";
  const labelCls = "block text-xs font-mono uppercase tracking-[0.2em] text-white/50 mb-2";

  return (
    <section id="orcamento" className="py-24 sm:py-32 lg:py-44 bg-[#141414] border-y border-white/5 relative overflow-hidden">
      <div className="site-container max-w-3xl">
        <p className="eyebrow text-[#fe4c00] mb-6 sm:mb-8">// SOLICITAR ORÇAMENTO</p>
        <h2 className="display-xl">
          Conte pra gente o que <span className="text-[#fe4c00]">seu financeiro precisa.</span>
        </h2>
        <p className="mt-6 body-lg text-white/70">
          Preencha o formulário abaixo. Respondemos em até 1 dia útil com uma proposta sob medida.
        </p>

        {status === "ok" ? (
          <div className="mt-10 rounded-2xl border border-[#fe4c00]/40 bg-[#fe4c00]/5 p-8">
            <div className="flex items-center gap-3 mb-3">
              <Icon name="lucide:check-circle-2" className="text-2xl text-[#fe4c00]" />
              <h3 className="text-xl font-semibold text-white">Pedido enviado!</h3>
            </div>
            <p className="text-white/70">
              Recebemos sua solicitação. Nossa equipe entrará em contato pelo e-mail informado em até 1 dia útil.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm text-[#fe4c00] hover:underline"
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
                className={`${inputCls} [&>option]:bg-[#141414] [&>option]:text-white max-w-full truncate`}
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
                className="bg-[#fe4c00] hover:bg-white hover:text-black text-white px-10 py-5 rounded-full text-base font-medium tracking-wide transition-colors inline-flex items-center justify-center gap-3 w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
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
  const ref = useMouseParallax();
  return (
    <section
      id="agendar"
      ref={ref}
      className="relative bg-[#141414] text-white py-28 sm:py-40 lg:py-52 overflow-hidden"
      style={{ ["--mx" as never]: 0, ["--my" as never]: 0 }}
    >
      <img
        src={heroEntrepreneur}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ transform: "translate3d(calc(var(--mx) * -30px), calc(var(--my) * -30px), 0) scale(1.1)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(800px circle at calc(50% + var(--mx) * 400px) calc(50% + var(--my) * 400px), rgba(254,76,0,0.35), transparent 60%)",
        }}
      />
      <div className="relative site-container max-w-5xl">
        <p className="eyebrow text-[#fe4c00] mb-6 sm:mb-8">// PRÓXIMO PASSO</p>
        <h2 className="display-xl max-w-4xl">
          Seu financeiro pode rodar assim <span className="text-[#fe4c00]">todos os dias.</span>
        </h2>
        <p className="mt-8 sm:mt-10 body-lg text-white/80 max-w-2xl">
          Cada mês sem rotina financeira é decisão tomada sem dado atualizado, conciliação atrasada e dinheiro que você só descobre que faltou depois. Isso tem custo e ele só cresce enquanto ninguém assume a operação.
        </p>
        <div className="mt-10 sm:mt-12 flex flex-wrap gap-3 sm:gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fe4c00] hover:bg-white hover:text-black text-white px-10 sm:px-12 py-5 sm:py-6 rounded-full text-base font-medium tracking-wide transition-colors inline-flex items-center justify-center gap-3 w-full sm:w-auto"
          >
            <Icon name="lucide:message-circle" className="text-lg" />
            Falar com Especialista
          </a>
          <a
            href={ORCAMENTO_URL}
            className="border border-white/30 hover:border-[#fe4c00] hover:text-[#fe4c00] text-white px-10 sm:px-12 py-5 sm:py-6 rounded-full text-base font-medium tracking-wide transition-colors w-full sm:w-auto inline-flex items-center justify-center gap-3"
          >
            <Icon name="lucide:mail" className="text-lg" />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </section>
  );
}


/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-[#141414] text-white/60 py-20 border-t border-white/5">
      <div className="site-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#fe4c00] rounded-full shadow-[0_0_20px_#fe4c00]" />
            <span className="font-display text-xl font-bold tracking-tight text-white">{BRAND}</span>
          </div>
          <p className="mt-4 text-sm max-w-2xl">
            BPO Financeiro com rotina diária, organização em sistema e execução contínua.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-[#fe4c00]">Sobre</a></li>
            <li><a href="#fazemos" className="hover:text-[#fe4c00]">O que fazemos</a></li>
            <li><a href="#como-funciona" className="hover:text-[#fe4c00]">Como funciona</a></li>
            <li><a href="#para-quem" className="hover:text-[#fe4c00]">Para quem é</a></li>
            <li><a href="#agendar" className="hover:text-[#fe4c00]">Contato</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Contato</p>
          <ul className="space-y-2 text-sm">
            <li><a href={WHATSAPP} className="hover:text-[#fe4c00]">WhatsApp</a></li>
            <li><a href={ORCAMENTO_URL} className="hover:text-[#fe4c00]">Solicitar Orçamento</a></li>
            <li><a href="mailto:contato@sustentabpo.com.br" className="hover:text-[#fe4c00] break-all">contato@sustentabpo.com.br</a></li>
          </ul>
        </div>
      </div>
      <div className="site-container mt-12 sm:mt-16 pt-6 border-t border-white/5 text-xs font-mono text-white/40 flex flex-col sm:flex-row gap-3 sm:justify-between">
        <span>© {new Date().getFullYear()} {BRAND}</span>
        <span>// SISTEMA OPERACIONAL</span>
      </div>

    </footer>
  );
}
