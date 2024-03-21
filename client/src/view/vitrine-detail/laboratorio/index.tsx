import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
interface laboratorio {
    id: string;
    nome: string;
    sinopse: string;
    resumo: string;
    aplicacao: string;
    telefone: string;
    email: string;
    colaborador: string;
    links: string;
    area_cientifica: string;
    area_economica: string;
    palavras_chave: string;
    image: string;
    pdf: string;
    conteudo: string;
    supervisores: string;
}
export function LaboratorioDetail() {
    const { id } = useParams();
    const [laboratorio, setlaboratorio] = useState<laboratorio>()

    useEffect(() => {
        api.get(`/laboratorios/${id}`).then((response) => {
            setlaboratorio(response.data);
        });
    }, [id]);

    return (
        <section className="font-medium grid grid-cols-1">
            <div className="grid col-span-4 bg-white rounded shadow-md m-10">
                <img className="justify-center w-full h-[600px] " src={"https://apivitrine.uenp.edu.br/storage" + laboratorio?.image} />
                <div className="grid ml-4 mr-4">
                    <div className="flex justify-between">
                        <h1>{laboratorio?.nome}</h1>
                        <a href={"https://apivitrine.uenp.edu.br/storage" + laboratorio?.pdf}>
                            <img className="w-24" src="https://brandlogos.net/wp-content/uploads/2021/12/adobe_acrobat_reader-brandlogo.net_.png" alt="" />
                        </a>
                    </div>
                    <div className="sm:flex grid grid-cols-1 gap-5 rounded text-center justify-between">
                        <div>
                            <span className="h-fit m-2 rounded-xl font-semibold bg-amber-200 p-2 ">{laboratorio?.area_cientifica}</span>
                            <span className="h-fit m-2 rounded-xl font-semibold bg-gray-200 p-2 ">{laboratorio?.area_economica}</span>
                            <span className="h-fit m-2 rounded-xl font-semibold bg-blue-200 p-2 ">{laboratorio?.palavras_chave}</span>
                        </div>
                    </div>
                    <div className="sm:flex grid grid-cols-1 gap-5 rounded h-fit align-baseline m-3">
                        <div>
                            <h3>Colaboradores:</h3>
                            <p>{laboratorio?.colaborador}</p>
                        </div>
                        <div>
                            <h3>Links:</h3>
                            <a href={laboratorio?.links}>{laboratorio?.links}</a>
                        </div>
                        <div>
                            <h3>Contato:</h3>
                            <div className="flex gap-4">
                                <p>{laboratorio?.email}</p>
                                <p>telefone: {laboratorio?.telefone}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-4">
                    <h3>Resumo:</h3>
                    <p>{laboratorio?.resumo}</p>
                </div>
                <div className="m-4">
                    <h3>Equipe:</h3>
                    <p>{laboratorio?.supervisores}</p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 m-4 ">
                    <div>
                        <h3>Serviços:</h3>
                        <p>{laboratorio?.aplicacao}</p>
                    </div>
                    <div>
                        <h3>Equipamentos:</h3>
                        <p>{laboratorio?.conteudo}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}