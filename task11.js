const domainName = url => url.match(/^(?:https?:\/\/)?(?:www\.)?([^\.\/]+)(?:\.[a-zA-Z]{2,})/)[1];

console.log(domainName("http://github.com/carbonfive/raygun")); // "github"
console.log(domainName("http://www.zombie-bites.com"));         // "zombie-bites"
console.log(domainName("https://www.cnet.com"));                // "cnet"
console.log(domainName("www.xakep.ru"));                        // "xakep"
console.log(domainName("icann.org"));                           // "icann"
