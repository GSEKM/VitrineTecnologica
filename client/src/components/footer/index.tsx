import { Link } from "react-router-dom";
import logoInstituicao from "../../assets/logo-aitec.png"; // Logo da Instituição
import logoGSEKM from "../../assets/logo-gsekm.png"; // Logo do GSEKM

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-10">
      {/* Contêiner Principal */}
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna 1: Instituição */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            src={logoInstituicao}
            alt="Logo da AITEC"
            className="w-48 mb-4"
          />
          <address className="not-italic text-sm text-center lg:text-left">
            BR-369, s/n - Bandeirantes, PR, 86360-000, Paraná - PR
            <br />
            <a href="tel:+554335428000" className="hover:underline">
              +55 (43) 3542-8000
            </a>
          </address>
        </div>

        {/* Coluna 2: Grupo de Pesquisa */}
        <div className="flex flex-col items-center lg:items-end">
          <img
            src={logoGSEKM}
            alt="Logo do GSEKM"
            className="w-32 mb-4"
          />
          <p className="text-sm text-center lg:text-right">
            O Grupo de Pesquisa GSEKM busca inovação em soluções tecnológicas,
            promovendo a transferência de conhecimento científico para a
            sociedade.
          </p>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="mt-10 border-t border-blue-600 pt-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <p className="text-xs text-center lg:text-left opacity-70">
            © {new Date().getFullYear()} Grupo de Pesquisa GSEKM. Todos os direitos reservados.
          </p>
          <p className="text-xs text-center lg:text-right opacity-70">
            Desenvolvido com ❤️ pela equipe GSEKM.
          </p>
        </div>
      </div>
    </footer>
  );
}
