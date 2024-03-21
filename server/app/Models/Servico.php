<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
    use HasFactory;

    protected $table = 'servicos';

    protected $connection = 'mysql';

    protected $guarded = [];

    protected $fillLabel = [
        'nome',
        'sinopse',
        'resumo',
        'problema',
        'aplicacao',
        'telefone',
        'email',
        'links',
        'criadores',
        'palavra_chave',
        'area_cientifica',
        'area_economica',
        'image',
    ];

    // public function midia()
    // {
    //   return $this->hasMany(Midia::class);
    // }
}
