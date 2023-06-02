function isCharsUnique(string) {
    const charMap = {};

    for (let char of string) {
        if (charMap[char]) {
            return false;
        }
        charMap[char] = true;
    }

    return true;
}

console.log(isCharsUnique('abcdefg')); //true
console.log(isCharsUnique('abcdefga')); //false