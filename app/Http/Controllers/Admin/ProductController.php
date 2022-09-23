<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Requests\ProductFormRequest;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('admin.products.index', compact('products'));
    }
    public function create()
    {
        $categories = Category::all();
        return view('admin.products.create', compact('categories'));
    }


    public function save(ProductFormRequest $request)
    {
      $validatedData = $request->validated();

      $category = Category::findOrFail($validatedData['category_id']);

      $product = $category->products()->create([
        'category_id' => $validatedData['category_id'],
        'name' => $validatedData['name'],
        'slug' => Str::slug($validatedData['slug']),
        'description' => $validatedData['description'],
        'small_description' => $validatedData['small_description'],
        'original_price' => $validatedData['original_price'],
        'selling_price' => $validatedData['selling_price'],
        'quantity' => $validatedData['quantity'],
        'trending' => $request->trending== true ? '1':'0',
        'status' => $request->status== true ? '0':'1',
      ]);


    if($request->hasFile('image')){
        $uploadPath = 'uploads/product/';

         $i=1;
        foreach($request->file('image') as $imageFile){
       
            $ext = $imageFile->getClientOriginalExtension();
            $filename = time().$i++.'.'.$ext;
            $imageFile->move($uploadPath,$filename);
            $finalImagePathName =  $uploadPath.$filename;

            $product->productImages()->create([
                'product_id' => $product->id,
                'image' => $finalImagePathName,
             ]);
        }

      } 

      return redirect('admin/products')->with('message', 'Product created Successfully');        
    }

    public function edit(int $product_id){
        $categories = Category::all();
        $product = Product::findOrFail($product_id);
        return view('admin.products.edit', compact('categories','product'));
    }

    public function update(ProductFormRequest $request, int $product_id)
    {

        $validatedData = $request->validated();

        $product = Category::findOrFail($validatedData['category_id'])
        ->products()->where('id',$product_id)->first();

        if($product)
        {
             $product->update([
                'category_id' => $validatedData['category_id'],
                'name' => $validatedData['name'],
                'slug' => Str::slug($validatedData['slug']),
                'description' => $validatedData['description'],
                'small_description' => $validatedData['small_description'],
                'original_price' => $validatedData['original_price'],
                'selling_price' => $validatedData['selling_price'],
                'quantity' => $validatedData['quantity'],
                'trending' => $request->trending== true ? '1':'0',
                'status' => $request->status== true ? '0':'1',
              ]);

              if($request->hasFile('image')){
                $uploadPath = 'uploads/product/';
        
                 $i=1;
                foreach($request->file('image') as $imageFile){
               
                    $ext = $imageFile->getClientOriginalExtension();
                    $filename = time().$i++.'.'.$ext;
                    $imageFile->move($uploadPath,$filename);
                    $finalImagePathName =  $uploadPath.$filename;
        
                    $product->productImages()->create([
                        'product_id' => $product->id,
                        'image' => $finalImagePathName,
                     ]);
                }
        
              } 
        
              return redirect('admin/products')->with('message', 'Product updated Successfully');  
        }
        else{
            return redirect('admin/products')->with('message', 'No Such Product Found');
        }

    }

public function destroyImage(int $product_image_id)
{
    $productImage = ProductImage::findOrFail($product_image_id);
    if(File::exists($productImage->image)){

        File::delete($productImage->image);
    }
    $productImage->delete();
    return redirect()->back()->with('message', 'Product Image Deleted Successfully');

}

public function destroy(int $product_id)
{
    $product = Product::findOrFail($product_id);
    if($product->productImages){
        foreach($product->productImages as $image){
            if(File::exists($image->image)){

                File::delete($image->image);
            }
        }
    }

  $product->delete();
return redirect()->back()->with('message', 'Product Deleted Successfully');

}




}
