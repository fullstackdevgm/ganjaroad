<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class MenuRequest extends Request {

	public function authorize()
	{
		return true;
	}


	public function rules()
	{
		return [
            'title' => 'required|min:3',
            'position' => 'integer',
		];
	}
}
