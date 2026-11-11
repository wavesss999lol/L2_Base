const createPhoneNumber = numbers => numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // "(123) 456-7890"
console.log(createPhoneNumber([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])); // "(000) 000-0000"
console.log(createPhoneNumber([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // "(987) 654-3210"
console.log(createPhoneNumber([5, 5, 5, 1, 2, 3, 4, 5, 6, 7])); // "(555) 123-4567"
console.log(createPhoneNumber([1, 1, 1, 2, 2, 2, 3, 3, 3, 3])); // "(111) 222-3333"
