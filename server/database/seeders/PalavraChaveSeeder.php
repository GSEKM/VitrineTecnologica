<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PalavraChave;

class PalavraChaveSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $a = new PalavraChave();
    $a->denominacao = 'todos';
    $a->save();
    
    $a = new PalavraChave();
    $a->denominacao = 'Componentes';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Agricultura';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Precisão';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Calibração';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Fertilizantes';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Irrigação';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Veterinária';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Máquinas';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Componentes';
    $a->save();

    $a = new PalavraChave();
    $a->denominacao = 'Componentes';
    $a->save();
  }
}
