const checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
        return false;
    }
    // else sort and compare 
    const sortedStringOne = stringOne.split('').sort().join('');
    const sortedStringTwo = stringTwo.split('').sort().join('');
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    return sortedStringOne === sortedStringTwo;

};


console.log(checkPermute('aba', 'aab')) //true;
console.log(checkPermute('aba', 'aaba')) //false;
console.log(checkPermute('aba', 'aa')) //false;