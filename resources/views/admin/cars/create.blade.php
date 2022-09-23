
@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Add Product
                        <a href="{{ url('admin/cars')}}"class="btn btn-primary text-white btn-sm float-end">Back</a>
                    </h3>
                    <div class = "card-body">
                        @if ($errors->any())
                        <div class="alert alert-warning">
                            @foreach ($errors->all() as $error)
                            <div>{{$error}}</div>
                            @endforeach
                        </div>
                        @endif
                        <form action ="{{url('admin/cars')}}" method ="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Name</label>
                                <input type="text" name = "name" class="form-control">
                                @error('name')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Slug</label>
                                <input type="text" name = "slug" class="form-control">
                                @error('slug')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Description</label>
                                <textarea type="text" name = "description" class="form-control" row="3"></textarea>
                                @error('description')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Image</label>
                                <input type="file" name = "image[]" multiple class="form-control">
                                @error('image')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Selling Price</label>
                                <input type="number" name ="selling_price" multiple class="form-control">
                                @error('selling_price')<small class="text-danger">{{$message}}</smal> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Original Price</label>
                                <input type="number" name ="original_price" multiple class="form-control">
                                @error('original_price')<small class="text-danger">{{$message}}</smal> @enderror
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