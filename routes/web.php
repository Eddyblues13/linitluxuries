<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/about', function () {
    return view('pages.about');
});
Route::get('/jewelries', function () {
    return view('pages.jewelries');
});
Route::get('/cars', function () {
    return view('pages.cars');
});
Route::get('/terms', function () {
    return view('pages.terms');
});


Auth::routes();

Route::get('/', [App\Http\Controllers\UserController::class, 'index'])->name('home');

Route::get('/terms', [App\Http\Controllers\UserController::class, 'terms'])->name('home');

Route::get('/about', [App\Http\Controllers\UserController::class, 'about'])->name('home');

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/car', [App\Http\Controllers\UserController::class, 'car'])->name('car');

Route::get('/car-details/{car_slug}', [App\Http\Controllers\UserController::class, 'carDetails'])->name('car-details');
Route::get('/jewelry-details/{jewelry_slug}', [App\Http\Controllers\UserController::class, 'jewelryDetails'])->name('jewelry-details');
Route::get('/country-house/{house_slug}', [App\Http\Controllers\UserController::class, 'countryHouse']);
Route::get('/house-details/{house_slug}/{country_slug}', [App\Http\Controllers\UserController::class, 'houseDetails']);

Route::get('/jewelry', [App\Http\Controllers\UserController::class, 'jewelry'])->name('jewelry');

Route::prefix('admin')->middleware(['auth', 'isAdmin'])->group(function () {

Route::get('dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index']);

 
Route::controller(App\Http\Controllers\Admin\CategoryController::class)->group(function () {
    Route::get('/category', 'index');
    Route::get('/create', 'create');
    Route::post('/category', 'store');
    Route::get('/category/{category}/edit', 'edit');
    Route::put('/category/{category}', 'update');
});


Route::controller(App\Http\Controllers\Admin\ProductController::class)->group(function () {
    Route::get('/products', 'index');
    Route::get('/products/create', 'create');
    Route::post('/products', 'save');
    Route::get('/products/{product}/edit', 'edit');
    Route::put('/products/{product}', 'update');
    Route::get('/products/{product_id}/delete', 'destroy');
    Route::get('/product-image/{product_image_id}/delete', 'destroyImage');

});


Route::controller(App\Http\Controllers\Admin\CarController::class)->group(function () {
    
    Route::get('/cars', 'index');
    Route::get('/cars/create', 'create');
    Route::post('/cars', 'save');
    Route::get('/cars/{car}/edit', 'edit');
    Route::put('/cars/{car}', 'update');
    Route::get('/cars/{car_id}/delete', 'destroy');
    Route::get('/car-image/{car_image_id}/delete', 'destroyImage');


});


Route::controller(App\Http\Controllers\Admin\JewelryController::class)->group(function () {
    
    Route::get('/jewelries', 'index');
    Route::get('/jewelries/create', 'create');
    Route::post('/jewelries', 'save');
    Route::get('/jewelries/{jewelry}/edit', 'edit');
    Route::put('/jewelries/{jewelry}', 'update');
    Route::get('/jewelries/{jewelry_id}/delete', 'destroy');
    Route::get('/jewelry-image/{jewelry_image_id}/delete', 'destroyImage');


});


Route::controller(App\Http\Controllers\Admin\HouseController::class)->group(function () {
    
    Route::get('/houses', 'index');
    Route::get('/countries/create', 'create');
    Route::post('/houses', 'createCountry');
    Route::get('/houses/{house}/edit', 'viewHouse');
    Route::get('/houses/{house_id}/delete', 'destroy');



});


Route::controller(App\Http\Controllers\Admin\CountryController::class)->group(function () {
    
    Route::get('/countries', 'index');
    Route::get('/house/create', 'create');
    Route::post('/house', 'save');
    Route::get('/house/{house_id}/edit', 'editHouse');
    Route::put('/house/{house}', 'update');
    Route::get('/house/{house_id}/delete', 'destroy');
    Route::get('/houses-image/{house_image_id}/delete', 'destroyImage');




});




});
