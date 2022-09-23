<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;
    protected $table = 'subcategories';
    protected $fillable = [
        'name',
        'slug',
        'category_id',
    ];


    public function categoryParent()
    {
       return $this->belongsTo(Category::class, 'category_id','id');
    }
}
