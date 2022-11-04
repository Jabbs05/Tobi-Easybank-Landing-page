const mobnav = document.querySelector('.mobilenav')
const hamburger = document.querySelector('.hamburger')

function toggle() {
    if (mobnav.style.opacity === "0") {
        mobnav.style.opacity = "1"
        mobnav.style.transition = "0.2s"
        hamburger.style.background = "url(icon-close.svg)"
        hamburger.style.backgroundrepeat = "no-repeat";
        hamburger.style.height = "18px"
        hamburger.style.width = "18px"
    } else {
        mobnav.style.opacity = "0"
        mobnav.style.transition = "0.2s"
        hamburger.style.background = "url(icon-hamburger.svg)"
        hamburger.style.height = "11px"
        hamburger.style.width = "20px"
    }
}

hamburger.addEventListener('click',toggle)