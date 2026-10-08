import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import StepGuide from '@/components/StepGuide';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <StepGuide />
        <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
          <div className="rounded-[2rem] border border-mint/40 bg-[#e9f8f4] p-6 sm:p-9">
            <p className="eyebrow text-xs font-black uppercase text-mint-dark">limites claros</p>
            <h2 className="mt-3 text-2xl font-black tracking-[-0.03em] text-ink">Este guia não substitui o atendimento do seu contrato.</h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-ink-soft">Valores, descontos, datas, documentos e condições de quitação só podem ser confirmados pelo agente financeiro responsável. Não há promessa de aprovação, redução de dívida, liberação imediata ou atendimento prioritário.</p>
            <a href="#seguranca" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm font-black text-ink hover:bg-white">
              Ver avisos de segurança <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
