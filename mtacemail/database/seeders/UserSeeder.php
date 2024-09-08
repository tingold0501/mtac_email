<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            ['name'=>'Admin','email'=>'admin@gmail.com','avatar'=>'http://localhost/assets/user/avatar/avatar_default.jpg','password'=>Hash::make('admin'),'active'=>true,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
