<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CountryImage extends Model
{
    use HasFactory;
    protected $table = 'country_images';
    protected $fillable = [
        'country_id',
        'image',
    ];
}
