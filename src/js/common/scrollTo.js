import { lenis } from "./scroll.js"

export const scrollTo = () => {
    // const scrollButtons = document.querySelectorAll(".scroll-action")
    let target = document.querySelector(".scrollTo")

    // if (scrollButtons.length) {
    //     scrollButtons.forEach((button) => {
    //         button.addEventListener("click", () => {
    //             if (target) {
    //                 lenis.scrollTo(target, { duration: 1.5 })
    //             }
    //         })
    //     })
    // }

    if (window.location.hash === "#about") {
        if (target) {
            lenis.scrollTo(target, { duration: 1.5 })
        }
    }
}
