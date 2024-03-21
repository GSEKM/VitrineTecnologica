import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../../components/title";
interface ILaboratorio {
    nome: string;
    id: number;
    criadores: string;
    data_criacao: string;
    area_cientifica: string;
    area_economica: string;
    links: string;
    colaborador: string;
    palavras_chave: string;
}

export function LaboratorioEditDelete() {

    const [laboratorio, setLaboratorio] = useState<ILaboratorio[]>([]);

    const deleteLaboratorio = async (id: number) => {
        try {
            await api.delete(`/laboratorios/${id}`, {
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
        api.get('/laboratorios').then(response => {
            setLaboratorio(response.data);
        })
    }, [])

    return (
        <div className="grid justify-center h-screen">
            <div>
                <ToastContainer />
                <Title
                    titulo="Editar e Deletar Laboratórios"
                    subtitulo="Faça alterações nos laboratórios cadastrados"
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
                            <th>Editar</th>
                            <th className="rounded">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {laboratorio.map((laboratorio) => (
                            <tr key={laboratorio.id}>
                                <td>{laboratorio.nome}</td>
                                <td>{laboratorio.colaborador}</td>
                                <td>{laboratorio.links}</td>
                                <td>{laboratorio.area_cientifica}</td>
                                <td>{laboratorio.area_economica}</td>
                                <td>{laboratorio.palavras_chave}</td>
                                <td>
                                    <Link to={`/admin/laboratorios/edit/${laboratorio.id}`}>
                                        <button className="bg-[#2563EB] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">Editar</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className="bg-[#2563EB] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm" onClick={() => deleteLaboratorio(laboratorio.id)}>Deletar</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}