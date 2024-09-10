<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContractStatusRequest;
use App\Http\Requests\UpdateContractStatusRequest;
use App\Models\ContractStatus;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ContractStatusController extends Controller
{
    public function __construct(){
        if(!Auth::check()){
            return redirect()->route('login');
        }
    }
    public static function getContractStatus(){
        $contractStatus = DB::table('contract_statues')->get();
        return $contractStatus;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractStatusRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(ContractStatus $contractStatus)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ContractStatus $contractStatus)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractStatusRequest $request, ContractStatus $contractStatus)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ContractStatus $contractStatus)
    {
        //
    }
}
