import { ArrowUpRight, CheckCircle2, FileSearch, Landmark, ReceiptText, ShieldAlert } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <FileSearch size={20} aria-hidden="true" />,
    title: 'Comece pelo contrato',
    text: 'Confira o nome do banco ou agente financeiro no contrato, boleto anterior ou comprovante. Se não for Volkswagen Financial Services, procure o canal do agente correto — não tente adivinhar pelo nome do veículo.',
  },
  {
    number: '02',
    icon: <Landmark size={20} aria-hidden="true" />,
    title: 'Abra o domínio oficial',
    text: 'Digite o endereço oficial no navegador ou use os links identificados nesta página. Antes de informar qualquer dado, confira o domínio e o cadeado do navegador.',
  },
  {
    number: '03',
    icon: <ReceiptText size={20} aria-hidden="true" />,
    title: 'Escolha a operação',
    text: 'Dentro do atendimento oficial, procure a opção correspondente a segunda via, saldo, antecipação ou quitação. Os nomes e documentos exigidos podem variar conforme o contrato.',
  },
  {
    number: '04',
    icon: <CheckCircle2 size={20} aria-hidden="true" />,
    title: 'Confirme a baixa',
    text: 'Depois do pagamento, guarde o comprovante e confirme a atualização diretamente com o agente financeiro. Em caso de quitação, pergunte sobre carta de quitação e baixa do gravame.',
  },
];

export default function StepGuide() {
  return (
    <section id="como-funciona" className="border-y border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <div>
          <p className="eyebrow text-xs font-black uppercase text-mint-dark">rota segura</p>
          <h2 className="display-title mt-3 text-3xl font-black text-ink sm:text-5xl">Como funciona?</h2>
          <p className="mt-5 text-lg leading-8 text-ink-soft">Use esta sequência para reduzir o risco de cair em páginas falsas ou pagar um boleto para o beneficiário errado.</p>
          <a href="https://www.vwfs.com.br/golpes.html" target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-black text-mint-dark underline decoration-mint/50 underline-offset-4 hover:text-ink">
            Ver alertas de fraude no site oficial <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="space-y-3">
          {steps.map((step) => (
            <details key={step.number} className="group rounded-2xl border border-line bg-paper open:border-mint/60 open:bg-[#f5fcfa]">
              <summary className="flex min-h-16 cursor-pointer list-none items-center gap-4 px-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-xs font-black text-white transition-colors group-open:bg-mint group-open:text-ink">{step.number}</span>
                <span className="flex-1 text-base font-black text-ink sm:text-lg">{step.title}</span>
                <span className="text-muted transition-transform group-open:rotate-180" aria-hidden="true">⌄</span>
              </summary>
              <div className="flex gap-4 border-t border-line/80 px-5 pb-5 pt-4">
                <span className="mt-0.5 shrink-0 text-mint-dark">{step.icon}</span>
                <p className="text-sm leading-7 text-ink-soft sm:text-base">{step.text}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
