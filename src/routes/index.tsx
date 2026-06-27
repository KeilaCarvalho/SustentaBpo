import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import caseImg from "@/assets/case-meeting.jpg";
import heroEntrepreneur from "@/assets/hero-entrepreneur.jpg";
import heroVideo from "@/assets/hero-bg.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FINCORE — BPO Financeiro para PMEs" },
      {
        name: "description",
        content:
          "Terceirizamos contas a pagar, a receber, conciliação bancária e fluxo de caixa do seu negócio — com clareza, segurança e relatórios que você realmente entende.",
      },
      { property: "og:title", content: "FINCORE — BPO Financeiro para PMEs" },
      {
        property: "og:description",
        content:
          "Seu financeiro, sob controle. BPO Financeiro para micro e pequenos empreendedores.",
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

/* ---------- Mouse parallax hook ---------- */
function useMouseParallax() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--mx", x.toFixed(3));
        el.style.setProperty("--my", y.toFixed(3));
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => {
      el.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return ref;
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <Hero />
      <Marquee />
      <WhatIs />
      <Values />
      <Metrics />
      <Testimonials />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ---------- Nav ---------- */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#fe4c00] rounded-full block shadow-[0_0_20px_#fe4c00]" />
          <span className="font-display text-xl font-bold tracking-tight text-white">{BRAND}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-white/60 font-medium">
          <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#como-funciona" className="hover:text-white transition-colors">Processo</a></li>
          <li><a href="#depoimentos" className="hover:text-white transition-colors">Clientes</a></li>
          <li><a href="#agendar" className="hover:text-white transition-colors">Contato</a></li>
        </ul>
        <a
          href="#agendar"
          className="bg-[#fe4c00] hover:bg-[#cc0000] text-white text-sm px-5 py-2.5 rounded-full font-medium transition-colors"
        >
          Diagnóstico
        </a>
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
      className="relative min-h-[100svh] w-full overflow-hidden bg-black"
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
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Gradient + grid overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      <div className="absolute inset-0 grid-lines opacity-40 pointer-events-none" />

      {/* Radial glow following mouse */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 transition-opacity"
        style={{
          background:
            "radial-gradient(600px circle at calc(50% + var(--mx) * 300px) calc(50% + var(--my) * 300px), rgba(254,76,0,0.18), transparent 60%)",
        }}
      />

      {/* Scanner */}
      <div className="absolute inset-x-0 top-24 bottom-0 overflow-hidden pointer-events-none">
        <div className="scanner-bar" />
      </div>

      {/* Content */}
      <div
        className="relative z-10 min-h-[100svh] max-w-7xl mx-auto px-5 sm:px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center text-white"
        style={{
          transform:
            "translate3d(calc(var(--mx) * 8px), calc(var(--my) * 8px), 0)",
        }}
      >
        <div className="lg:col-span-8 overflow-hidden">
          <p className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-6 reveal-mask">
            // BPO FINANCEIRO · OPERAÇÃO 24/7
          </p>
          <h1 className="font-display text-[2.75rem] sm:text-7xl md:text-8xl xl:text-[8.5rem] font-bold tracking-[-0.04em] leading-[0.92] [text-wrap:balance]">
            <span className="block overflow-hidden">
              <span className="block reveal-mask delay-1">Seu financeiro,</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block reveal-mask delay-2">
                sob <span className="text-[#fe4c00]">controle.</span>
              </span>
            </span>
          </h1>
          <div className="overflow-hidden mt-8 max-w-xl">
            <p className="reveal-mask delay-3 text-base sm:text-lg text-white/70 leading-relaxed">
              Terceirizamos contas a pagar, a receber, conciliação bancária e fluxo de caixa
              do seu negócio — com clareza, segurança e relatórios que você realmente entende.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 reveal-mask delay-4">
            <a
              href="#agendar"
              className="group bg-[#fe4c00] hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-sm font-medium inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              Agendar Diagnóstico Gratuito
              <Icon name="lucide:arrow-up-right" className="text-base group-hover:rotate-45 transition-transform" />
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-white/80 hover:text-[#fe4c00] transition-colors px-4 py-4 text-center"
            >
              Ver como funciona →
            </a>
          </div>
        </div>

        {/* Floating glass cards w/ parallax */}
        <div
          className="lg:col-span-4 hidden lg:flex flex-col gap-4 items-end"
          style={{
            transform:
              "translate3d(calc(var(--mx) * -24px), calc(var(--my) * -24px), 0)",
          }}
        >
          <div className="glass-card rounded-2xl px-5 py-4 font-mono text-[11px] text-white/80 min-w-[220px]">
            <div className="flex items-center gap-2 text-white/50 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Sistema
            </div>
            <p className="mt-2 text-white">Conciliação · 100%</p>
            <p className="text-white/60">Atualizado: agora</p>
          </div>
          <div className="rounded-2xl bg-[#fe4c00] text-white px-6 py-5 shadow-[0_20px_60px_-20px_rgba(254,76,0,0.6)] min-w-[260px]">
            <p className="text-[10px] font-mono uppercase tracking-widest opacity-80">// Indicador</p>
            <p className="mt-2 text-base font-medium flex items-center gap-2">
              <Icon name="lucide:trending-up" className="text-lg" />
              Fluxo de Caixa Saudável
            </p>
          </div>
          <div className="glass-card rounded-2xl p-4 flex items-center gap-3">
            <div className="pinwheel w-10 h-10 rounded-full border border-dashed border-[#fe4c00] flex items-center justify-center">
              <span className="w-2 h-2 bg-[#fe4c00] rounded-full" />
            </div>
            <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest">
              Engine ativa
              <p className="text-white/90 normal-case tracking-normal text-xs">Processando lotes</p>
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
    "Fluxo de Caixa",
    "DRE Mensal",
    "Emissão de NF",
    "Cobrança Automática",
    "Relatórios Gerenciais",
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
    { icon: "lucide:arrow-up-right", label: "Contas a Pagar", desc: "Agendamento, baixas e relatórios diários." },
    { icon: "lucide:arrow-down-left", label: "Contas a Receber", desc: "Boletos, PIX, cobrança ativa e régua." },
    { icon: "lucide:git-compare-arrows", label: "Conciliação Bancária", desc: "Match diário de extratos vs. ERP." },
    { icon: "lucide:bar-chart-3", label: "Relatórios Gerenciais", desc: "DRE, fluxo de caixa e KPIs mensais." },
  ];
  return (
    <section id="sobre" className="py-32 md:py-48 bg-black relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] glow-orange pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-8">// 01 — O QUE FAZEMOS</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
            O que é BPO Financeiro.
          </h2>
          <p className="mt-10 text-white/60 text-lg leading-relaxed max-w-lg">
            Terceirização das rotinas financeiras do seu negócio — contas a pagar, a receber,
            conciliação bancária, fluxo de caixa, emissão de boletos e notas — para uma equipe
            especializada. Você ganha tempo, organização e foco no que importa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-3xl p-8 group hover:border-[#fe4c00]/50 transition-all duration-500 hover:-translate-y-1"
            >
              <Icon name={s.icon} className="text-3xl text-[#fe4c00]" />
              <p className="mt-8 font-display text-xl font-bold text-white">{s.label}</p>
              <p className="mt-2 text-sm text-white/50">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Values ---------- */
function Values() {
  const items = [
    { icon: "lucide:eye", title: "Clareza, não jargão", desc: "Relatórios que qualquer empreendedor entende." },
    { icon: "lucide:message-circle", title: "Atendimento humano", desc: "Você fala com uma pessoa, direto no WhatsApp." },
    { icon: "lucide:shield-check", title: "Segurança e organização", desc: "Rotinas padronizadas e dados sempre atualizados." },
  ];
  return (
    <section className="py-32 md:py-48 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-8">// 02 — DIFERENCIAIS</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Por que terceirizar
            <br />
            com a gente.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="glass-card rounded-3xl p-10 group hover:bg-[#fe4c00] hover:border-[#fe4c00] transition-all duration-500"
            >
              <div className="flex items-center justify-between">
                <Icon name={it.icon} className="text-4xl text-[#fe4c00] group-hover:text-black transition-colors" />
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 group-hover:text-black/60">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-10 font-display text-2xl font-bold text-white group-hover:text-black transition-colors">
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
    { v: "150+", l: "Empresas atendidas" },
    { v: "R$80M", l: "Movimentados/conciliados" },
    { v: "98%", l: "Satisfação dos clientes" },
    { v: "0", l: "Multas por atraso em 2024" },
  ];
  return (
    <section className="py-32 md:py-48 bg-[#09090b] text-white border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] glow-orange pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6">
        <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-16">// NOSSO IMPACTO</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {stats.map((s) => (
            <div key={s.l} className="group">
              <p className="font-display text-6xl md:text-8xl font-bold tracking-[-0.05em] text-[#fe4c00] leading-none">
                {s.v}
              </p>
              <p className="mt-4 text-xs font-mono uppercase tracking-[0.2em] text-white/50">
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
    { q: "Antes eu perdia fim de semana revisando planilha. Hoje recebo um relatório que realmente entendo.", n: "Camila R.", r: "Estúdio de design" },
    { q: "Profissionalizou meu financeiro sem eu precisar contratar ninguém.", n: "Lucas M.", r: "E-commerce de moda" },
    { q: "Atendimento rápido, direto no WhatsApp. Isso fez toda diferença.", n: "Andréa P.", r: "Clínica odontológica" },
  ];
  return (
    <section id="depoimentos" className="bg-black py-32 md:py-48 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-8">// 03 — DEPOIMENTOS</p>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Empreendedores que confiam o financeiro a nós.
          </h2>
        </div>
        <div className="space-y-6">
          {list.map((t, i) => (
            <figure
              key={t.n}
              className="sticky glass-card rounded-3xl p-10 md:p-16"
              style={{ top: `${100 + i * 24}px` }}
            >
              <span className="font-display text-7xl text-[#fe4c00] leading-none">"</span>
              <blockquote className="mt-4 font-display text-2xl md:text-4xl text-white tracking-tight leading-snug">
                {t.q}
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-white/10 font-mono text-xs uppercase tracking-[0.2em] flex items-center gap-3">
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
      className="relative group overflow-hidden rounded-3xl border border-white/10 h-[560px]"
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
        Diagnóstico · 60 min · gratuito
      </div>
      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
        <p className="font-display text-2xl text-white max-w-xs leading-tight">
          Sessão presencial ou remota.
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
    { n: "01", t: "Diagnóstico gratuito", d: "Conversamos sobre suas rotinas atuais, dores e prioridades." },
    { n: "02", t: "Mapeamento das rotinas", d: "Levantamos contas, prazos, acessos e identificamos riscos." },
    { n: "03", t: "Implantação", d: "Padronizamos processos, integramos bancos e iniciamos a operação." },
    { n: "04", t: "Acompanhamento contínuo", d: "Conciliação diária, relatórios mensais e suporte direto." },
  ];
  return (
    <section id="como-funciona" className="py-32 md:py-48 bg-[#09090b] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <ProcessMedia />
        <div>
          <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-8">// PROCESSO</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Como começamos a
            <br />
            trabalhar juntos.
          </h2>
          <ul className="mt-12 space-y-6">
            {steps.map((s) => (
              <li
                key={s.n}
                className="glass-card rounded-2xl p-6 grid grid-cols-[auto_1fr] gap-6 hover:border-[#fe4c00]/50 transition-colors"
              >
                <span className="font-mono text-sm text-[#fe4c00] pt-1">{s.n}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{s.t}</h3>
                  <p className="mt-1 text-sm text-white/60">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  const ref = useMouseParallax();
  return (
    <section
      id="agendar"
      ref={ref}
      className="relative bg-black text-white py-40 md:py-56 overflow-hidden"
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
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-mono tracking-[0.3em] text-[#fe4c00] mb-8">// AGENDAR</p>
        <h2 className="font-display text-5xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
          Vamos diagnosticar o financeiro do seu negócio — <span className="text-[#fe4c00]">de graça.</span>
        </h2>
        <p className="mt-10 text-white/70 text-lg max-w-xl mx-auto">
          60 minutos, direto ao ponto. Sem compromisso. Você sai com um plano de ação concreto.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fe4c00] hover:bg-white hover:text-black text-white px-10 py-5 rounded-full text-sm font-medium tracking-wide transition-colors inline-flex items-center gap-3"
          >
            <Icon name="lucide:message-circle" className="text-lg" />
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@fincore.com.br"
            className="border border-white/30 hover:border-white text-white px-10 py-5 rounded-full text-sm font-medium tracking-wide transition-colors"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="bg-black text-white/60 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#fe4c00] rounded-full shadow-[0_0_20px_#fe4c00]" />
            <span className="font-display text-xl font-bold tracking-tight text-white">{BRAND}</span>
          </div>
          <p className="mt-4 text-sm max-w-sm">
            BPO Financeiro para micro e pequenos empreendedores. Clareza, organização e
            atendimento humano.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-[#fe4c00]">Sobre</a></li>
            <li><a href="#como-funciona" className="hover:text-[#fe4c00]">Como Funciona</a></li>
            <li><a href="#depoimentos" className="hover:text-[#fe4c00]">Depoimentos</a></li>
            <li><a href="#agendar" className="hover:text-[#fe4c00]">Agendar</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/40 mb-4">Contato</p>
          <ul className="space-y-2 text-sm">
            <li><a href={WHATSAPP} className="hover:text-[#fe4c00]">WhatsApp</a></li>
            <li>contato@fincore.com.br</li>
            <li className="text-xs font-mono">CNPJ 00.000.000/0001-00</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-6 border-t border-white/5 text-xs font-mono text-white/40 flex justify-between">
        <span>© {new Date().getFullYear()} {BRAND}</span>
        <span>// SISTEMA OPERACIONAL</span>
      </div>
    </footer>
  );
}
