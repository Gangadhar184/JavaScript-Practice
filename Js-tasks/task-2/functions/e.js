//palindrome -> radar, level

function palindromeString(string){
    let newString = string.toLowerCase();
    let left = 0;
    let right = newString.length - 1;
    while(left < right) {
        if(newString[left] !== newString[right]){
            return false;
        }
        left++;
        right--;
    }
    return true;

}
console.log(palindromeString("level"))
