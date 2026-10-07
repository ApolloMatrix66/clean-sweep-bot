import { useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Lock,
  Menu,
  ShieldCheck,
  Truck,
  Usb,
  X,
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

const benefitImages = [
  ["/b0.jpg", "Potência para o dia a dia", "Feito para lidar com poeira, resíduos e sujeiras do cotidiano."],
  ["/b1.jpg", "Sem fios", "Mais liberdade para levar o produto exatamente até onde você precisa."],
  ["/b2.jpg", "Reservatório prático", "Pensado para pequenas limpezas sem complicação."],
  ["/b3.jpg", "USB-C", "Carregamento simples e conveniente."],
  ["/b4.jpg", "Compacto", "Fácil de guardar em casa, no carro ou onde for mais conveniente."],
  ["/b5.jpg", "Sempre à mão", "Ideal para resolver aquela sujeira antes que ela vire um problema maior."],
  ["/b6.jpg", "Versátil", "Alcance diferentes cantos e superfícies do dia a dia."],
  ["/b7.jpg", "Limpeza rápida", "Resolva pequenas sujeiras sem tirar um equipamento grande do armário."],
  ["/b8.jpg", "Portátil", "Leve o TurboClean com você para diferentes situações."],
  ["/b9.png", "Uso simples", "Uma ferramenta prática para deixar a rotina mais fácil."],
] as const;

const beforeAfter = ["/c1.jpg", "/c2.jpg", "/c3.jpg", "/c4.jpg", "/c5.jpg"];

const faqs = [
  ["Onde posso usar o TurboClean?", "Ele foi pensado para situações de limpeza do dia a dia, como carro, bancos, tapetes, sofá, estofados e cantos de difícil acesso."],
  ["O TurboClean funciona sem fio?", "Sim. O formato portátil permite usar o aparelho sem ficar preso a uma tomada durante a limpeza."],
  ["Como faço para carregar?", "O aparelho utiliza conexão USB-C para carregamento."],
  ["Quanto custa?", "Nesta oferta, o TurboClean Pro Max está sendo apresentado por R$ 89,90, conforme a condição promocional da página."],
  ["Como funciona a garantia?", "A oferta apresenta garantia de 30 dias, conforme as condições informadas no checkout."],
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function buy() {
  if (CHECKOUT_URL !== "#oferta") {
    window.location.href = CHECKOUT_URL;
    return;
  }
  go("oferta");
}

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      src={failed ? "/a0.png" : src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function App() {
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);

  const previous = () => setActive((value) => (value - 1 + gallery.length) % gallery.length);
  const next = () => setActive((value) => (value + 1) % gallery.length);

  return (
    <div className="min-h-screen bg-white text-[#111] antialiased">
      <div className="border-b border-zinc-800 bg-[#0a0a0a] px-4 py-2.5 text-center text-[10px] font-bold uppercase tracking-[0.14em] text-white sm:text-xs">
        Frete grátis para todo o Brasil
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] text-white">
              <Zap size={17} />
            </span>
            <span className="text-left leading-none">
              <span className="block text-sm font-black tracking-tight">TurboClean</span>
              <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.22em] text-zinc-400">Pro Max</span>
            </span>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            <button onClick={() => go("produto")} className="text-xs font-semibold text-zinc-500 transition hover:text-black">Produto</button>
            <button onClick={() => go("beneficios")} className="text-xs font-semibold text-zinc-500 transition hover:text-black">Benefícios</button>
            <button onClick={() => go("resultados")} className="text-xs font-semibold text-zinc-500 transition hover:text-black">Resultados</button>
            <button onClick={() => go("faq")} className="text-xs font-semibold text-zinc-500 transition hover:text-black">Dúvidas</button>
            <button onClick={buy} className="rounded-full bg-[#16a34a] px-5 py-2.5 text-[11px] font-black uppercase tracking-wide text-white transition hover:bg-[#15803d]">
              Comprar agora
            </button>
          </nav>

          <button onClick={() => setMenu(!menu)} className="rounded-xl border border-zinc-200 p-2 md:hidden" aria-label="Abrir menu">
            {menu ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menu && (
          <div className="border-t border-zinc-200 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Produto", "produto"],
                ["Benefícios", "beneficios"],
                ["Resultados", "resultados"],
                ["Dúvidas", "faq"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => { setMenu(false); go(id); }} className="rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-zinc-50">
                  {label}
                </button>
              ))}
              <button onClick={() => { setMenu(false); buy(); }} className="mt-2 rounded-xl bg-[#16a34a] px-4 py-4 text-sm font-black uppercase text-white">
                Comprar agora
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="produto" className="scroll-mt-20 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-16">
            <div className="order-1">
              <div className="relative overflow-hidden rounded-3xl bg-[#f5f5f3]">
                <ImageWithFallback src={gallery[active]} alt={`TurboClean Pro Max — imagem ${active + 1}`} className="aspect-square w-full object-cover sm:aspect-[1.04/1]" />
                <button onClick={previous} aria-label="Imagem anterior" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur transition hover:scale-105">
                  <ChevronLeft size={19} />
                </button>
                <button onClick={next} aria-label="Próxima imagem" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-black shadow-lg backdrop-blur transition hover:scale-105">
                  <ChevronRight size={19} />
                </button>
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/60 px-3 py-2 backdrop-blur">
                  {gallery.map((_, index) => (
                    <button key={index} onClick={() => setActive(index)} aria-label={`Ver imagem ${index + 1}`} className={`h-1.5 rounded-full transition-all ${index === active ? "w-5 bg-white" : "w-1.5 bg-white/40"}`} />
                  ))}
                </div>
              </div>

              <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
                {gallery.map((src, index) => (
                  <button key={src} onClick={() => setActive(index)} className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${index === active ? "border-[#111]" : "border-transparent"}`}>
                    <ImageWithFallback src={src} alt={`Miniatura ${index + 1}`} className="h-16 w-16 object-cover sm:h-[74px] sm:w-[74px]" />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center lg:py-6">
              <div className="mb-5 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#16a34a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16a34a]" />
                TurboClean Pro Max
              </div>

              <h1 className="max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">
                Limpeza poderosa.
                <span className="block text-zinc-400">Sem complicação.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg">
                Uma ferramenta portátil para resolver a sujeira do dia a dia no carro, sofá, estofados, tapetes e cantos difíceis — sem precisar tirar um equipamento grande do armário.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-3 sm:grid-cols-4 lg:grid-cols-2">
                {["Compacto e portátil", "Sem fios", "USB-C", "Pronto para o dia a dia"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-zinc-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#16a34a]"><Check size={12} strokeWidth={3} /></span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-zinc-200 pt-7">
                <div className="flex flex-wrap items-end gap-3">
                  <span className="text-sm font-semibold text-zinc-400">De <span className="line-through">R$ 297,00</span></span>
                  <span className="text-4xl font-black tracking-tight text-[#16a34a] sm:text-5xl">R$ 89,90</span>
                </div>
                <p className="mt-2 text-xs text-zinc-500">Condição promocional apresentada nesta oferta.</p>

                <button onClick={buy} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16a34a] px-6 py-5 text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-green-700/15 transition hover:bg-[#15803d] sm:text-base">
                  Quero meu TurboClean <span>→</span>
                </button>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                  <span className="flex items-center gap-1.5"><Truck size={13} /> Frete grátis</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck size={13} /> 30 dias</span>
                  <span className="flex items-center gap-1.5"><Lock size={13} /> Compra segura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-[#fafafa]">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {[
              [Truck, "Frete grátis", "Todo o Brasil"],
              [ShieldCheck, "30 dias", "Garantia"],
              [Lock, "Compra segura", "Pagamento protegido"],
              [Usb, "USB-C", "Carregamento prático"],
            ].map(([Icon, title, text]) => (
              <div key={String(title)} className="flex items-center justify-center gap-3 border-r border-zinc-200 px-3 py-5 last:border-r-0">
                <Icon size={20} className="text-[#16a34a]" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-wide">{String(title)}</div>
                  <div className="mt-0.5 text-[10px] text-zinc-400">{String(text)}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="beneficios" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Feito para a vida real</div>
                <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Pequeno no tamanho.<br />Grande na praticidade.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-zinc-500 lg:justify-self-end lg:text-base">
                O TurboClean fica pronto para aquelas pequenas sujeiras que aparecem o tempo todo. Menos preparação. Mais praticidade.
              </p>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefitImages.slice(0, 4).map(([image, title, text]) => (
                <article key={title} className="group overflow-hidden rounded-2xl bg-[#f5f5f3]">
                  <div className="overflow-hidden">
                    <ImageWithFallback src={image} alt={title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {benefitImages.slice(4).map(([image, title, text]) => (
                <article key={title} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                  <div className="overflow-hidden">
                    <ImageWithFallback src={image} alt={title} className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#111] px-4 py-16 text-white sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80]">Menos trabalho</div>
              <h2 className="mt-3 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl">A sujeira aparece rápido. Sua solução também pode.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                Banco do carro, sofá, tapete, estofado ou aquele canto difícil. Em vez de deixar para depois, tenha uma ferramenta prática sempre à mão.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {["Pegue e use", "Leve para onde precisar", "Carregamento USB-C", "Guarde sem ocupar espaço"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a] text-black"><Check size={14} /></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["/a2.jpg", "/a3.jpg", "/a4.jpg", "/a5.jpg"].map((src, index) => (
                <div key={src} className={`overflow-hidden rounded-2xl bg-[#1b1b1b] ${index % 2 ? "mt-8" : ""}`}>
                  <ImageWithFallback src={src} alt="TurboClean Pro Max em uso" className="aspect-square w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="resultados" className="scroll-mt-20 bg-[#f5f5f3] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Na prática</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Veja a diferença.</h2>
              <p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">A melhor forma de entender um produto é vê-lo fazendo o trabalho.</p>
            </div>

            <div className="mt-12 space-y-4">
              {beforeAfter.map((src, index) => (
                <div key={src} className="group overflow-hidden rounded-3xl bg-white">
                  <ImageWithFallback src={src} alt={`Resultado de limpeza ${index + 1}`} className="max-h-[680px] w-full object-cover transition duration-700 group-hover:scale-[1.01]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Por que ter um?</div>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Quando a limpeza é simples, você para de adiar.</h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-500 sm:text-base">
                O TurboClean foi pensado para pequenas tarefas do cotidiano. Você não precisa transformar cada sujeira em um projeto.
              </p>
              <button onClick={buy} className="mt-7 rounded-xl bg-[#111] px-7 py-4 text-xs font-black uppercase tracking-wide text-white transition hover:bg-zinc-800">Quero facilitar minha rotina →</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["/b6.jpg", "/b7.jpg", "/b8.jpg", "/b9.png"].map((src, index) => (
                <div key={src} className={`overflow-hidden rounded-2xl bg-zinc-100 ${index === 1 || index === 3 ? "mt-7" : ""}`}>
                  <ImageWithFallback src={src} alt="TurboClean Pro Max" className="aspect-[4/5] w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="oferta" className="scroll-mt-20 bg-[#111] px-4 py-16 text-white sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 rounded-3xl bg-white p-5 text-[#111] shadow-2xl sm:p-8 lg:grid-cols-[1fr_.85fr] lg:p-10">
              <div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Oferta especial</div>
                <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Leve o TurboClean para a sua rotina.</h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-zinc-500">
                  Uma solução compacta para ter por perto quando aquela sujeira aparecer.
                </p>
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {["TurboClean Pro Max", "Acessórios incluídos", "Frete grátis", "Garantia de 30 dias", "Compra segura", "Pagamento protegido"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm font-semibold">
                      <Check size={17} className="text-[#16a34a]" strokeWidth={3} /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f5f5f3] p-6 sm:p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-zinc-400">TurboClean Pro Max</div>
                <div className="mt-4 text-sm font-semibold text-zinc-400 line-through">R$ 297,00</div>
                <div className="mt-1 text-xs font-bold text-zinc-500">por apenas</div>
                <div className="mt-1 text-5xl font-black tracking-[-0.04em] text-[#16a34a] sm:text-6xl">R$ 89,90</div>
                <div className="mt-2 text-xs text-zinc-500">Condição promocional da oferta</div>
                <button onClick={buy} className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#16a34a] px-5 py-5 text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#15803d]">
                  Garantir o meu <span>→</span>
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400">
                  <Lock size={12} /> Pagamento protegido
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white px-4 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Sem complicação</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-4xl">Tudo para uma compra tranquila.</h2>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                [ShieldCheck, "30 dias de garantia", "Mais tranquilidade para avaliar o produto conforme os termos da oferta."],
                [Lock, "Compra segura", "Pagamento realizado em ambiente protegido."],
                [Truck, "Frete grátis", "Condição de frete grátis apresentada nesta oferta."],
              ].map(([Icon, title, text]) => (
                <div key={String(title)} className="rounded-2xl border border-zinc-200 p-6">
                  <Icon size={25} className="text-[#16a34a]" />
                  <h3 className="mt-5 text-sm font-black">{String(title)}</h3>
                  <p className="mt-2 text-xs leading-5 text-zinc-500">{String(text)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-[#fafafa] px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Dúvidas</div>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] sm:text-5xl">Perguntas frequentes.</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
              {faqs.map(([question, answer], index) => {
                const open = faq === index;
                return (
                  <div key={question} className="border-b border-zinc-200 last:border-0">
                    <button onClick={() => setFaq(open ? null : index)} className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6">
                      <span className="text-sm font-bold">{question}</span>
                      <ChevronDown size={18} className={`shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                    {open && <div className="px-5 pb-5 text-sm leading-6 text-zinc-500 sm:px-6">{answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#111] px-4 py-16 text-center text-white sm:px-6 sm:py-24">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a] text-black"><Zap size={22} /></div>
            <h2 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Sua próxima limpeza pode ser muito mais simples.</h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">Garanta o seu TurboClean enquanto esta condição de oferta estiver disponível.</p>
            <div className="mt-7 flex flex-col items-center gap-3">
              <div className="text-sm text-zinc-500 line-through">R$ 297,00</div>
              <div className="text-4xl font-black text-[#4ade80]">R$ 89,90</div>
              <button onClick={buy} className="mt-2 rounded-2xl bg-[#22c55e] px-9 py-5 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_40px_rgba(34,197,94,.2)] transition hover:bg-[#4ade80]">
                Quero meu TurboClean →
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black px-4 py-8 text-center text-zinc-600 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900"><Zap size={14} /></span>
            <span className="text-sm font-black">TurboClean Pro Max</span>
          </div>
          <div className="mt-5 flex items-center justify-center gap-4 text-[9px] font-bold uppercase tracking-wider">
            <span>Compra segura</span><span>30 dias</span><span>Frete grátis</span>
          </div>
          <p className="mt-5 text-[9px]">© {new Date().getFullYear()} TurboClean Pro Max. Todos os direitos reservados.</p>
        </div>
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
