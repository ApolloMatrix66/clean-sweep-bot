import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, BatteryCharging, Check, ChevronDown, CircleCheck, Droplets,
  Gauge, HardDrive, LockKeyhole, Menu, PackageCheck, PlugZap, ShieldCheck,
  Sparkles, Star, Usb, X, Zap,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Index });
const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "";

const heroSpecs = [
  { image: "/a2.jpg", title: "20.000Pa", text: "Alta força de sucção" },
  { image: "/a3.jpg", title: "96.000 RPM", text: "Motor sem escovas" },
  { image: "/a4.jpg", title: "180ml", text: "Reservatório amplo" },
  { image: "/a5.jpg", title: "USB-C", text: "Recarga prática" },
  { image: "/a6.jpg", title: "Multiuso", text: "Carro, sofá e casa" },
  { image: "/a7.jpg", title: "Compacto", text: "Fácil de guardar" },
  { image: "/a8.jpg", title: "5 bicos", text: "Para diferentes tarefas" },
  { image: "/a9.jpg", title: "Portátil", text: "Limpeza onde precisar" },
];

const beforeAfter = [
  { image: "/c1.jpg", label: "Sofás e estofados", text: "Migalhas, poeira e sujeiras do dia a dia." },
  { image: "/c2.jpg", label: "Bancos do carro", text: "Limpe areia e resíduos sem desmontar nada." },
  { image: "/c3.jpg", label: "Frestas difíceis", text: "Alcance espaços que normalmente acumulam sujeira." },
  { image: "/c4.jpg", label: "Colchões e tecidos", text: "Uma ajuda prática para a manutenção da limpeza." },
  { image: "/c5.jpg", label: "Detalhes e cantos", text: "Acabamento rápido onde o aspirador comum não chega." },
];

const performance = [
  { image: "/b0.jpg", icon: Gauge, eyebrow: "POTÊNCIA", title: "20.000Pa de sucção", text: "Força de sucção projetada para lidar com poeira, areia, migalhas e pequenas sujeiras em diferentes superfícies." },
  { image: "/b1.jpg", icon: Zap, eyebrow: "MOTOR", title: "Até 96.000 RPM", text: "Motor sem escovas para entregar alto desempenho em um corpo compacto e fácil de manusear." },
  { image: "/b2.jpg", icon: Droplets, eyebrow: "CAPACIDADE", title: "Reservatório de 180ml", text: "Mais espaço para acumular a sujeira antes de precisar esvaziar o reservatório." },
  { image: "/b3.jpg", icon: BatteryCharging, eyebrow: "BATERIA", title: "Modos otimizados", text: "Escolha a intensidade adequada para cada tarefa e aproveite melhor a autonomia disponível." },
  { image: "/b4.jpg", icon: HardDrive, eyebrow: "PROTEÇÃO", title: "Estojo rígido", text: "Organização e proteção para guardar o aparelho e seus acessórios com mais praticidade." },
  { image: "/b5.jpg", icon: PackageCheck, eyebrow: "MANUTENÇÃO", title: "Guia de cuidados", text: "Orientações para limpeza, manutenção e resolução de dúvidas durante o uso." },
];

const accessories = [
  { image: "/b6.jpg", title: "Bico para frestas", text: "Para cantos estreitos e espaços difíceis." },
  { image: "/b7.jpg", title: "Bico de escova", text: "Para superfícies e tecidos que pedem mais delicadeza." },
  { image: "/b8.jpg", title: "Bico multiuso", text: "Versatilidade para diferentes situações do cotidiano." },
  { image: "/b9.png", title: "Acessório extra", text: "Mais possibilidades para adaptar a limpeza à tarefa." },
  { image: "/a8.jpg", title: "Conjunto de acessórios", text: "Tenha as ferramentas certas sempre à mão." },
];

const faqs = [
  ["Onde posso usar o TurboClean Pro Max?", "Ele foi pensado para limpezas rápidas em locais como carro, sofá, bancos, frestas, mesas, colchões e outros espaços compatíveis com o uso de um aspirador portátil."],
  ["O que significa 20.000Pa?", "É uma medida de pressão de sucção usada para indicar a capacidade de aspiração. Na prática, o produto foi projetado para ajudar a remover poeira, areia, migalhas e pequenas sujeiras."],
  ["Como faço a recarga?", "O aparelho utiliza recarga via USB-C. Use uma fonte e cabo compatíveis com as orientações do fabricante."],
  ["O reservatório é fácil de limpar?", "Sim. A proposta do reservatório removível é facilitar o descarte da sujeira e a manutenção do aparelho. Siga sempre o manual do produto."],
  ["O produto vem com acessórios?", "Sim. A página apresenta um conjunto de 5 bicos/acessórios para diferentes necessidades de limpeza."],
  ["Como comprar?", "Clique em qualquer botão de compra. O botão leva ao checkout configurado para finalizar o pedido com segurança."],
];

function goToCheckout() {
  if (CHECKOUT_URL) {
    window.location.assign(CHECKOUT_URL);
    return;
  }
  document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
}

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} loading="lazy" className={\`h-full w-full object-cover \${className}\`} />;
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f4f4f2] text-[#111111] pb-20 sm:pb-0">
      <div className="bg-[#0b0b0c] px-4 py-2.5 text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs">
        <span className="text-white/60">TurboClean Pro Max</span><span className="mx-2 text-white/25">•</span><span>Limpeza potente onde você precisar</span>
      </div>
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#inicio" className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#111] text-white"><Zap className="h-5 w-5 fill-current" /></span><span className="text-sm font-black uppercase tracking-tight sm:text-base">TurboClean <span className="text-neutral-500">Pro Max</span></span></a>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-neutral-600 md:flex"><a href="#desempenho">Desempenho</a><a href="#antes-depois">Aplicações</a><a href="#acessorios">Acessórios</a><a href="#faq">Dúvidas</a></nav>
          <div className="flex items-center gap-2"><button onClick={goToCheckout} className="hidden rounded-full bg-[#111] px-5 py-2.5 text-xs font-black text-white sm:block">Garantir com Desconto</button><button aria-label="Abrir menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded-xl p-2 md:hidden">{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
        </div>
        {menuOpen && <div className="border-t border-black/5 bg-white px-5 py-4 md:hidden"><div className="flex flex-col gap-4 text-sm font-bold"><a onClick={() => setMenuOpen(false)} href="#desempenho">Desempenho</a><a onClick={() => setMenuOpen(false)} href="#antes-depois">Aplicações</a><a onClick={() => setMenuOpen(false)} href="#acessorios">Acessórios</a><a onClick={() => setMenuOpen(false)} href="#faq">Dúvidas</a><button onClick={goToCheckout} className="rounded-xl bg-[#111] px-4 py-3 text-white">Garantir com Desconto</button></div></div>}
      </header>

      <section id="inicio">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-8 lg:py-20">
          <div><div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-[11px] font-black uppercase tracking-wider shadow-sm"><CircleCheck className="h-4 w-4" /> Potência compacta para o dia a dia</div><h1 className="max-w-2xl text-[42px] font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[72px]">O Fim do Carro e Estofados Sujos em Segundos</h1><p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">Areia no banco, migalhas no sofá, poeira nas frestas? O <strong className="text-neutral-900">TurboClean Pro Max</strong> coloca potência de limpeza na sua mão, sem depender de um aspirador grande para cada sujeira do cotidiano.</p><div className="mt-7 flex flex-wrap items-center gap-3"><button onClick={goToCheckout} className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111] px-7 py-4 text-sm font-black text-white sm:w-auto">GARANTIR COM DESCONTO <ArrowRight className="h-5 w-5" /></button><a href="#desempenho" className="inline-flex w-full items-center justify-center rounded-2xl border border-black/10 bg-white px-6 py-4 text-sm font-black sm:w-auto">Ver detalhes</a></div><div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs font-bold text-neutral-600"><span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Compra segura</span><span className="inline-flex items-center gap-2"><Usb className="h-4 w-4" /> USB-C</span><span className="inline-flex items-center gap-2"><PackageCheck className="h-4 w-4" /> 5 acessórios</span></div></div>
          <div className="relative"><div className="absolute -inset-4 rounded-[3rem] bg-black/5 blur-2xl" /><div className="relative overflow-hidden rounded-[2rem] bg-[#111] p-2 shadow-2xl"><div className="aspect-[4/4.6] overflow-hidden rounded-[1.5rem] bg-neutral-900"><ProductImage src="/a0.png" alt="TurboClean Pro Max" /></div><div className="absolute bottom-7 left-7 rounded-2xl border border-white/10 bg-black/80 px-4 py-3 text-white"><p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/50">TurboClean</p><p className="text-lg font-black">Pro Max</p></div><div className="absolute right-7 top-7 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-wider text-black">Alta performance</div></div></div>
        </div>
        <div className="border-y border-black/10 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-black/5 sm:grid-cols-4 lg:grid-cols-8">{heroSpecs.map((spec) => <div key={spec.title} className="bg-white px-3 py-5 text-center"><div className="mx-auto mb-3 h-14 w-14 overflow-hidden rounded-xl bg-neutral-100"><ProductImage src={spec.image} alt={spec.title} /></div><p className="text-sm font-black">{spec.title}</p><p className="mt-1 text-[10px] font-semibold leading-4 text-neutral-500">{spec.text}</p></div>)}</div></div>
      </section>

      <section id="antes-depois" className="bg-[#0b0b0c] px-5 py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-3xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-white/45">Da sujeira para o cuidado</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-6xl">A sujeira aparece. A solução também.</h2><p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">Não espere a próxima faxina para resolver uma sujeira simples. O TurboClean Pro Max foi pensado para aqueles momentos em que você quer limpar agora e seguir a vida.</p></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">{beforeAfter.map((item, index) => <article key={item.label} className={\`group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] \${index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}\`}><div className={index === 0 ? "aspect-[4/4.5]" : "aspect-[4/4]"}><ProductImage src={item.image} alt={item.label} className="transition duration-500 group-hover:scale-105" /></div><div className="p-5"><p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">Aplicação</p><h3 className="mt-2 text-lg font-black">{item.label}</h3><p className="mt-2 text-sm leading-6 text-white/55">{item.text}</p></div></article>)}</div></div></section>

      <section id="desempenho" className="bg-[#e9e9e7] px-5 py-16 sm:py-24"><div className="mx-auto max-w-7xl"><div className="grid items-end gap-6 lg:grid-cols-2"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">Engenharia para o cotidiano</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Potência sem transformar a limpeza em esforço.</h2></div><p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">Um conjunto de recursos pensado para entregar praticidade: motor de alta rotação, sucção de 20.000Pa, reservatório de 180ml, modos de bateria e acessórios para diferentes tarefas.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{performance.map(({ image, icon: Icon, eyebrow, title, text }) => <article key={title} className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"><div className="aspect-[16/10] bg-neutral-200"><ProductImage src={image} alt={title} /></div><div className="p-6"><div className="flex items-center gap-2 text-neutral-500"><Icon className="h-4 w-4" /><span className="text-[10px] font-black tracking-[0.2em]">{eyebrow}</span></div><h3 className="mt-3 text-2xl font-black tracking-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p></div></article>)}</div></div></section>

      <section className="bg-white px-5 py-16 sm:py-24"><div className="mx-auto max-w-7xl"><div className="grid items-center gap-10 lg:grid-cols-2"><div className="overflow-hidden rounded-[2rem] bg-[#111]"><ProductImage src="/b5.jpg" alt="Guia de manutenção do TurboClean Pro Max" /></div><div><p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-500">Pensado para continuar fácil</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Potência é importante. Praticidade também.</h2><p className="mt-5 text-base leading-7 text-neutral-600">Do armazenamento à manutenção, a experiência foi pensada para ser simples. Use, esvazie, cuide e deixe pronto para a próxima limpeza.</p><div className="mt-7 space-y-4">{[["Estojo rígido","Mais organização para aparelho e acessórios."],["Guia de manutenção","Orientações para conservar o desempenho."],["USB-C","Recarga prática com conexão amplamente utilizada."]].map(([title,text]) => <div key={title} className="flex gap-4 rounded-2xl border border-black/10 p-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-100"><Check className="h-5 w-5" /></div><div><h3 className="font-black">{title}</h3><p className="mt-1 text-sm text-neutral-500">{text}</p></div></div>)}</div></div></div></div></section>

      <section id="acessorios" className="bg-[#111112] px-5 py-16 text-white sm:py-24"><div className="mx-auto max-w-7xl"><div className="max-w-2xl"><p className="text-xs font-black uppercase tracking-[0.25em] text-white/40">Versatilidade</p><h2 className="mt-3 text-4xl font-black tracking-[-0.04em] sm:text-6xl">Um bico certo para cada detalhe.</h2><p className="mt-5 text-white/55">Cinco opções para adaptar o fluxo de limpeza a diferentes superfícies, cantos e situações.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{accessories.map((item) => <article key={item.title} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]"><div className="aspect-square bg-neutral-900"><ProductImage src={item.image} alt={item.title} /></div><div className="p-5"><h3 className="font-black">{item.title}</h3><p className="mt-2 text-sm leading-5 text-white/45">{item.text}</p></div></article>)}</div><div className="mt-8 grid gap-4 sm:grid-cols-3">{[[Usb,"Recarga USB-C","Praticidade para recarregar."],[LockKeyhole,"Uso protegido","Design pensado para guardar e transportar."],[Sparkles,"Limpeza multiuso","Mais versatilidade no dia a dia."]].map(([Icon,title,text]) => { const I = Icon as typeof Usb; return <div key={title as string} className="rounded-2xl border border-white/10 p-5"><I className="h-5 w-5 text-white" /><h3 className="mt-3 font-black">{title as string}</h3><p className="mt-1 text-sm text-white/45">{text as string}</p></div>; })}</div></div></section>

      <section id="oferta" className="bg-[#f4f4f2] px-5 py-16 sm:py-24"><div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b0b0c] text-white shadow-2xl"><div className="grid items-center lg:grid-cols-[1fr_0.8fr]"><div className="p-7 sm:p-12 lg:p-14"><p className="text-xs font-black uppercase tracking-[0.25em] text-white/40">TurboClean Pro Max</p><h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl">Chega de deixar a sujeira para depois.</h2><p className="mt-5 max-w-xl leading-7 text-white/55">Tenha uma solução portátil para cuidar dos detalhes que fazem diferença na aparência do seu carro e da sua casa.</p><div className="mt-7 space-y-3">{["20.000Pa de sucção","Motor de até 96.000 RPM","Reservatório de 180ml","5 bicos/acessórios","Recarga USB-C"].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-bold"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-black"><Check className="h-4 w-4" /></span>{item}</div>)}</div></div><div className="border-t border-white/10 p-7 sm:p-10 lg:border-l lg:border-t-0"><div className="rounded-3xl bg-white p-7 text-center text-black"><p className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Oferta online</p><p className="mt-2 text-5xl font-black tracking-tight">R$ 89,90</p><p className="mt-3 text-xs leading-5 text-neutral-500">As condições e formas de pagamento disponíveis serão apresentadas no checkout.</p><button onClick={goToCheckout} className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#111] px-5 py-4 text-sm font-black text-white">GARANTIR COM DESCONTO <ArrowRight className="h-5 w-5" /></button><div className="mt-4 flex items-center justify-center gap-2 text-[11px] font-bold text-neutral-500"><ShieldCheck className="h-4 w-4" /> Checkout seguro</div></div></div></div></div></section>

      <section id="faq" className="bg-white px-5 py-16 sm:py-24"><div className="mx-auto max-w-3xl"><div className="text-center"><p className="text-xs font-black uppercase tracking-[0.25em] text-neutral-400">FAQ</p><h2 className="mt-3 text-4xl font-black tracking-tight">Perguntas frequentes</h2></div><div className="mt-10 divide-y divide-black/10 rounded-3xl border border-black/10">{faqs.map(([question,answer],index) => <div key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left font-black sm:px-7"><span>{question}</span><ChevronDown className={\`h-5 w-5 shrink-0 transition-transform \${openFaq === index ? "rotate-180" : ""}\`} /></button>{openFaq === index && <p className="px-5 pb-6 text-sm leading-6 text-neutral-600 sm:px-7">{answer}</p>}</div>)}</div></div></section>

      <footer className="border-t border-black/10 bg-[#0b0b0c] px-5 py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black"><Zap className="h-5 w-5 fill-current" /></span><span className="font-black">TurboClean Pro Max</span></div><p className="mt-3 max-w-md text-xs leading-5 text-white/40">Tecnologia e praticidade para uma limpeza mais rápida no dia a dia.</p></div><div className="text-left text-xs text-white/40 sm:text-right"><div className="mb-3 flex flex-wrap gap-4 sm:justify-end"><span className="inline-flex items-center gap-1.5"><LockKeyhole className="h-3.5 w-3.5" /> Pagamento seguro</span><span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5" /> Ambiente protegido</span></div><p>© {new Date().getFullYear()} TurboClean Pro Max. Todos os direitos reservados.</p></div></div></footer>

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-black/10 bg-white/95 p-3 shadow-[0_-12px_35px_-20px_rgba(0,0,0,.35)] backdrop-blur sm:hidden"><button onClick={goToCheckout} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#111] px-5 py-3.5 text-sm font-black text-white">GARANTIR COM DESCONTO <ArrowRight className="h-5 w-5" /></button></div>
    </main>
  );
}
