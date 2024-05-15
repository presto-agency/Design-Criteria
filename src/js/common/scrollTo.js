import { lenis } from "./scroll.js"

export const scrollTo = () => {
    const scrollButtons = document.querySelectorAll(".scroll-action")

    if (scrollButtons.length) {
        scrollButtons.forEach((button) => {
            const url = button.getAttribute("href")
            const hash = url.split("#")[1]

            button.addEventListener("click", (e) => {
                e.preventDefault()
                const target = document.getElementById(hash)
                if (target) {
                    lenis.scrollTo(target, { duration: 1.5 })
                } else {
                    window.location.href = url
                }
            })
        })
    }
}
