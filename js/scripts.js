/*!
* Start Bootstrap - Resume v7.0.6
*/

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNav = document.querySelector('#navbarResponsive');

    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ============================
    // Hide navbar on scroll (Mobile Only)
    // ============================

    if (window.innerWidth < 992) {

        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {

            // Don't hide while the menu is open
            if (responsiveNav.classList.contains('show')) return;

            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            // Always show near the top
            if (currentScroll < 20) {
                sideNav.classList.remove('nav-hidden');
                lastScrollTop = currentScroll;
                return;
            }

            if (currentScroll > lastScrollTop) {
                // Scrolling down
                sideNav.classList.add('nav-hidden');
            } else {
                // Scrolling up
                sideNav.classList.remove('nav-hidden');
            }

            lastScrollTop = currentScroll;
        });

    }

});