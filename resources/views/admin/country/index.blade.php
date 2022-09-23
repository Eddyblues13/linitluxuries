@extends('layouts.admin')

@section('content')
<div class="row">
@if(session('message'))
<div class="alert alert-success">{{session('message')}}</div>
 @endif
    
        <div class="col-md-12">
              <div class="card">
                <div class="card-header">
                    <h3>Houses
                        <a href="{{ url('admin/house/create')}}"class="btn btn-primary text-white btn-sm float-end">
                           Add New Houses

                        </a>
                    </h3>
                    <div class = "card-body">
                        <table class="table-bordered table table-stripped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Country</th>
                                    <th>House Name</th>
                                    <th>Price</th>
                                    <th>Trending</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            @forelse ($countries as $country)
                                <tr>
                                    <td>{{ $country->id }}</td>
                                    <td>
                                        @if($country->house)
                                        {{ $country->house->country }}
                                        @else
                                        No Country
                                        @endif
                                    </td>
                                    <td>{{ $country->name}}</td>
                                    <td>{{ $country->selling_price }}</td>
                                    <td>{{ $country->trending == '1' ? 'trending':'not trending'}}</td>
                                    <td>
                                        <a href="{{url('admin/house/'.$country->id.'/edit')}}" class="btn btn-sm btn-success">VIEW</a>
                                    <a href="{{url('admin/house/'.$country->id.'/delete')}}" onclick ="return confirm('Are you sure, you want to delete?')" class="btn btn-sm btn-danger">
                                    Delete
                                       </a>
                                    </td>
                                    

                                </tr>
                                @empty
                                <tr>
                                    <td colspan="7">No Products Available</td>
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