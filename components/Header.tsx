import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div className="flex items-center justify-between gap-5">
          <a href="#inicio" className="group inline-flex items-center gap-3" aria-label="FinanciaPasso, voltar ao início">
            <span className="flex h-10 w-1.5 items-center justify-center rounded-full bg-mint transition-transform group-hover:scale-y-125" aria-hidden="true" />
            <span>
              <span className="block text-lg font-black tracking-[-0.04em] text-ink">FinanciaPasso</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-muted">guia independente</span>
            </span>
          </a>
          <span className="hidden items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-xs font-bold text-ink-soft sm:inline-flex lg:hidden">
            <ShieldCheck size={15} className="text-mint-dark" aria-hidden="true" />
            Não oficial
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-ink-soft" aria-label="Navegação principal">
          <a className="transition-colors hover:text-mint-dark" href="#acoes">Ações rápidas</a>
          <a className="transition-colors hover:text-mint-dark" href="#como-funciona">Como funciona</a>
          <a className="transition-colors hover:text-mint-dark" href="#seguranca">Segurança</a>
          <a className="inline-flex min-h-11 items-center gap-1 rounded-full bg-ink px-4 py-2 text-white transition-colors hover:bg-ink-soft" href="https://www.vwfs.com.br/" target="_blank" rel="noopener noreferrer">
            Site do agente <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </div>
      <div className="border-t border-line/70 bg-[#edf6f3]">
        <p className="mx-auto flex max-w-6xl items-center gap-2 px-5 py-2.5 text-xs font-semibold leading-5 text-ink-soft sm:px-8 lg:px-10">
          <ShieldCheck size={15} className="shrink-0 text-mint-dark" aria-hidden="true" />
          <span><strong>Transparência:</strong> o FinanciaPasso é independente e não é o portal oficial da Volkswagen ou do seu agente financeiro.</span>
        </p>
      </div>
    </header>
  );
}
