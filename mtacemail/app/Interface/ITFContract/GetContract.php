<?php

namespace App\Interface\ITFContract;

use App\Models\Contract;

interface GetContract
{
    public function  getContract(Contract $contract);
}
