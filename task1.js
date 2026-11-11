function hasTwoCubeSums(n) {
    count = 0;
    for (var i = 1; i <= n; i++) {
        for (var j = i + 1; j <= n; j++) {
            if (i !== j && (i ** 3 + j ** 3) === n){
                count++;
            }
        }
    }

    return count === 2? true: false;
}

console.log(hasTwoCubeSums(1729)); // Ожидаем true.
console.log(hasTwoCubeSums(4104)); // Ожидаем true.
console.log(hasTwoCubeSums(9));    // Ожидаем false.
