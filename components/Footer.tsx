import { ExternalLink, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="seguranca" className="footer-note">
      <ShieldAlert className="mx-auto mb-2 text-[#25d6d1]" size={17} aria-hidden="true" />
      <p><strong className="text-[#d9edf7]">Aviso de transparência:</strong> esta página existe somente para fins educativos e informativos.</p>
      <p className="mt-2"><strong className="text-[#d9edf7]">Não somos</strong> a Volkswagen, a Volkswagen do Brasil, a Volkswagen Financial Services, o Banco Volkswagen, uma concessionária, um banco, um correspondente bancário ou um parceiro autorizado.</p>
      <p className="mt-2">Não usamos o CNPJ, o endereço, o telefone, o e-mail, o nome empresarial ou o logótipo de terceiros como identificação do operador desta página. Não oferecemos financiamento, não intermediamos contratos, não emitimos segunda via, não calculamos quitação, não cobramos taxas e não solicitamos dados pessoais.</p>
      <p className="mt-2">Os nomes de marcas citados pertencem aos seus respetivos titulares. Os links externos são apenas referências para canais que devem ser conferidos pelo utilizador no navegador. Valores, documentos, prazos e condições só podem ser confirmados pelo agente financeiro responsável.</p>
      <p className="mt-3"><a href="https://www.vwfs.com.br/" target="_blank" rel="noopener noreferrer">Ver a fonte oficial <ExternalLink className="inline" size={10} aria-hidden="true" /></a> · <a href="#privacidade">Privacidade</a></p>
      <span id="privacidade" className="sr-only">Esta página não usa formulários, cookies de marketing ou armazenamento de dados pessoais.</span>
    </footer>
  );
}
