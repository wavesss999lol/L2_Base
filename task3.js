function whatCentury(year) {
    const century = Math.ceil(Number(year) / 100);
    if (century >= 11 && century <= 13) return String(century + "th");
    else if (century % 10 === 1) return String(century + "st");
    else if (century % 10 === 2) return String(century + "nd");
    else if (century % 10 === 3) return String(century + "rd");
    else return String(century + "th");
}

console.log(whatCentury("1900")); // "19th"
console.log(whatCentury("1901")); // "20th"
console.log(whatCentury("2000")); // "20th"
console.log(whatCentury("2001")); // "21st"
console.log(whatCentury("2101")); // "22nd"
