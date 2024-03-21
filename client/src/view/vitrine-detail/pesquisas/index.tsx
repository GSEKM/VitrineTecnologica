import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../services/api";
import { TrlModal } from "../../../Rooks/trlModal";
import { GrCircleInformation } from "react-icons/gr";
import imgtrl from "../../../assets/trl.png";
interface Patente {
    id: string;
    nome: string;
    sinopse: string;
    solucao: string;
    resumo: string;
    problema: string;
    vantagem: string;
    aplicacao: string;
    trl: string;
    telefone: string;
    email: string;
    colaborador: string;
    data_criacao: string;
    links: string;
    criadores: string;
    area_cientifica: string;
    area_economica: string;
    palavra_chave: string;
    image: string;
    video: string;
    pdf: string;
}
export function PesquisaDetail() {
    const { id } = useParams();
    const [patente, setPatente] = useState<Patente>()
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        api.get(`/pesquisas/${id}`).then((response) => {
            setPatente(response.data);
        });
    }, [id]);

    return (
        <section className="font-medium grid xl:grid-cols-5 grid-cols-1 text-justify">
            <div className="grid col-span-4 bg-white rounded shadow-md ml-10 my-10">
                <div>
                    <iframe className="w-full h-[600px]" src={"https://apivitrine.uenp.edu.br/storage" + patente?.video} />
                </div>
                <div className="pl-10 pr-10">
                    <h1>{patente?.nome}</h1>
                    <div className="sm:flex grid grid-cols-1 gap-5 rounded">
                        <span className="rounded-xl font-semibold bg-amber-200 p-1 ">{patente?.area_cientifica}</span>
                        <span className="rounded-xl font-semibold bg-gray-200 p-1 ">{patente?.area_economica}</span>
                        <span className="rounded-xl font-semibold bg-blue-200 p-1 ">{patente?.palavra_chave}</span>
                    </div>
                </div>
                <div className="pl-10 pr-10">
                    <h3>Resumo:</h3>
                    <p>{patente?.resumo}</p>
                </div>
                <div className="grid sm:grid-cols-2 grid-cols-1 pl-10 pr-10 gap-4">
                    <div>
                        <h3>Problema:</h3>
                        <p>{patente?.problema}</p>
                    </div>
                    <div>
                        <h3>Solução:</h3>
                        <p>{patente?.solucao}</p>
                    </div>
                    <div>
                        <h3>Vantagem:</h3>
                        <p>{patente?.vantagem}</p>
                    </div>
                    <div>
                        <h3>Aplicação:</h3>
                        <p>{patente?.aplicacao}</p>
                    </div>
                    <div>
                        {showModal && (
                            <TrlModal
                                onClose={handleCloseModal}
                                title="O que é TRL?"
                                body={<img src={imgtrl} />}
                            />
                        )}
                        <div className="flex row items-baseline gap-1">
                            <h3>TRL</h3>
                            <GrCircleInformation
                                onMouseOver={() => {
                                    handleShowModal();
                                }}
                                size={20}
                            />
                        </div>
                        <p>{patente?.trl}</p>
                    </div>
                    <div>
                        <h3>Imagem:</h3>
                        <img src={"https://apivitrine.uenp.edu.br/storage" + patente?.image} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid col-span-1 bg-white shadow-md rounded m-10 h-fit">
                <div className="m-2">
                    <div>
                        <h3>PDF:</h3>
                        <a href={"https://apivitrine.uenp.edu.br/storage" + patente?.pdf}>
                            <img className="w-36" src="https://img.icons8.com/ios/200/000000/pdf-2.png" alt="" />
                        </a>
                    </div>
                    <div>
                        <h3>Criadores:</h3>
                        <p>{patente?.criadores}</p>
                    </div>
                    <div>
                        <h3>Colaboradores:</h3>
                        <p>{patente?.colaborador}</p>
                    </div>
                    <div>
                        <h3>Links:</h3>
                        <p>{patente?.links}</p>
                    </div>
                    <div>
                        <h3>Contato:</h3>
                        <p>{patente?.email}</p>
                        <p>{patente?.telefone}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}