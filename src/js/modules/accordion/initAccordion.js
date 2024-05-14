import Tween from "gsap"
import { transition } from "../../config/transitions.js"

export const initAccordion = () => {
    const accordions = document.querySelectorAll(".list")
    if (accordions.length) {
        accordions.forEach((accordion) => {
            const accordionRows = accordion.querySelectorAll(".list-item")
            let currentAccordionRow = null
            accordionRows.forEach((accordionRow, i) => {
                const accordionContent = accordionRow.querySelector(".list-item-text")
                const accordionHeader = accordionRow.querySelector(".list-item-title")
                const t = Tween.to(accordionContent, {
                    height: "auto",
                    paused: true,
                    duration: transition.move.duration,
                    ease: transition.move.ease,
                })

                accordionRow._accordionTween = t

                accordionHeader.addEventListener("click", () => {
                    if (currentAccordionRow !== null) {
                        accordionRows[currentAccordionRow].classList.toggle("is-active")
                        if (currentAccordionRow === i) {
                            currentAccordionRow = null
                            return t.reverse()
                        }
                        accordionRows[currentAccordionRow]._accordionTween.reverse()
                    }
                    accordionRow.classList.toggle("is-active")
                    t.play()
                    currentAccordionRow = i
                })
            })

            // accordionRows[0].querySelector('.list-item-title').click();
        })
    }
}
export const initAccordionCore = () => {
    const accordionsCore = document.querySelectorAll(".advantages")
    if (accordionsCore.length) {
        accordionsCore.forEach((accordion) => {
            const accordionRows = Tween.utils.toArray(".advantages-item")
            let currentAccordionRow = null

            accordionRows.forEach((accordionRow, i) => {
                const accordionContent = accordionRow.querySelector(".advantages-item-text")
                const accordionHeader = accordionRow.querySelector(".advantages-item-title")
                const t = Tween.to(accordionContent, {
                    height: "auto",
                    paused: true,
                    duration: transition.move.duration,
                    ease: transition.move.ease,
                })
                accordionRow._accordionTween = t
                accordionHeader.addEventListener("click", () => {
                    const activeAttr = accordionHeader.parentElement.getAttribute("data-core")
                    const dataCoreImage = document.querySelector(
                        "[data-core-image='" + activeAttr + "'"
                    )
                    var elems = document.querySelectorAll(".advantages-image")
                    ;[].forEach.call(elems, function (el) {
                        el.classList.remove("is-active")
                    })
                    dataCoreImage.classList.add("is-active")
                    if (currentAccordionRow !== null) {
                        accordionRows[currentAccordionRow].classList.toggle("is-active")
                        if (currentAccordionRow === i) {
                            currentAccordionRow = null
                            return t.reverse()
                        }
                        accordionRows[currentAccordionRow]._accordionTween.reverse()
                    }
                    accordionRow.classList.remove("is-active")
                    accordionRow.classList.toggle("is-active")

                    t.play()
                    currentAccordionRow = i
                })
            })
            // accordionRows[0].querySelector('.advantages-item-title').click();
        })
    }
}
