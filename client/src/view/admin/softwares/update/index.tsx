import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../../services/api";
import { ToastContainer, toast } from "react-toastify";
import { Title } from "../../../../components/title";
interface Iareas {
    denominacao: string;
}

export function SoftwareUpdate() {
    const [image, setImage] = useState('');
    const [video, setVideo] = useState('');
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
    const [area_cientifica, setArea_cientifica] = useState('');
    const [optionCientifica, setOptionCientifica] = useState<Iareas[]>([]);
    const [tecnologia, setTecnologia] = useState('');

    const [area_economica, setArea_economica] = useState('');
    const [optionEconomica, setOptionEconomica] = useState<Iareas[]>([]);

    const [palavra_chave, setPalavra_chave] = useState('');
    const [optionPalavraChave, setOptionPalavraChave] = useState<Iareas[]>([]);

    const handleImage = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
        setImage(e.target.files[0]);
    }

    const handleVideo = (e: { target: { files: any; }; }) => {
        if (e.target.files[0]) {
            setVideo(e.target.files[0]);
        }
        setVideo(e.target.files[0]);
    }

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        api.get(`softwares/${id}`).then((response) => {
            setNome(response.data.nome);
            setSinopse(response.data.sinopse);
            setResumo(response.data.resumo);
            setProblema(response.data.problema);
            setVantagem(response.data.vantagem);
            setAplicacao(response.data.aplicacao);
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
            setTecnologia(response.data.tecnologia);
        });
    }, [id]);



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
        form.append('palavra_chave', palavra_chave);
        form.append('image', image);
        form.append('tecnologia', tecnologia);
        form.append('video', video);

        try {
            await api.post(`/softwares/edit/${id}`, form, {
                headers: {
                    'Content-Type': 'multipart/form-data, application/json',
                    'Accept': 'application/json',
                    'Authorization': "Bearer " + localStorage.getItem('token')
                },
            })
            toast.success('Software atualizado com sucesso!');
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
                titulo="Atualizar Software"
                subtitulo="Faça a atualização do software"
            />
            <div className="bg-white rounded-md shadow-md w-full">
                <form className="grid grid-cols-2 m-5 text-[#374151] text-xl font-bold" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="max-w-fill-available">
                        <p>Nome:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" cols={55} rows={5} name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Sinopse:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="sinopse" id="sinopse" cols={55} rows={5} value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Resumo:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="resumo" id="resumo" cols={55} rows={5} value={resumo} onChange={(e) => setResumo(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Problema:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="problema" id="problema" cols={55} rows={5} value={problema} onChange={(e) => setProblema(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Aplicação:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="aplicacao" id="aplicacao" cols={55} rows={5} value={aplicacao} onChange={(e) => setAplicacao(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Vantagem:</p>
                        <textarea className="max-w-fill-available shadow-md bg-[#F8FAFC]" name="vantagem" id="vantagem" cols={55} rows={5} value={vantagem} onChange={(e) => setVantagem(e.target.value)} />
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
                    <div className="max-w-fill-available">
                        <p>Criadores:</p>
                        <input className="max-w-fill-available" type="text" name="criadores" id="criadores" value={criadores} onChange={(e) => setCriadores(e.target.value)} />
                    </div>
                    <div>
                        <p>Colaborador:</p>
                        <input className="max-w-fill-available" type="text" name="colaborador" id="colaborador" value={colaborador} onChange={(e) => setColaborador(e.target.value)} />
                    </div>
                    <div className="max-w-fill-available">
                        <p>Data de Criação:</p>
                        <input  type="date" name="data_criacao" id="data_criacao" value={data_criacao} onChange={(e) => setData_criacao(e.target.value)} />
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
