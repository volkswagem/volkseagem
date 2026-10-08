import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Segunda via e quitação de financiamento | FinanciaPasso',
  description:
    'Guia independente para localizar canais oficiais de segunda via, saldo e quitação de financiamento automóvel, sem recolha de dados sensíveis.',
  keywords: ['segunda via boleto', 'quitação financiamento', 'saldo financiamento', 'guia independente'],
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'FinanciaPasso — encontre o canal certo',
    description:
      'Orientação independente para localizar canais oficiais de atendimento do seu financiamento.',
    siteName: 'FinanciaPasso',
  },
  twitter: {
    card: 'summary',
    title: 'FinanciaPasso — encontre o canal certo',
    description: 'Guia independente, claro e sem recolha de dados sensíveis.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
