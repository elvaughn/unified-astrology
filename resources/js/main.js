console.log('loaded!')

window.onscroll = () => {
    const navigation = document.querySelector('nav')
    const secondaryLogo = document.querySelector('.scrolled-logo')
    const logoSecond = document.querySelector('.scrolled-logo img')
    const secondaryNavigation = document.querySelector('.scrolled-nav')
    console.log(window.pageYOffset)
    logoSecond.style.transform = 'rotate('+window.pageYOffset/3+'deg)';
   if (window.scrollY > 180) {
       secondaryLogo.classList.add('expanded-logo')
       secondaryNavigation.classList.add('expanded-nav')
   } else if (window.scrollY < 180 && window.scrollY > 130) {
       secondaryLogo.classList.remove('expanded-logo')
       secondaryNavigation.classList.remove('expanded-nav')
       navigation.classList.add('scrolled')
   } else {
       navigation.classList.remove('scrolled')
       secondaryLogo.classList.remove('expanded-logo')
       secondaryNavigation.classList.remove('expanded-nav')
   }
}