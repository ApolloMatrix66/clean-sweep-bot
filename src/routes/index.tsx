import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Lock,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Truck,
  Wind,
  Zap,
} from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "#oferta";

const gallery = [
  "/a0.png",
  "/a1.jpg",
  "/a2.jpg",
  "/a3.jpg",
  "/a4.jpg",
  "/a5.jpg",
  "/a6.jpg",
  "/a7.jpg",
  "/a8.jpg",
  "/a9.jpg",
];

const painSections = [
  {
    id: "carro",
    painImage: "/L2.jpg",
    solutionImage: "/L1.jpg",
    eyebrow: "01 · CARRO",
    painTitle: "SEU CARRO FICA ASSIM MESMO DEPOIS DE LIMPAR?",
    painText:
      "Areia, migalhas e sujeira acabam presos no carpete, nos bancos e nas frestas onde o aspirador comum simplesmente não chega.",
    painComplement:
      "Quanto mais tempo passa, mais difícil parece deixar tudo realmente limpo.",
    solutionTitle: "AGORA OLHE A DIFERENÇA.",
    solutionText:
      "Com o TurboClean, você alcança cantos, frestas e superfícies com muito mais praticidade.",
    solutionComplement:
      "Sem complicação. Sem carregar um aspirador enorme. Limpeza rápida sempre que precisar.",
  },
  {
    id: "colchao",
    painImage: "/L3.jpg",
    solutionImage: "/L4.jpg",
    eyebrow: "02 · COLCHÃO",
    painTitle: "VOCÊ LIMPA A CAMA... MAS E O QUE FICA ESCONDIDO?",
    painText:
      "Poeira e partículas podem se acumular no colchão e em outros tecidos ao longo do tempo.",
    painComplement: "Uma limpeza superficial nem sempre alcança tudo.",
    solutionTitle: "MAIS PRATICIDADE PARA MANTER TUDO LIMPO.",
    solutionText:
      "Use o TurboClean para remover poeira e sujeira de superfícies e tecidos de forma rápida e prática.",
    solutionComplement: "",
  },
  {
    id: "estofado",
    painImage: "/L5.jpg",
    solutionImage: "/L6.jpg",
    eyebrow: "03 · ESTOFADO",
    painTitle: "SEUS ESTOFADOS ESTÃO COMEÇANDO A FICAR ENCARDIDOS?",
    painText:
      "Poeira, farelos e sujeira se acumulam justamente nas áreas mais difíceis de alcançar.",
    painComplement:
      "Quando a sujeira fica presa nas frestas, uma limpeza comum simplesmente não resolve tudo.",
    solutionTitle: "CHEGA DE SUJEIRA ESCONDIDA NAS FRESTAS.",
    solutionText:
      "O formato compacto facilita a limpeza de cadeiras, sofás, bancos e outros lugares difíceis de alcançar.",
    solutionComplement: "",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Alta sucção",
    text: "Potência para lidar com sujeira do dia a dia.",
  },
  {
    icon: Sparkles,
    title: "Compacto",
    text: "Pequeno o suficiente para ficar sempre à mão.",
  },
  {
    icon: BatteryCharging,
    title: "Sem fio",
    text: "Mais liberdade para limpar sem depender de tomadas.",
  },
  {
    icon: Wind,
    title: "Multiuso",
    text: "Carro, sofá, colchão, cadeira, cantos e muito mais.",
  },
];

const faqItems = [
  {
    question: "Para quais superfícies posso usar?",
    answer:
      "O TurboClean foi apresentado no projeto para uso em carro, casa, sofá, colchão, cadeiras, bancos, tecidos, cantos e outras superfícies que acumulam sujeira do dia a dia.",
  },
  {
    question: "Ele funciona sem fio?",
    answer:
      "Sim. A proposta do produto é o uso sem fio, para facilitar a limpeza sem depender de tomadas durante o uso.",
  },
  {
    question: "Como faço para recarregar?",
    answer:
      "O produto utiliza recarga USB-C.",
  },
  {
    question: "Ele é fácil de transportar?",
    answer:
      "Sim. A estrutura é compacta e portátil, pensada para ficar sempre à mão e ser fácil de guardar e transportar.",
  },
  {
    question: "Posso usar no carro?",
    answer:
      "Sim. O projeto apresenta o TurboClean para limpeza de carpete, bancos, frestas e outras áreas do carro.",
  },
  {
    question: "Posso usar em sofás e cadeiras?",
    answer:
      "Sim. O produto é apresentado para limpeza de sofás, cadeiras, bancos e outros estofados.",
  },
  {
    question: "Como funciona a compra?",
    answer:
      "Ao clicar em qualquer botão de compra, você é direcionado para a oferta configurada no projeto. Quando uma URL de checkout estiver configurada em VITE_CHECKOUT_URL, ela será utilizada diretamente.",
  },
];

function buy() {
  if (CHECKOUT_URL !== "#oferta") {
    window.location.href = CHECKOUT_URL;
    return;
  }

  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProductImage({
  src,
  active = false,
  thumb = false,
}: {
  src: string;
  active?: boolean;
  thumb?: boolean;
}) {
  return (
    <div
      className={
        thumb
          ? "flex h-[68px] w-[68px] items-center justify-center overflow-hidden rounded-lg bg-white sm:h-[76px] sm:w-[76px]"
          : "flex h-full w-full items-center justify-center bg-white"
      }
    >
      <img
        src={src}
        alt="TurboClean Pro Max"
        loading={active || thumb ? "eager" : "lazy"}
        decoding="async"
        className={`block h-full w-full object-contain ${thumb ? "p-1.5" : "p-5 sm:p-10"}`}
      />
    </div>
  );
}

function ImageStory({
  src,
  alt,
  eyebrow,
  label,
  labelClass,
  priority = false,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  eyebrow: string;
  label: string;
  labelClass: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden bg-zinc-100 sm:h-[65vh] sm:min-h-[500px] lg:h-[74vh] lg:min-h-[620px]">
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
      <div className="absolute left-5 top-5 sm:left-8 sm:top-8">
        <span className="rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-zinc-900 shadow-sm">
          {eyebrow}
        </span>
      </div>
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8">
        <span
          className={`rounded-full px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.2em] shadow-lg ${labelClass}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function TrustRow() {
  return (
    <div className="grid grid-cols-3 border-y border-zinc-200 bg-white">
      <div className="flex items-center justify-center gap-2 px-2 py-4 text-center">
        <Truck className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-700 sm:text-[10px]">
          Frete grátis
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 border-x border-zinc-200 px-2 py-4 text-center">
        <ShieldCheck className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-700 sm:text-[10px]">
          Compra segura
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 px-2 py-4 text-center">
        <Lock className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-700 sm:text-[10px]">
          Pagamento protegido
        </span>
      </div>
    </div>
  );
}

function App() {
  const [active, setActive] = useState(0);

  const previous = () =>
    setActive((value) => (value - 1 + gallery.length) % gallery.length);
  const next = () => setActive((value) => (value + 1) % gallery.length);

  return (
    <div className="min-h-screen bg-white pb-16 text-zinc-950 antialiased md:pb-0">
      <div className="bg-zinc-950 px-4 py-2.5 text-center text-[9px] font-black uppercase tracking-[0.18em] text-white sm:text-[10px]">
        OFERTA ESPECIAL <span className="mx-1.5 text-blue-400">•</span> FRETE GRÁTIS{" "}
        <span className="mx-1.5 text-blue-400">•</span> CONDIÇÃO PROMOCIONAL
      </div>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 text-left"
            aria-label="Voltar ao topo"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Zap size={16} fill="currentColor" />
            </span>
            <span>
              <span className="block text-sm font-black tracking-tight">TurboClean</span>
              <span className="block text-[8px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                Pro Max
              </span>
            </span>
          </button>

          <button
            onClick={buy}
            className="rounded-full bg-[#16A34A] px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#15803D] sm:px-5"
          >
            Comprar agora
          </button>
        </div>
      </header>

      <main>
        <section className="bg-white px-4 py-5 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:rounded-[30px] lg:grid lg:grid-cols-[1.06fr_.94fr]">
            <div className="min-w-0 border-b border-zinc-200 lg:border-b-0 lg:border-r">
              <div className="relative aspect-square w-full bg-white sm:aspect-[1.05/1] lg:aspect-[1/0.92]">
                <ProductImage src={gallery[active]} active />

                <button
                  onClick={previous}
                  aria-label="Imagem anterior"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md transition hover:scale-105"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  aria-label="Próxima imagem"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md transition hover:scale-105"
                >
                  <ChevronRight size={18} />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950/85 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white">
                  {active + 1} / {gallery.length}
                </div>
              </div>

              <div className="border-t border-zinc-100 px-3 py-3 sm:px-5">
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {gallery.map((src, index) => (
                    <button
                      key={src}
                      onClick={() => setActive(index)}
                      aria-label={`Ver imagem ${index + 1}`}
                      className={`shrink-0 overflow-hidden rounded-xl border-2 bg-white transition ${
                        active === index
                          ? "border-zinc-950"
                          : "border-transparent hover:border-zinc-300"
                      }`}
                    >
                      <ProductImage src={src} thumb />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
                <Sparkles size={12} />
                Oferta especial
              </div>

              <h1 className="mt-5 max-w-xl text-[40px] font-black leading-[0.95] tracking-[-0.055em] sm:text-5xl lg:text-[58px]">
                O FIM DA SUJEIRA EM SEGUNDOS
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base">
                Limpeza prática, rápida e potente para os lugares onde a sujeira mais se acumula.
              </p>

              <ul className="mt-6 grid gap-2.5 text-sm font-semibold text-zinc-900">
                {[
                  "Alta sucção",
                  "Compacto e portátil",
                  "Sem fio",
                  "Recarregamento USB-C",
                  "Ideal para carro, casa, sofá, colchão e cantos difíceis",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-zinc-200 pt-6">
                <span className="block text-xs font-bold text-red-600 line-through">
                  R$179,90
                </span>
                <span className="mt-0.5 block text-[54px] font-black leading-none tracking-[-0.06em] text-zinc-950 sm:text-[64px]">
                  R$89,90
                </span>

                <button
                  onClick={buy}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-5 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D] hover:shadow-[0_18px_34px_rgba(22,163,74,0.28)]"
                >
                  QUERO APROVEITAR A OFERTA
                  <ArrowRight size={18} />
                </button>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] font-semibold text-zinc-500">
                  <span className="inline-flex items-center gap-1">
                    <Lock size={12} className="text-blue-600" />
                    Compra segura
                  </span>
                  <span>•</span>
                  <span>Pagamento protegido</span>
                  <span>•</span>
                  <span>Frete grátis</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-4 max-w-7xl">
            <TrustRow />
          </div>
        </section>

        {painSections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-10">
            <ImageStory
              src={section.painImage}
              alt={`${section.eyebrow} — situação antes da limpeza`}
              eyebrow={section.eyebrow}
              label="Dor"
              labelClass="bg-zinc-950 text-white"
              priority={index === 0}
            />

            <div className="bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-16">
              <div className="mx-auto max-w-5xl">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-blue-600">
                  O problema
                </p>
                <h2 className="mt-3 max-w-4xl text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {section.painTitle}
                </h2>
                <div className="mt-5 max-w-2xl space-y-2 text-sm leading-6 text-zinc-600 sm:text-base">
                  <p>{section.painText}</p>
                  <p>{section.painComplement}</p>
                </div>
                {index === 0 && (
                  <button
                    onClick={() => scrollToSection("transformacao-carro")}
                    className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wide text-zinc-950 underline decoration-blue-500 decoration-2 underline-offset-4"
                  >
                    VER COMO RESOLVER
                    <ArrowDown size={15} />
                  </button>
                )}
              </div>
            </div>

            <div id={index === 0 ? "transformacao-carro" : undefined} className="scroll-mt-10">
              <ImageStory
                src={section.solutionImage}
                alt={`${section.eyebrow} — resultado da limpeza`}
                eyebrow={section.eyebrow}
                label="Solução"
                labelClass="bg-[#16A34A] text-white"
                objectPosition="center"
              />

              <div className="bg-zinc-50 px-5 py-10 sm:px-8 sm:py-14 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-5xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#16A34A]">
                    A transformação
                  </p>
                  <h2 className="mt-3 max-w-4xl text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                    {section.solutionTitle}
                  </h2>
                  <div className="mt-5 max-w-2xl space-y-2 text-sm leading-6 text-zinc-600 sm:text-base">
                    <p>{section.solutionText}</p>
                    {section.solutionComplement && <p>{section.solutionComplement}</p>}
                  </div>
                  <button
                    onClick={buy}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-6 py-4 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-green-700/10 transition hover:bg-[#15803D] sm:w-auto"
                  >
                    {index === 0
                      ? "QUERO MEU TURBOCLEAN"
                      : index === 1
                        ? "QUERO APROVEITAR"
                        : "QUERO O MEU"}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="border-y border-zinc-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Como funciona
              </p>
              <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
                Três passos. Uma rotina muito mais simples.
              </h2>
            </div>

            <div className="mt-12 grid gap-0 border-y border-zinc-200 sm:grid-cols-3 sm:divide-x sm:divide-zinc-200">
              {[
                ["01", "Ligue", "Tenha o TurboClean sempre pronto para usar.", Zap],
                ["02", "Alcance", "Chegue até frestas, cantos e superfícies difíceis.", Wind],
                ["03", "Limpe", "Remova a sujeira de forma prática e rápida.", Sparkles],
              ].map(([number, title, text, Icon]) => (
                <div key={String(number)} className="flex gap-4 border-b border-zinc-200 py-8 last:border-b-0 sm:block sm:border-b-0 sm:px-8 sm:py-10">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-xs font-black text-blue-700 sm:h-12 sm:w-12">
                    {String(number)}
                  </div>
                  <div className="mt-0 sm:mt-6">
                    <div className="flex items-center gap-2">
                      <Icon size={17} className="text-blue-600" />
                      <h3 className="font-black">{String(title)}</h3>
                    </div>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-zinc-600">{String(text)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
            <div className="overflow-hidden rounded-[28px] bg-white shadow-[0_20px_70px_rgba(0,0,0,0.08)]">
              <div className="grid grid-cols-2">
                {gallery.slice(0, 4).map((src, index) => (
                  <div key={src} className="aspect-square border border-zinc-100 bg-white">
                    <img
                      src={src}
                      alt={`TurboClean Pro Max — imagem do produto ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-contain p-4 sm:p-7"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                O produto
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                TUDO O QUE VOCÊ PRECISA PARA UMA LIMPEZA MAIS PRÁTICA
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
                Uma solução compacta para deixar perto de você e usar quando a sujeira aparecer.
              </p>

              <div className="mt-8 space-y-3">
                {[
                  "TurboClean Pro Max",
                  "Acessórios para diferentes usos",
                  "Cabo/recarga USB-C",
                  "Estrutura compacta",
                  "Fácil de guardar",
                  "Fácil de transportar",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-zinc-200 pb-3 text-sm font-semibold">
                    <Check size={17} className="shrink-0 text-[#16A34A]" strokeWidth={3} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Por que faz sentido
              </p>
              <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
                Pequeno no tamanho. Grande na praticidade.
              </h2>
            </div>

            <div className="mt-10 grid border-y border-zinc-200 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-zinc-200">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="border-b border-zinc-200 py-8 last:border-b-0 sm:px-7 lg:border-b-0">
                  <Icon className="text-blue-600" size={25} />
                  <h3 className="mt-5 font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 rounded-3xl bg-zinc-950 p-7 text-white sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-blue-300">
                  <PackageCheck size={17} />
                  O que vem no produto
                </div>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-300">
                  TurboClean Pro Max, acessórios para diferentes usos, cabo/recarga USB-C e estrutura compacta.
                </p>
              </div>
              <button
                onClick={buy}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-5 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-[#15803D]"
              >
                QUERO APROVEITAR
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Provas sociais
              </p>
              <h2 className="mt-3 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
                QUEM USA, PERCEBE A DIFERENÇA
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Avaliações reais serão exibidas aqui assim que forem cadastradas no projeto.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="min-h-[220px] rounded-2xl border border-dashed border-zinc-300 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-1 text-zinc-300" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Sparkles key={index} size={15} />
                    ))}
                  </div>
                  <div className="mt-7 text-xs font-bold uppercase tracking-widest text-zinc-400">
                    Espaço para avaliação real
                  </div>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Foto, nome, cidade, depoimento e avaliação podem ser inseridos aqui sem criar prova social fictícia.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="scroll-mt-10 bg-zinc-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
              Oferta especial
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              DEIXE A LIMPEZA MUITO MAIS FÁCIL
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-zinc-400 sm:text-base">
              Tenha uma solução compacta e prática para cuidar do seu carro e da sua casa sempre que precisar.
            </p>

            <div className="mt-9">
              <span className="block text-sm font-bold text-red-400 line-through">R$179,90</span>
              <span className="mt-1 block text-6xl font-black tracking-[-0.06em] sm:text-7xl">R$89,90</span>
            </div>

            <button
              onClick={buy}
              className="mx-auto mt-8 flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-6 py-5 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_18px_40px_rgba(34,197,94,0.2)] transition hover:bg-[#16A34A] hover:text-white"
            >
              QUERO APROVEITAR POR R$89,90
              <ArrowRight size={19} />
            </button>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <Lock size={13} /> Pagamento seguro
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1.5">
                <Truck size={13} /> Frete grátis
              </span>
            </div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Dúvidas
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] sm:text-5xl">
                PERGUNTAS FREQUENTES
              </h2>
            </div>

            <div className="mt-10 divide-y divide-zinc-200 border-y border-zinc-200">
              {faqItems.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-black sm:text-base [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition group-open:rotate-45">
                      <span className="text-xl font-normal leading-none">+</span>
                    </span>
                  </summary>
                  <p className="max-w-3xl pb-5 pr-12 text-sm leading-6 text-zinc-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-200 bg-zinc-50 px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl">
            <CircleHelp className="mx-auto text-blue-600" size={25} />
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              PRONTO PARA FACILITAR SUA LIMPEZA?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-zinc-600 sm:text-base">
              Tenha o TurboClean sempre à mão para aquela sujeira que aparece quando você menos espera.
            </p>
            <div className="mt-7 text-5xl font-black tracking-[-0.05em]">R$89,90</div>
            <button
              onClick={buy}
              className="mx-auto mt-6 flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-6 py-5 text-sm font-black uppercase tracking-wide text-white shadow-lg transition hover:bg-[#15803D]"
            >
              QUERO MEU TURBOCLEAN
              <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white">
            <Zap size={14} fill="currentColor" />
          </span>
          <span className="text-sm font-black">TurboClean Pro Max</span>
        </div>
        <p className="mt-3 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
          Compra segura • Frete grátis
        </p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-white/95 p-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
        <button
          onClick={buy}
          className="flex w-full items-center justify-center rounded-xl bg-[#16A34A] px-4 py-3.5 text-xs font-black uppercase tracking-wide text-white shadow-lg"
        >
          APROVEITAR OFERTA — R$89,90
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
