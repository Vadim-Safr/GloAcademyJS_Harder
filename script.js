let lang = prompt("Выберите один язык: ru, en", "ru, en");
const daysWeekRu = "Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье";
const daysWeekEn = "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday";

// if
if (lang == "ru") {
    console.log(daysWeekRu);
} else if (lang == "en") {
    console.log(daysWeekEn);
} else {
    console.log("Что-то пошло не так :(");
}

// switch
switch (lang) {
    case "ru":
        console.log(daysWeekRu);
        break
    case "en":
        console.log(daysWeekEn);
        break
    default:
        console.log("Что-то пошло не так :(");
}

// array 1 способ
const arr = [
    ["ru", "Понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    ["en", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
];

let findLang = arr.find(element => element[0] == lang);

for (let i = 1; i <= 7; i++) {
    console.log(findLang[i]);
}

// array 2 способ
const arr2 = [
    ["Понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
];

const indexLang = {
    "ru": 0,
    "en": 1
};

console.log(arr2[indexLang[lang]].join(", "));


const namePerson = prompt("Введите имя", "Александр");
const role = namePerson == "Артем"
    ? "директор"
    : namePerson == "Александр"
        ? "преподаватель"
        : "студент";

console.log(role);