<?php

namespace App\Providers;

use App\Service\PatenteService\IPatenteService;
use App\Service\PatenteService\PatenteService;
use App\Service\FileService\IFileService;
use App\Service\FileService\FileService;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(IPatenteService::class, PatenteService::class);
        $this->app->bind(IFileService::class, FileService::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
