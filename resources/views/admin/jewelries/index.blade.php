@extends('layouts.admin')

@section('content')
<div class="row">
@if(session('message'))
<div class="alert alert-success">{{session('message')}}</div>
 @endif
    
        <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Jewelries
                        <a href="{{ url('admin/jewelries/create')}}"class="btn btn-primary text-white btn-sm float-end">
                           Add New Jewelry

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
                            @forelse ($jewelries as $jewelry)
                                <tr>
                                    <td>{{ $jewelry->id }}</td>
                                    <td>{{ $jewelry->name}}</td>
                                    <td>{{ $jewelry->selling_price }}</td>
                                    <td>
                                        <a href="{{url('admin/jewelries/'.$jewelry->id.'/edit')}}" class="btn btn-sm btn-success">EDIT</a>
                                    <a href="{{url('admin/jewelries/'.$jewelry->id.'/delete')}}" onclick ="return confirm('Are you sure, you want to delete?')" class="btn btn-sm btn-danger">
                                    Delete
                                       </a>
                                    </td>
                                    

                                </tr>
                                @empty
                                <tr>
                                    <td colspan="7">No Jewelry Available</td>
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