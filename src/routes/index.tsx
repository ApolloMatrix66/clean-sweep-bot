import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Lock, ShieldCheck, Truck, Usb, Zap } from "lucide-react";
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

function buy() {
  if (CHECKOUT_URL !== "#oferta") {
    window.location.href = CHECKOUT_URL;
    return;
  }
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function ProductImage({ src, active = false, thumb = false }: { src: string; active?: boolean; thumb?: boolean }) {
  return (
    <div className={`flex items-center justify-center overflow-hidden bg-white ${thumb ? "h-[74px] w-[74px] sm:h-20 sm:w-20" : "h-full w-full"}`}>
      <img
        src={src}
        alt="TurboClean Pro Max"
        loading={active || thumb ? "eager" : "lazy"}
        className={`block h-full w-full object-contain ${thumb ? "p-1.5" : "p-5 sm:p-8"} `}
        style={{ imageRendering: "auto" }}
      />
    </div>
  );
}

function App() {
  const [active, setActive] = useState(0);

  const previous = () => setActive((value) => (value - 1 + gallery.length) % gallery.length);
  const next = () => setActive((value) => (value + 1) % gallery.length);

  return (
    <div className="min-h-screen bg-[#f7f7f5] text-[#111] antialiased">
      <div className="bg-[#111] px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-xs">
        Frete grátis para todo o Brasil
      </div>

      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] text-white">
              <Zap size={17} />
            </span>
            <div>
              <div className="text-sm font-black tracking-tight">TurboClean</div>
              <div className="text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-400">Pro Max</div>
            </div>
          </div>
          <button onClick={buy} className="rounded-full bg-[#16a34a] px-5 py-2.5 text-[11px] font-black uppercase tracking-wide text-white transition hover:bg-[#15803d]">
            Comprar agora
          </button>
        </div>
      </header>

      <main>
        <section className="px-3 py-5 sm:px-6 sm:py-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.07)] lg:grid-cols-[1.08fr_.92fr]">
              <div className="min-w-0 border-b border-zinc-200 lg:border-b-0 lg:border-r">
                <div className="relative flex aspect-square w-full items-center justify-center bg-white sm:aspect-[1.08/1] lg:aspect-[1.05/1]">
                  <ProductImage src={gallery[active]} active />
                  <button onClick={previous} aria-label="Imagem anterior" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-black shadow-sm transition hover:scale-105">
                    <ChevronLeft size={18} />
                  </button>
                  <button onClick={next} aria-label="Próxima imagem" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-black shadow-sm transition hover:scale-105">
                    <ChevronRight size={18} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/70 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white">
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
                        className={`shrink-0 overflow-hidden rounded-xl border-2 bg-white transition ${active === index ? "border-[#111]" : "border-transparent hover:border-zinc-300"}`}
                      >
                        <ProductImage src={src} thumb />
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                  TurboClean Pro Max
                </div>

                <h1 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl">
                  Limpeza poderosa.
                  <span className="block text-zinc-400">Sem complicação.</span>
                </h1>

                <p className="mt-5 text-sm leading-6 text-zinc-500 sm:text-base">
                  Uma ferramenta portátil para facilitar a limpeza do carro, sofá, estofados, tapetes e cantos difíceis.
                </p>

                <div className="mt-6 space-y-2.5">
                  {["Compacto e portátil", "Sem fios", "Carregamento USB-C", "Prático para o dia a dia"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-sm font-semibold">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#16a34a]">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <div id="oferta" className="mt-7 border-t border-zinc-200 pt-6">
                  <div className="text-sm font-semibold text-zinc-400 line-through">R$ 297,00</div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-zinc-400">por</span>
                    <span className="text-4xl font-black tracking-[-0.04em] text-[#16a34a] sm:text-5xl">R$ 89,90</span>
                  </div>

                  <button onClick={buy} className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-5 py-5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-green-700/15 transition hover:bg-[#15803d]">
                    Quero meu TurboClean <span>→</span>
                  </button>

                  <div className="mt-4 grid grid-cols-3 gap-2 border-t border-zinc-100 pt-4 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Truck size={16} className="text-[#16a34a]" />
                      <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-500">Frete grátis</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 border-x border-zinc-100">
                      <ShieldCheck size={16} className="text-[#16a34a]" />
                      <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-500">30 dias</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Lock size={16} className="text-[#16a34a]" />
                      <span className="text-[9px] font-bold uppercase tracking-wide text-zinc-500">Seguro</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
              {[
                [Truck, "Frete grátis", "Todo o Brasil"],
                [ShieldCheck, "30 dias", "Garantia"],
                [Lock, "Compra segura", "Pagamento protegido"],
                [Usb, "USB-C", "Carregamento prático"],
              ].map(([Icon, title, subtitle]) => (
                <div key={String(title)} className="flex items-center justify-center gap-2.5 bg-white px-3 py-4">
                  <Icon size={18} className="text-[#16a34a]" />
                  <div>
                    <div className="text-[9px] font-black uppercase tracking-wide">{String(title)}</div>
                    <div className="text-[9px] text-zinc-400">{String(subtitle)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-4 py-7 text-center text-[9px] font-bold uppercase tracking-wider text-zinc-400">
        TurboClean Pro Max • Compra segura • Frete grátis • 30 dias
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-800 bg-black/95 p-2.5 backdrop-blur-xl md:hidden">
        <button onClick={buy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-4 py-3.5 text-xs font-black uppercase tracking-wide text-black">
          Comprar por R$ 89,90 →
        </button>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
