<?php

namespace App\Http\Controllers\Admin;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Support\Str;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use App\Http\Requests\CategoryFormRequest;

class CategoryController extends Controller
{

    public $category_id;
    public function index()
    {
        return view('admin.category.index');
    }

    public function create()
    {   
        $categories = Category::all();
        return view('admin.category.create', compact('categories'));
    }

    public function store(CategoryFormRequest $request)
    {
      
      if($request->get('category_id') == 'none')
      {

        $validatedData = $request->validated();
        $category = new Category;
        $category->name = $validatedData['name'];
        $category->slug = Str::slug($validatedData['slug']);
        $category->description = $validatedData['description'];
        if($request->hasFile('image')){
          $file= $request->file('image');
  
          $ext = $file->getClientOriginalExtension();
          $filename = time().'.'.$ext;
          $file->move('uploads/category',$filename);
          $category->image =  $filename;
        }  
        
        $category->status = $request->status == true ? '1' : '0';
        $category ->save();

      } else{
        $validatedData = $request->validated();
        $subCategory = new Subcategory;
        $subCategory->name = $validatedData['name'];
        $subCategory->slug = $validatedData['slug'];
        $subCategory->category_id =  $validatedData['category_id'];
        $subCategory->save();
      }

 


      
      return redirect('admin/category')->with('message', 'Category Added Successfully');        
    }

    public function edit(Category $category)
    {
               return view('admin.category.edit', compact('category'));
    }

    public function update(CategoryFormRequest $request, $category)
    {          
               $validatedData = $request->validated();
               $category = Category::findOrFail($category);
               $category->name = $validatedData['name'];
               $category->slug = Str::slug($validatedData['slug']);
               $category->description = $validatedData['description'];
               if($request->hasFile('image')){
                 
                $path = 'uploads/category'.$category->image; 
                if(File::exists($path)){
                  File::delete($path);
                }
                 $file= $request->file('image');
         
                 $ext = $file->getClientOriginalExtension();
                 $filename = time().'.'.$ext;
                 $file->move('uploads/category',$filename);
                 $category->image =  $filename;
               }  
               
               $category->status = $request->status == true ? '1' : '0';
               $category ->update();
         
               return redirect('admin/category')->with('message', 'Category updated Successfully'); 
    }
}
