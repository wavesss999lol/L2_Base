function findMissing(list) {
    const progr = (list[list.length - 1] - list[0]) / list.length;
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i + 1] - list[i] !== progr) return list[i] + progr;
    }
}

console.log(findMissing([1, 3, 5, 9, 11])); // 7
console.log(findMissing([1, 2, 4]));        // 3
console.log(findMissing([1, 3, 4, 5]));     // 2
console.log(findMissing([-3, -1, 1, 5]));   // 3
console.log(findMissing([11, 5, 2, -1, -4])); // 8
