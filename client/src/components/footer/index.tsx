import { Link } from "react-router-dom";
import logo from "../../assets/logo-aitec.png";

export function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-2 w-full gap-4 p-4 bg-[#26448B] shadow">
        <div className="flex flex-col justify-center">
          <img className="max-w-xs" src={logo} alt="" />
          <div className="mt-4">
            <p className="text-sm text-white">
              BR-369, s/n - Bandeirantes, PR, 86360-000, Paraná - PR
            </p>
            <p className="text-sm text-white">+55 (43) 3542-8000</p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-lg text-white underline">Links</h3>
          <ul className="text-sm text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/patentes">Patentes</Link>
            </li>
            <li>
              <Link to="/softwares">Softwares</Link>
            </li>
            <li>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li>
              <Link to="/startups">Startups</Link>
            </li>
            <li>
              <Link to="/pesquisas">Pesquisas</Link>
            </li>
            <li>
            <p className="text-xs"><a href="https://br.freepik.com/vetores-gratis/script-de-estilo-personalizado-otimizacao-de-sites-codificacao-desenvolvimento-de-software-personagem-de-desenho-animado-de-programador-feminino-trabalhando-adicionando-javascript-codigo-css_11669143.htm#query=software&position=29&from_view=search&track=sph">Imagem de vectorjuice</a> no Freepik</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white h-3" />
      <div className="bg-[#5175B3] h-10" />
    </footer>
  )
}