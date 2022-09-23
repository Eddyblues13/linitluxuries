@extends('layouts.admin')

@section('content')
<div class="row">
@if(session('message'))
<div class="alert alert-success">{{session('message')}}</div>
 @endif
    
        <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Car
                        <a href="{{ url('admin/cars/create')}}"class="btn btn-primary text-white btn-sm float-end">
                           Add New Cars

                        </a>
                    </h3>
                    <div class = "card-body">
                        <table class="table-bordered table table-stripped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>product name</th>
                                    <th>Selling Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            @forelse ($cars as $car)
                                <tr>
                                    <td>{{ $car->id }}</td>
                                    <td>{{ $car->name}}</td>
                                    <td>{{ $car->selling_price }}</td>
                                    <td>
                                        <a href="{{url('admin/cars/'.$car->id.'/edit')}}" class="btn btn-sm btn-success">EDIT</a>
                                    <a href="{{url('admin/cars/'.$car->id.'/delete')}}" onclick ="return confirm('Are you sure, you want to delete?')" class="btn btn-sm btn-danger">
                                    Delete
                                       </a>
                                    </td>
                                    

                                </tr>
                                @empty
                                <tr>
                                    <td colspan="7">No Cars Available</td>
                                </tr>
                                @endforelse
                           </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
</div>
@endsection