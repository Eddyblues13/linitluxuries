<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CarImage;

class Car extends Model
{
    use HasFactory;

    protected $table = 'cars';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'original_price',
        'selling_price',
    ];

    public function carImages()
    {
       return $this->hasMany(CarImage::class, 'car_id','id');
    }
}
