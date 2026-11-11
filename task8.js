function expandedForm(num) {
    let result = [];
    let place = 1;
    while (num > 0){
        digit = num % 10;
        if (digit !== 0) result.unshift((digit) * place);
        num = Math.floor(num / 10);
        place *= 10;
    }
    return result.join(" + ");
}

console.log(expandedForm(12));      // "10 + 2"
console.log(expandedForm(4));       // "4"
console.log(expandedForm(70304));   // "70000 + 300 + 4"
console.log(expandedForm(100200));  // "100000 + 200"
console.log(expandedForm(123456));  // "100000 + 20000 + 3000 + 400 + 50 + 6"
