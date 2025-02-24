import { useEffect, useState } from "react";
import { Cards } from "../../components/cards";
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
        // Ajusta a largura da barra de pesquisa conforme o tamanho da janela
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setInputWidth("65%");
            } else {
                setInputWidth("100%");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Requisições para buscar dados
        api.get("/patentes").then((response) => setPatente(response.data));
        api.get("/pesquisas").then((response) => setPesquisa(response.data));
        api.get("/servicos").then((response) => setServico(response.data));
        api.get("/softwares").then((response) => setSoftware(response.data));
        api.get("/laboratorios").then((response) => setLaboratorio(response.data));
    }, []);

    // Funções de filtragem por pesquisa
    const filteredPatente = patente.filter(
        (item) =>
            item.nome.toLowerCase().includes(query.toLowerCase()) ||
            item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredServico = servico.filter(
        (item) =>
            item.nome.toLowerCase().includes(query.toLowerCase()) ||
            item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredSoftware = software.filter(
        (item) =>
            item.nome.toLowerCase().includes(query.toLowerCase()) ||
            item.palavra_chave.toLowerCase().includes(query.toLowerCase())
    );

    const filteredLaboratorio = laboratorio.filter(
        (item) =>
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

            {/* Categorias */}
            <div className="grid m-10 justify-center">
                {/* Seção: Patentes */}
                {filteredPatente.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">Patentes</h2>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14">
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
                )}

                {/* Seção: Serviços */}
                {filteredServico.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">Serviços</h2>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14">
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
                )}

                {/* Seção: Softwares */}
                {filteredSoftware.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">Softwares</h2>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14">
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
                )}

                {/* Seção: Laboratórios */}
                {filteredLaboratorio.length > 0 && (
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">Laboratórios</h2>
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-1 max-w-fit gap-14">
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
                )}

                {/* Mensagem caso nenhuma categoria tenha resultados */}
                {filteredPatente.length === 0 &&
                    filteredServico.length === 0 &&
                    filteredSoftware.length === 0 &&
                    filteredLaboratorio.length === 0 && (
                        <div className="text-center text-gray-500 mt-10">
                            Nenhum resultado encontrado.
                        </div>
                    )}
            </div>
        </section>
    );
}
