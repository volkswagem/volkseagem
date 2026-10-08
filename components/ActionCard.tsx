import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

interface ActionCardProps {
  index: string;
  icon: ReactNode;
  title: string;
  description: string;
  ctaText: string;
  href: string;
  tip: string;
  domain: string;
}

export default function ActionCard({ index, icon, title, description, ctaText, href, tip, domain }: ActionCardProps) {
  return (
    <article className="card-lift group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white p-6 shadow-card sm:p-7">
      <div className="mb-7 flex items-start justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e5f7f3] text-mint-dark transition-colors group-hover:bg-mint group-hover:text-ink" aria-hidden="true">
          {icon}
        </span>
        <span className="eyebrow text-[11px] font-black text-muted">{index}</span>
      </div>
      <h3 className="text-2xl font-black tracking-[-0.04em] text-ink">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-ink-soft">{description}</p>
      <div className="mt-5 rounded-2xl border border-[#d8eeea] bg-[#f2fbf8] p-4 text-sm leading-6 text-ink-soft">
        <span className="font-black text-mint-dark">Atenção: </span>{tip}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-4 py-3 text-sm font-black text-white transition-colors hover:bg-ink-soft">
          {ctaText} <ArrowUpRight size={17} aria-hidden="true" />
        </a>
        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs font-semibold text-muted">
          <ExternalLink size={13} aria-hidden="true" /> Abre em <span className="text-ink-soft">{domain}</span>
        </p>
      </div>
    </article>
  );
}
