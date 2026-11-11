function isCircleSorted(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) if (arr[i] > arr[(i + 1) % arr.length]) count++;
    return count <= 1 ? true : false;
}

console.log(isCircSorted([2, 3, 4, 5, 0, 1]));  // true
console.log(isCircSorted([1, 2, 3, 4, 5]));     // true
console.log(isCircSorted([1, 2, 3, 4, 1]));     // true
console.log(isCircSorted([4, 1, 2, 5]));        // false
console.log(isCircSorted([7, 6, 5, 4, 3, 2, 1])); // false
