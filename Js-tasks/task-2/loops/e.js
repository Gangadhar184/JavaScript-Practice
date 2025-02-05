let number = 4;

if(number <= 1){
    console.log("not a prime number");
}
else{
    for(let i = 2; i * i <= number; i++){
        if(number % i === 0){
            console.log("not a prime number");
            return;
        }
    }
    console.log("primer")
}

