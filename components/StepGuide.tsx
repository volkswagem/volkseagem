import { ArrowUpRight, CheckCircle2, FileSearch, Landmark, ReceiptText } from 'lucide-react';

const steps = [
  ['01', <FileSearch key="step-01-icon" size={14} aria-hidden="true" />, 'Veja quem aparece no contrato', 'O nome do banco ou agente financeiro está no contrato e no boleto. A marca do veículo não determina quem deve atender você.'],
  ['02', <Landmark key="step-02-icon" size={14} aria-hidden="true" />, 'Confirme o domínio oficial', 'Os links desta página apontam para vwfs.com.br. Confira o endereço no navegador antes de informar qualquer dado.'],
  ['03', <ReceiptText key="step-03-icon" size={14} aria-hidden="true" />, 'Escolha a operação', 'Procure segunda via, saldo, antecipação ou quitação dentro do atendimento oficial do seu contrato.'],
  ['04', <CheckCircle2 key="step-04-icon" size={14} aria-hidden="true" />, 'Guarde o comprovante', 'Após pagar, valide a baixa e os documentos de quitação diretamente com o agente financeiro.'],
] as const;

export default function StepGuide() {
  return (
    <section id="como-funciona" className="section-block" aria-labelledby="guide-title">
      <h2 id="guide-title" className="section-title">Como usar o guia</h2>
      <div className="guide">
        {steps.map(([number, icon, title, text]) => (
          <details key={number}>
            <summary><span>{number}</span><span>{icon}</span><span>{title}</span><span aria-hidden="true">⌄</span></summary>
            <p>{text}</p>
          </details>
        ))}
      </div>
      <a className="mt-3 inline-flex items-center gap-1 px-1 text-[10px] font-bold text-[#bffbf5] underline underline-offset-4" href="https://www.vwfs.com.br/golpes.html" target="_blank" rel="noopener noreferrer">Alertas de fraude no site oficial <ArrowUpRight size={12} aria-hidden="true" /></a>
    </section>
  );
}
