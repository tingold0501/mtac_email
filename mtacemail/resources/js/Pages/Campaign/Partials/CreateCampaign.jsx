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
import EmailTemplateOption from "@/Components/EmailTemplateOption";

const CreateCamapign = ({ auth, mustVerifyEmail, status }) => {
    const [from_name, from_email, subject,text] = useState("");
    const {  contract_sendto } = usePage().props;

    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm({
            sendto: contract_sendto,
            from_name: from_name,
            from_email: from_email,
            subject: subject,
            text: text,
        });
    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("campaign_store"));
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <Link
                            className=" text-blue-400 text-xs "
                            href={route("campaign")}
                        >
                            <FontAwesomeIcon icon="fa-solid fa-backward" />
                            Go Back
                        </Link>
                        <h5 className="card-title fw-semibold mb-4 mt-2">
                            Add Campaign
                        </h5>

                        <form onSubmit={submit} className="mt-6 space-y-6">
                            <div>
                                <InputLabel htmlFor="sendto" value="Send To" />
                                <select
                                    className="js-example-basic-multiple form-control rounded-xl"
                                    multiple="multiple"
                                    name="sendto[]"
                                    onChange={(e) =>
                                        setData("sendto", e.target.value)
                                    }
                                    value={data.sendto}
                                >
                                    {contract_sendto.map((contract_sendto,index) => (
                                        <option
                                            key={index}
                                            value={contract_sendto.email}
                                        >
                                            {contract_sendto.email}
                                        </option>
                                    ))}
                                </select>
                                <InputError
                                    className="mt-2"
                                    message={errors.sendto}
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="from_name"
                                    value="From Name"
                                />

                                <TextInput
                                    id="from_name"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("from_name", e.target.value)
                                    }
                                    required
                                    autoComplete="from_name"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.from_name}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="from_email"
                                    value="From Email"
                                />

                                <TextInput
                                    id="from_email"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("from_email", e.target.value)
                                    }
                                    required
                                    autoComplete="from_email"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.from_email}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="subject"
                                    value="Subject"
                                />

                                <TextInput
                                    id="subject"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("subject", e.target.value)
                                    }
                                    required
                                    autoComplete="subject"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.subject}
                                />
                            </div>
                            <div>
                                <InputLabel
                                    htmlFor="text"
                                    value="Text Privew"
                                />

                                <TextInput
                                    id="text"
                                    type="text"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("text", e.target.value)
                                    }
                                    required
                                    autoComplete="text"
                                />

                                <InputError
                                    className="mt-2"
                                    message={errors.text}
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
                    <EmailTemplateOption/>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default CreateCamapign;
