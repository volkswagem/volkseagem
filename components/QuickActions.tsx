import { Calculator, FileText, Headphones, Search } from 'lucide-react';
import ActionCard from './ActionCard';

const officialAccess = 'https://www.vwfs.com.br/atendimento/acesso-do-cliente.html';
const officialChannels = 'https://www.vwfs.com.br/atendimento/canais-de-atendimento.html';

export default function QuickActions() {
  return (
    <section id="acoes" aria-labelledby="actions-title">
      <h2 id="actions-title" className="sr-only">Ações rápidas</h2>
      <div className="stack">
        <ActionCard icon={<FileText size={17} />} title="Segunda via de boleto" description="Acesso do Cliente" href={officialAccess} accent="blue" />
        <ActionCard icon={<Calculator size={17} />} title="Quitação e saldo" description="Canais de atendimento" href={officialChannels} accent="violet" />
        <ActionCard icon={<Search size={17} />} title="Consultar contrato" description="Confirme o agente financeiro" href={officialChannels} accent="mint" />
        <ActionCard icon={<Headphones size={17} />} title="Suporte oficial" description="Fale com o agente financeiro" href={officialChannels} accent="violet" />
      </div>
      <div className="safety">
        <strong>Não digite dados nesta página</strong>
        <p>Confira o domínio no navegador antes de inserir CPF, senha ou dados bancários. Se o seu contrato indicar outro agente, use somente o canal desse agente.</p>
      </div>
    </section>
  );
}
