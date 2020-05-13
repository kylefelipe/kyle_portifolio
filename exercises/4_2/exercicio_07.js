let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let minor = numbers[0];

for (let num = 0; num < numbers.length; num++) {
    if (numbers[num] < minor) {
        minor = numbers[num];
    }
}
console.log(minor);