let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoNumbers = [];

for (let number = 0; number < numbers.length; number+=1) {
    if (number < (numbers.length -1)) {
        novoNumbers.push(numbers[number] * (numbers[number+1]));
    } else {
        novoNumbers.push(numbers[number] * 2);
    }
}
console.log(numbers);
console.log(novoNumbers)