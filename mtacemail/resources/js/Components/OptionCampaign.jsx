import { Link } from "@inertiajs/react";
import React from "react";

const OptionCampaign = () => {
    return (
        <section className=" py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-black sm:text-5xl">
                        Campaign Options
                    </h2>
                    <p className="mt-4 text-xl text-gray-400">
                        Simple, transparent pricing for your business needs.
                    </p>
                </div>

                <div className="flex items-baseline justify-between space-x-8">
                    <div className=" max-w-[300px] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray">
                                Regular
                            </h3>
                            <p className="mt-4 text-gray-400">
                                Create and send a single template to your
                                recipients.
                            </p>
                        </div>

                        <ul className="mb-8 space-y-4 text-gray-400">
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited user accounts</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited transactions</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <Link
                        href={route("campaign_create")}
                        className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                            Create

                        </Link>
                        
                    </div>
                    <div className=" max-w-[300px] rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
                        <div className="mb-8">
                            <h3 className="text-2xl font-semibold text-gray">
                            A/B test
                            </h3>
                            <p className="mt-4 text-gray-400">
                            Send a few variants of templates to see which one will perform better.
                            </p>
                        </div>

                        <ul className="mb-8 space-y-4 text-gray-400">
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited user accounts</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Unlimited transactions</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Priority support</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="h-6 w-6 text-green-500 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                                <span>Advanced analytics</span>
                            </li>
                        </ul>
                        <a
                            href="#"
                            className="block w-full py-3 px-6 text-center rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                        >
                            Create
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OptionCampaign;
