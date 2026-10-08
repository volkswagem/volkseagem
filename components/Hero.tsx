import { BookOpen, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-copy" aria-labelledby="page-title">
      <div className="brand-mark" aria-hidden="true">
        <div className="brand-word">FINANCIA<span className="text-[#16c7b7]">+</span><small>PASSO</small></div>
      </div>
      <h1 id="page-title">FinanciaPasso</h1>
      <p><ShieldCheck className="mr-1 inline-block text-[#25d6d1]" size={13} aria-hidden="true" /> ORIENTAÇÃO EDUCATIVA E INDEPENDENTE</p>
      <div className="mt-3 inline-flex items-center gap-2 rounded-lg border border-[#bb8cff]/45 bg-[#bb8cff]/10 px-3 py-2 text-[10px] font-bold leading-4 text-[#e9ddff]">
        <BookOpen size={14} className="shrink-0" aria-hidden="true" />
        Este material não é o site da Volkswagen nem presta atendimento financeiro.
      </div>
    </section>
  );
}
