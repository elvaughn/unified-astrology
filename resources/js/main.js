const uiController = function () {
    uiElements = {
        mainNav: document.querySelector('nav'),
        mainNavLogo: document.querySelector('.logo a img'),
        scrolledNavLogo: document.querySelector('.scrolled-navigation img'),
        scrolledNav: document.querySelector('.scrolled-nav-main'),
        copyrightSpan: document.querySelector('#copyYear'),
        mobileMenuIcon: document.querySelector('.mobile-nav-icon'),
        mobileMenuOverlay: document.querySelector('.mobile-nav-overlay'),
        mobileMenuLogo: document.querySelector('.mobile-nav-logo img'),
        mobileNavLinks: Array.prototype.slice.call(document.querySelectorAll('.mobile-nav-overlay ul li a')),
        mobileOverlayLogo: document.querySelector('.mobile-nav-container ul li a img')
    }
    return uiElements;
}


const functionController = function () {
    const interactions = {
        setDate: function (dateSpan) {
            dateSpan.textContent = new Date().getFullYear()
        },
        navigationShift: function (mainNav, mainNavLogo, secondNavLogo, secondNav, mobileMenuLogo) {
            if (screen.width > 1365) {
                window.onscroll = () => {
                    if (window.scrollY > 160) {
                        secondNavLogo.style.transform = 'rotate(' + window.pageYOffset / 8 + 'deg)';
                        mainNav.classList.add('main-retracted');
                        secondNavLogo.classList.add('secondLogo-extended');
                        secondNav.classList.add('secondNav-extended');
                    } else {
                        mainNav.classList.remove('main-retracted');
                        secondNavLogo.classList.remove('secondLogo-extended');
                        secondNav.classList.remove('secondNav-extended')
                    }
                }
            } else if (screen.width > 1023) {
                window.onscroll = () => {
                    mainNavLogo.style.transform = 'rotate(' + (-window.pageYOffset / 8) + 'deg)';
                }
            } else {
                window.onscroll = () => {
                    mobileMenuLogo.style.transform = 'rotate(' + (-window.pageYOffset / 8) + 'deg)';
                }
            }
        },
        mobileNavToggle: function (navIcon, overlay) {
            navIcon.addEventListener('click', () => {
                if (overlay.classList.contains('overlay-expanded')) {
                    overlay.classList.remove('overlay-expanded')
                } else {
                    setTimeout(() => {
                        overlay.classList.toggle('overlay-expanded')
                    }, 50)
                }
            })
        },

        activateMobileNavigationLinks: function (navLinks, overlay) {
            navLinks.forEach(navlink => {
                navlink.addEventListener('click', () => {
                    overlay.classList.remove('overlay-expanded')
                })
            })
        },

        loadParticles: function () {
            particlesJS.load('particles-js', 'vendors/js/particles.json', function() {
                console.log('callback - particles.js config loaded');
            });
        }
    }

    return interactions;
}

const experienceController = function (uiEl, uiInteractions) {

    const ui = uiEl;
    const interactions = uiInteractions;
    console.log(ui.mobileNavLinks)
    // Set the copyright year based on current date
    interactions.setDate(ui.copyrightSpan)

    // Change navigation based on screen size
    interactions.navigationShift(ui.mainNav, ui.mainNavLogo, ui.scrolledNavLogo, ui.scrolledNav, ui.mobileMenuLogo);

    interactions.mobileNavToggle(ui.mobileMenuIcon, ui.mobileMenuOverlay)

    interactions.activateMobileNavigationLinks(ui.mobileNavLinks, ui.mobileMenuOverlay)

    interactions.loadParticles()


}(uiController(), functionController())