import { ArrowRight, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="absolute inset-0 grid-paper opacity-70" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-24">
        <div>
          <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-mint/40 bg-white px-3 py-2 text-[11px] font-black uppercase text-mint-dark">
            <ShieldCheck size={14} aria-hidden="true" /> orientação sem recolha de dados
          </p>
          <h1 className="display-title max-w-3xl text-4xl font-black leading-[0.98] text-ink sm:text-6xl lg:text-[4.5rem]">
            Encontre o canal certo para cuidar do seu financiamento.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft sm:text-xl">
            Um guia independente para localizar, com mais segurança, os canais oficiais de segunda via, saldo e quitação. Comece pelo agente que aparece no seu contrato.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#acoes" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-black text-ink transition-colors hover:bg-[#42d8ca]">
              Ver ações rápidas <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#seguranca" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-black text-ink transition-colors hover:bg-white">
              Como evitar golpes
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold text-muted">
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-mint-dark" aria-hidden="true" /> Sem formulário</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-mint-dark" aria-hidden="true" /> Sem cobrança</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 size={17} className="text-mint-dark" aria-hidden="true" /> Links identificados</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[460px]" aria-label="Ilustração de um fluxo seguro de documentos" role="img">
          <div className="absolute -left-3 top-14 h-40 w-40 rounded-full bg-mint/20 blur-3xl" aria-hidden="true" />
          <div className="relative rounded-[2rem] border border-ink/10 bg-ink p-5 shadow-float sm:p-7">
            <div className="flex items-center justify-between border-b border-white/15 pb-5 text-white">
              <div>
                <p className="eyebrow text-[10px] font-bold uppercase text-white/50">rota de atendimento</p>
                <p className="mt-1 text-lg font-black">Do contrato ao canal</p>
              </div>
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-black text-ink">01—03</span>
            </div>
            <div className="relative space-y-4 py-6">
              <div className="absolute left-[18px] top-9 h-[calc(100%-72px)] w-px bg-mint/40" aria-hidden="true" />
              {[
                ['01', 'Identifique o agente', 'Veja o nome no contrato ou boleto.'],
                ['02', 'Abra o canal oficial', 'Confirme o domínio antes de entrar.'],
                ['03', 'Emita e confirme', 'Guarde o comprovante e valide a baixa.'],
              ].map(([number, title, description]) => (
                <div className="relative flex gap-4" key={number}>
                  <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-ink bg-mint text-xs font-black text-ink">{number}</span>
                  <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                    <p className="font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-5 text-white/65">{description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-mint/35 bg-mint/10 px-4 py-3 text-sm font-semibold text-white/85">
              <FileText size={18} className="shrink-0 text-mint" aria-hidden="true" />
              <span>Você não precisa digitar nenhum dado neste guia.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
