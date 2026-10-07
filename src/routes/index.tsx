import { useState } from "react";
import {
  BatteryCharging,
  Check,
  ChevronDown,
  Droplets,
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

const benefits = [
  ["/b0.jpg","Até 20.000Pa de potência","Potência concentrada para remover poeira, sujeira e resíduos.",Zap],
  ["/b1.jpg","Sem fios","Liberdade para limpar onde precisar.",BatteryCharging],
  ["/b2.jpg","Reservatório de 180ml","Capacidade prática para a limpeza do dia a dia.",Droplets],
  ["/b3.jpg","Carregamento USB-C","Mais praticidade para recarregar seu TurboClean.",Usb],
  ["/b4.jpg","Compacto e portátil","Fácil de guardar e transportar.",Zap],
  ["/b5.jpg","Pronto para a rotina","Ideal para carro, casa e pequenas sujeiras.",ShieldCheck],
  ["/b6.jpg","Acessórios versáteis","Alcance diferentes cantos e superfícies.",Check],
  ["/b7.jpg","Limpeza rápida","Resolva pequenas sujeiras sem pegar um aspirador grande.",Zap],
  ["/b8.jpg","Fácil de transportar","Leve seu TurboClean para onde precisar.",Truck],
  ["/b9.png","Uso simples","Design pensado para facilitar sua rotina.",Check],
] as const;

const faqs = [
  ["O TurboClean Pro Max pode ser usado no carro?","Sim. O formato compacto é conveniente para bancos, tapetes, porta-malas, console e áreas de difícil acesso."],
  ["Ele funciona sem fio?","Sim. O TurboClean foi desenvolvido para uso portátil, oferecendo mais liberdade durante a limpeza."],
  ["Como é feito o carregamento?","O aparelho utiliza conexão USB-C para carregamento."],
  ["Como funciona a garantia?","A oferta apresenta garantia de 30 dias, conforme as condições informadas no checkout."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function buy() {
  if (CHECKOUT_URL !== "#oferta") window.location.href = CHECKOUT_URL;
  else scrollToId("oferta");
}

function App() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased">
      <div className="bg-[#09090b] px-4 py-3 text-center text-[11px] font-bold uppercase tracking-wide text-white sm:text-xs">
        ⚠️ ATENÇÃO: Últimas unidades com Frete Grátis para todo o Brasil + Desconto de Lançamento.
      </div>

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-6xl items-center justify-between px-5 sm:px-6">
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})} className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#09090b] text-white"><Zap size={18}/></div>
            <div className="text-left leading-none"><div className="text-sm font-black">TurboClean</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Pro Max</div></div>
          </button>
          <div className="hidden items-center gap-8 md:flex">
            <button onClick={() => scrollToId("beneficios")} className="text-sm font-medium text-zinc-600 hover:text-black">Benefícios</button>
            <button onClick={() => scrollToId("antes-depois")} className="text-sm font-medium text-zinc-600 hover:text-black">Resultados</button>
            <button onClick={() => scrollToId("faq")} className="text-sm font-medium text-zinc-600 hover:text-black">Dúvidas</button>
            <button onClick={buy} className="rounded-full bg-[#16a34a] px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-green-600/20 hover:bg-[#15803d]">Garantir Desconto</button>
          </div>
          <button onClick={() => setMenu(!menu)} className="rounded-xl border border-zinc-200 p-2 md:hidden" aria-label="Abrir menu">{menu ? <X size={20}/> : <Menu size={20}/>}</button>
        </div>
        {menu && <div className="border-t border-zinc-200 bg-white px-5 py-4 md:hidden"><div className="mx-auto flex max-w-6xl flex-col gap-2">
          <button onClick={() => {setMenu(false);scrollToId("beneficios")}} className="rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-zinc-100">Benefícios</button>
          <button onClick={() => {setMenu(false);scrollToId("antes-depois")}} className="rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-zinc-100">Resultados</button>
          <button onClick={() => {setMenu(false);scrollToId("faq")}} className="rounded-xl px-4 py-3 text-left text-sm font-semibold hover:bg-zinc-100">Dúvidas</button>
          <button onClick={() => {setMenu(false);buy()}} className="mt-2 rounded-xl bg-[#16a34a] px-4 py-4 text-sm font-black uppercase text-white">Garantir meu desconto</button>
        </div></div>}
      </header>

      <main>
        <section className="overflow-hidden bg-[#09090b] text-white">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
            <div className="order-2 lg:order-1">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-300"><span className="h-2 w-2 animate-pulse rounded-full bg-[#22c55e]"/>Oferta especial de lançamento</div>
              <h1 className="max-w-xl text-4xl font-black leading-[0.98] tracking-[-0.045em] sm:text-5xl lg:text-[60px]">O Fim do Carro e Estofados <span className="text-[#22c55e]">Sujos em Segundos.</span></h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">Um aspirador portátil potente e compacto para remover a sujeira do carro, sofá, estofados, cantos e superfícies do dia a dia — sem esforço.</p>
              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
                {["Até 20.000Pa","Sem fio","USB-C","Compacto"].map(x => <div key={x} className="flex items-center gap-2 text-sm font-semibold text-zinc-200"><span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#16a34a]"><Check size={12} strokeWidth={3}/></span>{x}</div>)}
              </div>
              <div className="mt-9 rounded-2xl border border-white/10 bg-white/[0.045] p-5 sm:p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-zinc-500">Oferta especial</div>
                <div className="mt-2 flex flex-wrap items-end gap-3"><span className="text-lg font-bold text-red-400 line-through">R$ 297,00</span><span className="text-sm text-zinc-400">por apenas</span><span className="text-4xl font-black text-[#22c55e] sm:text-5xl">R$ 89,90</span></div>
                <p className="mt-2 text-xs text-zinc-500">Condição promocional de lançamento</p>
                <button onClick={buy} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-6 py-5 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(34,197,94,0.22)] hover:bg-[#4ade80] sm:text-base">QUERO GARANTIR MEU TURBOCLEAN <span>→</span></button>
                <div className="mt-4 flex flex-wrap justify-center gap-5 text-[10px] font-bold uppercase tracking-wide text-zinc-500"><span className="flex items-center gap-1"><Lock size={12}/>Compra segura</span><span className="flex items-center gap-1"><Truck size={12}/>Frete grátis</span><span className="flex items-center gap-1"><ShieldCheck size={12}/>30 dias</span></div>
              </div>
            </div>
            <div className="order-1 flex items-center justify-center lg:order-2"><div className="relative w-full max-w-[520px]"><div className="absolute inset-10 rounded-full bg-[#22c55e]/10 blur-3xl"/><div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#18181b] shadow-2xl"><img src="/a0.png" alt="TurboClean Pro Max" className="h-auto w-full object-cover" fetchPriority="high"/></div></div></div>
          </div>
        </section>

        <section className="border-b border-zinc-200 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-zinc-200 sm:grid-cols-4">
            {[["Frete grátis","Para todo Brasil",Truck,"green"],["30 dias","Garantia",ShieldCheck,"green"],["100% seguro","Pagamento protegido",Lock,"gold"],["USB-C","Carregamento prático",Zap,"gold"]].map(([title,text,Icon,tone]) => <div key={String(title)} className="flex items-center justify-center gap-3 px-4 py-5"><Icon size={22} className={tone==="green"?"text-[#16a34a]":"text-[#b08a32]"}/><div><div className="text-xs font-black">{String(title).toUpperCase()}</div><div className="text-[10px] text-zinc-500">{String(text)}</div></div></div>)}
          </div>
        </section>

        <section id="antes-depois" className="bg-[#f5f5f3] px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Na prática</div><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Veja a diferença na limpeza.</h2><p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">Mais praticidade para cuidar dos lugares que acumulam sujeira todos os dias.</p></div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{["/c1.jpg","/c2.jpg","/c3.jpg","/c4.jpg","/c5.jpg"].map((src,i)=><div key={src} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"><img src={src} alt={`Resultado de limpeza ${i+1}`} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/></div>)}</div>
          </div>
        </section>

        <section id="beneficios" className="bg-white px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-6xl"><div className="max-w-2xl"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Por que TurboClean?</div><h2 className="mt-3 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Pequeno no tamanho.<br/>Grande na praticidade.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">Tudo o que você precisa para resolver a sujeira do dia a dia sem depender de um aspirador grande.</p></div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{benefits.map(([image,title,text,Icon])=><article key={String(title)} className="overflow-hidden rounded-2xl border border-zinc-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"><div className="overflow-hidden bg-zinc-100"><img src={String(image)} alt={String(title)} className="aspect-[4/3] w-full object-cover transition duration-500 hover:scale-105" loading="lazy"/></div><div className="p-5"><div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50 text-[#16a34a]"><Icon size={19}/></div><h3 className="mt-4 text-base font-black">{String(title)}</h3><p className="mt-2 text-sm leading-6 text-zinc-500">{String(text)}</p></div></article>)}</div>
          </div>
        </section>

        <section className="bg-[#09090b] px-5 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
            <div><div className="inline-flex rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[#4ade80]">Tecnologia portátil</div><h2 className="mt-5 text-3xl font-black leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl">Chega de carregar um aspirador enorme para resolver uma sujeira pequena.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">O TurboClean Pro Max foi pensado para ficar sempre à mão. Carro, sofá, mesa, teclado, cantos e pequenos resíduos podem ser resolvidos com muito mais praticidade.</p><div className="mt-7 space-y-3">{["Formato compacto e portátil","Alta potência de sucção","Carregamento USB-C","Ideal para carro e casa"].map(x=><div key={x} className="flex items-center gap-3 text-sm font-semibold text-zinc-200"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16a34a] text-black"><Check size={14}/></span>{x}</div>)}</div></div>
            <div className="grid grid-cols-2 gap-3">{["/a2.jpg","/a3.jpg","/a4.jpg","/a5.jpg"].map((src,i)=><div key={src} className={`overflow-hidden rounded-2xl border border-white/10 bg-[#18181b] ${i%2===1?"mt-8":""}`}><img src={src} alt="TurboClean Pro Max" className="aspect-square w-full object-cover" loading="lazy"/></div>)}</div>
          </div>
        </section>

        <section id="oferta" className="bg-[#f5f5f3] px-5 py-16 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-xl"><div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-2xl"><div className="bg-[#09090b] px-6 py-7 text-center text-white"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4ade80]">Oferta de lançamento</div><h2 className="mt-2 text-2xl font-black">TurboClean Pro Max</h2><p className="mt-2 text-xs text-zinc-500">Condição especial por tempo limitado</p></div><div className="p-6 sm:p-8"><div className="text-center"><div className="text-sm font-semibold text-zinc-400">De <span className="text-red-500 line-through">R$ 297,00</span></div><div className="mt-2 text-sm font-bold text-zinc-500">por apenas</div><div className="mt-1 text-5xl font-black text-[#16a34a] sm:text-6xl">R$ 89,90</div></div><div className="mt-7 space-y-3">{["TurboClean Pro Max","Acessórios inclusos","Frete grátis","Garantia de 30 dias","Compra segura"].map(x=><div key={x} className="flex items-center gap-3 border-b border-zinc-100 pb-3 text-sm font-semibold"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-[#16a34a]"><Check size={13}/></span>{x}</div>)}</div><button onClick={buy} className="mt-7 w-full rounded-2xl bg-[#16a34a] px-6 py-5 text-base font-black uppercase tracking-wide text-white shadow-xl shadow-green-600/20 hover:bg-[#15803d]">QUERO MEU TURBOCLEAN</button><div className="mt-5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-wide text-zinc-400"><Lock size={13}/>Ambiente de pagamento protegido</div></div></div></div>
        </section>

        <section className="border-y border-zinc-200 bg-white px-5 py-14 sm:px-6"><div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-3">
          {[["Garantia de 30 dias","Mais tranquilidade para realizar sua compra.",ShieldCheck,"green"],["Compra 100% segura","Seus dados são tratados em ambiente protegido.",Lock,"gold"],["Frete grátis","Envio com frete grátis para todo o Brasil.",Truck,"green"]].map(([title,text,Icon,tone])=><div key={String(title)} className="rounded-2xl border border-zinc-200 bg-white p-6 text-center"><div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${tone==="green"?"bg-green-50 text-[#16a34a]":"bg-amber-50 text-[#b08a32]"}`}><Icon size={24}/></div><h3 className="mt-4 text-sm font-black">{String(title)}</h3><p className="mt-2 text-xs leading-5 text-zinc-500">{String(text)}</p></div>)}
        </div></section>

        <section id="faq" className="bg-[#f5f5f3] px-5 py-16 sm:px-6 sm:py-20"><div className="mx-auto max-w-3xl"><div className="text-center"><div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#16a34a]">Dúvidas</div><h2 className="mt-3 text-3xl font-black tracking-tight">Perguntas frequentes</h2></div><div className="mt-8 overflow-hidden rounded-2xl border border-zinc-200 bg-white">{faqs.map(([question,answer],i)=>{const open=faq===i;return <div key={question} className="border-b border-zinc-200 last:border-b-0"><button onClick={()=>setFaq(open?null:i)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"><span className="text-sm font-bold">{question}</span><ChevronDown size={18} className={`shrink-0 text-zinc-400 transition-transform ${open?"rotate-180":""}`}/></button>{open&&<div className="px-5 pb-5 text-sm leading-6 text-zinc-500">{answer}</div>}</div>})}</div></div></section>

        <section className="bg-[#09090b] px-5 py-16 text-center text-white sm:px-6 sm:py-20"><div className="mx-auto max-w-2xl"><div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#16a34a] text-black"><Zap size={23}/></div><h2 className="mt-6 text-3xl font-black tracking-[-0.035em] sm:text-4xl">Sua próxima limpeza pode ser muito mais simples.</h2><p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-400 sm:text-base">Garanta seu TurboClean Pro Max enquanto a condição promocional estiver disponível.</p><button onClick={buy} className="mt-7 rounded-2xl bg-[#22c55e] px-8 py-5 text-sm font-black uppercase tracking-wide text-black shadow-[0_0_35px_rgba(34,197,94,0.2)] hover:bg-[#4ade80] sm:px-12">GARANTIR MEU DESCONTO →</button></div></section>
      </main>

      <footer className="bg-black px-5 py-8 text-center text-zinc-500 sm:px-6"><div className="mx-auto max-w-6xl"><div className="flex items-center justify-center gap-2 text-white"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#18181b]"><Zap size={15}/></div><span className="text-sm font-black">TurboClean Pro Max</span></div><p className="mx-auto mt-4 max-w-md text-[10px] leading-5 text-zinc-600">Produto destinado à limpeza prática de veículos, estofados e superfícies do dia a dia.</p><div className="mt-5 flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-wide"><span className="flex items-center gap-1"><Lock size={12}/>Compra segura</span><span className="flex items-center gap-1"><ShieldCheck size={12}/>Garantia</span><span className="flex items-center gap-1"><Truck size={12}/>Frete grátis</span></div><div className="mt-6 border-t border-white/5 pt-5 text-[10px] text-zinc-700">© {new Date().getFullYear()} TurboClean Pro Max. Todos os direitos reservados.</div></div></footer>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-black/95 p-3 backdrop-blur-xl md:hidden"><button onClick={buy} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#22c55e] px-4 py-4 text-sm font-black uppercase text-black shadow-lg">GARANTIR POR R$ 89,90 →</button></div>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: App });
