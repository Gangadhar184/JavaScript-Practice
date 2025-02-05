let arr = [1,2,3,0,-1];

let smallestNumber = arr[0];
let largestNumber = arr[0];
for(let i = 0; i < arr.length; i++) {
    if(arr[i] < smallestNumber) {
        smallestNumber = arr[i];
    }
    if(arr[i] > largestNumber){
        largestNumber = arr[i];
    }
}
console.log(`smallestNumber : ${smallestNumber} largestNumber : ${largestNumber}` )
