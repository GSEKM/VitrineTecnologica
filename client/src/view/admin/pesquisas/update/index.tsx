import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../../components/title";

interface Iareas {
    denominacao: string;
}

export function PesquisaUpdate() {
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [solucao, setSolucao] = useState('');
    const [pdf, setPdf] = useState('');
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [resumo, setResumo] = useState('');
    const [problema, setProblema] = useState('');
    const [vantagem, setVantagem] = useState('');
    const [aplicacao, setAplicacao] = useState('');
    const [trl, setTrl] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [colaborador, setColaborador] = useState('');
    const [data_criacao, setData_criacao] = useState('');
    const [links, setLinks] = useState('');
    const [criadores, setCriadores] = useState('');
    const [area_cientifica, setArea_cientifica] = useState('');
    const [optionCientifica, setOptionCientifica] = useState<Iareas[]>([]);
    const [area_economica, setArea_economica] = useState('');
    const [optionEconomica, setOptionEconomica] = useState<Iareas[]>([]);
    const [palavra_chave, setPalavra_chave] = useState('');
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

    const { id } = useParams<{ id: string }>();
    const handleImage = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        setImage(e.target.files[0]);
    };

    const handleVideo = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setVideo(e.target.files[0]);
        }
        setVideo(e.target.files[0]);
    };

    const handlePdf = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setPdf(e.target.files[0]);
        }
        setPdf(e.target.files[0]);
    };

    useEffect(() => {
        api.get(`pesquisas/${id}`).then((response) => {
            setNome(response.data.nome);
            setSinopse(response.data.sinopse);
            setSolucao(response.data.solucao);
            setResumo(response.data.resumo);
            setProblema(response.data.problema);
            setVantagem(response.data.vantagem);
            setAplicacao(response.data.aplicacao);
            setTrl(response.data.trl);
            setTelefone(response.data.telefone);
            setEmail(response.data.email);
            setColaborador(response.data.colaborador);
            setData_criacao(response.data.data_criacao);
            setLinks(response.data.links);
            setCriadores(response.data.criadores);
            setArea_cientifica(response.data.area_cientifica);
            setArea_economica(response.data.area_economica);
            setPalavra_chave(response.data.palavra_chave);
            setImage(response.data.image);
            setVideo(response.data.video);
            setPdf(response.data.pdf);
        });
    }, [id]);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const form = new FormData();
        form.append('nome', nome);
        form.append('sinopse', sinopse);
        form.append('solucao', solucao);
        form.append('resumo', resumo);
        form.append('problema', problema);
        form.append('vantagem', vantagem);
        form.append('aplicacao', aplicacao);
        form.append('trl', trl);
        form.append('telefone', telefone);
        form.append('email', email);
        form.append('colaborador', colaborador);
        form.append('data_criacao', data_criacao);
        form.append('links', links);
        form.append('criadores', criadores);
        form.append('area_cientifica', area_cientifica);
        form.append('area_economica', area_economica);
        form.append('palavra_chave', palavra_chave);
        form.append('image', image);
        form.append('video', video);
        form.append('pdf', pdf);
        console.log(image);
        try {
            await api.post(`/pesquisas/edit/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data, application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem('token')
                },
            })
            toast.success('Pesquisa atualizada com sucesso!');
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
                titulo="Atualizar Patente"
                subtitulo="Atualize os dados da patente"
            />
            <div className="bg-white rounded-md shadow-md w-full">
                <form className="grid grid-cols-2 m-5 text-[#374151] text-xl font-bold" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div>
                        <p>Nome:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Sinopse:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Solução:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="solucao" id="solucao" cols={55} rows={5} value={solucao} onChange={(e) => setSolucao(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Resumo:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Problema:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="problema" id="problema" cols={55} rows={5} value={problema} onChange={(e) => setProblema(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Aplicação:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Vantagem:</p>
                        <textarea className="shadow-md bg-[#F8FAFC]" name="vantagem" id="vantagem" cols={55} rows={5} value={vantagem} onChange={(e) => setVantagem(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Área Científica:</p>
                        <select className="bg-slate-300" name="area_cientifica" id="area_cientifica" onChange={(e) => setArea_cientifica(e.target.value)}>
                            {optionCientifica.map((optionCientifica) => (
                                <option value={optionCientifica.denominacao}>{optionCientifica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-w-fill-available">
                        <p>Área Econômica:</p>
                        <select className="bg-slate-300" name="area_economica" id="area_economica" onChange={(e) => setArea_economica(e.target.value)}>
                            {optionEconomica.map((optionEconomica) => (
                                <option value={optionEconomica.denominacao}>{optionEconomica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-w-fill-available">
                        <p>Palavra Chave:</p>
                        <select className="bg-slate-300" name="palavraChave" id="palavraChave" onChange={(e) => setPalavra_chave(e.target.value)}>
                            {optionPalavraChave.map((optionPalavraChave) => (
                                <option value={optionPalavraChave.denominacao} >{optionPalavraChave.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-w-fill-available">
                        <p>TRL:</p>
                        <input type="text" name="trl" id="trl" value={trl} onChange={(e) => setTrl(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Criadores:</p>
                        <input type="text" name="criadores" id="criadores" value={criadores} onChange={(e) => setCriadores(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Colaborador:</p>
                        <input type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Data de Criação:</p>
                        <input type="date" name="data_criacao" id="data_criacao" value={data_criacao} onChange={(e) => setData_criacao(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Email:</p>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Telefone:</p>
                        <input type="number" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Links:</p>
                        <input type="text" name="links" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Imagem:</p>
                        <input type="file" name="image" id="image" onChange={handleImage} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>PDF:</p>
                        <input type="file" name="pdf" id="pdf" onChange={handlePdf} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Video:</p>
                        <input type="file" name="video" id="video" onChange={handleVideo} />
                    </div>
                    <div className="flex mt-8">
                        <button className="w-fit h-fit" type="submit"> Update </button>
                    </div>

                </form>
            </div>
        </section>
    )
}
