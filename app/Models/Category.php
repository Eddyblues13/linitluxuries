<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Subcategory;

class Category extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $fillable = [
        'name',
        'slug',
        'description',
        'image',
        'status',
    ];
    public function products()
    {
       return $this->hasMany(Product::class, 'category_id','id');
    }

    public function subCategories()
    {
       return $this->hasMany(Subcategory::class, 'category_id','id');
    }
}
