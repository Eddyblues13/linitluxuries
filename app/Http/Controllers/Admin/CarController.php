<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Car;
use App\Models\CarImage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Requests\CarFormRequest;

class CarController extends Controller
{
    public function index()
    {
         $cars = Car::all();
        return view('admin.cars.index',compact('cars'));
    }
    public function create()
    {
        // $cars = Cars::all();
        return view('admin.cars.create');
    }


    public function edit(int $car){
       
        $car = Car::findOrFail($car);
        return view('admin.cars.edit', compact('car'));
    }





    public function update(CarFormRequest $request, int $car_id)
    {

        $validatedData = $request->validated();

        $car = Car::findOrFail($car_id);

        if($car)
        {
             $car->update([
                'name' => $validatedData['name'],
                'slug' => $validatedData['slug'],
                'description' => $validatedData['description'],
                'original_price' => $validatedData['original_price'],
                'selling_price' => $validatedData['selling_price'],
              ]);

              if($request->hasFile('image')){
                $uploadPath = 'uploads/cars/';
        
                 $i=1;
                foreach($request->file('image') as $imageFile){
               
                    $ext = $imageFile->getClientOriginalExtension();
                    $filename = time().$i++.'.'.$ext;
                    $imageFile->move($uploadPath,$filename);
                    $finalImagePathName =  $uploadPath.$filename;
        
                    $car->carImages()->create([
                        'car_id' => $car->id,
                        'image' => $finalImagePathName,
                     ]);
                }
        
              } 
        
              return redirect('admin/cars')->with('message', 'Car has been updated Successfully');  
        }
        else{
            return redirect('admin/cars')->with('message', 'No Such Product Found');
        }

    }


    public function save(CarFormRequest $request)
    {
     
      $validatedData = $request->validated();
      $cars = new Car;
      $cars->name = $validatedData['name'];
      $cars->slug = $validatedData['slug'];
      $cars->description = $validatedData['description'];
      $cars->original_price = $validatedData['original_price'];
      $cars->selling_price = $validatedData['selling_price'];
      //$cars->slug = Str::slug($validatedData['slug']);
      $cars->description = $validatedData['description'];
      $cars ->save();


    if($request->hasFile('image')){
        $uploadPath = 'uploads/cars/';

         $i=1;
        foreach($request->file('image') as $imageFile){
       
            $ext = $imageFile->getClientOriginalExtension();
            $filename = time().$i++.'.'.$ext;
            $imageFile->move($uploadPath,$filename);
            $finalImagePathName =  $uploadPath.$filename;

            $cars->carImages()->create([
                'car_id' => $cars->id,
                'image' => $finalImagePathName,
             ]);
        }

      } 

      return redirect('admin/cars')->with('message', 'Car created Successfully');        
    }


    public function destroyImage(int $car_image_id)
    {
        $carImage = CarImage::findOrFail($car_image_id);
        if(File::exists($carImage->image)){
    
            File::delete($carImage->image);
        }
        $carImage->delete();
        return redirect()->back()->with('message', 'Car Image Deleted Successfully');
    
    }



    public function destroy(int $car_id)
    {
        $car = Car::findOrFail($car_id);
        if($car->carImages){
            foreach($car->carImages as $image){
                if(File::exists($image->image)){
    
                    File::delete($image->image);
                }
            }
        }
    
      $car->delete();
    return redirect()->back()->with('message', 'Car Has Been Deleted Successfully');
    
    }
}
