
let fibNumber = 5;
let a = 0;
let b = 1;
let count = 0;

while(count < fibNumber) {
    console.log(a);
    let nextNumber = a + b;
    a = b;
    b = nextNumber;
    count++;
}

console.log(count)
