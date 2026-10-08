import { Calculator, FileText, Headphones } from 'lucide-react';
import ActionCard from './ActionCard';

const officialAccess = 'https://www.vwfs.com.br/atendimento/acesso-do-cliente.html';
const officialChannels = 'https://www.vwfs.com.br/atendimento/canais-de-atendimento.html';

export default function QuickActions() {
  return (
    <section id="acoes" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
      <div className="max-w-2xl">
        <p className="eyebrow text-xs font-black uppercase text-mint-dark">ações rápidas</p>
        <h2 className="display-title mt-3 text-3xl font-black text-ink sm:text-5xl">O que você precisa resolver?</h2>
        <p className="mt-4 text-lg leading-8 text-ink-soft">Os botões abaixo levam a páginas do domínio oficial identificado. O FinanciaPasso não recebe seus dados nem executa operações em seu nome.</p>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        <ActionCard
          index="01 / boleto"
          icon={<FileText size={25} />}
          title="Segunda via"
          description="Acesse o atendimento do agente financeiro para localizar a parcela e emitir um novo boleto, quando essa opção estiver disponível."
          ctaText="Abrir Acesso do Cliente"
          href={officialAccess}
          tip="O nome da operação e os documentos pedidos podem variar conforme o contrato."
          domain="vwfs.com.br"
        />
        <ActionCard
          index="02 / quitação"
          icon={<Calculator size={25} />}
          title="Quitação"
          description="Consulte o procedimento oficial para solicitar cálculo, antecipação ou quitação do contrato e esclarecer a baixa do gravame."
          ctaText="Ver canais oficiais"
          href={officialChannels}
          tip="Não pague valores enviados por terceiros sem confirmar o beneficiário com o agente."
          domain="vwfs.com.br"
        />
        <ActionCard
          index="03 / suporte"
          icon={<Headphones size={25} />}
          title="Saldo e contrato"
          description="Quando houver dúvida sobre saldo, parcelas ou documentos, use os canais de atendimento do agente indicado no seu contrato."
          ctaText="Consultar atendimento"
          href={officialChannels}
          tip="Se o seu contrato indicar outro agente, use exclusivamente o canal desse agente."
          domain="vwfs.com.br"
        />
      </div>
      <div className="mt-7 flex flex-col gap-3 rounded-2xl border border-[#eadfbe] bg-[#fffaf0] p-5 text-sm leading-6 text-ink-soft sm:flex-row sm:items-start">
        <span className="shrink-0 font-black text-[#8c6b20]">Importante</span>
        <p>Os links acima foram identificados no site da Volkswagen Financial Services Brasil. Mesmo assim, confirme o domínio no navegador antes de inserir qualquer dado. Para contratos de outros agentes financeiros, não use estes links.</p>
      </div>
    </section>
  );
}
