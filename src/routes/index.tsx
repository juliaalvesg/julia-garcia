import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import retratoAsset from "@/assets/julia-retrato.jpg.asset.json";

const retrato = retratoAsset.url;
import videoPoster from "@/assets/video-poster.jpg";
import { Reveal } from "@/components/Reveal";
import { Logo, LogoLockup } from "@/components/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Júlia Alves Garcia — Gestora de Projetos Digitais & Full Stack" },
      {
        name: "description",
        content:
          "Currículo de Júlia Alves Garcia: gestora de projetos digitais e desenvolvedora full stack com mais de 4 anos liderando times e entregas web em Belo Horizonte.",
      },
      {
        property: "og:title",
        content: "Júlia Alves Garcia — Gestora de Projetos Digitais & Full Stack",
      },
      {
        property: "og:description",
        content:
          "Mais de 4 anos conduzindo ciclos completos de desenvolvimento web, do briefing à entrega.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const experiencias = [
  {
    ano: "2021",
    periodo: "Jul – Out 2021",
    empresa: "Salum Construções",
    cargo: "Jovem Aprendiz — Eletroeletrônica",
    local: "Belo Horizonte",
    itens: ["Sistemas eletrônicos, circuitos e manutenção básica."],
  },
  {
    ano: "2022",
    periodo: "Out/2021 – Jul/2022",
    empresa: "Anelo Digital",
    cargo: "Desenvolvedora Web + Marketing Digital",
    local: "Belo Horizonte",
    itens: [
      "Criação e manutenção de sites WordPress e aplicações JavaScript.",
      "Desenvolvimento e otimização de e-commerces (Shopify, Nuvemshop, Tray).",
      "Campanhas de tráfego pago: Google Ads e Meta Ads.",
      "Google Tag Manager, Analytics e estratégias de marketing digital.",
      "Gestão da infraestrutura de hospedagem e servidores.",
    ],
  },
  {
    ano: "2023",
    periodo: "Jul/2022 – Fev/2023",
    empresa: "EduCAT Tecnologia",
    cargo: "Desenvolvedora Front-End",
    local: "Belo Horizonte",
    itens: [
      'Plataforma "Diploma Digital" com React (front-end) e Django (back-end) em equipe ágil.',
      "Participação ativa em cerimônias Scrum: dailies, sprints e retrospectivas.",
      "Deploy e gerenciamento em Microsoft Azure com containers Docker.",
      "Suporte técnico e melhorias baseadas em feedback de usuários.",
    ],
  },
  {
    ano: "Hoje",
    periodo: "Mar/2023 – Atual",
    empresa: "Lamp Brasil",
    cargo: "Gestora de Projetos Web",
    local: "Belo Horizonte",
    itens: [
      "Gestão do ciclo completo: briefing, wireframes, desenvolvimento, testes e entrega.",
      "Liderança de equipes técnicas e criativas em projetos simultâneos, com prazos via ClickUp.",
      "Relacionamento com clientes: reuniões, apresentações e suporte pós-entrega.",
      "SEO técnico e monitoramento via Google Analytics 4 e Tag Manager.",
      "Funis de conversão, integrações com CRMs e APIs externas.",
      "Front-end com HTML5, CSS3, JavaScript, PHP e WordPress (Divi, Elementor Pro).",
      "Hospedagens, domínios, SSL, servidores e modelagem de bancos de dados.",
      "Pipelines de automação com APIs REST, webhooks e bots no n8n.",
      "IA aplicada (GPT/OpenAI): assistentes virtuais, conteúdo dinâmico e análise preditiva.",
    ],
  },
];

const idiomas = [
  { nome: "Português", nivel: "Nativo", pct: 100, tag: "PT" },
  { nome: "Inglês", nivel: "Avançado", pct: 85, tag: "EN" },
  { nome: "Espanhol", nivel: "Básico", pct: 35, tag: "ES" },
];

function Index() {
  const [tocandoVideo, setTocandoVideo] = useState(false);
  const [ativo, setAtivo] = useState(experiencias.length - 1);
  const exp = experiencias[ativo]!;

  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased selection:bg-accent/15">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/80 backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 sm:px-6">
          <a href="#topo" className="min-w-0 transition-opacity hover:opacity-80">
            <LogoLockup size={32} />
          </a>
          <a
            href="#contato"
            className="shrink-0 rounded-full bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-accent md:hidden"
          >
            Contato
          </a>
          <nav className="hidden items-center gap-6 font-mono text-[10px] uppercase tracking-[0.16em] text-soft md:flex">
            {[
              ["#perfil", "Perfil"],
              ["#video", "Vídeo"],
              ["#experiencia", "Experiência"],
              ["#competencias", "Competências"],
              ["#idiomas", "Idiomas"],
              ["#formacao", "Formação"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
              >
                {label}
              </a>
            ))}
            <a
              href="#contato"
              className="rounded-full bg-ink px-4 py-2 text-paper transition-colors hover:bg-accent"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>

      <main id="topo" className="mx-auto max-w-6xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 sm:pb-20">
        {/* Hero */}
        <section className="grid items-end gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <div className="mb-6 flex items-center gap-3">
              <Logo size={52} />
              <span className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.2em] text-soft">
                Júlia Alves Garcia
                <br />
                Belo Horizonte, BR
              </span>
            </div>
            <h1 className="text-balance font-display text-[clamp(1.9rem,4.6vw,3.4rem)] font-semibold leading-[1.02] tracking-tight">
              Gestora de Projetos
              <br />
              Digitais <span className="font-medium italic text-accent">/</span> Full&nbsp;Stack
            </h1>
            <p className="mt-7 max-w-[58ch] text-pretty text-[14px] leading-relaxed">
              Mais de 4 anos conduzindo ciclos completos de desenvolvimento web, do briefing à entrega.
              Combino visão técnica e de negócio para entregar soluções com alto impacto em performance,
              conversão e experiência do usuário.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-2 font-mono text-[11px]">
              {[
                ["tel:+5531920027685", "(31) 92002-7685"],
                ["mailto:julalvesgarcia@gmail.com", "julalvesgarcia@gmail.com"],
                ["https://www.linkedin.com/in/júlia-garcia-683344207", "LinkedIn"],
                ["https://github.com/juliaalvesg", "GitHub"],
              ].map(([href, label]) => (
                <a
                  key={label}
                  href={href}
                  target={href!.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="rounded-full border border-line px-3.5 py-1.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {label}
                </a>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120} className="md:col-span-4">
            <div className="group relative aspect-[4/5] w-full overflow-hidden">
              <img
                src={retrato}
                alt="Retrato de Júlia Alves Garcia"
                width={1024}
                height={1280}
                className="h-[112%] w-full object-cover transition-transform duration-500 ease-out will-change-transform"
                style={{ transform: `translate3d(0, ${-parallax}px, 0)` }}
              />
              <span className="pointer-events-none absolute inset-0 bg-accent/0 transition-colors duration-500 group-hover:bg-accent/10" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">
              <div className="border-t border-ink pt-2">
                <span className="block font-display text-2xl font-semibold tracking-tight text-ink">4+</span>
                anos de mercado
              </div>
              <div className="border-t border-ink pt-2">
                <span className="block font-display text-2xl font-semibold tracking-tight text-ink">3</span>
                idiomas
              </div>
            </div>
          </Reveal>
        </section>

        {/* Marquee */}
        <Reveal className="mt-14 -mx-4 overflow-hidden border-y border-line py-3 sm:mx-0 sm:mt-16">
          <div className="marquee flex w-max gap-10 font-mono text-[11px] uppercase tracking-[0.2em] text-soft">
            {Array.from({ length: 2 }).map((_, r) => (
              <div key={r} className="flex gap-10">
                {[
                  "Gestão de Projetos",
                  "React",
                  "Scrum & Kanban",
                  "SEO Técnico",
                  "IA Aplicada",
                  "n8n & Automação",
                  "WordPress",
                  "Docker & Azure",
                  "Analytics 4",
                ].map((t) => (
                  <span key={t} className="flex items-center gap-10">
                    {t}
                    <span className="text-accent">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Perfil */}
        <Reveal as="section" id="perfil" className="mt-16 grid gap-6 sm:gap-8 md:mt-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Perfil</h2>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Quem sou</p>
          </div>
          <div className="space-y-5 text-[15px] leading-relaxed md:col-span-8">
            <p className="text-pretty">
              Aos 16 anos fundei minha primeira startup, voltada ao controle autônomo de frequência escolar —
              experiência que fortaleceu minha visão empreendedora e minha capacidade de liderança desde cedo.
            </p>
            <p className="text-pretty">
              Na Lamp Brasil, lidero projetos de sites institucionais, landing pages e e-commerces, gerenciando
              equipes, prazos, clientes e estratégias orientadas a dados. Tenho sólida experiência em gestão ágil
              (Scrum e Kanban), planejamento estratégico, análise de métricas e aplicação de inteligência
              artificial para automação e personalização de campanhas.
            </p>
          </div>
        </Reveal>

        {/* Vídeo */}
        <Reveal as="section" id="video" className="mt-16 -mx-4 sm:mt-20 sm:-mx-6">
          <div className="group relative aspect-video w-full overflow-hidden bg-[#141311]">
            {tocandoVideo ? (
              <video
                className="h-full w-full object-cover"
                src="/videos/apresentacao.mp4"
                poster={videoPoster}
                controls
                autoPlay
              />
            ) : (
              <>
                <img
                  src={videoPoster}
                  alt="Júlia Alves Garcia gravando sua apresentação em vídeo"
                  width={1920}
                  height={1088}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-90 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,0.8,0.2,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    onClick={() => setTocandoVideo(true)}
                    className="play-pulse grid size-20 place-items-center rounded-full bg-accent/90 transition-transform duration-300 hover:scale-110"
                    aria-label="Assistir apresentação em vídeo"
                  >
                    <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-paper" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 text-paper sm:bottom-6 sm:left-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                    01 &nbsp;·&nbsp; Apresentação
                  </p>
                  <p className="mt-1 font-display text-lg font-medium italic sm:text-2xl">
                    Conheça meu trabalho
                  </p>
                </div>
              </>
            )}
          </div>
        </Reveal>

        {/* Experiência — linha do tempo interativa */}
        <section id="experiencia" className="mt-16 md:mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-2 border-b border-ink pb-3">
            <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">Experiência</h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-soft sm:text-[11px]">
              toque ou passe o mouse pelos anos
            </span>
          </Reveal>

          <Reveal delay={80} className="mt-10 sm:mt-12">
            {/* Trilho */}
            <div className="-mx-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
            <div className="relative min-w-[460px]">
              <div className="absolute inset-x-0 top-[13px] h-px bg-line" />
              <div
                className="absolute top-[13px] h-px bg-accent transition-all duration-500 ease-[cubic-bezier(0.22,0.8,0.2,1)]"
                style={{
                  left: 0,
                  width: `${(ativo / (experiencias.length - 1)) * 100}%`,
                }}
              />
              <ol className="relative flex justify-between">
                {experiencias.map((e, i) => {
                  const on = i <= ativo;
                  const atual = i === ativo;
                  return (
                    <li key={e.empresa} className="flex flex-col items-center">
                      <button
                        onMouseEnter={() => setAtivo(i)}
                        onFocus={() => setAtivo(i)}
                        onClick={() => setAtivo(i)}
                        aria-current={atual}
                        className="group flex flex-col items-center outline-none"
                      >
                        <span
                          className={`grid size-[27px] place-items-center rounded-full border transition-all duration-400 ${
                            on ? "border-accent" : "border-line"
                          } ${atual ? "scale-110 bg-accent" : "bg-paper"}`}
                        >
                          <span
                            className={`size-1.5 rounded-full transition-colors duration-300 ${
                              atual ? "bg-paper" : on ? "bg-accent" : "bg-line"
                            }`}
                          />
                        </span>
                        <span
                          className={`mt-3 font-mono text-[12px] tracking-wide transition-colors duration-300 ${
                            atual ? "text-accent" : "text-soft group-hover:text-ink"
                          }`}
                        >
                          {e.ano}
                        </span>
                        <span
                          className={`mt-1 block font-mono text-[9px] uppercase tracking-[0.14em] transition-opacity duration-300 ${
                            atual ? "text-ink opacity-100" : "text-soft opacity-50"
                          }`}
                        >
                          {e.empresa}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
            </div>

            {/* Painel */}
            <div
              key={exp.empresa}
              className="reveal mt-10 grid gap-6 border-t border-line pt-8 sm:mt-12 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">{exp.periodo}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                  {exp.empresa}
                </h3>
                <p className="mt-2 text-[13px] text-soft">{exp.cargo}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">{exp.local}</p>
              </div>
              <ul className="grid gap-x-8 gap-y-2 text-[14px] leading-relaxed md:col-span-8 md:grid-cols-2">
                {exp.itens.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </section>

        {/* Competências */}
        <section id="competencias" className="mt-24 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="border-b border-ink pb-3 font-display text-3xl font-semibold tracking-tight">
              Competências
            </h2>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Gestão &amp; Soft Skills</p>
            <ul className="mt-3 space-y-1">
              {[
                "Gestão de projetos digitais e equipes técnicas multidisciplinares.",
                "Metodologias ágeis: Scrum e Kanban — sprints, alinhamentos e retrospectivas.",
                "Comunicação estratégica com clientes, stakeholders e times de desenvolvimento.",
                "Tomada de decisão orientada a dados, métricas e resultados de negócio.",
                "Liderança colaborativa, gestão de conflitos, negociação e desenvolvimento de equipes.",
                "Planejamento estratégico e definição de prioridades de tecnologia e marketing.",
                "Visão integrada entre tecnologia, UX/UI, branding e experiência do usuário.",
                "Organização de demandas, cronogramas e garantia de cumprimento de prazos.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-md px-2 py-1.5 text-[14px] leading-relaxed transition-all duration-300 hover:translate-x-1 hover:bg-ink/[0.04]"
                >
                  <span className="text-accent">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="md:col-span-5">
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Stack Técnica</p>
            <div className="mt-3 space-y-2">
              {[
                ["Front-End", "HTML5, CSS3, JavaScript, TypeScript, React, Bootstrap"],
                ["Back-End", "Node.js, PHP, Django, C#, Java, SQL, Python (básico)"],
                ["CMS & E-commerce", "WordPress (Divi, Elementor), Webflow, Shopify, Magento, Nuvemshop, Tray, Wix"],
                ["Cloud & DevOps", "Docker, Microsoft Azure, AWS"],
                ["Analytics", "Google Analytics 4, Tag Manager, eventos personalizados"],
                ["IA Aplicada", "Automação de processos, personalização de campanhas, APIs de IA"],
                ["Gestão", "ClickUp, Trello, Jira, controle de squads"],
                ["Automação", "APIs REST, Webhooks, n8n, WhatsApp API, CRMs"],
              ].map(([titulo, conteudo]) => (
                <div
                  key={titulo}
                  className="group border-l-2 border-line py-1.5 pl-4 text-[14px] transition-colors duration-300 hover:border-accent"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-soft transition-colors group-hover:text-accent">
                    {titulo}
                  </p>
                  <p className="mt-0.5">{conteudo}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Idiomas — destaque */}
        <Reveal as="section" id="idiomas" className="mt-24 -mx-6 bg-ink px-6 py-14 text-paper md:px-12">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Idiomas</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Comunicação sem <span className="italic">fronteiras</span>
              </h2>
              <p className="mt-4 max-w-[38ch] text-[14px] leading-relaxed text-paper/70">
                Dois meses de imersão no Canadá consolidaram meu inglês avançado — hoje conduzo reuniões,
                documentação técnica e conteúdo em inglês com naturalidade.
              </p>
            </div>
            <div className="space-y-6 md:col-span-8 md:space-y-7 md:pt-2">
              {idiomas.map((l, i) => (
                <div key={l.nome} className="group">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                      <span className="mr-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                        {l.tag}
                      </span>
                      {l.nome}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-paper/60 sm:text-[11px]">
                      {l.nivel}
                    </p>
                  </div>
                  <div className="mt-3 h-[3px] w-full overflow-hidden bg-paper/15">
                    <div
                      className="bar-grow h-full bg-accent"
                      style={{ width: `${l.pct}%`, animationDelay: `${i * 160}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Formação */}
        <section id="formacao" className="mt-24 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <h2 className="border-b border-ink pb-3 font-display text-3xl font-semibold tracking-tight">
              Formação
            </h2>
            <div className="mt-5 space-y-3">
              {[
                ["Bacharelado em Ciência da Computação", "Dom Helder · Fev/2023 – Dez/2026 (cursando)"],
                ["Ensino Médio + Técnico em Informática", "COTEMIG · Fev/2020 – Dez/2022"],
                ["Intercâmbio no Canadá", "2 meses de imersão em inglês"],
              ].map(([titulo, sub]) => (
                <div
                  key={titulo}
                  className="border-l-2 border-line py-1.5 pl-4 transition-all duration-300 hover:translate-x-1 hover:border-accent"
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight">{titulo}</h3>
                  <p className="mt-0.5 text-[13px] text-soft">{sub}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Educação complementar</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Ferramentas G Suite — Google For Education",
                "Hardware e Software — Fundação Bradesco",
                "Segurança da Informação — Fundação Bradesco",
                "Marketing de Conteúdo — Rock University",
                "Agente de Aceleração — Cotemig Startup",
                "Social Media — Udemy",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line px-3.5 py-1.5 text-[12px] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5">
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">
              Conquistas &amp; reconhecimentos
            </p>
            <ul className="mt-3 space-y-1">
              {[
                ["1º", "Cotemig Startups — startup de controle autônomo de frequência escolar"],
                ["2º", "Hackathon EMGE | Dom Helder"],
                ["2º", "NASA Space Apps Challenge 2022"],
                ["★", "The Best of the Class — COTEMIG 2020, 2021 e 2022"],
              ].map(([marca, texto]) => (
                <li
                  key={texto}
                  className="flex gap-3 rounded-md px-2 py-1.5 text-[14px] leading-relaxed transition-all duration-300 hover:translate-x-1 hover:bg-ink/[0.04]"
                >
                  <span className="font-mono text-[12px] text-accent">{marca}</span>
                  {texto}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Vida acadêmica</p>
            <ul className="mt-3 space-y-1">
              {[
                "Representante de turma nos 3 primeiros anos da faculdade.",
                "Voluntária no hackathon da Dom Helder — uma forma de fomentar a inovação.",
                "Voluntária no CodeClub, ensinando programação para jovens.",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-3 rounded-md px-2 py-1.5 text-[14px] leading-relaxed transition-all duration-300 hover:translate-x-1 hover:bg-ink/[0.04]"
                >
                  <span className="text-accent">—</span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Contato */}
        <Reveal as="footer" id="contato" className="mt-16 border-t border-ink pt-10 md:mt-24">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Próximo passo</p>
              <h2 className="mt-3 text-balance font-display text-[clamp(1.6rem,4.2vw,3rem)] font-semibold leading-[1.04] tracking-tight">
                Vamos construir algo <span className="font-medium italic">juntos</span>.
              </h2>
            </div>
            <div className="md:col-span-5">
              <a
                href="mailto:julalvesgarcia@gmail.com"
                className="group inline-flex max-w-full items-center gap-3 rounded-full border border-ink px-5 py-3 text-[13px] font-medium transition-all duration-300 hover:bg-ink hover:text-paper sm:px-6 sm:text-[15px]"
              >
                <span className="truncate">julalvesgarcia@gmail.com</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">
            <span className="flex items-center gap-2">
              <Logo size={22} /> © 2026 Júlia Alves Garcia
            </span>
            <span>Representante de turma · Voluntária CodeClub · Intercâmbio Canadá</span>
          </div>
        </Reveal>
      </main>
    </div>
  );
}
