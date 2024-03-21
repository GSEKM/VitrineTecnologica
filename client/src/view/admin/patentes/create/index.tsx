import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../../components/title";

interface Iareas {
    denominacao: string;
}

export function PatenteCadastrar() {
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [pct, setPct] = useState('');
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
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [pdf, setPdf] = useState('');
    const [inpi, setInpi] = useState('');
    const [solucao, setSolucao] = useState('');

    const [area_cientifica, setArea_cientifica] = useState('');
    const [optionCientifica, setOptionCientifica] = useState<Iareas[]>([]);

    const [area_economica, setArea_economica] = useState('');
    const [optionEconomica, setOptionEconomica] = useState<Iareas[]>([]);

    const [palavra_chave, setPalavra_chave] = useState('');
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

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
    };

    const handlePdf = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setPdf(e.target.files[0]);
        }
    };

    const verificacao = () => { toast.success("Patente cadastrada com sucesso!") }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const form = new FormData();
        form.append('nome', nome);
        form.append('sinopse', sinopse);
        form.append('pct', pct);
        form.append('inpi', inpi);
        form.append('resumo', resumo);
        form.append('problema', problema);
        form.append('solucao', solucao);
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
        try {
            await api.post('/patentes/cadastrar', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': "Bearer " + localStorage.getItem('token'),
                },
            });
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
                titulo="Cadastrar Patente"
                subtitulo="Cadastre uma nova patente"
            />
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 m-5 text-[#374151] text-xl font-bold bg-white rounded-md shadow-md p-4" onSubmit={handleSubmit}>
                    <div className="m-4">
                        <p>Nome:</p>
                        <textarea placeholder="Máximo de 255 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        {nome.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Sinopse:</p>
                        <textarea placeholder="Máximo de 125 caracteres e mínimo de 75" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                        {sinopse.length < 75 && <p className="text-red-500">Mínimo de 75 caracteres</p> || sinopse.length > 125 && <p className="text-red-500">Máximo de 125 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Resumo:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                        {resumo.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || resumo.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Solução:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="solucao" id="solucao" cols={55} rows={5} value={solucao} onChange={(e) => setSolucao(e.target.value)} />
                        {solucao.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || solucao.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Problema:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="problema" id="problema" cols={55} rows={5} value={problema} onChange={(e) => setProblema(e.target.value)} />
                        {problema.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || problema.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Aplicação:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                        {aplicacao.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || aplicacao.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Vantagem:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="shadow-md bg-[#F8FAFC] max-w-fill-available" name="vantagem" id="vantagem" cols={55} rows={5} value={vantagem} onChange={(e) => setVantagem(e.target.value)} />
                        {vantagem.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || vantagem.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Área Científica:</p>
                        <select className="bg-slate-300 max-w-fill-available" name="area_cientifica" id="area_cientifica" onChange={(e) => setArea_cientifica(e.target.value)}>
                            {optionCientifica.map((optionCientifica) => (
                                <option value={optionCientifica.denominacao}>{optionCientifica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="m-4">
                        <p>Área Econômica:</p>
                        <select className="bg-slate-300" name="area_economica" id="area_economica" onChange={(e) => setArea_economica(e.target.value)}>
                            {optionEconomica.map((optionEconomica) => (
                                <option value={optionEconomica.denominacao}>{optionEconomica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="m-4">
                        <p>Palavra Chave:</p>
                        <select className="bg-slate-300" name="palavraChave" id="palavraChave" onChange={(e) => setPalavra_chave(e.target.value)}>
                            {optionPalavraChave.map((optionPalavraChave) => (
                                <option value={optionPalavraChave.denominacao} >{optionPalavraChave.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="m-4">
                        <p>TRL:</p>
                        <input placeholder="Máximo de 500 caracteres" type="text" name="trl" id="trl" value={trl} onChange={(e) => setTrl(e.target.value)} />
                        {trl.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>PCT:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="pct" id="pct" value={pct} onChange={(e) => setPct(e.target.value)} />
                        {pct.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>INPI:</p>
                        <input placeholder="Máximo 255 caracteres" type="text" name="inpi" id="inpi" value={inpi} onChange={(e) => setInpi(e.target.value)} />
                        {inpi.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Criadores:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="criadores" id="criadores" value={criadores} onChange={(e) => setCriadores(e.target.value)} />
                        {criadores.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Colaborador:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div className="m-4">
                        <p>Data de Criação:</p>
                        <input type="date" name="data_criacao" id="data_criacao" value={data_criacao} onChange={(e) => setData_criacao(e.target.value)} />
                    </div>
                    <div className="m-4">
                        <p>Email:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {email.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Telefone:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="number" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        {telefone.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Links:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="links" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
                        {links.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="m-4">
                        <p>Imagem:</p>
                        <input className="max-w-fill-available" type="file" name="image" id="image" onChange={handleImage} />
                        <p>Tamanho máximo de 2Mb</p>
                        {image && <p className="text-green-500">Imagem selecionada</p>}
                    </div>
                    <div className="m-4">
                        <p>PDF:</p>
                        <input className="max-w-fill-available" type="file" name="pdf" id="pdf" onChange={handlePdf} />
                        <p>Tamanho máximo de 4Mb</p>
                        {pdf && <p className="text-green-500">PDF selecionado</p>}
                    </div>
                    <div className="m-4">
                        <p>Video:</p>
                        <input className="max-w-fill-available" type="file" name="video" id="video" onChange={handleVideo} />
                        <p>Tamanho máximo de 20Mb</p>
                        {video && <p className="text-green-500">Video selecionado</p>}
                    </div>
                    <div className="flex m-4">
                        <button className="w-fit h-fit" type="submit" onClick={verificacao}> Cadastrar </button>
                    </div>
                </form>
        </section>
    )
}