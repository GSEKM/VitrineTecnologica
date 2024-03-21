import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "../../../../components/title";
import api from "../../../../services/api";

interface Iareas {
    denominacao: string;
}

export function LaboratorioCadastro() {
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [resumo, setResumo] = useState('');
    const [aplicacao, setAplicacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [colaborador, setColaborador] = useState('');
    const [links, setLinks] = useState('');
    const [supervisores, setSupervisores] = useState('');
    const [image, setImage] = useState('');
    const [pdf, setPdf] = useState('');
    const [conteudo, setConteudo] = useState('');

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

    const handlePdf = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setPdf(e.target.files[0]);
        }
    };

    const verificacao = () => { toast.success("Laboratório cadastrada com sucesso!") }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const form = new FormData();
        form.append('nome', nome);
        form.append('sinopse', sinopse);
        form.append('resumo', resumo);
        form.append('aplicacao', aplicacao);
        form.append('telefone', telefone);
        form.append('email', email);
        form.append('colaborador', colaborador);
        form.append('links', links);
        form.append('supervisores', supervisores);
        form.append('area_cientifica', area_cientifica);
        form.append('area_economica', area_economica);
        form.append('palavras_chave', palavra_chave);
        form.append('image', image);
        form.append('pdf', pdf);
        form.append('conteudo', conteudo);

        try {
            await api.post('/laboratorios/cadastrar', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
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
                titulo="Cadastrar Laboratório"
                subtitulo="Cadastre um novo laboratório"
            />
            <div className="bg-white rounded-md shadow-md w-full">
                <form className="grid grid-cols-2 m-5 text-[#374151] text-xl font-bold" onSubmit={handleSubmit}>
                    <div className="mt-2">
                        <p>Nome:</p>
                        <textarea placeholder="Máximo de 255 caracteres" className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        {nome.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Sinopse:</p>
                        <textarea placeholder="Máximo de 125 caracteres e mínimo de 75" className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                        {sinopse.length < 75 && <p className="text-red-500">Mínimo de 75 caracteres</p> || sinopse.length > 125 && <p className="text-red-500">Máximo de 125 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Resumo:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                        {resumo.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || resumo.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Aplicação:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                        {aplicacao.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || aplicacao.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Conteúdo:</p>
                        <textarea placeholder="Mínimo de 255 caracteres máximo de 500 caracteres" className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="conteudo" id="conteudo" cols={55} rows={5} value={conteudo} onChange={(e) => setConteudo(e.target.value)} />
                        {conteudo.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || conteudo.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Supervisores responsáveis:</p>
                        <textarea placeholder="Máximo de 255 caracteres" className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="supervisores" id="supervisores" value={supervisores} onChange={(e) => setSupervisores(e.target.value)} />
                        {supervisores.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Área Científica:</p>
                        <select className="bg-slate-300" name="area_cientifica" id="area_cientifica" onChange={(e) => setArea_cientifica(e.target.value)}>
                            {optionCientifica.map((optionCientifica) => (
                                <option value={optionCientifica.denominacao}>{optionCientifica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <p>Área Econômica:</p>
                        <select className="bg-slate-300" name="area_economica" id="area_economica" onChange={(e) => setArea_economica(e.target.value)}>
                            {optionEconomica.map((optionEconomica) => (
                                <option value={optionEconomica.denominacao}>{optionEconomica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <p>Palavra Chave:</p>
                        <select className="bg-slate-300" name="palavraChave" id="palavraChave" onChange={(e) => setPalavra_chave(e.target.value)}>
                            {optionPalavraChave.map((optionPalavraChave) => (
                                <option value={optionPalavraChave.denominacao} >{optionPalavraChave.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2">
                        <p>Colaborador:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div className="mt-2">
                        <p>Email:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {email.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Telefone:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="number" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        {telefone.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Links:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="links" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
                        {links.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2">
                        <p>Imagem:</p>
                        <input type="file" name="image" id="image" onChange={handleImage} />
                        <p>Tamanho máximo de 2Mb</p>
                        {image && <p className="text-green-500">Imagem selecionada</p>}
                    </div>
                    <div className="mt-2">
                        <p>PDF:</p>
                        <input type="file" name="pdf" id="pdf" onChange={handlePdf} />
                        <p>Tamanho máximo de 4Mb</p>
                        {pdf && <p className="text-green-500">PDF selecionado</p>}
                    </div>
                    <div className="flex mt-8">
                        <button className="w-fit h-fit" type="submit" onClick={verificacao}> Cadastrar </button>
                    </div>

                </form>
            </div>
        </section>
    )
}