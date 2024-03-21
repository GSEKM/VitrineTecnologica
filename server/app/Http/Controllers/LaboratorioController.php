<?php

namespace App\Http\Controllers;

use App\Models\Laboratorio;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;

class LaboratorioController extends Controller
{
    public function index()
    {
        $laboratorios = Laboratorio::all();
        return response()->json($laboratorios, 200);
    }

    public function store(Request $request)
    {
        $laboratorio = Laboratorio::create([
            'nome' => $request->nome,
            'sinopse' => $request->sinopse,
            'resumo' => $request->resumo,
            'aplicacao' => $request->aplicacao,
            'colaborador' => $request->colaborador,
            'links' => $request->links,
            'area_cientifica' => $request->area_cientifica,
            'area_economica' => $request->area_economica,
            'palavras_chave' => $request->palavras_chave,
            'supervisores' => $request->supervisores,
            'conteudo' => $request->conteudo,
            'telefone' => $request->telefone,
            'email' => $request->email,
        ]);
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
            $image->storeAs('public/images/laboratorio', $name);
            $laboratorio->image = "/images/laboratorio/" . $name;
        }
        
        if ($request->hasFile('pdf')) {
            $pdf = $request->file('pdf');
            $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
            $pdf->storeAs('public/pdf/laboratorio', $name);
            $laboratorio->pdf = "/pdf/laboratorio/" . $name;
        }
        $laboratorio->save();
        return response()->json($laboratorio, 201);
    }

    public function show($id)
    {
        try {
            $laboratorio = Laboratorio::find($id);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json($laboratorio, 201);
    }

    public function update(Request $request)
    {
        try {
            $laboratorio = Laboratorio::findOrFail($request->id);
            $laboratorio->update($request->all());
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/laboratorio', $name);
                $laboratorio->image = "/images/laboratorio/" . $name;
            }
            
            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/laboratorio', $name);
                $laboratorio->pdf = "/pdf/laboratorio/" . $name;
            }
            $laboratorio->update();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($laboratorio, 201);
    }

    public function destroy($id)
    {
        try {
            $laboratorio = Laboratorio::find($id);
            if ($laboratorio->image) {
                $image_path = "public/images/laboratorio/" . $laboratorio->image;
                if (Storage::exists($image_path)) {
                    Storage::delete($image_path);
                }
            }
            if ($laboratorio->pdf) {
                $pdf_path = "public/pdf/laboratorio/" . $laboratorio->pdf;
                if (Storage::exists($pdf_path)) {
                    Storage::delete($pdf_path);
                }
            }
            $laboratorio->delete();
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
        return response()->json($laboratorio, 201);
    }
}
