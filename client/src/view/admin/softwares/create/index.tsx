import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Title } from "../../../../components/title";

interface Iareas {
    denominacao: string;
}

export function SoftwareCadastrar() {
    const [nome, setNome] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [resumo, setResumo] = useState('');
    const [problema, setProblema] = useState('');
    const [vantagem, setVantagem] = useState('');
    const [aplicacao, setAplicacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [colaborador, setColaborador] = useState('');
    const [data_criacao, setData_criacao] = useState('');
    const [links, setLinks] = useState('');
    const [criadores, setCriadores] = useState('');
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
    const [tecnologia, setTecnologia] = useState('');

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

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const form = new FormData();
        form.append('nome', nome);
        form.append('sinopse', sinopse);
        form.append('resumo', resumo);
        form.append('problema', problema);
        form.append('vantagem', vantagem);
        form.append('aplicacao', aplicacao);
        form.append('telefone', telefone);
        form.append('email', email);
        form.append('colaborador', colaborador);
        form.append('data_criacao', data_criacao);
        form.append('links', links);
        form.append('criadores', criadores);
        form.append('area_cientifica', area_cientifica);
        form.append('area_economica', area_economica);
        form.append('palavra_chave', palavra_chave); 7
        form.append('tecnologia', tecnologia);
        form.append('image', image);
        form.append('video', video);

        try {
            await api.post('/softwares/cadastrar', form, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                },
            });
            toast.success('Software cadastrado com sucesso!');
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
                titulo="Cadastrar Software"
                subtitulo="Cadastre um novo software para a plataforma"
            />
            <div className="bg-white rounded-md shadow-md w-full">
                <form className="grid grid-cols-2 m-5 text-[#374151] text-xl font-bold" onSubmit={handleSubmit}>
                    <div className="mt-2 max-w-fill-available">
                        <p>Nome:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                        {nome.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Sinopse:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                        {sinopse.length < 75 && <p className="text-red-500">Mínimo de 75 caracteres</p> || sinopse.length > 125 && <p className="text-red-500">Máximo de 125 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Resumo:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                        {resumo.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || resumo.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Problema:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="problema" id="problema" cols={55} rows={5} value={problema} onChange={(e) => setProblema(e.target.value)} />
                        {problema.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || problema.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Aplicação:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                        {aplicacao.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || aplicacao.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Vantagem:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="vantagem" id="vantagem" cols={55} rows={5} value={vantagem} onChange={(e) => setVantagem(e.target.value)} />
                        {vantagem.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || vantagem.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Tecnologias utilizadas:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="Tecnologia" id="Tecnologia" cols={55} rows={5} value={tecnologia} onChange={(e) => setTecnologia(e.target.value)} />
                        {tecnologia.length < 255 && <p className="text-red-500">Mínimo de 255 caracteres</p> || tecnologia.length > 500 && <p className="text-red-500">Máximo de 500 caracteres</p>}
                    </div>
                    <div className="max-w-fill-available">
                        <p>Área Científica:</p>
                        <select className="max-w-fill-available bg-slate-300" name="area_cientifica" id="area_cientifica" onChange={(e) => setArea_cientifica(e.target.value)}>
                            {optionCientifica.map((optionCientifica) => (
                                <option value={optionCientifica.denominacao}>{optionCientifica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-w-fill-available">
                        <p>Área Econômica:</p>
                        <select className="max-w-fill-available bg-slate-300" name="area_economica" id="area_economica" onChange={(e) => setArea_economica(e.target.value)}>
                            {optionEconomica.map((optionEconomica) => (
                                <option value={optionEconomica.denominacao}>{optionEconomica.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="max-w-fill-available">
                        <p>Palavra Chave:</p>
                        <select className="max-w-fill-available bg-slate-300" name="palavraChave" id="palavraChave" onChange={(e) => setPalavra_chave(e.target.value)}>
                            {optionPalavraChave.map((optionPalavraChave) => (
                                <option value={optionPalavraChave.denominacao} >{optionPalavraChave.denominacao}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Criadores:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="criadores" id="criadores" value={criadores} onChange={(e) => setCriadores(e.target.value)} />
                        {criadores.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Colaborador:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Data de Criação:</p>
                        <input type="date" name="data_criacao" id="data_criacao" value={data_criacao} onChange={(e) => setData_criacao(e.target.value)} />
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Email:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {email.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Telefone:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="number" name="telefone" id="telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                        {telefone.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Links:</p>
                        <input placeholder="Máximo 255 caracteres e não obrigatório" type="text" name="links" id="links" value={links} onChange={(e) => setLinks(e.target.value)} />
                        {links.length > 255 && <p className="text-red-500">Máximo de 255 caracteres</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Imagem:</p>
                        <input type="file" name="image" id="image" onChange={handleImage} />
                        <p>Tamanho máximo de 2Mb</p>
                        {image && <p className="text-green-500">Imagem selecionada</p>}
                    </div>
                    <div className="mt-2 max-w-fill-available">
                        <p>Video:</p>
                        <input type="file" name="video" id="video" onChange={handleVideo} />
                        <p>Tamanho máximo de 20Mb</p>
                        {video && <p className="text-green-500">Video selecionado</p>}
                    </div>
                    <div className="flex mt-8">
                        <button className="w-fit h-fit" type="submit"> Cadastrar </button>
                    </div>
                </form>
            </div>
        </section>
    )
}