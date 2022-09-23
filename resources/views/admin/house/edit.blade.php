@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Edit Category
                        <a href="{{ url('admin/category')}}"class="btn btn-primary text-white btn-sm float-end">Back</a>
                    </h3>
                    <div class = "card-body">
                        <form action ="{{ url('admin/category/'.$category->id)}}" method ="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Name</label>
                                <input type="text" name = "name" value ="{{$category->name}}" class="form-control">
                                @error('name')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Slug</label>
                                <input type="text" name = "slug" value ="{{$category->slug}}" class="form-control">
                                @error('slug')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            @if($category->subCategories)

                            <div class="col-md-12 mb-3">
                            <label>Sub Categories</label>
                            <select name="category_id" class="form-select">
                               @foreach($category->subCategories as $subcategory)
                                 <option value="{{$category->id}}">{{$subcategory->name}}</option>
                               @endforeach
    
                              </select>
                                @error('category_id')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            @else
                          <h3>none</h3>
                               @endif
                            <div class="col-md-12 mb-3">
                                <label>Description</label>
                                <textarea type="text" name = "description"  class="form-control" row="3">{{$category->description}}</textarea>
                                @error('description')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Image</label>
                                <input type="file" name = "image"  class="form-control">
                                <img src="{{asset('/uploads/category/'.$category->image)}}" width="60px" height="60px"/>
                                @error('image')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Status</label><br/>
                                <input type="checkbox" value ="{{$category->status == '1' ? 'checked' : ''}}" name = "status">
                                @error('status')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <button type = "submit" class="btn btn-primary float-end">Save</button>
                            </div>
                            </div>

                    </div>

                </div>
                </div>
                </div>
</div>

@endsection