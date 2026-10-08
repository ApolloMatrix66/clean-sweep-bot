import { useState } from "react";
import {
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronLeft,
  ChevronRight,
  CreditCard,
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

const comparisons = [
  {
    imageBefore: "/L2.jpg",
    imageAfter: "/L1.jpg",
    problem: "Areia e migalhas no carro",
    description:
      "Sujeira acumulada no carpete, bancos e frestas difíceis de alcançar.",
  },
  {
    imageBefore: "/L3.jpg",
    imageAfter: "/L4.jpg",
    problem: "Poeira acumulada no colchão",
    description:
      "Uma limpeza superficial nem sempre alcança partículas escondidas nos tecidos.",
  },
  {
    imageBefore: "/L5.jpg",
    imageAfter: "/L6.jpg",
    problem: "Estofado com aspecto encardido",
    description:
      "Farelos e poeira ficam presos justamente nas áreas mais difíceis de limpar.",
  },
];

const specs = [
  {
    icon: Zap,
    title: "Alta sucção",
    text: "Potência para a sujeira do dia a dia.",
  },
  {
    icon: Wind,
    title: "Motor sem escovas",
    text: "Construção pensada para uma operação prática.",
  },
  {
    icon: BatteryCharging,
    title: "Sem fio + USB-C",
    text: "Mais liberdade para limpar onde precisar.",
  },
  {
    icon: PackageCheck,
    title: "Acessórios",
    text: "Recursos para diferentes superfícies e cantos.",
  },
];

const includedItems = [
  "TurboClean Pro Max",
  "Acessórios para diferentes usos",
  "Cabo de recarga USB-C",
  "Estrutura compacta e portátil",
];

function buy() {
  if (CHECKOUT_URL !== "#oferta") {
    window.location.href = CHECKOUT_URL;
    return;
  }

  document.getElementById("oferta")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function ProductGallery() {
  const [active, setActive] = useState(0);

  const previous = () =>
    setActive((value) => (value - 1 + gallery.length) % gallery.length);

  const next = () => setActive((value) => (value + 1) % gallery.length);

  return (
    <div className="min-w-0">
      <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.08)] sm:rounded-[28px]">
        <div className="flex aspect-square items-center justify-center bg-white sm:aspect-[1.08/1]">
          <img
            src={gallery[active]}
            alt="TurboClean Pro Max"
            className="h-full w-full object-contain p-5 sm:p-9"
            loading="eager"
            decoding="async"
          />
        </div>

        <button
          type="button"
          onClick={previous}
          aria-label="Imagem anterior"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white">
          {active + 1} / {gallery.length}
        </div>
      </div>

      <div className="mt-3 overflow-x-auto pb-1">
        <div className="flex min-w-max gap-2">
          {gallery.map((src, index) => (
            <button
              type="button"
              key={src}
              onClick={() => setActive(index)}
              aria-label={`Ver imagem ${index + 1}`}
              className={`h-[64px] w-[64px] shrink-0 overflow-hidden rounded-xl border-2 bg-white sm:h-[70px] sm:w-[70px] ${
                active === index
                  ? "border-zinc-950"
                  : "border-zinc-200 hover:border-zinc-400"
              }`}
            >
              <img
                src={src}
                alt=""
                className="h-full w-full object-contain p-1.5"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecurityBadges() {
  return (
    <div className="grid grid-cols-3 divide-x divide-zinc-200 border-y border-zinc-200">
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center">
        <Truck className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">
          Frete grátis
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center">
        <ShieldCheck className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">
          Compra segura
        </span>
      </div>
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center">
        <Lock className="h-4 w-4 text-blue-600" />
        <span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">
          Pagamento protegido
        </span>
      </div>
    </div>
  );
}

function ComparisonCard({
  item,
}: {
  item: (typeof comparisons)[number];
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.05)]">
      <div className="grid grid-cols-1">
        <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
          <img
            src={item.imageBefore}
            alt={`Antes: ${item.problem}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-zinc-700 shadow-sm">
            Antes · Problema
          </span>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden border-t border-zinc-100 bg-zinc-100">
          <img
            src={item.imageAfter}
            alt={`Depois: solução para ${item.problem}`}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute left-3 top-3 rounded-full bg-zinc-950/90 px-2.5 py-1 text-[9px] font-black uppercase tracking-wide text-white shadow-sm">
            Depois · TurboClean
          </span>
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-black tracking-tight text-zinc-950">
          {item.problem}
        </h3>
        <p className="mt-2 text-sm leading-6 text-zinc-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white pb-20 text-zinc-950 antialiased md:pb-0">
      <div className="bg-zinc-950 px-4 py-2.5 text-center text-[9px] font-black uppercase tracking-[0.18em] text-white sm:text-[10px]">
        OFERTA ESPECIAL <span className="mx-1.5 text-blue-400">•</span> FRETE GRÁTIS
      </div>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 text-left"
            aria-label="Voltar ao topo"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white">
              <Zap size={16} fill="currentColor" />
            </span>
            <span>
              <span className="block text-sm font-black tracking-tight">
                TurboClean
              </span>
              <span className="block text-[8px] font-bold uppercase tracking-[0.24em] text-zinc-400">
                Pro Max
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={buy}
            className="rounded-full bg-[#16A34A] px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#15803D] sm:px-5"
          >
            Comprar agora
          </button>
        </div>
      </header>

      <main>
        <section className="bg-zinc-50 px-4 py-5 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
            <ProductGallery />

            <div className="rounded-[24px] bg-white p-6 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:p-9 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700">
                <Sparkles size={12} />
                Condição promocional
              </div>

              <h1 className="mt-5 max-w-xl text-[38px] font-black leading-[0.96] tracking-[-0.055em] sm:text-5xl lg:text-[56px]">
                Limpeza potente. Onde a sujeira realmente está.
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base">
                O aspirador compacto para carro, casa, sofá, colchão e cantos
                difíceis — sem fio e pronto para usar.
              </p>

              <div className="mt-6 grid gap-2 text-sm font-semibold text-zinc-900 sm:grid-cols-2">
                {[
                  "Alta sucção",
                  "Sem fio",
                  "Motor sem escovas",
                  "Recarga USB-C",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-[#16A34A]">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-zinc-200 pt-6">
                <span className="block text-xs font-bold text-red-600 line-through">
                  R$ 179,90
                </span>
                <div className="mt-1 flex items-end gap-3">
                  <span className="text-[52px] font-black leading-none tracking-[-0.06em] sm:text-[62px]">
                    R$ 89,90
                  </span>
                </div>
                <p className="mt-2 text-xs font-semibold text-zinc-500">
                  Parcelamento disponível no checkout.
                </p>

                <button
                  type="button"
                  onClick={buy}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-5 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D]"
                >
                  GARANTIR DESCONTO + FRETE GRÁTIS
                  <ArrowRight size={18} />
                </button>

                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold text-zinc-500">
                  <Lock size={12} className="text-blue-600" />
                  Checkout seguro e pagamento protegido
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-5 max-w-7xl">
            <SecurityBadges />
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Antes × Depois
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                Veja onde o TurboClean faz diferença.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
                Três situações comuns organizadas em um único bloco visual,
                sem excesso de texto e sem interromper a jornada de compra.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
              {comparisons.map((item) => (
                <ComparisonCard key={item.problem} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-zinc-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                  Especificações
                </p>
                <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                  Feito para facilitar.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">
                  Compacto, sem fio e pensado para entrar na rotina sem ocupar
                  espaço.
                </p>

                <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide">
                    <PackageCheck size={17} className="text-[#16A34A]" />
                    O que vem na caixa
                  </div>
                  <ul className="mt-4 space-y-3">
                    {includedItems.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm font-semibold text-zinc-800"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-[#16A34A]"
                          strokeWidth={3}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {specs.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white">
                      <Icon size={19} />
                    </div>
                    <h3 className="mt-5 text-base font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">
                Provas sociais
              </p>
              <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-5xl">
                Experiências reais de clientes.
              </h2>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Área preparada para inserir fotos, nomes e avaliações reais,
                sem depoimentos inventados.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="min-h-[190px] rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6"
                >
                  <div className="flex items-center gap-1 text-zinc-300">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Sparkles key={star} size={14} />
                    ))}
                  </div>
                  <p className="mt-7 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">
                    Avaliação real
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Insira aqui uma avaliação verificada quando houver conteúdo
                    real de cliente disponível.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="oferta"
          className="bg-zinc-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-300">
              Oferta TurboClean Pro Max
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">
              Mais praticidade. Menos sujeira acumulada.
            </h2>

            <div className="mt-8">
              <span className="block text-sm font-bold text-red-400 line-through">
                R$ 179,90
              </span>
              <span className="mt-1 block text-6xl font-black tracking-[-0.06em] sm:text-7xl">
                R$ 89,90
              </span>
              <p className="mt-2 text-xs font-semibold text-zinc-400">
                Frete grátis • Pagamento seguro
              </p>
            </div>

            <button
              type="button"
              onClick={buy}
              className="mx-auto mt-8 flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-6 py-5 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_18px_40px_rgba(34,197,94,0.2)] transition hover:bg-[#16A34A] hover:text-white"
            >
              GARANTIR DESCONTO + FRETE GRÁTIS
              <ArrowRight size={19} />
            </button>

            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <Lock size={13} /> Checkout seguro
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck size={13} /> Compra protegida
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white">
              <Zap size={14} fill="currentColor" />
            </span>
            <div>
              <p className="text-sm font-black">TurboClean Pro Max</p>
              <p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">
                Compra segura
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wide text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <CreditCard size={14} /> Cartão
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles size={14} /> Pix
            </span>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 p-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.12)] backdrop-blur md:hidden">
        <button
          type="button"
          onClick={buy}
          className="flex w-full items-center justify-center rounded-xl bg-[#16A34A] px-4 py-3.5 text-xs font-black uppercase tracking-wide text-white shadow-lg"
        >
          GARANTIR DESCONTO — R$ 89,90
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
