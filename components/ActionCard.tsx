import { ArrowRight, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  accent?: 'mint' | 'violet' | 'blue';
}

export default function ActionCard({ icon, title, description, href, accent = 'blue' }: ActionCardProps) {
  return (
    <a className={`action-row ${accent === 'mint' ? 'border-l-2 border-l-[#25d6d1]' : accent === 'violet' ? 'border-l-2 border-l-[#bb8cff]' : ''}`} href={href} target="_blank" rel="noopener noreferrer">
      <span className="action-icon" aria-hidden="true">{icon}</span>
      <span className="action-label">{title}<small>{description} · <ExternalLink className="inline" size={9} aria-hidden="true" /> vwfs.com.br</small></span>
      <ArrowRight className="action-arrow" size={18} aria-hidden="true" />
    </a>
  );
}
