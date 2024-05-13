const header = document.querySelector(".header")

export const chooseHeaderColor = () => {
    const element = document.querySelector("[data-theme]")

    if (element) {
        if (element.dataset.theme === "dark") {
            header.classList.add("header-dark")
        }
    } else {
        header.classList.remove("header-dark")
    }

    header.classList.remove("hide")
}

export const headerHide = () => {
    header.classList.add("hide")
}
