<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pesquisa extends Model
{
    use HasFactory;

    protected $table = 'pesquisas';

    protected $connection = 'mysql';

    protected $guarded = [];

    protected $fillable = [
        'nome',
        'sinopse',
        'solucao',
        'resumo',
        'problema',
        'vantagem',
        'aplicacao',
        'trl',
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
        'pdf',
        'video'
    ];
}
