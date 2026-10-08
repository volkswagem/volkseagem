import { ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-copy" aria-labelledby="page-title">
      <div className="brand-mark" aria-hidden="true">
        <div className="brand-word">FINANCIA<span className="text-[#16c7b7]">+</span><small>PASSO</small></div>
      </div>
      <h1 id="page-title">FinanciaPasso</h1>
      <p><ShieldCheck className="mr-1 inline-block text-[#25d6d1]" size={13} aria-hidden="true" /> ORIENTAÇÃO INDEPENDENTE PARA CLIENTES DE FINANCIAMENTO</p>
    </section>
  );
}
