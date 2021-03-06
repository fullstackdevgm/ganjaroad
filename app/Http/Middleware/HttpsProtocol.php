<?php

namespace App\Http\Middleware;

use Closure;

class HttpsProtocol
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
		if (!$request->secure() && env('APP_ENV') === 'production') {
            $url = str_replace('/index.php', '', $request->getRequestUri());
			return redirect()->secure($url);
		}

        return $next($request);
    }
}
