function primeFactors(n) {
    let parts = [];
    let divisor = 2;
    let count = 0;
    while (n > 1){
        if (n % divisor === 0){
            n /= divisor;
            count ++;
        }
        else{
            if (count == 1) parts.push(`(${divisor})`);
            else if (count > 1) parts.push(`(${divisor}**${count})`);
            divisor++;
            count = 0;
        }
    }
    if (count == 1) parts.push(`(${divisor})`);
    else if (count > 1) parts.push(`(${divisor}**${count})`);
    return parts.join('')
}

console.log(primeFactors(86240)); // "(2**5)(5)(7**2)(11)"
console.log(primeFactors(12));    // "(2**2)(3)"
console.log(primeFactors(17));    // "(17)"
console.log(primeFactors(8));     // "(2**3)"
console.log(primeFactors(7775460)); // "(2**2)(3**3)(5)(7)(11**2)(17)"
