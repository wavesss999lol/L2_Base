function cache(func) {
    const base = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (key in base) return base[key];
        base[key] = func(...args);
        return base[key];
    };
}

console.log(fast('foo', 'bar'), calls);  // foobar 1
console.log(fast('foo', 'bar'), calls);  // foobar 1  (не пересчитано)
console.log(fast('foo', 'baz'), calls);  // foobaz 2
console.log(fast(0, 0), fast(0, 0), calls);  // 0 0 3
