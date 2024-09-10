import Cart from "@/Components/Cart";
import OptionCampaign from "@/Components/OptionCampaign";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";

const CampaignOption = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <Link
                            className=" text-blue-400 text-xs "
                            href={route("campaign")}
                        >
                            Go Back
                        </Link>
                        <h5 className="card-title fw-semibold mb-4 mt-2">
                            Add Campaign
                        </h5>
                    </div>
                </div>
                <div className="flex items-center justify-center space-x-8">
                    <OptionCampaign />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CampaignOption;
