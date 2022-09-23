<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Jewelry;
use App\Models\JewelryImage;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\File;
use App\Http\Requests\JewelryFormRequest;

class JewelryController extends Controller
{
    public function index()
    {
         $jewelries = Jewelry::all();
        return view('admin.jewelries.index',compact('jewelries'));
    }
    public function create()
    {
        // $cars = Cars::all();
        return view('admin.jewelries.create');
    }


    public function edit(int $jewelry){
       
        $jewelry = Jewelry::findOrFail($jewelry);
        return view('admin.jewelries.edit', compact('jewelry'));
    }





    public function update(JewelryFormRequest $request, int $jewelry_id)
    {

        $validatedData = $request->validated();

        $jewelry = Jewelry::findOrFail($jewelry_id);

        if($jewelry)
        {
             $jewelry->update([
                'name' => $validatedData['name'],
                'slug' => $validatedData['slug'],
                'description' => $validatedData['description'],
                'original_price' => $validatedData['original_price'],
                'selling_price' => $validatedData['selling_price'],
              ]);

              if($request->hasFile('image')){
                $uploadPath = 'uploads/jewelry/';
        
                 $i=1;
                foreach($request->file('image') as $imageFile){
               
                    $ext = $imageFile->getClientOriginalExtension();
                    $filename = time().$i++.'.'.$ext;
                    $imageFile->move($uploadPath,$filename);
                    $finalImagePathName =  $uploadPath.$filename;
        
                    $jewelry->jewelryImages()->create([
                        'jewelry_id' => $jewelry->id,
                        'image' => $finalImagePathName,
                     ]);
                }
        
              } 
        
              return redirect('admin/jewelries')->with('message', 'Jewelry has been updated Successfully');  
        }
        else{
            return redirect('admin/jewelries')->with('message', 'No Such Product Found');
        }

    }


    public function save(JewelryFormRequest $request)
    {
     
      $validatedData = $request->validated();
      $jewelries = new Jewelry;
      $jewelries->name = $validatedData['name'];
      $jewelries->slug = $validatedData['slug'];
      $jewelries->description = $validatedData['description'];
      $jewelries->original_price = $validatedData['original_price'];
      $jewelries->selling_price = $validatedData['selling_price'];
      //$cars->slug = Str::slug($validatedData['slug']);
      $jewelries->description = $validatedData['description'];
      $jewelries ->save();


    if($request->hasFile('image')){
        $uploadPath = 'uploads/jewelry/';

         $i=1;
        foreach($request->file('image') as $imageFile){
       
            $ext = $imageFile->getClientOriginalExtension();
            $filename = time().$i++.'.'.$ext;
            $imageFile->move($uploadPath,$filename);
            $finalImagePathName =  $uploadPath.$filename;

            $jewelries->jewelryImages()->create([
                'jewelry_id' => $jewelries->id,
                'image' => $finalImagePathName,
             ]);
        }

      } 

      return redirect('admin/jewelries')->with('message', 'Jewelry created Successfully');        
    }


    public function destroyImage(int $jewelry_image_id)
    {
        $jewelryImage = JewelryImage::findOrFail($jewelry_image_id);
        if(File::exists($jewelryImage->image)){
    
            File::delete($jewelryImage->image);
        }
        $jewelryImage->delete();
        return redirect()->back()->with('message', 'Jewelry Image Deleted Successfully');
    
    }



    public function destroy(int $jewelry_id)
    {
        $jewelry = Jewelry::findOrFail($jewelry_id);
        if($jewelry->jewelryImages){
            foreach($jewelry->jewelryImages as $image){
                if(File::exists($image->image)){
    
                    File::delete($image->image);
                }
            }
        }
    
      $jewelry->delete();
    return redirect()->back()->with('message', 'Jewelry Has Been Deleted Successfully');
    
    }
}
