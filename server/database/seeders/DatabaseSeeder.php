<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AreaEconomicaSeeder::class);
        $this->call(AreaCientificaSeeder::class);
        $this->call(PalavraChaveSeeder::class);
        // $this->call(PermissionSeeder::class);
    }
}
