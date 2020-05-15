const onLoad = function() {

    // UI ELEMENTS 

    const ui = {
        mouseAnimatedIcon: document.querySelector('.mouse-scroll-icon'),
        navigation: document.querySelector('nav'),
        secondaryLogoDiv: document.querySelector('.scrolled-logo'),
        secondaryLogoImg: document.querySelector('.scrolled-logo img'),
        secondaryNavigation: document.querySelector('.scrolled-nav')
    }
    if (screen.width > 1005) {
        ui.navigation.classList.add('animated-top')
        window.onscroll = () => {
            ui.mouseAnimatedIcon.classList.add('hidden')
            if (window.scrollY > 200) {
                ui.secondaryLogoImg.style.transform = 'rotate('+window.pageYOffset/4+'deg)';
                ui.secondaryLogoDiv.classList.add('expanded-logo')
                ui.secondaryNavigation.classList.add('expanded-nav')
                ui.navigation.classList.add('scrolled')
            } else {
                ui.navigation.classList.remove('scrolled')
                ui.secondaryLogoDiv.classList.remove('expanded-logo')
                ui.secondaryNavigation.classList.remove('expanded-nav')
            }
        }
    } else {
        ui.navigation.classList.add('hidden')
        ui.secondaryLogoDiv.classList.add('expanded-logo')
        ui.mouseAnimatedIcon.classList.add('hidden')
        window.onscroll = () => {
            ui.secondaryLogoImg.style.transform = 'rotate('+window.pageYOffset/7+'deg)';
        }
    }
}()