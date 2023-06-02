function showPrimeNumber(n) {
    let primeNumbers = '';
    let count = 0;
    let number = 2;

    while (count < n) {
        if (isPrime(number)) {
            primeNumbers += number + '\t';
            count++;
            if (count % 5 === 0) {
                primeNumbers += '\n';
            }
        }
        number++;
    }

    return primeNumbers;
}

function isPrime(n) {

    if (n <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(showPrimeNumber(100));
/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */