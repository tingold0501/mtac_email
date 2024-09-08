<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContractStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contract_statues')->insert([
            ['name'=>'Transaction', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Active', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Inactive', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Unsubscribed', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Complaint', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
