import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CampaignLayout from "@/Layouts/CampaignLayout";
import React from "react";

const Campaign = ({ auth }) => {
    return (
        <CampaignLayout auth={auth}>
            <div className="container-fluid">
                <div className="row">
                    <Table />
                </div>
            </div>
        </CampaignLayout>
    );
};

export default Campaign;
