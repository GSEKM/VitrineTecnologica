<?php

namespace App\Http\Controllers;

use App\Models\AreaCientifica;
use App\Models\Laboratorio;
use App\Models\Patente;
use App\Models\Pesquisa;
use App\Models\Servico;
use App\Models\Software;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    public function searchPatente(Request $request)
    {
        $patente = Patente::Where('palavra_chave', 'like', '%' . $request->search . '%')->get();
        return response()->json($patente, 201);
    }

    public function searchLaboratorio(Request $request)
    {
        $laboratorio = Laboratorio::Where('nome', 'like', '%' . $request->search . '%')->get();
        return response()->json($laboratorio, 201);
    }

    public function searchServico(Request $request)
    {
        $servico = Servico::Where('nome', 'like', '%' . $request->search . '%')->get();
        return response()->json($servico, 201);
    }

    public function searchSoftware(Request $request)
    {
        $software = Software::Where('nome', 'like', '%' . $request->search . '%')->get();
        return response()->json($software, 201);
    }

    public function searchPesquisa(Request $request)
    {
        $pesquisa = Pesquisa::Where('nome', 'like', '%' . $request->search . '%')->get();
        return response()->json($pesquisa, 201);
    }
}
