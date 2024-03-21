import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Title } from "../../../../components/title";
interface Iareas {
    denominacao: string;
}

export function LaboratorioUpdate() {
    const [image, setImage] = useState('');
    const [pdf, setPdf] = useState('');
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [resumo, setResumo] = useState('');
    const [supervisores, setSupervisores] = useState('');
    const [aplicacao, setAplicacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [colaborador, setColaborador] = useState('');
    const [links, setLinks] = useState('');
    const [conteudo, setConteudo] = useState('');
    const [area_cientifica, setArea_cientifica] = useState('');
    const [optionCientifica, setOptionCientifica] = useState<Iareas[]>([]);

    const [area_economica, setArea_economica] = useState('');
    const [optionEconomica, setOptionEconomica] = useState<Iareas[]>([]);

    const [palavras_chave, setPalavra_chave] = useState('');
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

    const handleImage = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        setImage(e.target.files[0]);
    }

    const handlePdf = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setPdf(e.target.files[0]);
        }
        setPdf(e.target.files[0]);
    }

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        api.get(`laboratorios/${id}`).then((response) => {
            setNome(response.data.nome);
            setSinopse(response.data.sinopse);
            setResumo(response.data.resumo);
            setSupervisores(response.data.supervisores);
            setAplicacao(response.data.aplicacao);
            setTelefone(response.data.telefone);
            setEmail(response.data.email);
            setColaborador(response.data.colaborador);
            setLinks(response.data.links);
            setArea_cientifica(response.data.area_cientifica);
            setArea_economica(response.data.area_economica);
            setPalavra_chave(response.data.palavra_chave);
            setImage(response.data.image);
            setPdf(response.data.pdf);
            setConteudo(response.data.conteudo);
        });
    }, [id]);



    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const form = new FormData();
        form.append('nome', nome);
        form.append('sinopse', sinopse);
        form.append('resumo', resumo);
        form.append('supervisores', supervisores)
        form.append('aplicacao', aplicacao);
        form.append('telefone', telefone);
        form.append('email', email);
        form.append('colaborador', colaborador);
        form.append('links', links);
        form.append('area_cientifica', area_cientifica);
        form.append('area_economica', area_economica);
        form.append('palavras_chave', palavras_chave);
        form.append('image', image);
        form.append('pdf', pdf);
        form.append('conteudo', conteudo);
        try {
            await api.post(`/laboratorios/edit/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data, application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem('token')
                },
            })
            toast.success('Laboratório atualizado com sucesso!');
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        api.get('/areaCientifica').then(response => {
            setOptionCientifica(response.data);
            console.log(area_cientifica);
        })
    }, [])

    useEffect(() => {
        api.get('/palavraChave').then(response => {
            setOptionPalavraChave(response.data);
        })
    }, [])

    useEffect(() => {
        api.get('/areaEconomica').then(response => {
            setOptionEconomica(response.data);
        })
    }, [])

    return (
        <section className="grid m-10">
            <ToastContainer />
            <Title
                titulo="Atualizar Laboratório"
                subtitulo="Faça a atualização do Laboratório"
            />
            <div className="bg-white rounded-md shadow-md w-full">
                <form className="grid grid-cols-2 m-5 text-[#374151] text-xl font-bold" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div>
                        <p>Nome:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div>
                        <p>Sinopse:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                    </div>
                    <div>
                        <p>Resumo:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div>
                        <p>Aplicação:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                    </div>
                    <div>
                        <p>Conteúdo dos laboratórios:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="conteudo" id="conteudo" cols={55} rows={5} value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
                    </div>
                    <div>
                        <p>Área Científica:</p>
                        <select className="bg-slate-300" name="area_cientifica" id="area_cientifica" onChange={(e) => setArea_cientifica(e.target.value)}>
                            {optionCientifica.map((optionCientifica) => (
                                <option value={optionCientifica.denominacao}>{optionCientifica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>Área Econômica:</p>
                        <select className="bg-slate-300" name="area_economica" id="area_economica" onChange={(e) => setArea_economica(e.target.value)}>
                            {optionEconomica.map((optionEconomica) => (
                                <option value={optionEconomica.denominacao}>{optionEconomica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>Palavra Chave:</p>
                        <select className="bg-slate-300" name="palavras_chave" id="palavras_chave" onChange={(e) => setPalavra_chave(e.target.value)}>
                            {optionPalavraChave.map((optionPalavraChave) => (
                                <option value={optionPalavraChave.denominacao} >{optionPalavraChave.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>Colaborador:</p>
                        <input type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div>
                        <p>Supervisores:</p>
                        <input type="text" name="supervisores" id="supervisores" value={supervisores} onChange={(e) => setSupervisores(e.target.value)} />
                    </div>
                    <div>
                        <p>Email:</p>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Telefone:</p>
                        <input type="number" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div>
                        <p>Links:</p>
                        <input type="text" name="links" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
                    </div>
                    <div>
                        <p>Imagem:</p>
                        <input type="file" name="image" id="image" onChange={handleImage} />
                    </div>
                    <div>
                        <p>PDF:</p>
                        <input type="file" name="video" id="video" onChange={handlePdf} />
                    </div>
                    <div className="flex mt-8">
                        <button className="w-fit h-fit" type="submit"> Update </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
