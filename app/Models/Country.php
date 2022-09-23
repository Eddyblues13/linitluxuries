<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\House;
use App\Models\CountryImage;

class Country extends Model
{
    use HasFactory;
    protected $table = 'countries';
    protected $fillable = [
        'house_id',
        'name',
        'slug',
        'description',
        'small_description',
        'original_price',
        'selling_price',
        'trending',
    ];

    public function house()
    {
       return $this->belongsTo(House::class, 'house_id','id');
    }

    public function countryImages()
    {
       return $this->hasMany(CountryImage::class, 'country_id','id');
    }
}
