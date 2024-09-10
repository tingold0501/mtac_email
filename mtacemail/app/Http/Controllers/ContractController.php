<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use App\Interface\ITFContract\GetContract;
use App\Models\Contract;
use App\Models\ContractStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ContractController extends Controller
{
    public function __construct(){
        if(!Auth::check()){
            return redirect()->route('login');
        }
        $contract = DB::table('contracts')->where('user_id', Auth::user()->id)->first();
        if($contract == null){
            return redirect()->route('contract_create');
        }
        
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Contract/ContractOverview');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contract_statues = ContractStatusController::getContractStatus();
        // dd($contract_statues);
        return Inertia::render('Contract/Partials/CreateContract',['contract_statues' => $contract_statues]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractRequest $request)
    {
        $contract = new Contract();
        $contract->email = $request->email;
        $contract->first_name = $request->first_name;
        $contract->last_name = $request->last_name;
        $contract->user_id = Auth::user()->id;
        $contract->contract_statue_id = $request->contract_statue_id;
        $contract->save();
        return Inertia::render('Contract/ContractOverview');
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractRequest $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        //
    }
}
