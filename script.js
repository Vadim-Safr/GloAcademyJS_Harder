'use strict'

let arr = ['101', '202', '303', '404', '505', '606', '707'];

for (let i = 0; i < 7; i++) {
    if (arr[i][0] == 2 || arr[i][0] == 4) {
        console.log(arr[i]);
    }
}

for (let i = 2; i <= 100; i++) {
    let isSimple = true;

    for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
            isSimple = false;
            break
        }
    }

    if (isSimple) {
        console.log(`Делители числа ${i}: 1 и ${i}`)
    }
}