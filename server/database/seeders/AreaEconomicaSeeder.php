<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\AreaEconomica;

class AreaEconomicaSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $a = new AreaEconomica();
    $a->denominacao = 'Setor Primário';
    $a->save();

    $a = new AreaEconomica();
    $a->denominacao = 'Setor Secundário';
    $a->save();

    $a = new AreaEconomica();
    $a->denominacao = 'Setor Terciário';
    $a->save();

    $a = new AreaEconomica();
    $a->denominacao = 'Importação e Exportação';
    $a->save();

    $a = new AreaEconomica();
    $a->denominacao = 'Parceria e Desenvolvimento';
    $a->save();
  }
}
