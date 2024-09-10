import { useState } from "react";
import { Head, Link } from "@inertiajs/react";

export default function Authenticated({ user, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

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
                <Head title="Dashboard" />
                <aside className="left-sidebar">
                    <div>
                        <div className="brand-logo d-flex align-items-center justify-content-between">
                            <a
                                href="./index.html"
                                className="text-nowrap logo-img"
                            >
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
                                <li className="sidebar-item sidebar-item ">
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
                                        <span className="hide-menu">
                                            Dashboard
                                        </span>
                                    </a>
                                </li>

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
                                        <span className="hide-menu">
                                            Activity
                                        </span>
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
                                        <span className="hide-menu">
                                            Audience
                                        </span>
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                        <li>
                                            <Link className="dropdown-item" href = {"/contract"}>
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
                                        <span className="hide-menu">
                                            Campaigns
                                        </span>
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
                                        <span className="hide-menu">
                                            Exports
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
                                            Settings
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="unlimited-access hide-menu bg-primary-subtle position-relative mb-7 mt-7 rounded-3">
                                <div className="d-flex">
                                    <div className="unlimited-access-title me-3 w-[200px]">
                                        <h6 className="fw-semibold fs-4 mb-6 text-dark w-75">
                                            {user.name}
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
                                    <a
                                        className="nav-link nav-icon-hover"
                                        href=""
                                    >
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
                                                src={user.avatar}
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
                    {children}
                </div>
            </div>
        </>
    );
}
