<?php

use App\Http\Controllers\AreasController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\AuthAdminController;
use App\Http\Controllers\LaboratorioController;
use App\Http\Controllers\LogoutController;
use App\Http\Controllers\PatenteController;
use App\Http\Controllers\PesquisaController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\SoftwareController;
use App\Http\Controllers\ServicoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum','throttle:300,1'])->get('/user', function (Request $request) {
    return $request->user();
});

// Auth user
Route::post('/login', [LoginController::class, 'login']);
Route::post('/cadastro', [RegisterController::class, 'register']);
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/logout', [LogoutController::class, 'logout']);
});

// Auth admin
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/newAdmin/{id}', [AuthAdminController::class, 'newAdmin']);
    Route::post('/removeAdmin/{id}', [AuthAdminController::class, 'removeAdmin']);
    Route::get('/showAllUsers', [AuthAdminController::class, 'showAllUsers']);
    Route::get('/isAdmin/{id}', [AuthAdminController::class, 'isAdmin']);
});

// Patente routes
Route::get('/patentes', [PatenteController::class, 'index']);
Route::get('/patentes/{id}', [PatenteController::class, 'show']);
Route::middleware('throttle:100,1')->get('/patentes/search/{search}', [SearchController::class, 'searchPatente']); // Limite de 100 requisições por minuto
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/patentes/edit/{id}', [PatenteController::class, 'update']);
    Route::post('/patentes/cadastrar', [PatenteController::class, 'store']);
    Route::delete('/patentes/{id}', [PatenteController::class, 'destroy']);
});

// Software routes
Route::get('/softwares', [SoftwareController::class, 'index']);
Route::get('/softwares/{id}', [SoftwareController::class, 'show']);
Route::middleware('throttle:100,1')->get('/softwares/search/{search}', [SearchController::class, 'searchSoftware']); // Limite de 100 requisições por minuto
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/softwares/cadastrar', [SoftwareController::class, 'store']);
    Route::post('/softwares/edit/{id}', [SoftwareController::class, 'update']);
    Route::delete('/softwares/{id}', [SoftwareController::class, 'destroy']);
});

// Servicos routes
Route::get('/servicos', [ServicoController::class, 'index']);
Route::get('/servicos/{id}', [ServicoController::class, 'show']);
Route::middleware('throttle:100,1')->get('/servicos/search/{search}', [SearchController::class, 'searchServico']); // Limite de 100 requisições por minuto
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/servicos/cadastrar', [ServicoController::class, 'store']);
    Route::post('/servicos/edit/{id}', [ServicoController::class, 'update']);
    Route::delete('/servicos/{id}', [ServicoController::class, 'destroy']);
});

// Pesquisas routes
Route::get('/pesquisas', [PesquisaController::class, 'index']);
Route::get('/pesquisas/{id}', [PesquisaController::class, 'show']);
Route::middleware('throttle:100,1')->get('/pesquisas/search/{search}', [SearchController::class, 'searchPesquisa']); // Limite de 100 requisições por minuto
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/pesquisas/cadastrar', [PesquisaController::class, 'store']);
    Route::post('/pesquisas/edit/{id}', [PesquisaController::class, 'update']);
    Route::delete('/pesquisas/{id}', [PesquisaController::class, 'destroy']);
});

// Laboratorio routes
Route::get('/laboratorios', [LaboratorioController::class, 'index']);
Route::get('/laboratorios/{id}', [LaboratorioController::class, 'show']);
Route::middleware('throttle:100,1')->get('/laboratorios/search/{search}', [SearchController::class, 'searchLaboratorio']); // Limite de 100 requisições por minuto
Route::middleware(['auth:sanctum','throttle:300,1'])->group(function () {
    Route::post('/laboratorios/cadastrar', [LaboratorioController::class, 'store']);
    Route::post('/laboratorios/edit/{id}', [LaboratorioController::class, 'update']);
    Route::delete('/laboratorios/{id}', [LaboratorioController::class, 'destroy']);
});

// Areas routes
Route::get('/areaEconomica', [AreasController::class, 'areaEconomica']);
Route::get('/areaCientifica', [AreasController::class, 'areaCientifica']);
Route::get('/palavraChave', [AreasController::class, 'palavraChave']);
