import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../../components/title";
interface IServico {
    nome: string;
    id: number;
    criadores: string;
    data_criacao: string;
    area_cientifica: string;
    area_economica: string;
    links: string;
    colaborador: string;
    palavra_chave: string;
}

export function ServicoEditDelete() {

    const [servico, setServico] = useState<IServico[]>([]);

    const deleteServico = async (id: number) => {
        try {
            await api.delete(`/servicos/${id}`, {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token'),
                }
            });
            toast.success("Deletado com sucesso!")
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        api.get('/servicos').then(response => {
            setServico(response.data);
        })
    }, [])

    return (
        <div className="m-10 h-screen inline-table">
            <ToastContainer />
            <Title
                titulo="Editar e Deletar Serviços"
                subtitulo="Faça alterações nos serviços cadastrados"
            />
            <table className="shadow">
                <thead>
                    <tr>
                        <th className="rounded">Título</th>
                        <th>Colaborador</th>
                        <th>Links</th>
                        <th>Área Científica</th>
                        <th>Área Econômica</th>
                        <th>Palavra Chave</th>
                        <th>Criador</th>
                        <th>Data</th>
                        <th>Editar</th>
                        <th className="rounded">Deletar</th>
                    </tr>
                </thead>
                <tbody>
                    {servico.map((servico) => (
                        <tr key={servico.id}>
                            <td>{servico.nome}</td>
                            <td>{servico.colaborador}</td>
                            <td>{servico.links}</td>
                            <td>{servico.area_cientifica}</td>
                            <td>{servico.area_economica}</td>
                            <td>{servico.palavra_chave}</td>
                            <td>{servico.criadores}</td>
                            <td>{servico.data_criacao}</td>
                            <td>
                                <Link to={`/admin/servicos/edit/${servico.id}`}>
                                    <button className="bg-[#2563EB] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">Editar</button>
                                </Link>
                            </td>
                            <td>
                                <button className="bg-[#2563EB] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm" onClick={() => deleteServico(servico.id)}>Deletar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}