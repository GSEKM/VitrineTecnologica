import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

interface Servico {
    id: string;
    nome: string;
    sinopse: string;
    resumo: string;
    problema: string;
    aplicacao: string;
    telefone: string;
    email: string;
    links: string;
    criadores: string;
    area_cientifica: string;
    area_economica: string;
    palavra_chave: string;
    image: string;
}
export function ServicoDetail() {
    const { id } = useParams();
    const [servico, setServico] = useState<Servico>()

    useEffect(() => {
        api.get(`/servicos/${id}`).then((response) => {
            setServico(response.data);
        });
    }, [id]);

    return (
        <section className="sm:p-10 sm:m-10 m-5 font-medium">
            <div className="grid grid-cols-1 bg-white rounded shadow-md">
                <div>
                    <iframe className="w-full h-[600px]" src={"https://apivitrine.uenp.edu.br/storage" + servico?.image} />
                </div>
                <div className="pl-10 pr-10">
                    <h1>{servico?.nome}</h1>
                    <div className="sm:flex grid grid-cols-1 gap-5 rounded">
                        <span className="rounded-xl font-semibold bg-amber-200 p-1 ">{servico?.area_cientifica}</span>
                        <span className="rounded-xl font-semibold bg-gray-200 p-1 ">{servico?.area_economica}</span>
                        <span className="rounded-xl font-semibold bg-blue-200 p-1 ">{servico?.palavra_chave}</span>
                    </div>
                </div>
                <div className="pl-10 pr-10">
                    <h3>Resumo:</h3>
                    <p>{servico?.resumo}</p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 pl-10 pr-10 ">
                    <div>
                        <h3>Problema:</h3>
                        <p>{servico?.problema}</p>
                    </div>
                    <div>
                        <h3>Aplicação:</h3>
                        <p>{servico?.aplicacao}</p>
                    </div>
                    <div>
                        <h3>Criadores:</h3>
                        <p>{servico?.criadores}</p>
                    </div>
                    <div>
                        <h3>Links:</h3>
                        <p>{servico?.links}</p>
                    </div>
                    <div>
                        <h3>Contato:</h3>
                        <p>{servico?.email}</p>
                        <p>{servico?.telefone}</p>
                    </div>
                    <div>
                        <h3>Imagem:</h3>
                        <img src={"https://apivitrine.uenp.edu.br/storage" + servico?.image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}