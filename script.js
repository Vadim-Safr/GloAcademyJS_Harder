'use strict'

const calendarDiv = document.querySelector('.calendar')

const addZero = (num) => {
    return num < 10 ? '0' + String(num) : num
}

const formatTime = (time, measure) => {
    switch (true) {
        case (time % 10 === 1 && time !== 11):
            return time + ' ' + measure[0]
        case ((time >= 5 && time <= 20) || (time % 10 >= 5 && time % 10 <= 9) || time % 10 === 0):
            return time + ' ' + measure[2];
        case (time % 10 >= 2 && time % 10 <= 4):
            return time + ' ' + measure[1]
    }
}

const formatA = (date) => {
    const hours = ['час', 'часа', 'часов']
    const minutes = ['минута', 'минуты', 'минут']
    const seconds = ['секунда', 'секунды', 'секунд']

    const weekDay = date.toLocaleString('ru-RU', { weekday: 'long' })
    const WekkDayFormat = weekDay[0].toUpperCase() + weekDay.slice(1)

    const formatHour = formatTime(date.getHours(), hours)
    const formatMinute = formatTime(date.getMinutes(), minutes)
    const formatSecond = formatTime(date.getSeconds(), seconds)

    calendarDiv.innerHTML += `a) Сегодня ${WekkDayFormat}, ${date.toLocaleString('ru-RU', { day: 'numeric', month: 'long' })} ${date.getFullYear()} года, ${formatHour} ${formatMinute} ${formatSecond} <br>`
}

// const formatB = (date) => {
//     const formatNow = date.toLocaleString('ru-RU').replaceAll(',', ' -')

//     calendarDiv.innerHTML += `б) ${formatNow}`
// }

const formatB = (date) => {
    const day = addZero(date.getDate())
    const month = addZero(date.getMonth() + 1)
    const year = addZero(date.getFullYear())

    const hours = addZero(date.getHours())
    const minutes = addZero(date.getMinutes())
    const seconds = addZero(date.getSeconds())

    calendarDiv.innerHTML += `б) ${day}.${month}.${year} - ${hours}:${minutes}:${seconds}`
}

const interval = setInterval(() => {
    const now = new Date()

    calendarDiv.innerHTML = ''

    formatA(now)
    formatB(now)
}, 1000)