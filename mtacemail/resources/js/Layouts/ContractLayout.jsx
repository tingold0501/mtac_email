import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";

export default function ContractLayout({auth, children}) {
    const active = "hover:border-b-2 hover:border-gray-500 ";
    return (
        <AuthenticatedLayout user={auth.user}>
        <div className="container-fluid">
            <div className="card">
                <div className="card-body flex flex-nowrap">
                    <h5 className="card-title fw-semibold mt-2 w-[90%]">
                        Contracts
                    </h5>
                    <Link 
                        href={route("get-contract-store")}
                        className=" w-40 h-10 btn btn-primary mb-4"
                    >
                        Add Contract
                    </Link>
                </div>
            </div>
            <ul className="ml-1 text-base text-start grid grid-cols-7 w-[70%]">
                <li className="cursor-pointer ">
                    <span className={active}>Overview</span>
                </li>
                <li className="cursor-pointer">
                    {" "}
                    <span className={active}>Segments</span>{" "}
                </li>
                <li className="cursor-pointer">
                    <span className={active}>Lists</span>
                </li>
                <li className="cursor-pointer">
                    <span className={active}>History</span>
                </li>
                <li className="cursor-pointer">
                    <span className={active}>Unsubscribed</span>
                </li>
                <li className="cursor-pointer">
                    <span className={active}>Device details</span>
                </li>
                <li className="cursor-pointer">
                    <span className={active}>Geography</span>
                </li>
            </ul>
        </div>
        {children}
    </AuthenticatedLayout>
    );
}
