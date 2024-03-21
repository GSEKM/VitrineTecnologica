<?php

namespace App\Http\Controllers;

use App\Models\User;

class AuthAdminController extends Controller
{
  public function newAdmin($id)
  {
    $user = User::findorFail($id);
    $user->admin = true;
    $user->update();
    return response()->json([
      'data' => [
        'user' => $user
      ], 200
    ]);
  }

  public function removeAdmin($id)
  {
    $user = User::findorFail($id);
    $user->admin = false;
    $user->update();
    return response()->json([
      'data' => [
        'user' => $user
      ], 200
    ]);
  }

  public function showAllUsers()
  {
    $users = User::all()->toArray();
    return response()->json($users, 200);
  }

  public function isAdmin($id)
  {
    $user = User::findorFail($id);
    return response()->json([
      'data' => [
        'user' => $user
      ], 200
    ]);
  }
}
