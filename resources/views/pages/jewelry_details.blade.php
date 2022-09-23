@extends('layouts.frontend')

@section('content')


<script>
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    originalLocation: document.location.protocol + '//' +
                      document.location.hostname +
                      document.location.pathname +
                      document.location.search
  });
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  ''+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-WSVLVWF');
</script>
<script>
  window.countryCode = '';
  window.currentLocale = "en";
  window.stripePublishableKey = "pk_live_51HUX6PCxvqoirSoJpN8VqIOVZsWq9wlsjeGKEZPdbmIQyRyc7knuNQtP5qEZySpJwhacHjmTdwkwyNptLjVK95g000ZRjJDOYS";
  
  window.searchConfig = {"search_properties_path":"/for-rent","default_rent_range":"0-2500","default_rooms_range":"1-8"};
  
  window.translations = {
    country: "Country",
    region: "Region",
    municipality: "Municipality",
    city: "City",
    district: "District"
  }
</script>



<div class='container 2xl:flex 2xl:justify-center 2xl:w-full 2xl:max-w-full'>
<div class='2xl:w-[1140px]' itemscope itemtype='https://schema.org/Product'>
<div class='white-container'>
<div class='row'>
<div class='col-md-7'>
<div class='fotorama' data-allowfullscreen='true' data-auto='false' data-height='350' data-nav='thumbs' data-width='100%'>
@foreach($jewelry->jewelryImages as $image)
<img src="{{asset($image->image) }}">
@endforeach









</div>
<h3>{{$jewelry->name}}</h3>

<h3 style="font-family: cursive;">ORIGINAL PRICE: ${{$jewelry->original_price}}</h3> <h3 style="font-family: cursive;">SELLING PRICE: ${{$jewelry->selling_price}}</h3>
ABOUT PRODUCT
<h5 style="font-family: sans-serif;">{{$jewelry->description}}</h5>

</div>
<br>
<br>

<div class='col-md-5'>
<div class='upper-content'>
<h1>
<span itemprop='name'>Contact Us</span>
</h1>

<br>
<form>
 <div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<input class='form-control' id='email-input' placeholder='First Name..' type='email'>
<i class='fa fa-envelope'></i>
</div>
</div>
</div>
</div>


<div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<input class='form-control' id='email-input' placeholder='Last Name..' type='email'>
<i class='fa fa-envelope'></i>
</div>
</div>
</div>
</div>


<div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<input class='form-control' id='email-input' placeholder='Enter email address..' type='email'>
<i class='fa fa-envelope'></i>
</div>
</div>
</div>
</div>

<div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<input class='form-control' id='email-input' placeholder='Phone(optional)..' type='email'>
<i class='fa fa-envelope'></i>
</div>
</div>
</div>
</div>


<div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<select class="form-control" id="subject" name="lead[subject]"><option selected value="Check availability">Check availability</option><option value="Check home delivery options">Check home delivery options</option><option value="Request virtual appointment">Request virtual appointment</option><option value="Get a price quote">Get a price quote</option><option value="Schedule a test drive">Schedule a test drive</option><option value="Discuss financing">Discuss financing</option><option value="Ask a question">Ask a question</option></select>

</div>
</div>
</div>
</div>


<div class='col-sm-6'>
<div class='form-row'>
<div class='form-cell wide'>
<div class='form-group email'>
<textarea  class="form-control" name="comments" placeholder="comments"></textarea>

</div>
</div>
</div>
</div>

<input type="submit" name="" value="Contact us" class="btn btn-default btn-register" />

</form>


                </div>
</div>

 <button class="btn btn-default btn-register"  style="background-color: green;"> <a href="" style="color: white;">CONTACT US ON WHATSAPP</a></button>








<div class='map-and-cta'>
</div>
<div class='clearfix'></div>
</div>
</div>
<div class='col-sm-10 col-sm-offset-1 col-lg-8 col-lg-offset-2' id='user-signup-form'>
<div class='user-signup-form'>
<div class='row'>
<div class='col-sm-12'>
<div class='alert alert-danger'></div>
<div class='alert alert-success'></div>
</div>

<div class='col-sm-12 col-md-10 col-md-offset-1 terms'>
<label class='hv-checkbox' for='subscription_terms'>
<input id='subscription_terms' type='checkbox' value='1'>

</label>
</div>
</div>
</div>
</div>
</div>
</div>



@include('layouts.footer')

@endsection