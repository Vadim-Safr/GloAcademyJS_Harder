const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const now = new Date()
const calendarDiv = document.querySelector(".calendar")
const indexOfDay = now.getDay() - 1 === -1 ? 6 : now.getDay() - 1

week.forEach((item, index) => {
    let day = item

    if (index === indexOfDay) {
        day = `<b>${day}</b>`
    }

    if (item === 'Saturday' || item === 'Sunday') {
        day = `<i>${day}</i>`
    }

    calendarDiv.innerHTML += day + '<br>'
})