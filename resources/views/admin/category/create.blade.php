@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Add Category
                        <a href="{{ url('admin/category')}}"class="btn btn-primary text-white btn-sm float-end">Back</a>
                    </h3>
                    <div class = "card-body">
                        <form action ="{{ url('admin/category')}}" method ="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Name</label>
                                <input type="text" name = "name" class="form-control">
                                @error('name')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Slug</label>
                                <input type="text" name = "slug" class="form-control">
                                @error('slug')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Parent Category</label>
                            <select name="category_id" class="form-select">
                                <option value="none">None</option>
                               @foreach($categories as $category)
                                 <option value="{{$category->id}}">{{$category->name}}</option>
                               @endforeach
    
                              </select>
                                @error('category_id')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Description</label>
                                <textarea type="text" name = "description" class="form-control" row="3"></textarea>
                                @error('description')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Image</label>
                                <input type="file" name = "image" class="form-control">
                                @error('image')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Status</label><br/>
                                <input type="checkbox" name = "status">
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