<?php

namespace App\Http\Controllers;
use App\Models\Car;
use App\Models\CarImage;
use App\Models\Jewelry;
use App\Models\JewelryImage;
use App\Models\House;
use App\Models\Country;

use Illuminate\Http\Request;

class UserController extends Controller
{

    public function index()
    {   
        $houses = House::all();
        $Country_houses = Country::all();
        return view('pages.index', compact('houses','Country_houses'));
    }

    public function terms()
    {   
        $houses = House::all();
        return view('pages.terms',compact('houses'));
    }

    public function about()
    {   
        $houses = House::all();
        return view('pages.about',compact('houses'));
    }

    public function car()
    {   
        $houses = House::all();
        $cars = Car::all();
        return view('pages.cars',compact('cars', 'houses'));
    }

    public function carDetails($car_slug)
    {
        if(Car::where('slug',$car_slug)->exists())
        {    
            $houses = House::all();
            $car = Car::where('slug',$car_slug)->first();
            return view('pages.cars_details', compact('car','houses'));
        }
        
    }

    public function jewelry()
    {    
        $houses = House::all();
         $jewelries = Jewelry::all();
        return view('pages.jewelries',compact('jewelries','houses'));
    }

    public function jewelryDetails($jewelry_slug)
    {
        if(Jewelry::where('slug',$jewelry_slug)->exists())
        {    
            $houses = House::all();
            $jewelry = Jewelry::where('slug',$jewelry_slug)->first();
            return view('pages.jewelry_details', compact('jewelry','houses'));
        }
        
    }

    public function countryHouse($house_slug)
    {    
        $houses = House::all();
        $house = House::where('slug',$house_slug)->first();
        if($house){
             $countries= $house->countrY()->get();
             return view('pages.countries', compact('countries','house','houses'));
        }
        else{
            return redirect()->back();        }
  
    }

    public function houseDetails($house_slug, $country_slug)
    {
        if(House::where('slug',$house_slug)->exists())
        {    
            if(Country::where('slug', $country_slug)->exists())
            {
                $houses = House::all();
                $country = Country::where('slug',$country_slug)->first();
                return view('pages.houses', compact('country','houses'));
            } else{
                return redirect()->back();
            }

        }else {
            return redirect()->back();
        }
        
    }



}
