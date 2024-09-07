import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
        <Head title="Login" />

            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <div className="flex align-items-center justify-content-center w-100">
                    <div className="row justify-content-center w-100">
                        <div className="col-md-8 col-lg-6 col-xxl-3">
                            <div className="card mb-0">
                                <div className="card-body">
                                    {status && (
                                        <div className="mb-4 font-medium text-sm text-green-600">
                                            {status}
                                        </div>
                                    )}
                                    <a
                                        className="text-nowrap logo-img text-center  py-3 w-100 flex items-center justify-content-center"
                                    >
                                        <img
                                            src="/assets/dashboard/images/logos/logo.png"
                                            alt=""
                                            className=""
                                        />
                                    </a>
                                    <p className="text-center">
                                        Your Social Campaigns
                                    </p>
                                    <form onSubmit={submit}>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="exampleInputEmail1"
                                                className="form-label"
                                            >
                                                Username
                                            </label>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                isFocused={true}
                                                onChange={(e) =>
                                                    setData(
                                                        "email",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label
                                                htmlFor="exampleInputPassword1"
                                                className="form-label"
                                            >
                                                Password
                                            </label>
                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                autoComplete="current-password"
                                                onChange={(e) =>
                                                    setData(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />

                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </div>
                                        <div className="flex align-items-center justify-content-between mb-4">
                                            <div className="">
                                                <label className="flex items-center">
                                                    <Checkbox
                                                        name="remember"
                                                        checked={data.remember}
                                                        onChange={(e) =>
                                                            setData(
                                                                "remember",
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                    <span className="ms-2 text-sm text-gray-600">
                                                        Remember me
                                                    </span>
                                                </label>
                                            </div>
                                            <a
                                                className="text-primary fw-bold"
                                                href="./index.html"
                                            >
                                                {canResetPassword && (
                                                    <Link
                                                        href={route(
                                                            "password.request"
                                                        )}
                                                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        Forgot your password?
                                                    </Link>
                                                )}
                                            </a>
                                        </div>
                                        {/* <a className="btn btn-primary w-100 py-8 fs-4 mb-4">Sign In</a> */}
                                        <PrimaryButton
                                            className="btn bg-blue-600  w-100 py-8 fs-4 mb-4"
                                            disabled={processing}
                                        >
                                            Log in
                                        </PrimaryButton>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <p className="fs-4 mb-0 fw-bold">
                                                New to SeoDash?
                                            </p>
                                            <a
                                                className="text-primary fw-bold ms-2"
                                                href={route("register")}
                                            >
                                                Create an account
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
    );
}
