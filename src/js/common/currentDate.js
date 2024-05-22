export const currentDate = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    const now = new Date()
    const dateStr = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`

    const formattedTime = `Current as of ${dateStr}`
    const dateElement = document.getElementById("current-date")
    if (dateElement) {
        dateElement.textContent = formattedTime
    }
}
