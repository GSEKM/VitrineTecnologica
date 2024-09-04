import { Link } from "react-router-dom";
import { IoHardwareChipOutline } from "react-icons/io5";
import { IoMdPaper } from "react-icons/io";
import { BsBox } from "react-icons/bs";
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
    const [servico, setServico] = useState<IHome[]>([]);
    const [pesquisa, setPesquisa] = useState<IHome[]>([]);
    const [software, setSoftware] = useState<IHome[]>([]);
    const [patente, setPatente] = useState<IHome[]>([]);
    const [laboratorio, setLaboratorio] = useState<ILab[]>([]);
    const [query, setQuery] = useState(""); // Estado para a barra de pesquisa
    const [inputWidth, setInputWidth] = useState("100%"); // Estado para a largura da barra de pesquisa

    useEffect(() => {
        // Verifica o tamanho da janela para ajustar a largura da barra de pesquisa
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setInputWidth("65%");
            } else {
                setInputWidth("100%");
            }
        };

        handleResize(); // Ajusta a largura ao carregar a página
        window.addEventListener("resize", handleResize); // Escuta o redimensionamento da janela

        return () => window.removeEventListener("resize", handleResize); // Remove o listener ao desmontar o componente
    }, []);

    useEffect(() => {
        api.get('/patentes').then(response => {
            setPatente(response.data);
        });
        api.get('/pesquisas').then(response => {
            setPesquisa(response.data);
        });
        api.get('/servicos').then(response => {
            setServico(response.data);
        });
        api.get('/softwares').then(response => {
            setSoftware(response.data);
        });
        api.get('/laboratorios').then(response => {
            setLaboratorio(response.data);
        });
    }, []);

    // Função para filtrar os itens com base na pesquisa
    const filteredPatente = patente.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredServico = servico.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSoftware = software.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredLaboratorio = laboratorio.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase()) ||
        item.palavras_chave.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <section className="grid">
            {/* Barra de Pesquisa */}
            <div className="m-5 flex justify-center">
                <input
                    type="text"
                    style={{ width: inputWidth }} // Aplica o valor da largura dinamicamente
                    className="p-2 border rounded-md"
                    placeholder="Buscar"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            {/* Restante do código permanece o mesmo */}
            
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {filteredPatente.map((patente) => (
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
            {/* Repita a mesma estrutura para os outros tipos */}
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {filteredServico.map((servico) => (
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
            {/* Continue o código para software e laboratório */}
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {filteredSoftware.map((software) => (
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
            <div className="grid m-10 justify-center">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14 ">
                    {filteredLaboratorio.map((laboratorio) => (
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
        </section>
    );
}
