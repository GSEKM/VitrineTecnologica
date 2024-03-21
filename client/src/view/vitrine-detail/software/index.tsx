import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";

interface software {
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
    video: string;
    data_criacao: string;
    colaborador: string;
    vantagem: string;
    tecnologia: string;
}
export function SoftwareDetail() {
    const { id } = useParams();
    const [software, setSoftware] = useState<software>()

    useEffect(() => {
        api.get(`/softwares/${id}`).then((response) => {
            setSoftware(response.data);
        });
    }, [id]);

    return (
        <section className="sm:p-10 sm:m-10 m-5 font-medium">
            <div className="grid grid-cols-1 bg-white rounded shadow-md">
                <div>
                    <iframe className="w-full h-[600px]" src={"https://apivitrine.uenp.edu.br/storage" + software?.video} allow="autoplay" allowFullScreen />
                </div>
                <div className="pl-10 pr-10">
                    <h1>{software?.nome}</h1>
                    <div className="sm:flex grid grid-cols-1 gap-5 rounded">
                        <span className="rounded-xl font-semibold bg-amber-200 p-1 ">{software?.area_cientifica}</span>
                        <span className="rounded-xl font-semibold bg-gray-200 p-1 ">{software?.area_economica}</span>
                        <span className="rounded-xl font-semibold bg-blue-200 p-1 ">{software?.palavra_chave}</span>
                    </div>
                </div>
                <div className="pl-10 pr-10">
                    <h3>Resumo:</h3>
                    <p>{software?.resumo}</p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 pl-10 pr-10 ">
                    <div>
                        <h3>Problema:</h3>
                        <p>{software?.problema}</p>
                    </div>
                    <div>
                        <h3>Vantagem:</h3>
                        <p>{software?.vantagem}</p>
                    </div>
                    <div>
                        <h3>Aplicação:</h3>
                        <p>{software?.aplicacao}</p>
                    </div>
                    <div>
                        <h3>Tecnologias:</h3>
                        <p>{software?.tecnologia}</p>
                    </div>
                    <div>
                        <h3>Criadores:</h3>
                        <p>{software?.criadores}</p>
                    </div>
                    <div>
                        <h3>Colaboradores:</h3>
                        <p>{software?.colaborador}</p>
                    </div>
                    <div>
                        <h3>Links:</h3>
                        <p>{software?.links}</p>
                    </div>
                    <div>
                        <h3>Contato:</h3>
                        <p>{software?.email}</p>
                        <p>{software?.telefone}</p>
                    </div>
                    <div>
                        <h3>Imagem:</h3>
                        <img src={"https://apivitrine.uenp.edu.br/storage" + software?.image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}