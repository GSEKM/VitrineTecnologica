<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Software extends Model
{
    use HasFactory;

    protected $table = 'softwares';

    protected $connection = 'mysql';

    protected $guarded = [];

    protected $fillLabel = [
        'nome',
        'sinopse',
        'tecnologia',
        'resumo',
        'problema',
        'vantagem',
        'telefone',
        'email',
        'colaborador',
        'data_criacao',
        'links',
        'criadores',
        'area_cientifica',
        'area_economica',
        'palavra_chave',
        'image',
        'video',
    ];

    // public function midia()
    // {
    //   return $this->hasMany(Midia::class);
    // }
}
