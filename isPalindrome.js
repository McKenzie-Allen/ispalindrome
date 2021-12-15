// Write your code below
function isPalendrome(word) {
    let value = true
    let s = word.length - 1
    for (i = 0; i < (word.length - 1) / 2; i++) {
        if (word[i] !== word[s]) {
            value = false
        }
        s--
    }
    return value
}
console.log(isPalendrome("Taocat"))