import { createFileRoute } from "@tanstack/react-router";
import caseImg from "@/assets/case-meeting.jpg";
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

const BRAND = "FINCORE"; // placeholder — substituir pelo nome definitivo
const WHATSAPP =
  "https://wa.me/5511999999999?text=Quero%20meu%20diagn%C3%B3stico%20financeiro%20gratuito";

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return <iconify-icon icon={name} className={className} />;
}

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
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

function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="w-4 h-4 bg-[#ea580c] block" />
          <span className="text-xl font-semibold tracking-tighter">{BRAND}</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <li><a href="#sobre" className="hover:text-[#ea580c] transition-colors duration-300">Sobre</a></li>
          <li><a href="#como-funciona" className="hover:text-[#ea580c] transition-colors duration-300">Como Funciona</a></li>
          <li><a href="#depoimentos" className="hover:text-[#ea580c] transition-colors duration-300">Depoimentos</a></li>
          <li><a href="#agendar" className="hover:text-[#ea580c] transition-colors duration-300">Contato</a></li>
        </ul>
        <a
          href="#agendar"
          className="bg-neutral-900 hover:bg-[#ea580c] text-white text-sm px-6 py-2.5 transition-colors duration-300"
        >
          Diagnóstico Gratuito
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="top" className="blueprint-grid-bg pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="text-xs font-mono tracking-widest text-[#ea580c] mb-6">
            // BPO FINANCEIRO PARA PMEs
          </p>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-semibold tracking-tighter leading-[0.9]">
            SEU FINANCEIRO,
            <br />
            SOB{" "}
            <span className="bg-gradient-to-r from-[#ea580c] to-orange-400 bg-clip-text text-transparent">
              CONTROLE.
            </span>
          </h1>
          <p className="mt-8 border-l-2 border-neutral-300 pl-6 text-neutral-500 max-w-xl">
            Terceirizamos contas a pagar, a receber, conciliação bancária e fluxo de caixa do seu
            negócio — com clareza, segurança e relatórios que você realmente entende.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#agendar"
              className="bg-[#ea580c] hover:bg-neutral-900 text-white px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-300 inline-flex items-center gap-2"
            >
              Agendar Diagnóstico Gratuito
              <Icon name="lucide:arrow-right" className="text-base" />
            </a>
            <a
              href="#como-funciona"
              className="text-sm text-neutral-900 underline underline-offset-4 decoration-neutral-400 hover:decoration-[#ea580c] hover:text-[#ea580c] transition-colors duration-300"
            >
              Ver como funciona
            </a>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs font-mono text-neutral-500 uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              +150 empreendedores atendidos
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">CNPJ ativo desde 2019</span>
          </div>
        </div>

        <div className="lg:col-span-5 perspective-hero">
          <div className="relative preserve-3d group" style={{ transform: "rotateY(-4deg) rotateX(2deg)" }}>
            <div className="relative overflow-hidden border border-neutral-200">
              <img
                src={heroImg}
                alt="Empreendedor revisando dashboard financeiro"
                width={1024}
                height={1536}
                className="w-full h-[520px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
                <div className="blueprint-grid w-full h-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-48 h-48 border border-[#ea580c]/60 animate-[spin_10s_linear_infinite]">
                  <div className="absolute inset-4 border border-[#ea580c]/40" />
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-[#ea580c]/40" />
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ea580c]/40" />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-0 z-10 bg-[#ea580c] text-white px-5 py-4 shadow-xl">
              <p className="text-[10px] font-mono uppercase tracking-widest opacity-80">Indicador</p>
              <p className="mt-1 text-sm font-medium flex items-center gap-2">
                <Icon name="lucide:check-circle" className="text-base" />
                Fluxo de Caixa: Saudável
              </p>
            </div>

            <div className="absolute top-8 -left-4 z-20 bg-white/95 backdrop-blur border border-neutral-200 px-4 py-3 shadow-lg font-mono text-[11px]">
              <div className="flex items-center gap-2 text-neutral-500">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                STATUS
              </div>
              <p className="mt-1 text-neutral-900">Conciliação: 100%</p>
              <p className="text-neutral-900">Atualizado: hoje</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  const services = [
    { icon: "lucide:arrow-up-right", label: "Contas a Pagar" },
    { icon: "lucide:arrow-down-left", label: "Contas a Receber" },
    { icon: "lucide:git-compare-arrows", label: "Conciliação Bancária" },
    { icon: "lucide:bar-chart-3", label: "Relatórios Gerenciais" },
  ];
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-xs font-mono tracking-widest text-[#ea580c] mb-6">// 01 — O QUE FAZEMOS</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[0.95]">
            O que é BPO Financeiro.
          </h2>
          <p className="mt-8 text-neutral-600 text-lg leading-relaxed max-w-lg">
            É a terceirização das rotinas financeiras do seu negócio — contas a pagar, a receber,
            conciliação bancária, fluxo de caixa, emissão de boletos e notas — para uma equipe
            especializada. Você ganha tempo, organização e foco no que realmente importa: fazer
            seu negócio crescer.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-[1px] bg-neutral-200 border border-neutral-200">
          {services.map((s) => (
            <div
              key={s.label}
              className="bg-white p-8 group hover:bg-neutral-900 transition-colors duration-300"
            >
              <Icon
                name={s.icon}
                className="text-3xl text-[#ea580c] group-hover:text-white transition-colors duration-300"
              />
              <p className="mt-6 text-sm font-medium text-neutral-900 group-hover:text-white transition-colors duration-300">
                {s.label}
              </p>
              <p className="mt-2 text-[10px] font-mono uppercase tracking-widest text-neutral-400">
                Serviço incluso
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  const items = [
    {
      icon: "lucide:eye",
      title: "Clareza, não jargão",
      desc: "Relatórios financeiros que qualquer empreendedor entende, sem economês.",
    },
    {
      icon: "lucide:message-circle",
      title: "Atendimento humano",
      desc: "Você fala com uma pessoa, não com um ticket. Comunicação direta via WhatsApp.",
    },
    {
      icon: "lucide:shield-check",
      title: "Segurança e organização",
      desc: "Rotinas padronizadas, conciliação diária e dados sempre atualizados.",
    },
  ];
  return (
    <section className="py-24 md:py-32 blueprint-grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono tracking-widest text-[#ea580c] mb-6">// 02 — DIFERENCIAIS</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[0.95]">
            Por que terceirizar com a gente.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-neutral-200 border border-neutral-200">
          {items.map((it, i) => (
            <div
              key={it.title}
              className="bg-white p-10 group hover:bg-neutral-900 transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <Icon
                  name={it.icon}
                  className="text-4xl text-[#ea580c] group-hover:text-white transition-colors duration-300"
                />
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 group-hover:text-neutral-500">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-10 text-2xl font-semibold tracking-tight text-neutral-900 group-hover:text-white transition-colors duration-300">
                {it.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-500 group-hover:text-neutral-300 leading-relaxed transition-colors duration-300">
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Metrics() {
  const stats = [
    { v: "150+", l: "Empresas atendidas" },
    { v: "R$ 80M", l: "Movimentados/conciliados" },
    { v: "98%", l: "Satisfação dos clientes" },
    { v: "0", l: "Multas por atraso em 2024" },
  ];
  return (
    <section className="py-24 md:py-32 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="text-xs font-mono tracking-widest text-[#ea580c]">// NOSSO IMPACTO</p>
            <p className="mt-4 text-sm text-neutral-400 max-w-[14ch]">
              Números que mostram o tamanho da operação que cuidamos.
            </p>
          </div>
          {stats.slice(0, 3).map((s) => (
            <div key={s.l} className="border-l border-white pl-4 group">
              <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-white group-hover:text-[#ea580c] transition-colors duration-300">
                {s.v}
              </p>
              <p className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
                {s.l}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          <div className="hidden md:block" />
          <div className="border-l border-white pl-4 group">
            <p className="text-5xl md:text-6xl font-semibold tracking-tighter text-white group-hover:text-[#ea580c] transition-colors duration-300">
              {stats[3].v}
            </p>
            <p className="mt-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
              {stats[3].l}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const list = [
    {
      q: "Antes eu perdia fim de semana revisando planilha. Hoje recebo um relatório que realmente entendo.",
      n: "Camila R.",
      r: "Estúdio de design",
    },
    {
      q: "Profissionalizou meu financeiro sem eu precisar contratar ninguém.",
      n: "Lucas M.",
      r: "E-commerce de moda",
    },
    {
      q: "Atendimento rápido, direto no WhatsApp. Isso fez toda diferença.",
      n: "Andréa P.",
      r: "Clínica odontológica",
    },
  ];
  return (
    <section id="depoimentos" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-mono tracking-widest text-[#ea580c] mb-6">// 03 — DEPOIMENTOS</p>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter leading-[0.95]">
            Empreendedores que confiam o financeiro a nós.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-neutral-200 border border-neutral-200">
          {list.map((t) => (
            <figure key={t.n} className="bg-white p-10 relative">
              <span className="absolute top-6 right-8 text-7xl font-serif text-[#ea580c]/20 leading-none select-none">
                "
              </span>
              <blockquote className="text-lg text-neutral-800 leading-relaxed">
                {t.q}
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-neutral-200 font-mono text-xs uppercase tracking-widest">
                <span className="text-neutral-900">{t.n}</span>
                <span className="text-neutral-500"> · {t.r}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
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
    <section id="como-funciona" className="py-24 md:py-32 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative group overflow-hidden border border-neutral-200">
          <img
            src={caseImg}
            alt="Sessão de diagnóstico financeiro"
            loading="lazy"
            width={1280}
            height={1280}
            className="w-full h-[560px] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          />
          <div className="absolute bottom-6 left-6 bg-white px-4 py-2 font-mono text-[10px] uppercase tracking-widest">
            Diagnóstico · 60 min · gratuito
          </div>
        </div>
        <div>
          <p className="text-xs font-mono tracking-widest text-[#ea580c] mb-6">// PROCESSO</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-[0.95]">
            Como começamos a trabalhar juntos.
          </h2>
          <ul className="mt-12 space-y-8">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="font-mono text-sm text-[#ea580c] pt-1">{s.n}</span>
                <div className="border-l-2 border-[#ea580c] pl-5">
                  <h3 className="text-lg font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section id="agendar" className="relative bg-[#ea580c] text-white py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <div className="blueprint-grid w-full h-full" style={{ filter: "invert(1)" }} />
      </div>
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <p className="text-xs font-mono tracking-widest text-white/70 mb-6">// AGENDAR</p>
        <h2 className="text-4xl md:text-7xl font-semibold tracking-tighter leading-[0.95]">
          Vamos diagnosticar o financeiro
          <br />
          do seu negócio — de graça.
        </h2>
        <p className="mt-8 text-white/80 max-w-xl mx-auto">
          60 minutos, direto ao ponto. Sem compromisso. Você sai com um plano de ação concreto.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-neutral-900 text-[#ea580c] hover:text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors duration-300 inline-flex items-center gap-3"
          >
            <Icon name="lucide:message-circle" className="text-lg" />
            Falar no WhatsApp
          </a>
          <a
            href="mailto:contato@fincore.com.br"
            className="border border-white/40 hover:border-white text-white px-10 py-5 text-sm font-medium tracking-wide transition-colors duration-300"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[#ea580c] block" />
            <span className="text-xl font-semibold tracking-tighter text-white">{BRAND}</span>
          </div>
          <p className="mt-4 text-sm max-w-sm">
            BPO Financeiro para micro e pequenos empreendedores. Clareza, organização e
            atendimento humano.
          </p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Navegar</p>
          <ul className="space-y-2 text-sm">
            <li><a href="#sobre" className="hover:text-[#ea580c]">Sobre</a></li>
            <li><a href="#como-funciona" className="hover:text-[#ea580c]">Como Funciona</a></li>
            <li><a href="#depoimentos" className="hover:text-[#ea580c]">Depoimentos</a></li>
            <li><a href="#agendar" className="hover:text-[#ea580c]">Agendar</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4">Contato</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={WHATSAPP} className="hover:text-[#ea580c]">
                WhatsApp
              </a>
            </li>
            <li>contato@fincore.com.br</li>
            <li className="text-xs font-mono">CNPJ 00.000.000/0001-00</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-neutral-800 text-xs font-mono text-neutral-500 flex justify-between">
        <span>© {new Date().getFullYear()} {BRAND}</span>
        <span>// SISTEMA OPERACIONAL</span>
      </div>
    </footer>
  );
}
