//reverse a number

let number = 12;
let reversedNumber = 0;

while(number > 0){
    let remainder = number % 10;
    reversedNumber = reversedNumber * 10 + remainder;
    number = Math.floor(number / 10);
}
console.log(reversedNumber)
