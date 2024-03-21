import { Children, useEffect, useState } from "react";
import { Cards } from "../../../components/cards";
import { Filter } from "../../../components/filter";
import api from "../../../services/api";
import { Title } from "../../../components/title";

interface Iareas {
    denominacao: string;
}
interface Ifiltro {
    nome: string;
    sinopse: string;
    palavra_chave: string;
    id: number;
    tipo: string;
    area_cientifica: string;
    area_economica: string;
}
interface IHome {
    nome: string;
    sinopse: string;
    palavras_chave: string;
    id: number;
    tipo: string;
    area_cientifica: string;
    area_economica: string;
    image: string;
}

export function Laboratorio() {
    const [filter, setFilter] = useState<Ifiltro[]>([])
    const [laboratorio, setLaboratorio] = useState<IHome[]>([]);
    const [busca, setBusca] = useState<string>("");
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

    const filtro = (childrenData: any) => {
        setFilter(childrenData)
    }

    const buscar = (childrenData: any) => {
        setBusca(childrenData)
    }
    console.log(busca)

    useEffect(() => {
        api.get('/palavraChave').then(response => {
            setOptionPalavraChave(response.data);
        })
    }, [])
    useEffect(() => {
        api.get('/laboratorios').then(response => {
            setLaboratorio(response.data);
        })
    }, [])
    if (busca == "todos") {
        return (
            <section className="h-fit">
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Laboratórios"
                        subtitulo="Prestação de Laboratórios"
                    />
                </div>
                <div className="flex h-screen">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Laboratorios"
                            setFilter={filtro}
                            type="laboratorio"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">
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
            </section>
        )
    } else if (filter.map((filtro) => filtro.palavra_chave == busca)) {
        return (
            <section >
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Laboratórios"
                        subtitulo="Tecnologias e Inovação "
                    />
                </div>
                <div className="flex">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Vitrine de Laboratórios"
                            setFilter={filtro}
                            type="laboratorio"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">
                        {laboratorio.map((laboratorio) => {
                            if (busca == laboratorio.palavras_chave) {
                                return (
                                    <Cards
                                        type="laboratorios"
                                        image={laboratorio.image}
                                        nome={laboratorio.nome}
                                        sinopse={laboratorio.sinopse}
                                        palavraChave={laboratorio.palavras_chave}
                                        id={laboratorio.id}
                                        areaCientifica={laboratorio.area_cientifica}
                                        areaEconomica={laboratorio.area_economica}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </section>
        )
    } else {
        return (
            <section className="h-fit">
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Laboratórios"
                        subtitulo="Prestação de Laboratórios"
                    />
                </div>
                <div className="flex h-screen">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Laboratorios"
                            setFilter={filtro}
                            type="laboratorio"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">
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
            </section>
        )
    }
}