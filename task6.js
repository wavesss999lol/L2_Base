const toWeirdCase = s => s.split(' ').map(w => w.split('').map((c, i) => i % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ');

console.log(toWeirdCase("String"));            // "StRiNg"
console.log(toWeirdCase("Weird string case")); // "WeIrD StRiNg CaSe"
console.log(toWeirdCase("a b c"));             // "A B C"
