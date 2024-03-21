<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
  public function logout()
  {
    auth()->user()->tokens()->delete();

    return response()->json([
      'message' => 'Logged out'
    ]);
  }
}
