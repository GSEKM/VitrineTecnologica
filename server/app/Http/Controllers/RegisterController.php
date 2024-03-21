<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request, User $user)
    {
        $request->validate(
            [
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
                'password' => 'required|string|confirmed',
                'password_confirmation' => 'required|string',
                'cpf' => 'required|string|unique:users'
            ]
        );

        $userData = $request->only('name', 'email', 'password', 'cpf', 'password_confirmation');
        $userData['password'] = bcrypt($userData['password']);
        $userData['password_confirmation'] = bcrypt($userData['password_confirmation']);

        if (!$user = $user->create($userData)) {
            abort(500, 'Erro ao criar usuário');
        }

        return response()->json([
            'data' => [
                'user' => $user
            ]
        ]);
    }
}
