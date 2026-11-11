function solution(str) {
    str.length % 2 !== 0 ? temp = str + '_' : temp = str;
    let result = [];
    for (let i = 0; i <= temp.length - 2; i += 2){
        result.push(temp.slice(i, i + 2));
    }
    return result;
}

console.log(solution("abc"));     // ["ab", "c_"]
console.log(solution("abcdef"));  // ["ab", "cd", "ef"]
console.log(solution(""));        // []
