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

    let heroLink = document.querySelector(".hero-link a")
    if (heroLink) {
        heroLink.addEventListener("click", function () {
            const targetId = this.getAttribute("href")
            const targetElement = document.querySelector(targetId)

            lenis.scrollTo(targetElement, { duration: 1.5 })
        })
    }

    if (window.location.hash === "#about") {
        if (target) {
            lenis.scrollTo(target, { duration: 1.5 })
        }
    }
}
