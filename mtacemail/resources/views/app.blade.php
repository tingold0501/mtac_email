<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link rel="stylesheet" href="/assets/dashboard/css/styles.min.css">
    <!-- Customized Bootstrap Stylesheet -->
    <link rel="stylesheet" href="/assets/home/css/bootstrap.min.css" >
    <!-- Fonts -->
    <script src="/assets/dashboard/libs/apexcharts/dist/apexcharts.min.js"></script>

    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <script src="/assets/dashboard/libs/jquery/dist/jquery.min.js"></script>
    <script src="/assets/dashboard/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Rubik:wght@400;500&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="/assets/home/lib/animate/animate.min.css" rel="stylesheet">
    <link href="/assets/home/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="/assets/home/lib/lightbox/css/lightbox.min.css" rel="stylesheet">




    <link rel="stylesheet" href="/assets/dashboard/css/styles.min.css" />


    <!-- Template Stylesheet -->
    <link href="/assets/home/css/style.css" rel="stylesheet">
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
    {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script> --}}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/home/lib/wow/wow.min.js"></script>
    <script src="/assets/home/lib/easing/easing.min.js"></script>
    <script src="/assets/home/lib/waypoints/waypoints.min.js"></script>
    <script src="/assets/home/lib/counterup/counterup.min.js"></script>
    <script src="/assets/home/lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="/assets/home/lib/lightbox/js/lightbox.min.js"></script>
    <!-- Template Javascript -->
    <script src="/assets/home/js/main.js"></script>

    <script src="/assets/dashboard/libs/jquery/dist/jquery.min.js"></script>
    <script src="/assets/dashboard/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
    <script src="/assets/dashboard/libs/simplebar/dist/simplebar.js"></script>
    <script src="/assets/dashboard/js/sidebarmenu.js"></script>
    <script src="/assets/dashboard/js/app.min.js"></script>
    <script src="/assets/dashboard/js/dashboard.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>




</body>


</html>
