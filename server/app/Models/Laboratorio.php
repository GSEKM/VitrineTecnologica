<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Laboratorio extends Model
{
    use HasFactory;

    protected $connection = 'mysql';
    protected $table = 'laboratorios';
    protected $guarded = [];

    protected $fillable = [
        'nome',
        'sinopse',
        'resumo',
        'aplicacao',
        'colaborador',
        'links',
        'area_cientifica',
        'area_economica',
        'palavras_chave',
        'supervisores',
        'conteudo',
        'image',
        'pdf',
        'telefone',
        'email',
    ];
}
