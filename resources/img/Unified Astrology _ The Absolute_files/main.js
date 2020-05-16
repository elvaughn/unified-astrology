const uiController= function() {
    uiElements = {
        mainNav: document.querySelector('nav'),
        scrolledNavLogo: document.querySelector('.scrolled-navigation img'),
        scrolledNav: document.querySelector('.scrolled-nav-main'),
        copyrightSpan: document.querySelector('#copyYear')
    }
    return uiElements;
}


const functionController = function() {
    const interactions = {
        setDate: function(dateSpan) {
            dateSpan.textContent = new Date().getFullYear()
        }
    }

    return interactions;
}

const experienceController = function(uiEl, uiInteractions) {
    
    const ui = uiEl;
    const interactions = uiInteractions;

    // Set the copyright year based on current date
    interactions.setDate(ui.copyrightSpan)

}(uiController(), functionController())

