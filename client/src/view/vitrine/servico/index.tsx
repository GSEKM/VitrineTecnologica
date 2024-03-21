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
    palavra_chave: string;
    id: number;
    tipo: string;
    area_cientifica: string;
    area_economica: string;
    image: string;
}

export function Servico() {
    const [filter, setFilter] = useState<Ifiltro[]>([])
    const [servico, setServico] = useState<IHome[]>([]);
    const [busca, setBusca] = useState<string>("");
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

    const filtro = (childrenData: any) => {
        setFilter(childrenData)
    }
    // console.log(filter)

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
        api.get('/servicos').then(response => {
            setServico(response.data);
        })
    }, [])
    if (busca == "todos") {
        return (
            <section className="h-fit">
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Serviços"
                        subtitulo="Prestação de Serviços"
                    />
                </div>
                <div className="flex h-screen">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Serviços"
                            setFilter={filtro}
                            type="servicos"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">

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
            </section>
        )
    } else if (filter.map((filtro) => filtro.palavra_chave == busca)) {
        return (
            <section >
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Patentes"
                        subtitulo="Tecnologias e Inovação "
                    />
                </div>
                <div className="flex">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Vitrine de Serviços"
                            setFilter={filtro}
                            type="servicos"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">

                        {servico.map((servico) => {
                            if (busca == servico.palavra_chave) {
                                return (
                                    <Cards
                                        type="patentes"
                                        image={servico.image}
                                        nome={servico.nome}
                                        sinopse={servico.sinopse}
                                        palavraChave={servico.palavra_chave}
                                        id={servico.id}
                                        areaCientifica={servico.area_cientifica}
                                        areaEconomica={servico.area_economica}
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
            <section >
                <div className="mx-auto text-center">
                    <Title
                        titulo="Vitrine de Serviços"
                        subtitulo="Prestação de Serviços"
                    />
                </div>
                <div className="flex">
                    <div className="m-10">
                        <Filter
                            nomeFiltro="Vitrine de Serviços"
                            setFilter={filtro}
                            type="servicos"
                            setBusca={buscar}
                        />
                    </div>
                    <div className="grid grid-cols-4 justify-center mb-20 mt-10 gap-4">

                        {servico.map((servico) => {
                            if (busca == servico.palavra_chave) {
                                return (
                                    <Cards
                                        type="patentes"
                                        image={servico.image}
                                        nome={servico.nome}
                                        sinopse={servico.sinopse}
                                        palavraChave={servico.palavra_chave}
                                        id={servico.id}
                                        areaCientifica={servico.area_cientifica}
                                        areaEconomica={servico.area_economica}
                                    />
                                )
                            }
                        }
                        )}

                    </div>
                </div>
            </section>
        )
    }
}