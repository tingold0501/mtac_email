<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmailTemplate extends Model
{
    use HasFactory;
    protected $table = 'email_templates';

    protected $fillable = [
        'id',
        'content',
        'active',
        'body',
        'css_text',
        'campaign_id',
        'email_template_type_id',
        'created_at',
        'updated_at',
        
    ];
}
