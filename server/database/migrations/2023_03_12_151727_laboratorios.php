<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('laboratorios', function (Blueprint $table) {
            $table->id();
            $table->longText('nome');
            $table->longText('sinopse');
            $table->longText('resumo');
            $table->longText('aplicacao');
            $table->longText('colaborador');
            $table->longText('links');
            $table->longText('area_cientifica');
            $table->longText('area_economica');
            $table->longText('palavras_chave');
            $table->longText('supervisores');
            $table->longText('conteudo');
            $table->longText('image')->nullable(true);
            $table->longText('pdf')->nullable(true);
            $table->longText('telefone');
            $table->longText('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('laboratorios');
    }
};
