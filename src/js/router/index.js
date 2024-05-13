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

router.on("NAVIGATE_IN", () => {
    updateScroll()
})

router.on("NAVIGATE_OUT", () => {
    migrateMobileNavigation()
    headerHide()
})
