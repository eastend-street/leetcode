const isPangram = (string) => {
    const arr = string.replace(/[^a-zA-Z]/g, "").toLowerCase().split("")
    const set = new Set(arr)
    return set.size === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog.")) // true
console.log(isPangram("This is not a pangram.")) // false
console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"))  // true


