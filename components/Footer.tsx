import { ExternalLink, LockKeyhole, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="seguranca" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-9 w-1.5 rounded-full bg-mint" aria-hidden="true" />
              <div>
                <p className="text-lg font-black tracking-[-0.04em]">FinanciaPasso</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/50">guia independente</p>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/70">
              Esta é uma página informativa independente. Não somos a Volkswagen, a Volkswagen Financial Services, um banco, uma concessionária ou um parceiro autorizado. Não oferecemos financiamento, não intermediamos contratos e não cobramos taxa.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
              Volkswagen e demais marcas citadas pertencem aos seus respectivos titulares. A relação contratual, os valores, os prazos e a baixa do gravame devem ser tratados diretamente com o agente financeiro responsável.
            </p>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6">
            <div className="flex items-start gap-3">
              <ShieldAlert className="mt-0.5 shrink-0 text-mint" size={21} aria-hidden="true" />
              <div>
                <h2 className="font-black">Antes de inserir dados</h2>
                <p className="mt-2 text-sm leading-6 text-white/70">Confira o domínio no navegador. Nunca digite CPF, senha, dados bancários ou informações do contrato nesta página.</p>
              </div>
            </div>
            <div className="mt-5 border-t border-white/15 pt-5">
              <a href="https://www.vwfs.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-sm font-black text-mint hover:text-white">
                Consultar a fonte oficial <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div id="privacidade" className="mt-12 border-t border-white/15 pt-6 text-xs leading-6 text-white/55">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="inline-flex items-center gap-2 font-bold text-white/75"><LockKeyhole size={14} aria-hidden="true" /> Privacidade</span>
            <span>Não usamos formulários, cookies de marketing ou armazenamento de dados pessoais nesta página.</span>
          </div>
          <p className="mt-3">Conteúdo educativo. Verifique as condições e orientações vigentes diretamente no canal oficial do seu contrato. Atualizado em outubro de 2026.</p>
        </div>
      </div>
    </footer>
  );
}
