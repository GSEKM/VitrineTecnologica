import { Link } from "react-router-dom";

export function MenuAdmin() {
    return (
        <section className="m-10 h-full text-gray-400">
            <div className="flex flex-col bg-white rounded-md shadow-md ">
                <div className="px-3 py-6">
                    <h3 className="font-bold text-3xl ">Dashboard |<span className="font-normal"> Gerenciar - Criar - Editar - Excluir</span></h3>
                    <p className="font-medium">Navegação completa para administradores com suas respectivas permissões</p>
                </div>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" />
                <ul className="grid px-5 gap-y-4 ">
                    <Link to="/admin/patentes">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/pesquisas.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de patentes</h1>
                                <p>Visualizar e administrar patentes</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/pesquisas">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl  hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/search.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Pesquisas</h1>
                                <p>Visualizar e administrar pesquisas</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/softwares">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/software.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Softwares</h1>
                                <p>Visualizar e administrar softwares</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/servicos">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/service.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Serviços</h1>
                                <p>Visualizar e administrar serviços</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/laboratorio">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/servicos.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Laboratório</h1>
                                <p>Visualizar e administrar Laboratório</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/startups">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/startups.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Startups</h1>
                                <p>Visualizar e administrar startups</p>
                            </li>
                        </div>
                    </Link>
                    <Link to="/admin/permissoes">
                        <div className="grid grid-flow-col-dense hover:shadow-3xl     hover:bg-gray-100 items-center text-left  shadow-lg rounded-md ">
                            <li>
                                <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/permission.svg" alt="" />
                            </li>
                            <li>
                                <h1>Administrador de Permissões</h1>
                                <p>Visualizar e administrar permissões</p>
                            </li>
                        </div>
                    </Link>
                </ul>
            </div>
        </section>
    )


}