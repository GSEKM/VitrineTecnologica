import { ToastContainer, toast } from "react-toastify";
import api from "../../../services/api";
import { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../components/title";
interface IUsuarios {
    name: string,
    id: string,
    email: string,
    cpf: string,
    usuarios: string,
    admin: boolean | string,
}

export function PermissoesUsuarios() {
    const [usuarios, setUsuarios] = useState<IUsuarios[]>([]);

    useEffect(() => {
        api.get('/showAllUsers', {
            headers: {
                'Authorization': "Bearer " + localStorage.getItem('token'),
            }
        }).then(response => {
            setUsuarios(response.data);
        })
    }, [])

    const tornarAdmin = async (id: string) => {
        try {
            await api.post(`/newAdmin/${id}`, null, {
                headers: {
                    'Authorization': "Bearer " + localStorage.getItem('token'),
                }
            })
            toast.success('Permissão concedida com sucesso!')
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }

    const removerAdmin = async (id: string) => {
        try {
            await api.post(`/removeAdmin/${id}`, null, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token'),
                }
            })
            toast.success('Permissão removida com sucesso!')
            setTimeout(() => {
                window.location.reload()
            }, 1000)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <section className="m-10 inline-table">
            <Title
                titulo="Permissões de usuários"
                subtitulo="Aqui você pode conceder ou remover permissões de usuários"
            />
            <div className="flex flex-col items-center justify-center w-full h-full">
                <ToastContainer />
                <table className="shadow w-[1200px]">
                    <thead>
                        <tr>
                            <th className="rounded">Nome</th>
                            <th>Email</th>
                            <th>CPF</th>
                            <th>Permissões</th>
                            <th>Editar permissão</th>
                            <th className="rounded">Remover permissão</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(usuarios => {
                            if (usuarios.admin == true) {
                                usuarios.admin = "Administrador"
                            } else if (usuarios.admin == false) {
                                usuarios.admin = "Usuário"
                            }
                            console.log(localStorage.getItem('admin'))
                            return (
                                <tr key={usuarios.id}>
                                    <td className="overflow-hidden" >{usuarios.name}</td>
                                    <td className="overflow-hidden">{usuarios.email}</td>
                                    <td className="overflow-hidden">{usuarios.cpf}</td>
                                    <td className="overflow-hidden">{usuarios.admin}</td>
                                    <td className="overflow-hidden">
                                        <button onClick={() => tornarAdmin(usuarios.id)} className="bg-[#2563EB] hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">
                                            Permitir
                                        </button>
                                    </td>
                                    <td className="overflow-hidden">
                                        <button onClick={() => removerAdmin(usuarios.id)} className="bg-[#2563EB] hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow-sm">Deletar</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </section>
    );
}