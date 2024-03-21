<?php

namespace App\Http\Controllers;

use App\Models\AreaCientifica;
use App\Models\AreaEconomica;
use App\Models\PalavraChave;
use Illuminate\Http\Request;

class AreasController extends Controller
{
  public function areaEconomica()
  {
    $areaEconomica = AreaEconomica::all();

    return response()->json($areaEconomica);
  }

  public function areaCientifica()
  {
    $areaCientifica = AreaCientifica::all();

    return response()->json($areaCientifica);
  }

  public function palavraChave()
  {
    $palavraChave = PalavraChave::all();

    return response()->json($palavraChave);
  }
}
