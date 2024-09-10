import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import axios from "axios";
const Contract = ({ auth, mustVerifyEmail, status, className = "" }) => {
    // const user = usePage().props.auth.user;
    const [email, firstName, lastName] = useState("");
    const [contract_statues, setcontract_statuses] = useState([]);

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            email: email,
            firstName: firstName,
            lastName: lastName,
        });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);

        // patch(route("contract-create"));
        console.log();
    };
    useEffect(() => {
        // GET request for remote image in node.js
        axios({
            method: "get",
            url: "http://bit.ly/2mTM3nY",
            responseType: "stream",
        }).then(function (response) {
            response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
        });
        return () => {};
    }, []);
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <Link
                            className=" text-blue-400 text-xs "
                            href={route("contract")}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-backward" />
                            Go Back
                        </Link>
                        <h5 className="card-title fw-semibold mb-4 mt-2">
                            Add Contract
                        </h5>

                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="email" value="Email" />

                                <TextInput
                                    id="email"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                    isFocused
                                    autoComplete="email"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.email}
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="firstName"
                                    value="First Name"
                                />

                                <TextInput
                                    id="firstName"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("firstName", e.target.value)
                                    }
                                    required
                                    autoComplete="firstName"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.firstName}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="lastName"
                                    value="Last Name"
                                />

                                <TextInput
                                    id="lastName"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("lastName", e.target.value)
                                    }
                                    required
                                    autoComplete="lastName"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.lastName}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="lastName"
                                    value="Last Name"
                                />

                                <select
                                    class="js-example-basic-single mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    name="state"
                                >
                                    <option value="AL">Alabama</option>
                                </select>

                                <InputError
                                    className="mt-2"
                                    message={errors.lastName}
                                />
                            </div>

                            {mustVerifyEmail &&
                                user.email_verified_at === null && (
                                    <div>
                                        <p className="text-sm mt-2 text-gray-800">
                                            Your email address is unverified.
                                            <Link
                                                href={route(
                                                    "verification.send"
                                                )}
                                                method="post"
                                                as="button"
                                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Click here to re-send the
                                                verification email.
                                            </Link>
                                        </p>

                                        {status ===
                                            "verification-link-sent" && (
                                            <div className="mt-2 font-medium text-sm text-green-600">
                                                A new verification link has been
                                                sent to your email address.
                                            </div>
                                        )}
                                    </div>
                                )}

                            <div className="flex items-center gap-4">
                                <PrimaryButton disabled={processing}>
                                    Save
                                </PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-gray-600">
                                        Saved.
                                    </p>
                                </Transition>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contract;
