
@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-md-12">
            @if(session('message'))
<div class="alert alert-success mb-2">{{session('message')}}</div>
 @endif
              <div class="card">
                <div class="card-header">
                    <h3>Edit Product
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
                        <form action ="{{url('admin/cars/'.$car->id)}}" method ="POST" enctype="multipart/form-data">
                            @csrf
                            @method('PUT')
                            <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Name</label>
                                <input type="text" name = "name" value="{{$car->name}}" class="form-control">
                               
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Slug</label>
                                <input type="text" name = "slug" value="{{$car->slug}}" class="form-control">
                               
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Description</label>
                                <textarea type="text" name = "description" class="form-control" row="3">{{$car->description}}</textarea>
                               
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Image</label>
                                <input type="file" name = "image[]" multiple class="form-control">
                               <div>
                                @if($car->carImages)
                                <div class="row">
                                @foreach($car->carImages as $image)
                                    <div class="col-md-2">
                                    <img src="{{asset($image->image) }}" alt="" style = "width:100px; height:80px" class="me-4 border" alt ="Img"/>
                                <a href="{{url('admin/car-image/'.$image->id.'/delete')}}" class="d-block">Remove</a>
                                    </div>
                                    @endforeach
                                </div>
                               
                                @else
                                <h5>No Images Uploaded</h5>
                                @endif
                               </div>
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Selling Price</label>
                                <input type="number" name ="selling_price" value="{{$car->selling_price}}" multiple class="form-control">
                              
                            </div>
                            <div class="col-md-12 mb-3">
                            <label>Original Price</label>
                                <input type="number" name ="original_price" value="{{$car->original_price}}" multiple class="form-control">
                               
                            </div>
                            <div class="col-md-12 mb-3">
                            <button type = "Update" class="btn btn-primary float-end">Save</button>
                            </div>
                            </div>

                    </div>

                </div>
                </div>
                </div>
</div>

@endsection