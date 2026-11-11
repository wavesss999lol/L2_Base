function hexStringToRGB(hexString) {
    const s = hexString.slice(1);
    let parts = [];
    for (let i = 0; i <= s.length - 2; i += 2) parts.push(parseInt(s.slice(i, i + 2), 16));
    return { r: parts[0], g: parts[1], b: parts[2] };
}

console.log(hexStringToRGB("#FF9933")); // { r: 255, g: 153, b: 51 }
console.log(hexStringToRGB("#ff9933")); // { r: 255, g: 153, b: 51 }
console.log(hexStringToRGB("#000000")); // { r: 0, g: 0, b: 0 }
console.log(hexStringToRGB("#FFFFFF")); // { r: 255, g: 255, b: 255 }
console.log(hexStringToRGB("#1A2b3C")); // { r: 26, g: 43, b: 60 }
