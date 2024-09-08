<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EmailTemplateTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('email_template_types')->insert([
            ['name'=>'Transactional', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Marketing', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Newsletter', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Welcome', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Survey', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Feedback', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Invitation', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
            ['name'=>'Reminder', 'active'=>true,'created_at'=>now(),'updated_at'=>now()],
        ]);
    }
}
