import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Zap,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "";

const benefits = [
  { icon: Zap, title: "Prático no dia a dia", text: "Ideal para aquela limpeza rápida sem precisar tirar um aspirador grande do armário." },
  { icon: Sparkles, title: "Alcance os cantos", text: "Ajuda a remover poeira, migalhas e pequenas sujeiras de áreas difíceis." },
  { icon: ShieldCheck, title: "Compacto e fácil de guardar", text: "Um formato pensado para ocupar pouco espaço quando não estiver em uso." },
];

const uses = ["Sofá e estofados", "Carro", "Teclado e mesa", "Cantos e frestas", "Migalhas", "Pequenas sujeiras"];

function goToCheckout() {
  if (CHECKOUT_URL) {
    window.location.assign(CHECKOUT_URL);
    return;
  }
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fafaf8] text-[#171717]">
      <div className="bg-[#171717] px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        <span className="mr-1.5 inline-flex align-middle"><Truck className="h-4 w-4" /></span>
        Oferta online • Pagamento seguro • Envio para todo o Brasil
      </div>

      <header className="border-b border-black/5 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <div className="text-lg font-black tracking-tight">CLEAN<span className="text-emerald-600">SWEEP</span></div>
          <button onClick={goToCheckout} className="hidden rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-sm transition hover:bg-emerald-600 sm:block">
            Comprar agora
          </button>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-2 text-xs font-bold text-emerald-700">
              <CircleCheck className="h-4 w-4" /> Mais praticidade para a sua rotina
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Limpeza rápida, sem esforço e sem ocupar espaço.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
              Um aspirador portátil para remover poeira, migalhas e pequenas sujeiras de onde você mais precisa — em poucos minutos.
            </p>

            <div className="mt-7 flex flex-wrap items-end gap-x-5 gap-y-2">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-500">Por apenas</p>
                <p className="text-4xl font-black tracking-tight text-emerald-600">R$ 89,90</p>
              </div>
              <div className="pb-1 text-sm text-neutral-500">
                <span className="font-semibold text-neutral-700">Oferta online</span><br />pagamento seguro
              </div>
            </div>

            <button onClick={goToCheckout} className="mt-7 flex w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-7 py-4 text-base font-black text-white shadow-[0_12px_30px_-12px_rgba(16,185,129,.7)] transition hover:-translate-y-0.5 hover:bg-emerald-600 sm:w-auto">
              QUERO MEU ASPIRADOR <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-3 max-w-md text-center text-xs text-neutral-500 sm:text-left">
              Você será direcionado ao checkout para finalizar seu pedido.
            </p>

            <div className="mt-7 grid max-w-md grid-cols-3 gap-3 border-t border-black/10 pt-5 text-xs font-semibold text-neutral-600">
              <div><ShieldCheck className="mb-1 h-5 w-5 text-emerald-600" />Compra segura</div>
              <div><Truck className="mb-1 h-5 w-5 text-emerald-600" />Envio nacional</div>
              <div><Check className="mb-1 h-5 w-5 text-emerald-600" />Oferta online</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-6 rounded-full bg-emerald-100/70 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 bg-white p-3 shadow-2xl shadow-black/10">
              <img
                src="https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=1100&q=85"
                alt="Aspirador portátil"
                className="aspect-[4/4.5] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute bottom-7 left-7 rounded-2xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Oferta</p>
                <p className="text-2xl font-black text-emerald-600">R$ 89,90</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 sm:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl p-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><Icon className="h-5 w-5" /></div>
              <div><h2 className="font-extrabold">{title}</h2><p className="mt-1 text-sm leading-6 text-neutral-500">{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[.2em] text-emerald-600">Feito para facilitar</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Aquela sujeira pequena não precisa virar uma faxina.</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">
              Tenha uma solução prática para usar sempre que aparecer uma sujeira pontual. Menos preparação, menos trabalho e mais agilidade.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {uses.map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl border border-black/5 bg-white px-3 py-3 text-sm font-semibold shadow-sm">
                  <Check className="h-4 w-4 shrink-0 text-emerald-600" /> {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-[#171717] p-8 text-white sm:p-10">
            <p className="text-sm font-bold text-emerald-400">POR QUE ESCOLHER UM PORTÁTIL?</p>
            <h3 className="mt-3 text-3xl font-black tracking-tight">Porque nem toda sujeira merece uma operação inteira.</h3>
            <div className="mt-7 space-y-4">
              {["Pegue, ligue e limpe.", "Ideal para sujeiras do cotidiano.", "Compacto para deixar sempre à mão."].map((item) => (
                <div key={item} className="flex items-center gap-3 border-b border-white/10 pb-4 text-sm font-semibold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500"><Check className="h-4 w-4" /></span>{item}
                </div>
              ))}
            </div>
            <button onClick={goToCheckout} className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-4 font-black transition hover:bg-emerald-400">
              QUERO APROVEITAR A OFERTA <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="oferta" className="bg-[#171717] px-5 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex w-fit items-center gap-1 text-amber-400">
            {[1,2,3,4,5].map((n) => <Star key={n} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-4 text-sm font-bold uppercase tracking-[.2em] text-emerald-400">Oferta especial online</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Leve o seu Clean Sweep Bot</h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">Uma solução compacta para deixar a limpeza do dia a dia muito mais simples.</p>
          <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-white p-7 text-[#171717] shadow-2xl">
            <p className="text-xs font-black uppercase tracking-widest text-neutral-500">Por apenas</p>
            <p className="mt-1 text-5xl font-black tracking-tight text-emerald-600">R$ 89,90</p>
            <p className="mt-2 text-sm text-neutral-500">Condições de pagamento exibidas no checkout.</p>
            <button onClick={goToCheckout} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-5 py-4 font-black text-white transition hover:bg-emerald-600">
              COMPRAR AGORA <ArrowRight className="h-5 w-5" />
            </button>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-neutral-500"><ShieldCheck className="h-4 w-4 text-emerald-600" /> Ambiente seguro para finalizar</div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
        <p className="text-center text-sm font-black uppercase tracking-[.2em] text-emerald-600">Dúvidas frequentes</p>
        <h2 className="mt-3 text-center text-3xl font-black tracking-tight">Antes de comprar</h2>
        <div className="mt-8 divide-y divide-black/10 rounded-2xl border border-black/5 bg-white">
          {[
            ["O produto é portátil?", "Sim. A proposta da página é um aspirador compacto para limpezas rápidas e pontuais."],
            ["Onde posso usar?", "Em superfícies e situações compatíveis com o produto, como sofá, carro, mesa e cantos. Confira as especificações do modelo antes do uso."],
            ["Como faço o pedido?", "Clique em qualquer botão de compra e você será direcionado ao checkout configurado para finalizar o pagamento."],
            ["Quais são as formas de pagamento?", "As opções disponíveis serão mostradas diretamente no checkout."],
          ].map(([q, a], i) => (
            <div key={q}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold">
                {q}<ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
              </button>
              {openFaq === i && <p className="px-5 pb-5 text-sm leading-6 text-neutral-600">{a}</p>}
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white px-5 py-8 text-center text-xs text-neutral-500">
        <p className="font-bold text-neutral-700">Clean Sweep Bot</p>
        <p className="mt-1">Página de oferta • Informações e condições conforme o produto e checkout configurados.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 shadow-[0_-8px_30px_-20px_rgba(0,0,0,.35)] backdrop-blur sm:hidden">
        <button onClick={goToCheckout} className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3.5 text-sm font-black text-white">
          COMPRAR POR R$ 89,90 <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </main>
  );
}
