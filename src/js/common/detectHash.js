export const detectHash = () => {
    const hash = window.location.hash

    if (hash) {
        const target = document.querySelector(hash)
        lenis.scrollTo(target, { duration: 1.5 })
    }
}
