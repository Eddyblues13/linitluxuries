@extends('layouts.frontend')

@section('content')

    <div class='navigation__menu--mobile fixed inset-0 bg-white pt-[67px] pb-4 overflow-y-auto lg:hidden' data-controller='accordion' data-navigation-target='mobileMenu'>
        <ul class='wrapper mb-0' id='mobile-menu'>
            <li class='relative border-b border-grey-5'>
                <button class='w-full text-left text-grey-4 font-medium py-4 focus:no-underline' data-accordion='1' data-accordion-target='trigger' data-action='click-&gt;accordion#toggle'>
<span>Tenant</span>
<span class='caret'></span>
</button>
                <ul class='h-0 opacity-0 pointer-events-none' data-accordion='1' data-accordion-target='hiddenElement'>
                    <li><a class="block text-grey-4 font-medium p-3 pt-2 lg:pt-3" href="/for-rent">Search Luxuriouss</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" data-remote="true" href="/tenants/new">Create tenant profile</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/search-agents/new">Create SearchAgent</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/terms & conditions">Terms & conditions</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/users/sign-in">Log in</a></li>
                </ul>
            </li>
            <li class='relative border-b border-grey-5'>
                <button class='w-full text-left text-grey-4 font-medium py-4 focus:no-underline' data-accordion='2' data-accordion-target='trigger' data-action='click-&gt;accordion#toggle'>
<span>Landlord</span>
<span class='caret'></span>
</button>
                <ul class='h-0 opacity-0 pointer-events-none' data-accordion='2' data-accordion-target='hiddenElement'>
                    <li><a class="block text-grey-4 font-medium p-3 pt-2 lg:pt-3" href="/tenants">Find tenant</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/listings/new">Add listing</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/landlord-information">How it works</a></li>
                    <li><a class="block text-grey-4 font-medium p-3" href="/users/sign-in">Log in</a></li>
                </ul>
            </li>
            <li class='border-b border-grey-5 lg:border-0 lg:px-3 lg:py-2'>
                <a class="block text-grey-4 font-medium focus:no-underline py-4 lg:p-0" href="/search-agents/new">Create SearchAgent</a>
            </li>
            <li class='border-b border-grey-5 lg:border-0 lg:px-3 lg:py-2'>
                <a class="block text-grey-4 font-medium focus:no-underline py-4 lg:p-0" href="/blog">Blog</a>
            </li>
            <li class='border-b border-grey-5 lg:border-0 lg:px-3 lg:py-2'>
                <a class="block text-grey-4 font-medium focus:no-underline py-4 lg:p-0" href="/users/sign-in">Log in
</a></li>
            <li class='py-4 lg:mx-3 lg:p-0'>
                <a class="fb-button text-grey-4 border border-grey-4" href="/for-landlords">Add listing</a>
            </li>
            <li class=''>
                <a class="green fb-button" href="/for-rent">Search properties</a>
            </li>
        </ul>
    </div>
    <div class='container'>
        <div class='unobtrusive-flash-container'>
        </div>
    </div>
    <div class='bragging-line'>
        <b>Luxurious</b> <b></b> Homes • <b> Great Price</b> • Reliable <b> 24/7 customer support</b>
    </div>
    <header id='background-image' style="background-image: url({{asset('user/img/header-bg.jpg)')}};">
        <div class='header-content'>
            <div class='header-content-inner with-background'>
                <div id='frontpage-search'>
                    <h1>Purchase Available Homes,Cars & Jewelries.</h1>
                    
                        <div class='icon'>

                            <style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 12px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myUL {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#myUL li a {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: #f6f6f6;
  padding: 12px;
  text-decoration: none;
  font-size: 18px;
  color: black;
  display: block
}

#myUL li a:hover:not(.header) {
  background-color: #eee;
}
</style>
</head>
<body>

<h2>Search countries</h2>

<input type="text" id="myInput" onkeyup="myFunction()" placeholder="Search for names.." title="Type in a name">

                            
                        </div>
                       
                    </div>
                </div>
                <div id='popular-searches'>
                    <b class='block'>Popular searches</b>
                    <ul class='inline' id="myUL" >
                    @foreach($houses as $country)
            <li><a href="{{ url('/country-house/'.$country->slug) }}">{{$country->country}}</a></li>
          @endforeach
                    </ul>
                    <br>
                    <br>
                    <br>

                    <script>
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
</script>
                </div>
            </div>
        </div>
    </header>
    <aside class='bg-red'>
        <div class='container text-center'>
            <div class='row'>
                <div class='col-md-4 static'>
                    <h3>Loads of new properties</h3>added within the last 30 days
                </div>
                <br>
                <div class='col-md-4 static'>
                    <h3>263,209 other people</h3> have used our website within the last 30 days
                </div>
                <br>
                <div class='col-md-4 static'>
                    <h3>Customer support</h3>we are ready to help you all week days!
                </div>
            </div>
        </div>
    </aside>
    <section id='seo-links'>

   
        <div class='container'>
            <div class='row'>
                <div class='col-lg-12 text-center'>
                    <h2 class='section-heading'>Find a property in the popular countries</h2>
                    <p>The most popular countries on LinitLuxuries</p>
                    @foreach($Country_houses as $car_house)
                    <div class='col-md-4'>
    <a class="city-box" href="#"><img src="{{asset($car_house->countryImages[0]->image)}}" alt="Rentola united kingdom" width="200" height="400"/>
<div class='text-box'>
<span class='find-property-in'>Find Luxurious homes in</span>
<span class='city-name'>{{ $car_house->name }}</span>
</div>
</a></div>
@endforeach

                </div>
            </div>
        </div>
    </section>
    <section id='info-section'>
        <div class='container text-center'>
            <div class='row'>
                <div class='col-md-12'>
                    <h2>Are you looking for a Home,Cars & Jewelries?</h2>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 460.298 460.297" style="enable-background:new 0 0 460.298 460.297;" xml:space="preserve"
                        class=""><g><g>
<g>
<path d="M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041    c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629    c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939    z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#F24C4B" />
<path d="M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816    c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245    c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136    c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998    L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125    c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#F24C4B" />
</g>
</g></g> </svg>
                    <h3>All properties in one place</h3>
                    <p>We are a home/ property institute.we scour the web in search of all available properties, and gather them in one place for better placement of your needs..</p>
                </div>
                <div class='col-md-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.035 512.035" style="enable-background:new 0 0 512.035 512.035;" xml:space="preserve" width="512px" height="512px"
                        class=""><g><path style="fill:#F44336;" d="M488.502,256.035l22.464-58.592c2.464-6.464,0.544-13.792-4.864-18.176l-48.704-39.488l-9.856-61.984  c-1.088-6.848-6.464-12.192-13.312-13.28l-61.984-9.856L332.79,5.923c-4.352-5.408-11.84-7.328-18.144-4.864l-58.624,22.496  L197.43,1.091c-6.496-2.496-13.76-0.512-18.144,4.864l-39.488,48.736l-61.984,9.856c-6.816,1.088-12.192,6.464-13.28,13.28  l-9.856,61.984L5.942,179.299c-5.376,4.352-7.328,11.68-4.864,18.144l22.464,58.592L1.078,314.627  c-2.496,6.464-0.512,13.792,4.864,18.144l48.736,39.456l9.856,61.984c1.088,6.848,6.432,12.224,13.28,13.312l61.984,9.856  l39.488,48.704c4.384,5.44,11.712,7.36,18.176,4.864l58.56-22.432l58.592,22.464c1.856,0.704,3.776,1.056,5.728,1.056  c4.704,0,9.344-2.08,12.448-5.952l39.456-48.704l61.984-9.856c6.848-1.088,12.224-6.464,13.312-13.312l9.856-61.984l48.704-39.456  c5.408-4.384,7.328-11.68,4.864-18.144L488.502,256.035z" data-original="#F44336" class="" /><g>
<path style="fill:#FFFFFF" d="M208.022,224.035c-26.464,0-48-21.536-48-48s21.536-48,48-48s48,21.536,48,48   S234.486,224.035,208.022,224.035z M208.022,160.035c-8.832,0-16,7.168-16,16s7.168,16,16,16s16-7.168,16-16   S216.854,160.035,208.022,160.035z" data-original="#FAFAFA" class="active-path" data-old_color="#FAFAFA" />
<path style="fill:#FFFFFF" d="M304.022,384.035c-26.464,0-48-21.536-48-48s21.536-48,48-48s48,21.536,48,48   S330.486,384.035,304.022,384.035z M304.022,320.035c-8.8,0-16,7.2-16,16s7.2,16,16,16s16-7.2,16-16   S312.822,320.035,304.022,320.035z" data-original="#FAFAFA" class="active-path" data-old_color="#FAFAFA" />
<path style="fill:#FFFFFF" d="M176.022,384.035c-3.232,0-6.464-0.96-9.28-2.976c-7.2-5.152-8.864-15.136-3.712-22.336l160-224   c5.152-7.2,15.136-8.864,22.336-3.712c7.2,5.12,8.832,15.136,3.712,22.304l-160,224   C185.91,381.699,181.014,384.035,176.022,384.035z" data-original="#FAFAFA" class="active-path" data-old_color="#FAFAFA" />
</g></g> </svg>
                    <h3>Reliability</h3>
                    <p>We are extremely reliable and transparent in all our deals</p>
                </div>
                <div class='col-md-4'>

                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 511.882 511.882" style="enable-background:new 0 0 511.882 511.882;" xml:space="preserve" width="512px" height="512px"
                        class=""><g><g>
<g>
<g>
<path d="M389.898,430.449l-86.29-57.527c-3.86-2.548-9.03-1.709-11.886,1.929l-25.125,32.302     c-8.143,10.612-22.839,13.641-34.514,7.113l-4.645-2.551c-16.759-9.143-37.623-20.517-79.04-61.934     c-41.417-41.417-52.8-62.281-61.934-79.049l-2.56-4.645c-6.527-11.672-3.498-26.366,7.113-34.505l32.293-25.134     c3.642-2.854,4.482-8.026,1.929-11.886l-57.518-86.299c-2.616-3.916-7.843-5.094-11.886-2.679l-36.105,21.65     c-7.746,4.521-13.443,11.863-15.899,20.489c-11.858,43.182-1.883,118.793,112.96,233.646s190.437,124.846,233.655,112.978     c8.628-2.459,15.969-8.159,20.489-15.909l21.641-36.105C394.997,438.293,393.818,433.063,389.898,430.449z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#F24C4B" />
<path d="M510.425,15.156c-0.946-0.946-2.234-1.471-3.572-1.456H123.767c-1.338-0.015-2.626,0.51-3.572,1.456     c-0.946,0.946-1.471,2.234-1.456,3.572V151.83l21.723,32.585c7.835,11.838,5.26,27.708-5.915,36.462l-32.265,25.134     c-3.454,2.62-4.458,7.38-2.359,11.173l2.633,4.8c8.395,15.966,18.635,30.892,30.51,44.471h373.787     c2.743,0.02,4.988-2.176,5.029-4.919V18.728C511.897,17.39,511.372,16.102,510.425,15.156z M250.661,181.434v-0.046     l-93.659,100.343c-3.444,3.694-9.23,3.896-12.923,0.453c-3.694-3.444-3.896-9.23-0.453-12.923l93.659-100.297     c3.444-3.694,9.23-3.896,12.923-0.453C253.902,171.955,254.105,177.741,250.661,181.434z M315.31,174.23     c-6.589,0.03-13.009-2.088-18.286-6.034L144.211,52.319c-4.024-3.065-4.802-8.812-1.737-12.837     c3.065-4.024,8.812-4.802,12.837-1.737l152.75,115.877c4.323,3.141,10.177,3.141,14.501,0L475.356,37.745     c4.024-3.052,9.761-2.264,12.814,1.76s2.264,9.761-1.76,12.814L333.596,168.196C328.319,172.142,321.9,174.26,315.31,174.23z      M487.123,282.18c-1.773,1.656-4.132,2.539-6.557,2.455c-2.425-0.084-4.717-1.128-6.371-2.903l-93.65-100.343     c-3.182-3.729-2.856-9.304,0.737-12.637c3.594-3.334,9.177-3.24,12.657,0.212l93.632,100.297     C491.013,272.952,490.813,278.735,487.123,282.18z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#F24C4B" />
</g>
</g>
</g></g> </svg>
                    <h3>Quick contact</h3>
                    <p>When you'd have found the home you were dreaming of, you will be able to get in touch with our agents, and then get the keys to your new home soonest. Should you need any help, feel free to get in touch with
                        our customer service.</p>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-12'>
                    <a class="fb-button green" href="#">Find Homes/Properties - free</a>
                </div>
            </div>
        </div>
    </section>

        <div class='container'>
            <div class='row'>
                
                    <h2>Apartments,Cars and Jewelries for sale</h2>
                    <p>Are you looking for your new home, car or jewelries? Then you&#39;ve come to the right place. At LinitLuxuries, we facilitate the contact between you and owners, making it easy to find each other. Whether you want to purchase an apartment or buy a car, in need of jewelries..
                        house or room, you will find a big selection in all price ranges. We have apartments for purchase throughout the country, and the same applies to vacant houses. Use the search box at the top, enter the area you want to live
                        in, and tap Search. Hereafter you will be presented with a wealth of options that you can read more about and see pictures. You can also use our smart filtering options to find your new dream home and get other desired property of your choice.</p>
                </div>
            </div>
        
    <div class='col-md-4'>
<img src="{{ asset('user/img/car.png')}}"></image>
<div class='content'>
<div class='date'></div>
<div class='title'>Find the Car You Want</div>
<div class='text'><p></p></div>
<div class='read-more-link'>
<i class='fa fa-angle-right'></i>
</div>
</div>
</a>
                        </div>



                        <div class='col-md-4'>
                        <img src="{{ asset('user/img/dream.png')}}"></image>
<div class='content'>
<div class='date'></div>
<div class='title'>Get Yourself Your Dream Home</div>
<div class='text'><p></p></div>
<div class='read-more-link'>
<i class='fa fa-angle-right'></i>
</div>
</div>
</a>
                        </div>


                        <div class='col-md-4'>
                        <img src="{{ asset('user/img/jewelry.png')}}"></image>
<div class='content'>
<div class='date'></div>
<div class='title'>As Original As You Want</div>
<div class='text'><p></p></div>
<div class='read-more-link'>
<i class='fa fa-angle-right'></i>
</div>
</div>
</a>
                        </div>

                         

                    
                    
    
    <!-- <section id='blog-posts'>
        <div class='container'>
            <div class='heading row'>
                <div class='col-md-12 text-center'>

                    
                    <p>We guide you before, during and after your relocation</p>

                    <b></b>
                </div>
            </div>
            <div class='row'>
                <div class='col-md-10 col-md-offset-1'>
                    <div class='row'>
                        <div class='col-md-4'>
                    
<img ></image>
<div class='content'>
<div class='date'></div>
<div class='title'></div>
<div class='text'><p></p></div>
<div class='read-more-link'>
<i class='fa fa-angle-right'></i>
</div>
</div>
</a>
                        </div>
                       
                       
                    <div class='button-container'>
                        
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <section id='search-agent'>
        <div class='container'>
            <div class='row'>
                <div class='col-md-12'>
                    <h2>Contact our Agents for free</h2>
                    <p>We do the work for you - while you can relax.</p>
                </div>
            </div>
        </div>
    </section>
    @include('layouts.footer')
@endsection