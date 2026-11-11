function longest(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > 0; j--) {
            if (arr[j].length > arr[j - 1].length) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            }
        }
    }
    return arr[n - 1];
}

console.log(nthLongest(["Hello", "World", "Codewars", "Katas"], 3)); // "World"
console.log(nthLongest(["Hello", "World", "Codewars", "Katas"], 1)); // "Codewars"
console.log(nthLongest(["Hello", "World", "Codewars", "Katas"], 4)); // "Katas"
console.log(nthLongest(["a", "bb", "ccc"], 1));                      // "ccc"
console.log(nthLongest(["aa", "bb", "cc"], 2));                      // "bb" (все равны, порядок исходный)
