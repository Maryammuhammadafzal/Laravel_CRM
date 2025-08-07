<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia\Inertia::render('Dashboard'))->name('dashboard');
    Route::resource('customers', CustomerController::class);
});

require __DIR__ .'/auth.php';