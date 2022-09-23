<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Country;
use App\Models\House;
use App\Models\CountryImage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Requests\CountryFormRequest;

class CountryController extends Controller
{
    public function index()
    {
        $countries = Country::all();
        return view('admin.country.index', compact('countries'));
    }

    public function create()
    {
        $houses = House::all();
        return view('admin.country.create', compact('houses'));
    }


    public function save(CountryFormRequest $request)
    {
      $validatedData = $request->validated();

      $house = House::findOrFail($validatedData['house_id']);

      $country = $house->country()->create([
        'house_id' => $validatedData['house_id'],
        'name' => $validatedData['name'],
        'slug' => Str::slug($validatedData['slug']),
        'description' => $validatedData['description'],
        'original_price' => $validatedData['original_price'],
        'selling_price' => $validatedData['selling_price'],
        'trending' => $request->trending== true ? '1':'0',
      ]);


    if($request->hasFile('image')){
        $uploadPath = 'uploads/country/';

         $i=1;
        foreach($request->file('image') as $imageFile){
       
            $ext = $imageFile->getClientOriginalExtension();
            $filename = time().$i++.'.'.$ext;
            $imageFile->move($uploadPath,$filename);
            $finalImagePathName =  $uploadPath.$filename;

            $country->countryImages()->create([
                'country_id' => $country->id,
                'image' => $finalImagePathName,
             ]);
        }

      } 

      return redirect('admin/countries')->with('message', 'House created Successfully');        
    }

    
    public function editHouse(int $house_id){
        $houses = House::all();
        $country = Country::findOrFail($house_id);
        return view('admin.country.edit', compact('houses','country'));
    }




    public function update(CountryFormRequest $request,int $country_id)
    {


        $validatedData = $request->validated();

        $country = House::findOrFail($validatedData['house_id'])
        ->countrY()->where('id',$country_id)->first();

        if($country)
        {
             $country->update([
                'house_id' => $validatedData['house_id'],
                'name' => $validatedData['name'],
                'slug' => Str::slug($validatedData['slug']),
                'description' => $validatedData['description'],
                'original_price' => $validatedData['original_price'],
                'selling_price' => $validatedData['selling_price'],
                'trending' => $request->trending== true ? '1':'0',
              ]);

              if($request->hasFile('image')){
                $uploadPath = 'uploads/country/';
        
                 $i=1;
                foreach($request->file('image') as $imageFile){
               
                    $ext = $imageFile->getClientOriginalExtension();
                    $filename = time().$i++.'.'.$ext;
                    $imageFile->move($uploadPath,$filename);
                    $finalImagePathName =  $uploadPath.$filename;
        
                    $product->countryImages()->create([
                        'product_id' => $country->id,
                        'image' => $finalImagePathName,
                     ]);
                }
        
              } 
        
              return redirect('admin/countries')->with('message', 'Product updated Successfully');  
        }
        else{
            return redirect('admin/countries')->with('message', 'No Such Product Found');
        }

    }







    public function destroyImage(int $country_image_id)
    {
        $countryImage = CountryImage::findOrFail($country_image_id);
        if(File::exists($countryImage->image)){
    
            File::delete($countryImage->image);
        }
        $countryImage->delete();
        return redirect()->back()->with('message', 'country Image Deleted Successfully');
    
    }



    public function destroy(int $country_id)
    {
        $country = Country::findOrFail($country_id);
        if($country->countryImages){
            foreach($country->countryImages as $image){
                if(File::exists($image->image)){
    
                    File::delete($image->image);
                }
            }
        }
    
      $country->delete();
    return redirect()->back()->with('message', 'House Has Been Deleted Successfully');
    
    }


}
