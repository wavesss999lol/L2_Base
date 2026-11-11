function ipv4Parser(ip, mask) {
    const ipParts = ip.split('.');
    const maskParts = mask.split('.');
    const netParts = [];
    const hostParts = [];
    for (let i = 0; i <= 3; i++){
        netParts[i] = Number(ipParts[i]) & Number(maskParts[i]);
        hostParts[i] = Number(ipParts[i]) & (255 - Number(maskParts[i]));
    }
    return [netParts.join('.'), hostParts.join('.')];
}

console.log(ipv4Parser("192.168.2.1", "255.255.255.0"));// ["192.168.2.0", "0.0.0.1"]
console.log(ipv4Parser("192.168.50.129", "255.255.255.192"));// ["192.168.50.128", "0.0.0.1"]
console.log(ipv4Parser("192.168.2.130", "255.255.255.192"));// ["192.168.2.128", "0.0.0.2"]
console.log(ipv4Parser("65.196.188.53", "255.255.240.0"));// ["65.196.176.0", "0.0.12.53"]
