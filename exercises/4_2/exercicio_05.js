let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let big = 0;

for (let num = 0; num < numbers.length; num++) {
    for (let num2 = 0; num2 < numbers.length; num2++){
        if (numbers[num] > numbers[num2] && numbers[num] > big) {
            big = numbers[num];
        }
    }
}
console.log(big);