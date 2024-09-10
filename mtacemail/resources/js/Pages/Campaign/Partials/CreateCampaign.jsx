import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { useState } from "react";

const CreateCamapign = ({ auth, mustVerifyEmail, status }) => {
    const [email,last_name, first_name ] = useState("");
    const [contract_statue_id] = useState(1);
    const { contract_statues } = usePage().props;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            email: email,
            first_name: first_name,
            last_name: last_name,
            contract_statue_id: contract_statue_id,
        });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("contract_store"));
    };

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
                                    htmlFor="first_name"
                                    value="First Name"
                                />

                                <TextInput
                                    id="first_name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("first_name", e.target.value)
                                    }
                                    required
                                    autoComplete="first_name"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.first_name}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="last_name"
                                    value="Last Name"
                                />

                                <TextInput
                                    id="last_name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("last_name", e.target.value)
                                    }
                                    required
                                    autoComplete="last_name"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.last_name}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="contract_statues"
                                    value="Contract Status"
                                />
                                {/* <select
                                    className="js-example-basic-single mt-1 block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                                    name="state"
                                    onChange={(e) =>
                                        setData(
                                            "contract_statue_id",
                                            e.target.value
                                        )
                                    }
                                    value={data.contract_statue_id}
                                >
                                    {contract_statues.map((status, index) => (
                                        <option key={index} value={status.id}>
                                            {status.name}
                                        </option>
                                    ))}
                                </select> */}

                                <InputError
                                    className="mt-2"
                                    message={errors.contract_statues}
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

export default CreateCamapign;
