import { useState } from "react";
import { Link } from "react-router-dom";

export function IndexPage() {
    const [selectedColor, setSelectedColor] = useState<string>('#2563EB'); // Cor padrão
    const [logo, setLogo] = useState<File | null>(null);

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setLogo(e.target.files[0]);
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-100">
            {/* Header */}
            <header className="bg-blue-600 text-white py-4">
                <div className="max-w-7xl mx-auto px-6">
                    <h1 className="text-3xl font-bold">Dashboard | Customização</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0">
                    {/* Menu */}
                    <section className="m-10 w-full md:w-1/4 text-gray-400">
                        <div className="flex flex-col bg-white rounded-md shadow-md">
                            <div className="px-3 py-6">
                                <h3 className="font-bold text-3xl">Dashboard |<span className="font-normal"> Gerenciar - Criar - Editar - Excluir</span></h3>
                                <p className="font-medium">Navegação completa para administradores com suas respectivas permissões</p>
                            </div>
                            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5" />
                            <ul className="grid px-5 gap-y-4">
                                <Link to="/admin/customizacao">
                                    <div className="grid grid-flow-col-dense hover:shadow-3xl hover:bg-gray-100 items-center text-left shadow-lg rounded-md">
                                        <li>
                                            <img className="w-64 rounded-tl-md rounded-bl-md" src="assets/pesquisas.svg" alt="" />
                                        </li>
                                        <li>
                                            <h1>Customizar</h1>
                                            <p>Alterar cores base e logos e informações da plataforma</p>
                                        </li>
                                    </div>
                                </Link>
                                {/* Outros links do menu, adicione conforme necessário */}
                            </ul>
                        </div>
                    </section>

                    {/* Customização Form */}
                    <section className="flex-1 bg-white p-6 rounded-md shadow-md">
                        <h2 className="text-2xl font-bold mb-6">Personalize a Plataforma</h2>

                        <div className="space-y-6">
                            {/* Seletor de cor */}
                            <div>
                                <label htmlFor="colorPicker" className="block text-sm font-medium text-gray-700">
                                    Cor principal:
                                </label>
                                <input
                                    id="colorPicker"
                                    type="color"
                                    value={selectedColor}
                                    onChange={handleColorChange}
                                    className="mt-1 block w-16 h-10 border-gray-300 rounded-md shadow-sm"
                                />
                                <p className="mt-2 text-sm text-gray-500">
                                    Cor selecionada: <span style={{ color: selectedColor }}>{selectedColor}</span>
                                </p>
                            </div>

                            {/* Upload de logo */}
                            <div>
                                <label htmlFor="logoUpload" className="block text-sm font-medium text-gray-700">
                                    Logotipo:
                                </label>
                                <input
                                    id="logoUpload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                />
                                {logo && (
                                    <p className="mt-2 text-sm text-gray-500">
                                        Arquivo selecionado: <strong>{logo.name}</strong>
                                    </p>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-4 mt-6">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>&copy; 2024 Vitrine Tecnológica. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
