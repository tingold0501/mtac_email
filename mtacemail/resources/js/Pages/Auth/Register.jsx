import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <>
            <div
                className="page-wrapper"
                id="main-wrapper"
                data-layout="vertical"
                data-navbarbg="skin6"
                data-sidebartype="full"
                data-sidebar-position="fixed"
                data-header-position="fixed"
            >
                <Head title="Register" />
                <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                    <div className="d-flex align-items-center justify-content-center w-100">
                        <div className="row justify-content-center w-100">
                            <div className="col-md-8 col-lg-6 col-xxl-3">
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <a
                                            href="./index.html"
                                            class="text-nowrap logo-img text-center  py-3 w-100 flex items-center justify-content-center"                                        >
                                            <img
                                                src="/assets/images/logos/logo.png"
                                                alt=""
                                            />
                                        </a>
                                        <p className="text-center">
                                            Your Social Campaigns
                                        </p>
                                        <form onSubmit={submit}>
                                            <div>
                                                <InputLabel
                                                    htmlFor="name"
                                                    value="Name"
                                                />

                                                <TextInput
                                                    id="name"
                                                    name="name"
                                                    value={data.name}
                                                    className="mt-1 block w-full"
                                                    autoComplete="name"
                                                    isFocused={true}
                                                    onChange={(e) =>
                                                        setData(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <InputError
                                                    message={errors.name}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel
                                                    htmlFor="email"
                                                    value="Email"
                                                />

                                                <TextInput
                                                    id="email"
                                                    type="email"
                                                    name="email"
                                                    value={data.email}
                                                    className="mt-1 block w-full"
                                                    autoComplete="username"
                                                    onChange={(e) =>
                                                        setData(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <InputError
                                                    message={errors.email}
                                                    className="mt-2"
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <InputLabel
                                                    htmlFor="password"
                                                    value="Password"
                                                />

                                                <TextInput
                                                    id="password"
                                                    type="password"
                                                    name="password"
                                                    value={data.password}
                                                    className="mt-1 block w-full"
                                                    autoComplete="new-password"
                                                    onChange={(e) =>
                                                        setData(
                                                            "password",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <InputError
                                                    message={errors.password}
                                                    className="mt-2"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <InputLabel
                                                    htmlFor="password_confirmation"
                                                    value="Confirm Password"
                                                />

                                                <TextInput
                                                    id="password_confirmation"
                                                    type="password"
                                                    name="password_confirmation"
                                                    value={
                                                        data.password_confirmation
                                                    }
                                                    className="mt-1 block w-full"
                                                    autoComplete="new-password"
                                                    onChange={(e) =>
                                                        setData(
                                                            "password_confirmation",
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />

                                                <InputError
                                                    message={
                                                        errors.password_confirmation
                                                    }
                                                    className="mt-2"
                                                />
                                            </div>
                                            <PrimaryButton
                                            className="btn bg-blue-600 mt-4  w-100 py-8 fs-4 mb-4"
                                            disabled={processing}
                                        >
                                            Sign Up
                                        </PrimaryButton>
                                            <div className="d-flex align-items-center justify-content-center">
                                                <p className="fs-4 mb-0 fw-bold">
                                                    Already have an Account?
                                                </p>
                                                <a
                                                    className="text-primary fw-bold ms-2"
                                                    href={route("login")}
                                                >
                                                    Sign In
                                                </a>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
