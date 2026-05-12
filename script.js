const argument = " В этой строке должно быть более 30 символов";

const cleanAndSliceStr = (argum) => {
    if (typeof argum !== 'string') {
        return "В аргументы передана не строка"
    }

    const trimmedArgum = argum.trim();

    if (trimmedArgum.length > 30) {
        return trimmedArgum.slice(0, 30) + "..."
    } else {
        return trimmedArgum
    }
}

console.log(cleanAndSliceStr(argument));