
@extends('layouts.admin')

@section('content')
<div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Add Jewelry
                        <a href="{{ url('admin/houses')}}"class="btn btn-primary text-white btn-sm float-end">Back</a>
                    </h3>
                    <div class = "card-body">
                        @if ($errors->any())
                        <div class="alert alert-warning">
                            @foreach ($errors->all() as $error)
                            <div>{{$error}}</div>
                            @endforeach
                        </div>
                        @endif
                        <form action ="{{url('/countries/add')}}" method ="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="row">
                            <div class="col-md-12 mb-3">
                                <label>Country Name</label>
                                <input type="text" name = "country" class="form-control">
                                @error('country')<small class="text-danger">{{$message}}</small> @enderror
                            </div>
                            <div class="col-md-12 mb-3">
                                <label>Slug</label>
                                <input type="text" name = "slug" class="form-control">
                                @error('slug')<small class="text-danger">{{$message}}</small> @enderror
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