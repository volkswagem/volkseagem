import { ExternalLink, ShieldAlert } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="seguranca" className="footer-note">
      <ShieldAlert className="mx-auto mb-2 text-[#25d6d1]" size={17} aria-hidden="true" />
      <p><strong className="text-[#d9edf7]">Sobre o anunciante:</strong> FinanciaPasso é um guia independente. Não é Volkswagen, Volkswagen Financial Services, banco, concessionária ou parceiro autorizado.</p>
      <p className="mt-2">Não oferecemos financiamento, não cobramos taxas e não recolhemos dados pessoais. As marcas citadas pertencem aos seus titulares.</p>
      <p className="mt-3"><a href="https://www.vwfs.com.br/" target="_blank" rel="noopener noreferrer">Fonte oficial <ExternalLink className="inline" size={10} aria-hidden="true" /></a> · <a href="#privacidade">Privacidade</a></p>
      <span id="privacidade" className="sr-only">Esta página não usa formulários, cookies de marketing ou armazenamento de dados pessoais.</span>
    </footer>
  );
}
