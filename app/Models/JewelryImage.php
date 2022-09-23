<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JewelryImage extends Model
{
    use HasFactory;
    protected $table = 'jewelry_images';
    protected $fillable = [
        'jewelry_id',
        'image',
    ];
}
