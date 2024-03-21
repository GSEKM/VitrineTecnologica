<?php

namespace App\Http\Controllers;

use App\Models\Patente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class PatenteController extends Controller
{
    public function index(int $skip = 0, int $take = 10)
    {
        try {
            $patente = Patente::skip($skip)->take($take)->get();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($patente, 201);
    }

    public function store(Request $request)
    {
        try {
                $patente = Patente::create([
                'nome' => $request->nome,
                'area_economica' => $request->area_economica,
                'area_cientifica' => $request->area_cientifica,
                'sinopse' => $request->sinopse,
                'pct' => $request->pct,
                'solucao' => $request->solucao,
                'inpi' => $request->inpi,
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
                $image->storeAs('public/images/patente', $name);
                $patente->image = "/images/patente/" . $name;
               
            }

            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/patente', $name);
                $patente->video = "/video/patente/" . $name;
            }

            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/patente', $name);
                $patente->pdf = "/pdf/patente/" . $name;
            }

            $patente->save();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao cadastrar patente',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Patente cadastrada com sucesso',
            'patente' => $patente,
        ], 201);
    }

    public function show($id)
    {
        try {
            $patente = Patente::findOrFail($id)->toArray();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Patente não encontrada',
                'error' => $e->getMessage()
            ], 404);
        }

        return response()->json($patente, 201);
    }

    public function update(Request $request, $id)
    {
        try {
            $patente = Patente::findOrFail($id);
            $patente->update($request->all());
    
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/patente', $name);
                $patente->image = "/images/patente/" . $name;
            }
    
            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/patente', $name);
                $patente->video = "/video/patente/" . $name;
            }
    
            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/patente', $name);
                $patente->pdf = "/pdf/patente/" . $name;
            }
    
            $patente->save();
    
            return response()->json([
                'message' => 'Patente atualizado com sucesso',
                'patente' => $patente,
            ], 200);
        } catch (\Exception $e) {
            // Log do erro aqui
            return response()->json([
                'message' => 'Erro ao atualizar patente',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
    public function destroy($id)
    {
        try {
            $patente = Patente::find($id);
            Patente::destroy($id);
            if ($patente->image) {
                $image_path = "public/images/patente/" . $patente->image;
                if (Storage::exists($image_path)) {
                    Storage::delete($image_path);
                }
            }
            if ($patente->video) {
                $video_path = "public/video/patente/" . $patente->video;
                if (Storage::exists($video_path)) {
                    Storage::delete($video_path);
                }
            }
            if ($patente->pdf) {
                $pdf_path = "public/pdf/patente/" . $patente->pdf;
                if (Storage::exists($pdf_path)) {
                    Storage::delete($pdf_path);
                }
            }
            $patente->delete();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao deletar patente',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Patente deletada com sucesso'
        ], 201);
    }
}
