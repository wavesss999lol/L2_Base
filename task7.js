function wave(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') continue;
        result.push(str.split('').map((c, j) => j === i ? c.toUpperCase() : c).join(''));
    }
    return result;
}

console.log(wave("hello"));      // ["Hello","hEllo","heLlo","helLo","hellO"]
console.log(wave(" gap "));      // [" Gap "," gAp "," gaP "]
console.log(wave("two words"));  // 8 элементов, без пробела
console.log(wave(""));           // []
