import React from 'react';
import AuthenticatedLayout from './AuthenticatedLayout';
import { Link } from '@inertiajs/react';

const CampaignLayout = ({auth, children}) => {
    const active = "relative inline cursor-pointer text-base font-medium before:bg-gray-700  before:absolute before:-bottom-1 before:block before:h-[2px] before:w-full before:origin-bottom-right before:scale-x-0 before:transition before:duration-300 before:ease-in-out hover:before:origin-bottom-left hover:before:scale-x-100";
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container-fluid">
            <div className="card">
                <div className="card-body flex flex-nowrap">
                    <h5 className="card-title fw-semibold mt-2 w-[90%]">
                        Campaign
                    </h5>
                    <Link 
                        href={route("campaign_options")}
                        className=" w-40 h-10 btn btn-primary mb-4"
                    >
                        Add Campaign
                    </Link>
                </div>
            </div>
            <ul className="ml-1 text-base text-start grid grid-cols-7 w-[70%]">
                <li className="cursor-pointer ">
                    <span className={active}>Campaign</span>
                </li>
                <li className="cursor-pointer">
                    {" "}
                    <span className={active}>Draft</span>{" "}
                </li>
                
            </ul>
        </div>
        {children}
        </AuthenticatedLayout>
    );
}

export default CampaignLayout;
