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

const specs = [
  { icon: Zap, title: "Alta sucção", text: "Potência para a sujeira do dia a dia." },
  { icon: Wind, title: "Motor sem escovas", text: "Construção pensada para uma operação prática." },
  { icon: BatteryCharging, title: "Sem fio + USB-C", text: "Mais liberdade para limpar onde precisar." },
  { icon: PackageCheck, title: "Acessórios", text: "Recursos para diferentes superfícies e cantos." },
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
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function ProductGallery() {
  const [active, setActive] = useState(0);
  const previous = () => setActive((value) => (value - 1 + gallery.length) % gallery.length);
  const next = () => setActive((value) => (value + 1) % gallery.length);

  return (
    <div className="min-w-0">
      <div className="relative overflow-hidden rounded-[24px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:rounded-[28px]">
        <div className="flex aspect-square items-center justify-center bg-white sm:aspect-[1.08/1]">
          <img src={gallery[active]} alt="TurboClean Pro Max" className="h-full w-full object-contain p-5 sm:p-9" loading="eager" decoding="async" />
        </div>
        <button type="button" onClick={previous} aria-label="Imagem anterior" className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md"><ChevronLeft size={18} /></button>
        <button type="button" onClick={next} aria-label="Próxima imagem" className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-900 shadow-md"><ChevronRight size={18} /></button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-zinc-950 px-3 py-1.5 text-[9px] font-bold tracking-widest text-white">{active + 1} / {gallery.length}</div>
      </div>
      <div className="mt-3 overflow-x-auto pb-1">
        <div className="flex min-w-max gap-2">
          {gallery.map((src, index) => (
            <button type="button" key={src} onClick={() => setActive(index)} aria-label={`Ver imagem ${index + 1}`} className={`h-[64px] w-[64px] shrink-0 overflow-hidden rounded-xl border-2 bg-white sm:h-[70px] sm:w-[70px] ${active === index ? "border-zinc-950" : "border-zinc-200 hover:border-zinc-400"}`}>
              <img src={src} alt="" className="h-full w-full object-contain p-1.5" loading="lazy" decoding="async" />
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
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center"><Truck className="h-4 w-4 text-emerald-700" /><span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">Frete grátis</span></div>
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center"><ShieldCheck className="h-4 w-4 text-blue-600" /><span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">Compra segura</span></div>
      <div className="flex flex-col items-center gap-1.5 px-2 py-4 text-center"><Lock className="h-4 w-4 text-blue-600" /><span className="text-[9px] font-black uppercase tracking-wide text-zinc-600">Pagamento protegido</span></div>
    </div>
  );
}

function App() {
  return (
    <div style={{ fontFamily: '"Manrope", ui-sans-serif, system-ui, sans-serif' }} className="min-h-screen bg-white pb-20 text-zinc-950 antialiased md:pb-0">
      <div className="sticky top-0 z-50 bg-emerald-600 px-4 py-2.5 text-center text-[9px] font-black uppercase tracking-[0.18em] text-white sm:text-[10px]">OFERTA ESPECIAL <span className="mx-1.5 text-white">•</span> FRETE GRÁTIS</div>
      <header className="border-b border-zinc-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:px-8">
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-2.5 text-left" aria-label="Voltar ao topo">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white"><Zap size={16} fill="currentColor" /></span>
            <span><span className="block text-sm font-black tracking-tight text-zinc-950">TurboClean</span><span className="block text-[8px] font-bold uppercase tracking-[0.24em] text-zinc-400">Pro Max</span></span>
          </button>
          <button type="button" onClick={buy} className="rounded-full bg-[#16A34A] px-4 py-2.5 text-[10px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#15803D] sm:px-5">Comprar agora</button>
        </div>
      </header>

      <main>
        <section className="bg-white px-4 py-7 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_.92fr] lg:gap-14">
            <ProductGallery />
            <div className="rounded-[24px] border border-zinc-200 bg-white p-6 shadow-[0_18px_60px_rgba(15,23,42,0.07)] sm:p-9 lg:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.18em] text-blue-700"><Sparkles size={12} />Condição promocional</div>
              <h1 className="mt-5 max-w-xl text-[38px] font-black leading-[0.96] tracking-[-0.055em] text-zinc-950 sm:text-5xl lg:text-[60px]">Limpeza potente. Onde a sujeira realmente está.</h1>
              <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base">O aspirador compacto para carro, casa, sofá, colchão e cantos difíceis — sem fio e pronto para usar.</p>
              <div className="mt-6 grid gap-2 text-sm font-semibold text-zinc-800 sm:grid-cols-2">
                {["Alta sucção", "Sem fio", "Motor sem escovas", "Recarga USB-C"].map((item) => <div key={item} className="flex items-center gap-2.5"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-700"><Check size={12} strokeWidth={3} /></span>{item}</div>)}
              </div>
              <div className="mt-7 border-t border-zinc-800 pt-6">
                <span className="block text-xs font-bold text-red-600 line-through">R$ 179,90</span>
                <div className="mt-1 flex items-end gap-3"><span className="text-[52px] font-black leading-none tracking-[-0.06em] sm:text-[62px]">R$ 89,90</span></div>
                <p className="mt-2 text-xs font-semibold text-zinc-500">Parcelamento disponível no checkout.</p>
                <button type="button" onClick={buy} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-5 py-5 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(22,163,74,0.22)] transition hover:bg-[#15803D]">GARANTIR DESCONTO + FRETE GRÁTIS <ArrowRight size={18} /></button>
                <div className="mt-3 flex items-center justify-center gap-2 text-[10px] font-semibold text-zinc-500"><Lock size={12} className="text-blue-600" />Checkout seguro e pagamento protegido</div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-5 max-w-7xl overflow-hidden rounded-2xl bg-white"><SecurityBadges /></div>
        </section>

        <section className="border-y border-zinc-200 bg-[#f7f7f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] lg:grid-cols-2">
              <div className="flex min-h-[380px] items-center justify-center bg-white p-6 sm:min-h-[500px] sm:p-10 lg:min-h-[540px]">
                <img src="/L2.jpg" alt="Sujeira no tapete do carro" className="h-full max-h-[500px] w-full rounded-2xl object-contain" loading="lazy" decoding="async" />
              </div>
              <div className="flex items-center px-7 py-10 sm:px-12 lg:px-16 lg:py-14">
                <div className="max-w-xl">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-red-600">O problema</p>
                  <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-zinc-950 sm:text-5xl lg:text-6xl">A sujeira se acumula onde é difícil limpar.</h2>
                  <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">Areia, poeira e migalhas ficam no tapete e nos cantos do carro, deixando a limpeza mais difícil.</p>
                  <button type="button" onClick={buy} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-[0_14px_30px_rgba(22,163,74,0.2)] transition hover:bg-[#15803D] sm:w-auto">RESOLVER ISSO <ArrowRight size={18} /></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-zinc-200 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Especificações</p>
                <h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-zinc-950 sm:text-5xl">Feito para facilitar.</h2>
                <p className="mt-5 max-w-md text-sm leading-6 text-zinc-600 sm:text-base">Compacto, sem fio e pensado para entrar na rotina sem ocupar espaço.</p>
                <div className="mt-8 rounded-2xl border border-zinc-200 bg-[#f7f7f5] p-5">
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wide"><PackageCheck size={17} className="text-[#16A34A]" />O que vem na caixa</div>
                  <ul className="mt-4 space-y-3">{includedItems.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-zinc-700"><Check size={16} className="mt-0.5 shrink-0 text-[#16A34A]" strokeWidth={3} />{item}</li>)}</ul>
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">{specs.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-950 text-white"><Icon size={19} /></div><h3 className="mt-5 text-base font-black text-zinc-950">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p></article>)}</div>
            </div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-[#f7f7f5] px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center"><p className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-600">Provas sociais</p><h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-zinc-950 sm:text-5xl">Experiências reais de clientes.</h2><p className="mt-4 text-sm leading-6 text-zinc-600">Área preparada para inserir fotos, nomes e avaliações reais, sem depoimentos inventados.</p></div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">{[1, 2, 3].map((item) => <div key={item} className="min-h-[190px] rounded-2xl border border-dashed border-zinc-300 bg-white p-6"><div className="flex items-center gap-1 text-zinc-300">{[1, 2, 3, 4, 5].map((star) => <Sparkles key={star} size={14} />)}</div><p className="mt-7 text-[10px] font-black uppercase tracking-[0.18em] text-zinc-400">Avaliação real</p><p className="mt-2 text-sm leading-6 text-zinc-500">Insira aqui uma avaliação verificada quando houver conteúdo real de cliente disponível.</p></div>)}</div>
          </div>
        </section>

        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="text-center"><p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-700">Dúvidas frequentes</p><h2 className="mt-3 text-4xl font-black leading-[0.98] tracking-[-0.05em] text-zinc-950 sm:text-5xl">Tudo o que você precisa saber antes de comprar.</h2></div>
            <div className="mt-10 divide-y divide-zinc-200 rounded-3xl border border-zinc-200 bg-white">
              {[
                ["Qual é o prazo de entrega?", "O prazo e as opções disponíveis aparecem no checkout de acordo com o endereço informado."],
                ["Posso pagar com Pix ou cartão?", "Sim. As opções de pagamento disponíveis são apresentadas de forma segura no checkout."],
                ["O produto é sem fio?", "Sim. O TurboClean foi pensado para uso portátil e possui recarga por USB-C."],
                ["O que vem na caixa?", "Você recebe o TurboClean Pro Max, acessórios para diferentes usos, cabo USB-C e a estrutura compacta do produto."],
                ["A compra é segura?", "O pagamento acontece em ambiente de checkout protegido, com os métodos disponíveis para sua compra."],
              ].map(([question, answer]) => <details key={question} className="group px-5 py-5 sm:px-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-extrabold text-zinc-950">{question}<span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-zinc-100 text-zinc-700 transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pt-3 pr-10 text-sm leading-6 text-zinc-600">{answer}</p></details>)}
            </div>
          </div>
        </section>

        <section id="oferta" className="bg-zinc-950 px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-emerald-300">Oferta TurboClean Pro Max</p>
            <h2 className="mt-4 text-4xl font-black leading-[0.98] tracking-[-0.05em] sm:text-6xl">Mais praticidade. Menos sujeira acumulada.</h2>
            <div className="mt-8"><span className="block text-sm font-bold text-red-400 line-through">R$ 179,90</span><span className="mt-1 block text-6xl font-black tracking-[-0.06em] sm:text-7xl">R$ 89,90</span><p className="mt-2 text-xs font-semibold text-zinc-400">Frete grátis • Pagamento seguro</p></div>
            <button type="button" onClick={buy} className="mx-auto mt-8 flex w-full max-w-xl items-center justify-center gap-2 rounded-2xl bg-[#22C55E] px-6 py-5 text-sm font-black uppercase tracking-wide text-zinc-950 shadow-[0_18px_40px_rgba(34,197,94,0.2)] transition hover:bg-[#16A34A] hover:text-white">GARANTIR DESCONTO + FRETE GRÁTIS <ArrowRight size={19} /></button>
            <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400"><span className="inline-flex items-center gap-1.5"><Lock size={13} />Checkout seguro</span><span className="inline-flex items-center gap-1.5"><ShieldCheck size={13} />Compra protegida</span></div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="flex items-center gap-2.5"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-950 text-white"><Zap size={14} fill="currentColor" /></span><div><p className="text-sm font-black text-zinc-950">TurboClean Pro Max</p><p className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">Compra segura</p></div></div>
          <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-wide text-zinc-500"><span className="inline-flex items-center gap-1.5"><CreditCard size={14} />Cartão</span><span className="inline-flex items-center gap-1.5"><Sparkles size={14} />Pix</span></div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-white/95 p-2.5 shadow-[0_-8px_30px_rgba(15,23,42,0.10)] backdrop-blur md:hidden"><button type="button" onClick={buy} className="flex w-full items-center justify-center rounded-xl bg-[#16A34A] px-4 py-3.5 text-xs font-black uppercase tracking-wide text-white shadow-lg">GARANTIR DESCONTO — R$ 89,90</button></div>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
