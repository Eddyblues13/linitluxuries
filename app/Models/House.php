<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Country;

class House extends Model
{
    use HasFactory;
    protected $table = 'houses';
    protected $fillable = [
        'country',
        'slug',

    ];
    public function countrY()
    {
       return $this->hasMany(Country::class, 'house_id','id');
    }
}
