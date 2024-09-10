import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contract = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="container-fluid">
                <div className="card">
                    <div className="card-body">
                        <Link className=" text-blue-400 text-xs " href={route("contract")}>
                        <FontAwesomeIcon icon="fa-solid fa-backward" />
                        Go Back</Link>
                        <h5 className="card-title fw-semibold mb-4 mt-2">
                            Add Contract
                        </h5>
                        <div className="card">
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label
                                            for="exampleInputEmail1"
                                            className="form-label"
                                        >
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                        />
                                        <div
                                            id="emailHelp"
                                            className="form-text"
                                        >
                                            We'll never share your email with
                                            anyone else.
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label
                                            for="exampleInputPassword1"
                                            className="form-label"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="exampleInputPassword1"
                                        />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="exampleCheck1"
                                        />
                                        <label
                                            className="form-check-label"
                                            for="exampleCheck1"
                                        >
                                            Check me out
                                        </label>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Contract;
