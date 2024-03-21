<?php

namespace App\Http\Controllers;

use App\Models\Pesquisa;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class PesquisaController extends Controller
{
    public function index()
    {
        try {
            $pesquisa = Pesquisa::all()->toArray();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($pesquisa, 201);
    }

    public function store(Request $request)
    {
        try {
            $pesquisa = Pesquisa::create([
                'nome' => $request->nome,
                'area_economica' => $request->area_economica,
                'area_cientifica' => $request->area_cientifica,
                'sinopse' => $request->sinopse,
                'solucao' => $request->solucao,
                'resumo' => $request->resumo,
                'problema' => $request->problema,
                'vantagem' => $request->vantagem,
                'aplicacao' => $request->aplicacao,
                'trl' => $request->trl,
                'telefone' => $request->telefone,
                'email' => $request->email,
                'colaborador' => $request->colaborador,
                'data_criacao' => $request->data_criacao,
                'links' => $request->links,
                'criadores' => $request->criadores,
                'palavra_chave' => $request->palavra_chave,
            ]);
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/pesquisa', $name);
                $pesquisa->image = "/images/pesquisa/" . $name;
            }
            
            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/pesquisa', $name);
                $pesquisa->video = "/video/pesquisa/" . $name;
            }

            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/pesquisa', $name);
                $pesquisa->pdf = "pdf/pesquisa/" . $name;
            }
            $pesquisa->save();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($pesquisa, 201);
    }

    public function show($id)
    {
        try {
            $pesquisa = Pesquisa::find($id);
            if (!$pesquisa) throw new \Exception("Não foi possível encontrar a pesquisa com o id: {$id}");
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($pesquisa, 201);
    }

    public function update(Request $request)
    {
        try {
            $pesquisa = Pesquisa::findOrFail($request->id);
            $pesquisa->update($request->all());
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/pesquisa', $name);
                $pesquisa->image = "/images/pesquisa/" . $name;
            }
            
            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/pesquisa', $name);
                $pesquisa->video = "/video/pesquisa/" . $name;
            }

            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/pesquisa', $name);
                $pesquisa->pdf = "/pdf/pesquisa/" . $name;
            }
            $pesquisa->update();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($pesquisa, 201);
    }

    public function destroy($id)
    {
        try {
            $pesquisa = Pesquisa::find($id);
            if (!$pesquisa) throw new \Exception("Não foi possível encontrar a pesquisa com o id: {$id}");
            $pesquisa->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json(['success' => 'Pesquisa deletada com sucesso!'], 201);
    }
}
