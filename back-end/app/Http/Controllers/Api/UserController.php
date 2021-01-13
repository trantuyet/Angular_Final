<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    function store(Request $request)
    {
        try {
            $user = new User();
            $user->fill($request->all());
            $user->save();

            $data = [
                'status' => 'success',
                'message' => 'Add successfully'
            ];

            return response()->json($data);
        } catch (\Exception $exception) {
            $data = [
                'status' => 'error',
                'data' => 'Create error'
            ];
            return response()->json($data);
        }

    }

    function index()
    {
        try {

            $users = User::all();
            $data = [
                'status' => 'success',
                'data' => $users
            ];

            return response()->json($data);
        } catch (\Exception $exception) {
            $data = [
                'status' => 'error',
                'message' => 'Error'
            ];

            return response()->json($data);
        }

    }

    function destroy($id) {
        $user = User::find($id);
        $user->delete();
        $data = [
            'status' => 'success',
            'message' => 'Delete successfully'
        ];

        return response()->json($data);
    }
}
