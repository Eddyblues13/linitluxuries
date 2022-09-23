<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CountryImageFormRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => [
                'required',
                'string'
            ],
            'slug' => [
                'required',
                'string'
            ],
            'house_id' => [
                'required',
                'integer'
            ],
            'description' => [
                'required',
                
            ],
            'image' => [
                'nullable',
                
                
            ],
            'selling_price' => [
                'required',
                'integer'
            ],
            'original_price' => [
                'required',
                'integer'
            ],
            'trending' => [
                'required',
                
            ],
            //
        ];
    }
}
