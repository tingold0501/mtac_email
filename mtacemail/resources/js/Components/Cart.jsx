import React from "react";

const Cart = () => {
    return (
        <>
            <div className="col-lg-4">
                <div className="card overflow-hidden hover-img">
                    <div className="position-relative">
                        <a href="">
                            <img
                                src="/assets/dashboard/images/blog/blog-img1.jpg"
                                className="card-img-top"
                                alt="matdash-img"
                            />
                        </a>
                        <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                            2 min Read
                        </span>
                        <img
                            src="/assets/dashboard/images/profile/user-3.jpg"
                            alt="matdash-img"
                            className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                            width="40"
                            height="40"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            data-bs-title="Georgeanna Ramero"
                        />
                    </div>
                    <div className="card-body p-4">
                        <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                            Social
                        </span>
                        <a
                            className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                            href=""
                        >
                            As yen tumbles, gadget-loving Japan goes for
                            secondhand iPhones
                        </a>
                        <div className="d-flex align-items-center gap-4">
                            <div className="d-flex align-items-center gap-2">
                                <i className="ti ti-eye text-dark fs-5"></i>
                                9,125
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <i className="ti ti-message-2 text-dark fs-5"></i>
                                3
                            </div>
                            <div className="d-flex align-items-center fs-2 ms-auto">
                                <i className="ti ti-point text-dark"></i>
                                Mon, Dec 19
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    );
};

export default Cart;
