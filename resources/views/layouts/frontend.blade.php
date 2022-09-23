<!DOCTYPE html>
<html data-mailto='info@LinitLuxuries.com' data-sitename='LinitLuxuries' id='tailwind' lang='en'>

<head>
    <meta charset='utf-8'>
    <meta content='width=device-width, initial-scale=1.0' name='viewport'>
    <meta content='6961267090c04ca5a2f1edfd6b18c697-7578f497c46aede7-0' name='sentry-trace'>
    <meta content='en' http-equiv='content-language'>
    <title> Properties & Homes around the Globe • See all vacant homes right now!</title>
    <meta name="description" content="Vacant homes at LinitLuxuries.com ✓ Property & homes around the world ✓ Compare the Price ✓ Contact the us today!">
    <meta property="og:title" content="Re Homes in 28 countries around the world (425,840+ homes) • See all vacant homes right now!">
    <meta property="og:description" content="Vacant Luxurious homes at Rentola.com ✓ SEARCH more than 425,840 Luxurious homes in 28 countries around the world ✓ Compare the rent ✓ Contact the landlord today!">
    <link rel="stylesheet" media="all" href="{{ asset('user/vite/assets/application.1b0653a5.css') }}" />
    <link rel="stylesheet" media="all" href="{{ asset('user/mdi/css/materialdesignicons.min.css') }}" />
    <link rel="stylesheet" media="all" href="{{ asset('user/assets/application-e71557113e17510a44d2ff210010f0642a2d3d23f8c284d43d05876338e66b05.css') }}" data-turbolinks-track="reload" />
    <script src='//www.ezojs.com/ezoic/sa.min.js'></script>
    <script src="{{asset('user/vite/assets/application.0f5752a9.js') }}" crossorigin="anonymous" type="module"></script>
    <link rel="modulepreload" href="{{ asset('user/vite/assets/vendor.00351ea5.js') }}" as="script" crossorigin="anonymous"></link>
    <link rel="stylesheet" media="screen" href="{{asset('vite/assets/application.71cb6e0e.css') }}" crossorigin="anonymous" />
    <script src="{{ asset('user/assets/application-aa8a6962bc2730eeeabec59a70db8b8187087e1291db70d4789e1a0da234f6aa.js') }}" data-turbolinks-track="reload" defer="defer"></script>
</head>

<body class='pages_index  rentola-com ' data-controller='ezoic--main navigation' style="background-color: lightgrey;">

</body>
<nav class="navbar navbar-inverse" style="background-color:grey ;">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="index.html"><img src="{{ asset('user/popup/logo.png')}}"></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav" >
        <li class="active"><a href="/" style="background-color: white; ">Home</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown"  href="#" >Buy Houses <span class="caret" style="color: white;"></span></a>
          <ul class="dropdown-menu">
          @foreach($houses as $country)
            <li><a href="{{ url('/country-house/'.$country->slug) }}">{{$country->country}}</a></li>
          @endforeach

          </ul>
        </li>
        <li class="dropdown">
          <a href="{{ route('car') }}" >Buy AutoMobiles <span></span></a>
          
        </li>
       
        <li class="dropdown">
          <a href="{{ route('jewelry') }}">Buy Jewelries <span></span></a>
          
        </li>
        


        <li><a href="/terms">Terms & conditions</a></li>
        <li><a href="/about">About Us</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="{{ route('login') }}"><span class="mdi mdi-account menu-icon">Login</span></a></li>
        <!-- <li><a href="{{ route('register') }}"><span class="mdi mdi-account menu-icon">Register</span></a></li> -->
      </ul>
    </div>
  </div>
</nav>
<div>
    @yield('content')
</div>
</html>