import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        // <AuthenticatedLayout
        //     user={auth.user}
        //     header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        // >
        //     <Head title="Dashboard" />

        //     <div className="py-12">
        //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        //                 <div className="p-6 text-gray-900">You're logged in!</div>
        //             </div>
        //         </div>
        //     </div>
        // </AuthenticatedLayout>
        <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed"
        >
            <Head title="Dashboard" />
            <aside className="left-sidebar">
                <div>
                    <div className="brand-logo d-flex align-items-center justify-content-between">
                        <a href="./index.html" className="text-nowrap logo-img">
                            <img
                                className="w-[150px]"
                                src="/assets/dashboard/images/logos/logo.png"
                                alt=""
                            />
                        </a>
                        <div
                            className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                            id="sidebarCollapse"
                        >
                            <i className="ti ti-x fs-8"></i>
                        </div>
                    </div>
                    <nav
                        className="sidebar-nav scroll-sidebar"
                        data-simplebar=""
                    >
                        <ul id="sidebarnav">
                            {/* <li className="nav-small-cap">
                             <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                             <span className="hide-menu">Home</span>
                         </li> */}
                            <li className="sidebar-item sidebar-item selected active">
                                <a
                                    className="sidebar-link"
                                    href="./index.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:home-smile-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Dashboard</span>
                                </a>
                            </li>
                            {/* <li className="nav-small-cap">
                             <i className="ti ti-dots nav-small-cap-icon fs-6"></i>
                             <span className="hide-menu">
                                 Activity
                             </span>
                         </li> */}
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-buttons.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:layers-minimalistic-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Activity</span>
                                </a>
                            </li>
                        
                            <li className=" sidebar-item">
                                <a
                                    className="sidebar-link dropdown-toggle sidebar-link dropdown"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:danger-circle-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Audience</span>
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <Link className="dropdown-item">
                                            Contract
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">
                                            Forms
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">
                                            Landing Pages
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className=" sidebar-item">
                                <a
                                    className="sidebar-link dropdown-toggle  dropdown"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:danger-circle-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Campaigns</span>
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li>
                                        <Link className="dropdown-item">
                                            All Campaigns
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="dropdown-item">
                                            Email Templates
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-forms.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:file-text-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">
                                        Automations
                                    </span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-typography.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:text-field-focus-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">
                                        Verifications
                                    </span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-typography.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:text-field-focus-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Exports</span>
                                </a>
                            </li>
                            <li className="sidebar-item">
                                <a
                                    className="sidebar-link"
                                    href="./ui-typography.html"
                                    aria-expanded="false"
                                >
                                    <span>
                                        <iconify-icon
                                            icon="solar:text-field-focus-bold-duotone"
                                            className="fs-6"
                                        ></iconify-icon>
                                    </span>
                                    <span className="hide-menu">Settings</span>
                                </a>
                            </li>
                        </ul>
                        <div className="unlimited-access hide-menu bg-primary-subtle position-relative mb-7 mt-7 rounded-3">
                            <div className="d-flex">
                                <div className="unlimited-access-title me-3 w-[200px]">
                                    <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">
                                        {auth.user.name}
                                    </h6>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="btn btn-primary fs-2 fw-semibold lh-sm"
                                    >
                                        Log Out
                                    </Link>
                                </div>
                                <div className="unlimited-access-img me-3">
                                    <img
                                        src="/assets/dashboard/images/backgrounds/rocket.png"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>
            <div className="body-wrapper">
                <header className="app-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <ul className="navbar-nav">
                            <li className="nav-item d-block d-xl-none">
                                <a
                                    className="nav-link sidebartoggler nav-icon-hover"
                                    id="headerCollapse"
                                    href=""
                                >
                                    <i className="ti ti-menu-2"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link nav-icon-hover" href="">
                                    <i className="ti ti-bell-ringing"></i>
                                    <div className="notification bg-primary rounded-circle"></div>
                                </a>
                            </li>
                        </ul>
                        <div
                            className="navbar-collapse justify-content-end px-0"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav flex-row ms-auto align-items-center justify-content-end">
                                <a
                                    href="#"
                                    target="_blank"
                                    className="btn btn-primary me-2"
                                >
                                    <span className="d-none d-md-block">
                                        Check Pro Version
                                    </span>{" "}
                                    <span className="d-block d-md-none">
                                        Pro
                                    </span>
                                </a>
                                <a
                                    href="#"
                                    target="_blank"
                                    className="btn btn-success"
                                >
                                    <span className="d-none d-md-block">
                                        Download Free{" "}
                                    </span>
                                    <span className="d-block d-md-none">
                                        Free
                                    </span>
                                </a>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link nav-icon-hover"
                                        href=""
                                        id="drop2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <img
                                            src={auth.user.avatar}
                                            alt=""
                                            width="35"
                                            height="35"
                                            className="rounded-circle"
                                        />
                                    </a>
                                    <div
                                        className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                                        aria-labelledby="drop2"
                                    >
                                        <div className="message-body">
                                            <Link
                                                className="d-flex align-items-center gap-2 dropdown-item"
                                                href={route("profile.edit")}
                                            >
                                                <i className="ti ti-user fs-6"></i>
                                                <p className="mb-0 fs-3">
                                                    My Profile
                                                </p>
                                            </Link>
                                            <Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                                className="btn btn-outline-primary mx-3 mt-2 d-block"
                                            >
                                                Logout
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center gap-2 mb-4">
                                        Traffic Overview
                                        <span>
                                            <iconify-icon
                                                icon="solar:question-circle-bold"
                                                className="fs-7 d-flex text-muted"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-custom-className="tooltip-success"
                                                data-bs-title="Traffic Overview"
                                            ></iconify-icon>
                                        </span>
                                    </h5>
                                    <div id="traffic-overview"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body text-center">
                                    <img
                                        src="/assets/dashboard/images/backgrounds/product-tip.png"
                                        alt="image"
                                        className="img-fluid"
                                        width="205"
                                    />
                                    <h4 className="mt-7">Productivity Tips!</h4>
                                    <p className="card-subtitle mt-2 mb-3">
                                        Duis at orci justo nulla in libero id
                                        leo molestie sodales phasellus justo.
                                    </p>
                                    <button className="btn btn-primary mb-3">
                                        View All Tips
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        View by page title and screen className
                                    </h5>
                                    <div className="table-responsive">
                                        <table className="table text-nowrap align-middle mb-0">
                                            <thead>
                                                <tr className="border-2 border-bottom border-primary border-0">
                                                    <th
                                                        scope="col"
                                                        className="ps-0"
                                                    >
                                                        Page Title
                                                    </th>
                                                    <th scope="col">Link</th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Pageviews
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="text-center"
                                                    >
                                                        Page Value
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="table-group-divider">
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="ps-0 fw-medium"
                                                    >
                                                        <span className="table-link1 text-truncate d-block">
                                                            Welcome to our
                                                            website
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <a
                                                            href=""
                                                            className="link-primary text-dark fw-medium d-block"
                                                        >
                                                            /index.html
                                                        </a>
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        18,456
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        $2.40
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="ps-0 fw-medium"
                                                    >
                                                        <span className="table-link1 text-truncate d-block">
                                                            Modern Admin
                                                            Dashboard Template
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <a
                                                            href=""
                                                            className="link-primary text-dark fw-medium d-block"
                                                        >
                                                            /dashboard
                                                        </a>
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        17,452
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        $0.97
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="ps-0 fw-medium"
                                                    >
                                                        <span className="table-link1 text-truncate d-block">
                                                            Explore our product
                                                            catalog
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <a
                                                            href=""
                                                            className="link-primary text-dark fw-medium d-block"
                                                        >
                                                            /product-checkout
                                                        </a>
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        12,180
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        $7,50
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="ps-0 fw-medium"
                                                    >
                                                        <span className="table-link1 text-truncate d-block">
                                                            Comprehensive User
                                                            Guide
                                                        </span>
                                                    </th>
                                                    <td>
                                                        <a
                                                            href=""
                                                            className="link-primary text-dark fw-medium d-block"
                                                        >
                                                            /docs
                                                        </a>
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        800
                                                    </td>
                                                    <td className="text-center fw-medium">
                                                        $5,50
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th
                                                        scope="row"
                                                        className="ps-0 fw-medium border-0"
                                                    >
                                                        <span className="table-link1 text-truncate d-block">
                                                            Check out our
                                                            services
                                                        </span>
                                                    </th>
                                                    <td className="border-0">
                                                        <a
                                                            href=""
                                                            className="link-primary text-dark fw-medium d-block"
                                                        >
                                                            /services
                                                        </a>
                                                    </td>
                                                    <td className="text-center fw-medium border-0">
                                                        1300
                                                    </td>
                                                    <td className="text-center fw-medium border-0">
                                                        $2,15
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title d-flex align-items-center gap-2 mb-5 pb-3">
                                        Sessions by device
                                        <span>
                                            <iconify-icon
                                                icon="solar:question-circle-bold"
                                                className="fs-7 d-flex text-muted"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="top"
                                                data-bs-custom-className="tooltip-success"
                                                data-bs-title="Locations"
                                            ></iconify-icon>
                                        </span>
                                    </h5>
                                    <div className="row">
                                        <div className="col-4">
                                            <iconify-icon
                                                icon="solar:laptop-minimalistic-line-duotone"
                                                className="fs-7 d-flex text-primary"
                                            ></iconify-icon>
                                            <span className="fs-11 mt-2 d-block text-nowrap">
                                                Computers
                                            </span>
                                            <h4 className="mb-0 mt-1">87%</h4>
                                        </div>
                                        <div className="col-4">
                                            <iconify-icon
                                                icon="solar:smartphone-line-duotone"
                                                className="fs-7 d-flex text-secondary"
                                            ></iconify-icon>
                                            <span className="fs-11 mt-2 d-block text-nowrap">
                                                Smartphone
                                            </span>
                                            <h4 className="mb-0 mt-1">9.2%</h4>
                                        </div>
                                        <div className="col-4">
                                            <iconify-icon
                                                icon="solar:tablet-line-duotone"
                                                className="fs-7 d-flex text-success"
                                            ></iconify-icon>
                                            <span className="fs-11 mt-2 d-block text-nowrap">
                                                Tablets
                                            </span>
                                            <h4 className="mb-0 mt-1">3.1%</h4>
                                        </div>
                                    </div>

                                    <div className="vstack gap-4 mt-7 pt-2">
                                        <div>
                                            <div className="hstack justify-content-between">
                                                <span className="fs-3 fw-medium">
                                                    Computers
                                                </span>
                                                <h6 className="fs-3 fw-medium text-dark lh-base mb-0">
                                                    87%
                                                </h6>
                                            </div>
                                            <div
                                                className="progress mt-6"
                                                role="progressbar"
                                                aria-label="Warning example"
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div className="progress-bar bg-primary w-full"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="hstack justify-content-between">
                                                <span className="fs-3 fw-medium">
                                                    Smartphones
                                                </span>
                                                <h6 className="fs-3 fw-medium text-dark lh-base mb-0">
                                                    9.2%
                                                </h6>
                                            </div>
                                            <div
                                                className="progress mt-6"
                                                role="progressbar"
                                                aria-label="Warning example"
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div className="progress-bar bg-secondary w-1/2"></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="hstack justify-content-between">
                                                <span className="fs-3 fw-medium">
                                                    Tablets
                                                </span>
                                                <h6 className="fs-3 fw-medium text-dark lh-base mb-0">
                                                    3.1%
                                                </h6>
                                            </div>
                                            <div
                                                className="progress mt-6"
                                                role="progressbar"
                                                aria-label="Warning example"
                                                aria-valuenow="75"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                <div className="progress-bar bg-success w-[35%]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                        As yen tumbles, gadget-loving Japan goes
                                        for secondhand iPhones
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
                        <div className="col-lg-4">
                            <div className="card overflow-hidden hover-img">
                                <div className="position-relative">
                                    <a href="">
                                        <img
                                            src="/assets/dashboard/images/blog/blog-img2.jpg"
                                            className="card-img-top"
                                            alt="matdash-img"
                                        />
                                    </a>
                                    <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                                        2 min Read
                                    </span>
                                    <img
                                        src="/assets/dashboard/images/profile/user-2.jpg"
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
                                        Gadget
                                    </span>
                                    <a
                                        className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                                        href=""
                                    >
                                        Intel loses bid to revive antitrust case
                                        against patent foe Fortress
                                    </a>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-eye text-dark fs-5"></i>
                                            4,150
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-message-2 text-dark fs-5"></i>
                                            38
                                        </div>
                                        <div className="d-flex align-items-center fs-2 ms-auto">
                                            <i className="ti ti-point text-dark"></i>
                                            Sun, Dec 18
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card overflow-hidden hover-img">
                                <div className="position-relative">
                                    <a href="">
                                        <img
                                            src="/assets/dashboard/images/blog/blog-img3.jpg"
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
                                        Health
                                    </span>
                                    <a
                                        className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                                        href=""
                                    >
                                        COVID outbreak deepens as more lockdowns
                                        loom in China
                                    </a>
                                    <div className="d-flex align-items-center gap-4">
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-eye text-dark fs-5"></i>
                                            9,480
                                        </div>
                                        <div className="d-flex align-items-center gap-2">
                                            <i className="ti ti-message-2 text-dark fs-5"></i>
                                            12
                                        </div>
                                        <div className="d-flex align-items-center fs-2 ms-auto">
                                            <i className="ti ti-point text-dark"></i>
                                            Sat, Dec 17
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-6 text-center">
                            <p className="mb-0 fs-4">
                                Design and Developed by{" "}
                                <a
                                    href="https://adminmart.com/"
                                    target="_blank"
                                    className="pe-1 text-primary text-decoration-underline"
                                >
                                    AdminMart.com
                                </a>
                                Distributed by{" "}
                                <a
                                    href="https://themewagon.com/"
                                    target="_blank"
                                    className="pe-1 text-primary text-decoration-underline"
                                >
                                    ThemeWagon
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
