<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Due to the following code, now you can be able to use Laravel route proxy as a Vue route, and you can display the Vue components depending on the current URL.
Route::get('/{any}', function () {
    return view('post');
})->where('any', '.*');

Route::get('/home', 'HomeController@index')->name('home');
