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
