import { Link } from "react-router-dom";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { BsBox } from "react-icons/bs";
import { BiRocket } from "react-icons/bi";
import { AiOutlineFileSearch } from "react-icons/ai";
import { Cards } from "../../components/cards";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface IHome {
    nome: string;
    sinopse: string;
    palavra_chave: string;
    id: number;
    tipo: string;
    area_cientifica: string;
    area_economica: string;
    image: string;
}

interface ILab {
    nome: string;
    sinopse: string;
    palavras_chave: string;
    id: number;
    tipo: string;
    area_cientifica: string;
    area_economica: string;
    image: string;
}

export function Home() {
    const [servico, setservico] = useState<IHome[]>([]);
    const [pesquisa, setPesquisa] = useState<IHome[]>([]);
    const [software, setSoftware] = useState<IHome[]>([]);
    const [patente, setPatente] = useState<IHome[]>([]);
    const [startups, setStartups] = useState<IHome[]>([]);
    const [laboratorio, setLaboratorio] = useState<ILab[]>([]);

    useEffect(() => {
        api.get('/patentes').then(response => {
            setPatente(response.data);
            console.log(response.data)
        })
    }, [])
    useEffect(() => {
        api.get('/pesquisas').then(response => {
            setPesquisa(response.data);
        })
    }, [])
    useEffect(() => {
        api.get('/startups').then(response => {
            setStartups(response.data);
        })
    }, [])
    useEffect(() => {
        api.get('/servicos').then((response) => {
            setservico(response.data);
        })
    }, [])
    useEffect(() => {
        api.get('/softwares').then((response) => {
            setSoftware(response.data);
        })
    }, [])
    useEffect(() => {
        api.get('/laboratorios').then((response) => {
            setLaboratorio(response.data);
        })
    }, [])

    return (
        <section className="grid">
            <div className="grid xl:grid-cols-5 md:grid-cols-2  m-5 gap-5">
                <Link to="/patentes">
                    <div className="flex flex-col items-center pt-4  bg-white shadow-2xl hover:bg-[#ededed] duration-700 rounded-md">
                        <div className="flex justify-center items-center bg-slate-300 rounded-full w-14 h-14">
                            <IoMdPaper className=" text-4xl  text-[#214088]" />
                        </div>
                        <h2 className="font-normal text-gray-700">Patentes</h2>
                        <p>Inovação e Tecnologias</p>
                    </div>
                </Link>
                <Link to="/softwares">
                    <div className="flex flex-col items-center pt-4 bg-white shadow-2xl hover:bg-[#ededed] duration-700 rounded-md">
                        <div className="flex justify-center items-center bg-[#FFEDDC] rounded-full w-14 h-14">
                            <IoHardwareChipOutline className="text-4xl text-[#FFBB7A]" />
                        </div>
                        <h2 className="font-normal text-gray-700">Softwares</h2>
                        <p>Inovação e Tecnologias</p>
                    </div>
                </Link>
                <Link to="/servicos">
                    <div className="flex flex-col items-center pt-4 bg-white shadow-2xl hover:bg-[#ededed] duration-700 rounded-md">
                        <div className="flex justify-center items-center bg-[#fc9999] rounded-full w-14 h-14">
                            <BsBox className="text-4xl text-[#ea4444]" />
                        </div>
                        <h2 className="font-normal text-gray-700">Serviços</h2>
                        <p>Inovação e Tecnologias</p>
                    </div>
                </Link>
                <Link to="/pesquisas">
                    <div className="flex flex-col items-center pt-4 bg-white shadow-2xl hover:bg-[#ededed] duration-700 rounded-md">
                        <div className="flex justify-center items-center bg-[#E0F9FC] rounded-full w-14 h-14">
                            <AiOutlineFileSearch className="text-4xl text-[#3BDAED]" />
                        </div>
                        <h2 className="font-normal text-gray-700">Pesquisas</h2>
                        <p>Inovação e Tecnologias</p>
                    </div>
                </Link>
                <Link to="/laboratorio">
                    <div className="flex flex-col items-center pt-4 bg-white shadow-2xl hover:bg-[#ededed] duration-700 rounded-md">
                        <div className="flex justify-center items-center bg-[#E0F9FC] rounded-full w-14 h-14">
                            <AiOutlineFileSearch className="text-4xl text-[#3BDAED]" />
                        </div>
                        <h2 className="font-normal text-gray-700">laboratórios</h2>
                        <p>Pesquisa e equipamentos</p>
                    </div>
                </Link>
            </div>
            <div className="grid items-center grid-cols-1 m-9 shadow-lg">
                <div className="grid md:flex items-center justify-center rounded-md bg-white">
                    <img className="sm:h-52" src="assets/pesquisas.svg" alt="" />
                    <div className="flex flex-wrap items-center m-4 text-left">
                        <h2>Patentes e Pesquisa</h2>
                        <p>
                            Encontre as patentes produzidas pelos pesquisadores da UENP, sendo aprovadas e analisadas pelo
                            INPI. Busque também por pesquisas e artigos científicos produzidos pelos pesquisadores da Universidade.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {patente.map((patente) => (
                        <Cards
                            type="patentes"
                            image={patente.image}
                            nome={patente.nome}
                            sinopse={patente.sinopse}
                            palavraChave={patente.palavra_chave}
                            id={patente.id}
                            areaCientifica={patente.area_cientifica}
                            areaEconomica={patente.area_economica}
                        />
                    ))}
                </div>
            </div>
            <div className="grid items-center grid-cols-1 m-9 shadow-lg">
                <div className="grid md:flex items-center justify-center rounded-md bg-white">
                    <img className="h-52" src="assets/service.svg" alt="" />
                    <div className="flex flex-wrap items-center m-4 text-left">
                        <h2>Serviços</h2>
                        <p>
                            Busque pelos serviços prestados pela UENP, como consultorias, cursos, palestras, entre outros. Tendo
                            os melhores profissionais da Universidade para atender sua necessidade.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {servico.map((servico) => (
                        <Cards
                            type="servicos"
                            image={servico.image}
                            nome={servico.nome}
                            sinopse={servico.sinopse}
                            palavraChave={servico.palavra_chave}
                            id={servico.id}
                            areaCientifica={servico.area_cientifica}
                            areaEconomica={servico.area_economica}
                        />
                    ))}
                </div>
            </div>
            <div className="grid items-center grid-cols-1 m-9 shadow-lg">
                <div className="grid md:flex items-center justify-start rounded-md bg-white">
                    <img className="h-52" src="assets/software.svg" alt="" />
                    <div className="flex flex-col  justify-start m-4 text-left">
                        <h2>Software</h2>
                        <p>
                            Software desenvolvido pela Universidade, com o objetivo de facilitar o dia a dia de
                            empresas e pessoas. Busque por softwares que podem ser aplicados em seu negócio.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {software.map((software) => (
                        <Cards
                            type="softwares"
                            image={software.image}
                            nome={software.nome}
                            sinopse={software.sinopse}
                            palavraChave={software.palavra_chave}
                            id={software.id}
                            areaCientifica={software.area_cientifica}
                            areaEconomica={software.area_economica}
                        />
                    ))}
                </div>
            </div>
            <div className="grid items-center grid-cols-1 m-9 shadow-lg">
                <div className="grid md:flex items-center justify-start rounded-md bg-white">
                    <img className="h-52" src="assets/servicos.svg" alt="" />
                    <div className="flex flex-col  justify-start m-4 text-left">
                        <h2>Laboratórios</h2>
                        <p>
                            Laboratórios desenvolvidos pela Universidade, com o objetivo de facilitar o dia a dia de empresas.
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {laboratorio.map((laboratorio) => (
                        <Cards
                            type="laboratorio"
                            image={laboratorio.image}
                            nome={laboratorio.nome}
                            sinopse={laboratorio.sinopse}
                            palavraChave={laboratorio.palavras_chave}
                            id={laboratorio.id}
                            areaCientifica={laboratorio.area_cientifica}
                            areaEconomica={laboratorio.area_economica}
                        />
                    ))}
                </div>
            </div>
        </section >
    )
}

