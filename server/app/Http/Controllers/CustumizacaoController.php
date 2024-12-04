namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CustomizacaoController extends Controller
{
    public function salvar(Request $request)
    {
        // Validação
        $request->validate([
            'corPrincipal' => 'required|string',
            'corSecundaria' => 'required|string',
            'logo' => 'nullable|file|mimes:jpg,jpeg,png|max:2048', // Logo opcional
        ]);

        // Salvar as cores no banco de dados ou em um arquivo de configuração
        $config = [
            'cor_principal' => $request->corPrincipal,
            'cor_secundaria' => $request->corSecundaria,
        ];

        file_put_contents(storage_path('customizacao.json'), json_encode($config));

        // Salvar a logo (se enviada)
        if ($request->hasFile('logo')) {
            $logoPath = $request->file('logo')->store('logos', 'public');
            $config['logo'] = $logoPath;

            // Atualiza o arquivo com o caminho da logo
            file_put_contents(storage_path('customizacao.json'), json_encode($config));
        }

        return response()->json(['message' => 'Configurações salvas com sucesso!'], 200);
    }

    public function obter()
    {
        // Recuperar as configurações salvas
        $configPath = storage_path('customizacao.json');
        if (!file_exists($configPath)) {
            return response()->json(['message' => 'Nenhuma configuração encontrada!'], 404);
        }

        $config = json_decode(file_get_contents($configPath), true);

        return response()->json($config, 200);
    }
}
