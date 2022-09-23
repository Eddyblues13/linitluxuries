<section id='internal-links'>
        <div class='container'>
            <div class='col-md-12 text-center'>
                <h2>See other searches</h2>
                <p>Expand your search and see available Properties in popular countries</p>
                <div class='row'>
                    <div class='col-md-12'>
                        <div class='properties-accordion'>
                            <div class='row'>
                                <div class='col-md-6'>
                                    <div class='card'>
                                    @foreach($houses as $country)
                                        <div aria-controls='australia' aria-expanded='false' class='card-header' data-target='#australia' data-toggle='collapse'>
                                            <h5><li><a href="{{ url('/country-house/'.$country->slug) }}">{{$country->country}}</a></li></h5>
                                        </div>

                                        
                                         @endforeach

                                       

            </div>
        </div>
    </section>
    <div id='footer'>
        <div class='container-fluid'>
            <div class='row justify-content-between'>
                <div class='col-md-2 col-md-offset-1 col-sm-2'>
                    <h4>About</h4>
                    <small>
<ul class='list list-unstyled'>
<li class='footer-link'><a href="about-us.html">About</a></li>
<li class='footer-link'><a href="terms-and-conditions.html">Terms and conditions</a></li>
<li class='footer-link'><a href="sitemap">Sitemap</a></li>
<li class='footer-link'><a href="contact.html">Contact us</a></li>
<li class='footer-link'></li>
<li class='footer-link'></li>
<li class='footer-link'></li>
</ul>
</small>
                </div>
                <div class='col-md-2 col-sm-2'>
            
                    <small>
<ul class='list list-unstyled'>
<p>Looking for properties?</p>
<li class='footer-link'><a href="#">Contact our agents</a></li>
<li class='footer-link'><a href="#">Help: Get answers for your questions here</a></li>
<li class='footer-link'></li>
<li class='footer-link'></li>
<li class='footer-link'></li>
</ul>
</small>
                </div>
                <div class='col-md-2 col-sm-2'>
                    
                </div>
                <div class='col-md-2 col-sm-3 social-links'>
                    <h4>LinitLuxuries</h4>
                    <small>
<ul class='list list-unstyled'>
<li class='footer-link'><a target="_blank" href="https://www.facebook.com/rentolacom/"><img src="{{ asset('user/assets/facebook-73582e52324620c31237a8be1045cf619b62e3400b3d2c735f293b2a004e3122.png')}}" alt="Facebook" /></a></li>
</ul>
</small>
                </div>
                <div class='col-md-2 col-sm-3'>
                    <small>
<ul class='list list-unstyled'>
<li class='m-2.5'><a class="block text-white text-center rounded bg-[#2ab15e] py-1.5 px-4  active:shadow-click-button" href="#">Search</a></li>
</ul>
</small>
                </div>
            </div>
            <div class='row'>
                <div class='copyrights col-md-11 col-md-offset-right-1 text-align-end'>
                    <span class='mr-4'>© Copyright 2022 LinitLuxuries.com part of LinitLuxuries |  |</span>
                </div>
            </div>
        </div>
    </div>
    <script type='application/ld+json'>
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://LinitLuxuries.com/",
            "name": "LinitLuxuries",
            "description": "LinitLuxuries is an institute for different properties. Partnering with thousands of realtors in different countries, we aim to deliver a simple way for tenants to find their next home.",
            "logo": "https://rentola.com/logo.png"
        }
    </script>

    <div data-controller='search-agent--popup' id='search-agent-popup'>
        <div class='modal fade' id='search-agent-modal' role='dialog' tabindex='-1'>
            <div class='modal-dialog popup-wrapper'>
                <button aria-label='Close' class='close' data-dismiss='modal' type='button'>
×
</button>
                <img class="logo" src="/popup/logo.png" alt="Logo" />
                <div class='popup-content'>
                    <h2>Searching for <span>houses</span> on autopilot</h2>
                    <div class='row'>
                        <div class='col-md-6 search-agent-form'>
                            <form novalidate="novalidate" class="simple_form new_search_agent" id="new_search_agent" data-controller="search-agent--form" action="/search-agents" accept-charset="UTF-8" data-remote="true" method="post"><input name="utf8" type="hidden" value="&#x2713;" />
                                <div class="form-group hidden search_agent_via_popup"><input class="form-control hidden" value="true" type="hidden" name="search_agent[via_popup]" id="search_agent_via_popup" /></div>
                                <div class="form-group string required search_agent_first_name"><input class="form-control string required" autocomplete="off" data-action="keypress-&gt;search-agent--form#validateFirstName" required="required" aria-required="true" placeholder="* Enter your first name" type="text" name="search_agent[first_name]"
                                        id="search_agent_first_name" /></div>
                                <div class="form-group email required search_agent_email"><input class="form-control string email required" autocomplete="off" required="required" aria-required="true" placeholder="* Enter your email address" type="email" name="search_agent[email]" id="search_agent_email" /></div>
                                <div class="form-group select required search_agent_location"><select class="form-control select required" id="location-search" required="required" aria-required="true" placeholder="* Where would you like to live?" name="search_agent[location]"><option value=""></option>
</select></div>
                                <div class="form-group select required search_agent_rooms"><select class="form-control select required" required="required" aria-required="true" name="search_agent[rooms]" id="search_agent_rooms"><option value="">* Number of bedrooms (min)</option>
<option value="1">1 bedroom</option>
<option value="2">2 bedrooms</option>
<option value="3">3 bedrooms</option>
<option value="4">4 bedrooms</option>
<option value="5">5 bedrooms</option>
<option value="6">6 bedrooms</option>
<option value="7">7 bedrooms</option>
<option value="8">8 bedrooms</option>
<option value="9">9 bedrooms</option>
<option value="10">10 bedrooms</option></select></div>
                                <div class="form-group integer required search_agent_max_rent"><input class="form-control numeric integer required" autocomplete="off" data-action="keypress-&gt;search-agent--form#validateMaxRent" min="1" required="required" aria-required="true" placeholder="* Rent in (max)" type="number"
                                        step="1" name="search_agent[max_rent]" id="search_agent_max_rent" /></div>
                                <div class='popup-footer'>
                                    <input type="submit" name="commit" value="Register Search Agent" class="btn btn-default btn-register" data-disable-with="Register Search Agent" />
                                    <small>You will receive emails when new ads are added - all for free!</small>
                                </div>
                            </form>
                        </div>
                        <div class='col-md-6 tip'>
                            <p>Set up a FREE Search Agent on our Portal and receive an instant email when new home/properties are added that match your needs.</p>
                            <div class='popup-img'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    