import Highway from "@dogstudio/highway"
import Fade from "./transitions/fade.js"
import { updateScroll } from "../common/scroll.js"
import DefaultRenderer from "./renderers/default.js"
import { migrateMobileNavigation } from "../modules/nav/toggleNav.js"
import { headerHide } from "../common/headerColor.js"

export const router = new Highway.Core({
    renderers: {
        default: DefaultRenderer,
    },
    transitions: {
        default: Fade,
    },
})

const updateActiveLink = () => {
    const links = document.querySelectorAll(".nav-link")
    links.forEach((link) => {
        link.classList.remove("active")
        if (link.href === window.location.href) {
            link.classList.add("active")
        }
    })
}

router.on("NAVIGATE_IN", () => {
    updateScroll()
})

router.on("NAVIGATE_OUT", () => {
    migrateMobileNavigation()
    headerHide()
    updateActiveLink()
})
