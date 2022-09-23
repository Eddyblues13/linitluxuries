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
                    <li><a class="block text-grey-4 font-medium p-3" href="/terms & conditions">terms & conditions</a></li>
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
    <div class='navigation__menu--mobile fixed inset-0 bg-white pt-[67px] pb-4 overflow-y-auto lg:hidden' data-controller='accordion' data-navigation-target='mobileMenu'>
<ul class='wrapper mb-0' id='mobile-menu'>
<li class='relative border-b border-grey-5'>
<button class='w-full text-left text-grey-4 font-medium py-4 focus:no-underline' data-accordion='1' data-accordion-target='trigger' data-action='click-&gt;accordion#toggle'>
<span>Tenant</span>
<span class='caret'></span>
</button>
<ul class='h-0 opacity-0 pointer-events-none' data-accordion='1' data-accordion-target='hiddenElement'>
<li><a class="block text-grey-4 font-medium p-3 pt-2 lg:pt-3" href="/for-rent">Search rentals</a></li>
<li><a class="block text-grey-4 font-medium p-3" data-remote="true" href="/tenants/new">Create tenant profile</a></li>
<li><a class="block text-grey-4 font-medium p-3" href="/search-agents/new">Create SearchAgent</a></li>
<li><a class="block text-grey-4 font-medium p-3" href="/terms & conditions">terms & conditions</a></li>
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
<main>
<div class='wrapper'>
<h1 class='text-center text-28 font-bold text-black mb-5 xl:text-45'>About us</h1>
<div class='bg-red-1 mx-auto mb-10 h-[7px] w-[75px]'></div>
</div>
<section class='pb-10 pt-0 lg:pb-12'>
<div class='wrapper'>
<h2 class='text-lg text-grey-2 text-center font-semibold mt-0 mb-8 xl:text-3xl xl:mb-12'>LinitLuxuries is a user paid aggregator that makes it easier for you to unlock your next housing adventour and other properties.</h2>
<div class='mx-auto mb-8 md:w-2/3 xl:mb-12'>
<img alt="House" class="w-full" src="{{ asset('user/img/home.png')}}" />
</div>
<div class='about-us__box relative p-8 xl:p-10'>
<p class='text-base text-center text-grey-2 mb-0 xl:text-xl'>We offer millions of our global users an on-demand experience. Our vision is to help simplify the process for our clients through our agents to connect - aiding in kick starting and guiding the first phase of the getting good property experience.</p>
</div>
</div>
</section>
<section class='py-10 lg:py-12'>
<div class='wrapper'>
<h2 class='text-lg text-grey-2 text-center font-semibold mt-0 mb-8 xl:text-3xl xl:mb-12'>We are currently present in more than a dozen countries across the globe and expanding, learning and exploring every day.</h2>
<div class='mx-auto mb-8 md:w-2/3 xl:mb-12'>
<img alt="Globe" class="w-full" src="{{ asset('user/img/globe.png')}}" />
</div>
<div class='about-us__box relative p-8 xl:p-10'>
<p class='text-base text-center text-grey-2 mb-0 xl:text-xl'>In 2022 we aspire to reach 50 million users around the world. We are an multi-international team located on several continents around the globe, dedicated to helping both clients find the perfect match. We constantly work to improve your experience, and our institue helps make it easier than ever to find an ideal properties of your dreams.</p>
</div>
</div>
</section>
<section class='py-10 lg:py-12'>
<div class='wrapper'>
<h2 class='text-lg text-grey-2 text-center font-semibold mt-0 mb-8 xl:text-3xl xl:mb-12'>We could go on and on, but we believe it will make a lot more sense for you to experience it yourself.</h2>
<div class='mx-auto mb-8 md:w-2/3 xl:mb-12'>
<img class="w-full" src="{{ asset('user/img/car.png')}}" />
</div>
<div class='about-us__box relative p-8 xl:p-10'>
<p class='text-base text-center text-grey-2 mb-0 xl:text-xl'>We are here to help, contact our agents   and upgrade your experience in the property industry today. If you have any questions, our customer service team</a> will be more than happy to assist, always striving to answer your enquiry within 24 hours during the business week.</p>
</div>
</div>
</section>
</main>
@include('layouts.footer')
@endsection