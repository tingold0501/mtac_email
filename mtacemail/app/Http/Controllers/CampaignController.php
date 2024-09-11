<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCampaignRequest;
use App\Http\Requests\UpdateCampaignRequest;
use App\Models\Campaign;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Campaign/Campaign');
    }
    public function index2(){
        return Inertia::render('Campaign/Partials/CampaignOption');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $contract_sendto = ContractController::getContractInstance();
        return Inertia::render('Campaign/Partials/CreateCampaign',['contract_sendto' => $contract_sendto]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCampaignRequest $request)
    {
        $campaign = new Campaign();
        $campaign->sendto = json_encode($request['sendto']);
        $campaign->from_name = $request['from_name'];
        $campaign->from_email = $request['from_email'];
        $campaign->subject = $request['subject'];
        $campaign->text = $request['text'];
        $campaign->user_id = Auth::user()->id;
        $campaign->created_at = now();
        $campaign->updated_at = now();
        $campaign->save();
        return Inertia::render('Campaign/Campaign');
    }

    /**
     * Display the specified resource.
     */
    public function show(Campaign $campaign)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCampaignRequest $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Campaign $campaign)
    {
        //
    }
}
