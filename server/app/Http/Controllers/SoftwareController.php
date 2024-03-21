<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SoftwareRequest;
use App\Models\Midia;
use App\Models\Software;
use Ramsey\Uuid\Uuid;
use Exception;
// use Illuminate\Http\Request;

class SoftwareController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $software = Software::all()->toArray();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao listar softwares',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json($software);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $software = Software::create([
                'nome' => $request->nome,
                'area_economica' => $request->area_economica,
                'area_cientifica' => $request->area_cientifica,
                'sinopse' => $request->sinopse,
                'resumo' => $request->resumo,
                'problema' => $request->problema,
                'aplicacao' => $request->aplicacao,
                'vantagem' => $request->vantagem,
                'colaborador' => $request->colaborador,
                'data_criacao' => $request->data_criacao,
                'email' => $request->email,
                'telefone' => $request->telefone,
                'links' => $request->links,
                'palavra_chave' => $request->palavra_chave,
                'criadores' => $request->criadores,
                'tecnologia' => $request->tecnologia,
            ]);
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/software', $name);
                $software->image = "/images/software/" . $name;
            }

            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/software', $name);
                $software->video = "/video/software" . $name;
            }

            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/software', $name);
                $software->pdf = "/pdf/software/" . $name;
            }
            $software->save();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao cadastrar software',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Software cadastrado com sucesso',
            'software' => $software,
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try {
            $software = Software::findOrFail($id)->toArray();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao listar software',
                'error' => $e->getMessage()
            ], 404);
        }
        return response()->json($software, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $software = Software::findOrFail($id);
            $software->update($request->all());
            if ($request->hasFile('image')) {
                $image = $request->file('image');
                $name = Uuid::uuid4()->toString() . '.' . $image->getClientOriginalExtension();
                $image->storeAs('public/images/software', $name);
                $software->image = "/images/software/" . $name;
            }

            if ($request->hasFile('video')) {
                $video = $request->file('video');
                $name = Uuid::uuid4()->toString() . '.' . $video->getClientOriginalExtension();
                $video->storeAs('public/video/software', $name);
                $software->video = "/video/software" . $name;
            }

            if ($request->hasFile('pdf')) {
                $pdf = $request->file('pdf');
                $name = Uuid::uuid4()->toString() . '.' . $pdf->getClientOriginalExtension();
                $pdf->storeAs('public/pdf/software', $name);
                $software->pdf = "/pdf/software/" . $name;
            }
            $software->update();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao atualizar software',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Software atualizado com sucesso',
            'software' => $software,
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $software = Software::findOrFail($id);
            $software->delete();
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Erro ao deletar software',
                'error' => $e->getMessage()
            ], 500);
        }

        return response()->json([
            'message' => 'Software deletado com sucesso',
        ], 201);
    }
}
