const num = 266219;
let mult = 1;
let pow;

for (let digit of String(num)) {
    mult *= digit;
}

console.log(mult);
pow = mult ** 3;
console.log(String(pow).slice(0, 2))