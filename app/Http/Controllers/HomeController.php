<?php

namespace App\Http\Controllers;

use App\Models\Signup;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        return Inertia::render('Home');
    }

    public function store(Request $request)
    {
        $fields = $request->validate([
            'email' => 'required',
        ]);

        Signup::create([
            'emails' => $fields['email'],
        ]);
        
        return redirect()->route('home'); 
    }
}
