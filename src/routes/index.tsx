import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import retrato from "@/assets/retrato.jpg";
import videoPoster from "@/assets/video-poster.jpg";

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
    ],
  }),
  component: Index,
});

const experiencias = [
  {
    ano: "2023—",
    nota: "Atual",
    empresa: "Lamp Brasil",
    cargo: "Gestora de Projetos Web",
    itens: [
      "Gestão do ciclo completo: briefing, wireframes, desenvolvimento, testes e entrega.",
      "Liderança de equipes técnicas e criativas em projetos simultâneos, com controle de prazos via ClickUp.",
      "Relacionamento com clientes: reuniões, apresentações e suporte pós-entrega.",
      "SEO técnico e monitoramento via Google Analytics 4 e Tag Manager.",
      "Funis de conversão, integrações com CRMs e APIs externas.",
      "Front-end com HTML5, CSS3, JavaScript, PHP e WordPress (Divi, Elementor Pro).",
      "Hospedagens, domínios, SSL, servidores e modelagem de bancos de dados.",
      "Pipelines de automação com APIs REST, webhooks e bots no n8n.",
      "IA aplicada (GPT/OpenAI): assistentes virtuais, conteúdo dinâmico e análise preditiva.",
    ],
  },
  {
    ano: "2022",
    nota: "BH",
    empresa: "EduCAT Tecnologia",
    cargo: "Desenvolvedora Front-End · Jul/2022 – Fev/2023",
    itens: [
      'Plataforma "Diploma Digital" com React (front-end) e Django (back-end) em equipe ágil.',
      "Participação ativa em cerimônias Scrum: dailies, sprints e retrospectivas.",
      "Deploy e gerenciamento em Microsoft Azure com containers Docker.",
      "Suporte técnico e melhorias baseadas em feedback de usuários.",
    ],
  },
  {
    ano: "2021",
    nota: "BH",
    empresa: "Anelo Digital",
    cargo: "Desenvolvedora Web + Marketing Digital · Out/2021 – Jul/2022",
    itens: [
      "Criação e manutenção de sites WordPress e aplicações JavaScript.",
      "Desenvolvimento e otimização de e-commerces (Shopify, Nuvemshop, Tray).",
      "Campanhas de tráfego pago: Google Ads e Meta Ads.",
      "Google Tag Manager, Analytics e estratégias de marketing digital.",
    ],
  },
  {
    ano: "2021",
    nota: "BH",
    empresa: "Salum Construções",
    cargo: "Jovem Aprendiz — Eletroeletrônica · Jul/2021 – Out/2021",
    itens: ["Sistemas eletrônicos, circuitos e manutenção básica."],
  },
];

function Index() {
  const [tocandoVideo, setTocandoVideo] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink font-body antialiased selection:bg-accent/15">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#topo" className="flex items-baseline gap-1 font-display text-lg font-semibold tracking-tight">
            <span className="text-accent">J</span>úlia A. Garcia
          </a>
          <nav className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.14em] text-soft md:flex">
            <a href="#perfil" className="underline-offset-4 hover:text-ink hover:underline">Perfil</a>
            <a href="#video" className="underline-offset-4 hover:text-ink hover:underline">Vídeo</a>
            <a href="#experiencia" className="underline-offset-4 hover:text-ink hover:underline">Experiência</a>
            <a href="#competencias" className="underline-offset-4 hover:text-ink hover:underline">Competências</a>
            <a href="#formacao" className="underline-offset-4 hover:text-ink hover:underline">Formação</a>
            <a href="#contato" className="text-ink hover:text-accent">Contato</a>
          </nav>
        </div>
      </header>

      <main id="topo" className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-12">
          <div className="reveal md:col-span-8">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Currículo &nbsp;·&nbsp; 2026
            </p>
            <h1 className="text-balance font-display text-[clamp(2.6rem,7vw,5.2rem)] font-semibold leading-[0.95] tracking-tight">
              Gestora de Projetos
              <br />
              Digitais <span className="font-medium italic text-soft">/</span> Full&nbsp;Stack
            </h1>
            <div className="rule-draw mt-8 h-px w-full bg-line" />
            <p className="mt-6 max-w-[58ch] text-pretty text-[15px] leading-relaxed">
              Mais de 4 anos conduzindo ciclos completos de desenvolvimento web, do briefing à entrega.
              Combino visão técnica e de negócio para entregar soluções com alto impacto em performance,
              conversão e experiência do usuário.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[12px]">
              <a href="tel:+5531920027685" className="underline-offset-4 hover:text-accent hover:underline">(31) 92002-7685</a>
              <a href="mailto:julalvesgarcia@gmail.com" className="underline-offset-4 hover:text-accent hover:underline">julalvesgarcia@gmail.com</a>
              <a
                href="https://www.linkedin.com/in/júlia-garcia-683344207"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-accent hover:underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/juliaalvesg"
                target="_blank"
                rel="noreferrer"
                className="underline-offset-4 hover:text-accent hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="reveal [animation-delay:90ms] md:col-span-4">
            <img
              src={retrato}
              alt="Retrato de Júlia Alves Garcia"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover outline-1 -outline-offset-1 outline-black/5"
            />
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">Belo Horizonte, BR</p>
          </div>
        </section>

        {/* Perfil */}
        <section id="perfil" className="reveal mt-24 grid gap-8 md:grid-cols-12">
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
        </section>

        {/* Vídeo */}
        <section id="video" className="reveal mt-20 -mx-6 [animation-delay:140ms]">
          <div className="relative aspect-video w-full overflow-hidden bg-[#141311]">
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
                  className="h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 grid place-items-center">
                  <button
                    onClick={() => setTocandoVideo(true)}
                    className="play-pulse grid size-20 place-items-center rounded-full bg-accent/90"
                    aria-label="Assistir apresentação em vídeo"
                  >
                    <span className="ml-1 block h-0 w-0 border-y-[11px] border-l-[18px] border-y-transparent border-l-paper" />
                  </button>
                </div>
                <div className="absolute bottom-6 left-6 text-paper">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
                    01 &nbsp;·&nbsp; Apresentação
                  </p>
                  <p className="mt-1 font-display text-2xl font-medium italic">Conheça meu trabalho</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Experiência */}
        <section id="experiencia" className="mt-24">
          <div className="reveal flex items-end justify-between border-b border-ink pb-3">
            <h2 className="font-display text-3xl font-semibold tracking-tight">Experiência</h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-soft">2021 — Atual</span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-12">
            {experiencias.map((exp, i) => (
              <article
                key={exp.empresa}
                className={`reveal md:col-span-12 ${i > 0 ? "mt-6 border-t border-line pt-6" : ""}`}
                style={{ animationDelay: `${60 * (i + 1)}ms` }}
              >
                <div className="grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-2">
                    <p className="font-mono text-[12px] text-accent">{exp.ano}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">{exp.nota}</p>
                  </div>
                  <div className="md:col-span-10">
                    <h3 className="font-display text-xl font-semibold tracking-tight">{exp.empresa}</h3>
                    <p className="mt-0.5 text-[13px] text-soft">{exp.cargo}</p>
                    <ul className="mt-4 max-w-[62ch] space-y-1.5 text-[14px] leading-relaxed">
                      {exp.itens.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="text-accent">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Competências */}
        <section id="competencias" className="mt-24 grid gap-8 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <h2 className="border-b border-ink pb-3 font-display text-3xl font-semibold tracking-tight">
              Competências
            </h2>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Gestão &amp; Soft Skills</p>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed">
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
                <li key={item} className="flex gap-3">
                  <span className="text-accent">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal [animation-delay:90ms] md:col-span-5">
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Stack Técnica</p>
            <div className="mt-3 space-y-3 text-[14px]">
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
                <div key={titulo}>
                  <p className="text-[12px] text-soft">{titulo}</p>
                  <p className="mt-0.5">{conteudo}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Formação */}
        <section id="formacao" className="mt-24 grid gap-8 md:grid-cols-12">
          <div className="reveal md:col-span-7">
            <h2 className="border-b border-ink pb-3 font-display text-3xl font-semibold tracking-tight">
              Formação
            </h2>
            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Bacharelado em Ciência da Computação
                </h3>
                <p className="mt-0.5 text-[13px] text-soft">Dom Helder · Fev/2023 – Dez/2026 (cursando)</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Ensino Médio + Técnico em Informática
                </h3>
                <p className="mt-0.5 text-[13px] text-soft">COTEMIG · Fev/2020 – Dez/2022</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Intercâmbio no Canadá
                </h3>
                <p className="mt-0.5 text-[13px] text-soft">2 meses de imersão em inglês</p>
              </div>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Educação complementar</p>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed">
              {[
                "Ferramentas G Suite — Google For Education Edtech.",
                "Ferramentas de TI: Hardware e Software — Fundação Bradesco.",
                "Segurança em Tecnologia da Informação — Fundação Bradesco.",
                "Marketing de Conteúdo — Rock University (2021).",
                "Agente de Aceleração — Faculdade Cotemig e Cotemig Startup (2022).",
                "Social Media — Udemy (2022).",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal [animation-delay:90ms] md:col-span-5">
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">
              Conquistas &amp; reconhecimentos
            </p>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed">
              {[
                ["1º", "Cotemig Startups — startup de controle autônomo de frequência escolar"],
                ["2º", "Hackathon EMGE | Dom Helder"],
                ["2º", "NASA Space Apps Challenge 2022"],
                ["★", "The Best of the Class — COTEMIG 2020, 2021 e 2022"],
              ].map(([marca, texto]) => (
                <li key={texto} className="flex gap-3">
                  <span className="font-mono text-[12px] text-accent">{marca}</span>
                  {texto}
                </li>
              ))}
            </ul>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Vida acadêmica</p>
            <ul className="mt-3 space-y-2 text-[14px] leading-relaxed">
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                Representante de turma nos 3 primeiros anos da faculdade.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                Voluntária no hackathon da Dom Helder — uma forma de fomentar a inovação.
              </li>
              <li className="flex gap-3">
                <span className="text-accent">—</span>
                Voluntária no CodeClub, ensinando programação para jovens.
              </li>
            </ul>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.14em] text-soft">Idiomas</p>
            <div className="mt-3 space-y-1 text-[14px]">
              <p>Inglês — Avançado</p>
              <p>Espanhol — Básico</p>
            </div>
          </div>
        </section>

        {/* Contato */}
        <footer id="contato" className="reveal mt-24 border-t border-ink pt-10 [animation-delay:120ms]">
          <div className="grid items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Próximo passo</p>
              <h2 className="mt-3 text-balance font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
                Vamos construir algo <span className="font-medium italic">juntos</span>.
              </h2>
            </div>
            <div className="md:col-span-5">
              <a
                href="mailto:julalvesgarcia@gmail.com"
                className="group inline-flex items-center gap-3 border border-ink px-6 py-3 text-[15px] font-medium transition-colors duration-300 hover:bg-ink hover:text-paper"
              >
                julalvesgarcia@gmail.com
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-3 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-soft">
            <span>© 2026 Júlia Alves Garcia</span>
            <span>Representante de turma · Voluntária CodeClub · Intercâmbio Canadá</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
