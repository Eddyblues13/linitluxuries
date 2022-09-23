<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\House;
use Illuminate\Support\Str;
use App\Http\Requests\HouseFormRequest;

class HouseController extends Controller
{
    public function index()
    {

        $houses = House::all();
        return view('admin.house.index',compact('houses'));
    }


    public function create()
    {   
        $houses = House::all();
        return view('admin.house.create',compact('houses'));
    }


    public function createCountry(HouseFormRequest $request)
    {
      

        $validatedData = $request->validated();
        $category = new House;
        $category->country = $validatedData['country'];
        $category->slug = Str::slug($validatedData['slug']);
        $category ->save();

      
      return redirect('admin/houses')->with('message', 'Country Created Successfully');        
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
