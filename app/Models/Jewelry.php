<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\JewelryImage;

class Jewelry extends Model
{
    use HasFactory;
    protected $table = 'jewelries';

    protected $fillable = [
        'name',
        'slug',
        'description',
        'original_price',
        'selling_price',
    ];

    public function jewelryImages()
    {
       return $this->hasMany(JewelryImage::class, 'jewelry_id','id');
    }
}
