function isPalindrome(word) {
    const processedWord = word.replace(/\s/g, '').toLowerCase();


    const reversedWord = processedWord.split('').reverse().join('');
    return processedWord === reversedWord;
}

console.log(isPalindrome('kasur ini rUsak')); //true