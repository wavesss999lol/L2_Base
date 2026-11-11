const domainName = url => url.match(/^(?:https?:\/\/)?(?:www\.)?([^\.\/]+)(?:\.[a-zA-Z]{2,})/)[1];

const tests = [
    ["http://github.com/carbonfive/raygun", "github"],
    ["http://www.zombie-bites.com", "zombie-bites"],
    ["https://www.cnet.com", "cnet"],
    ["www.xakep.ru", "xakep"],
    ["icann.org", "icann"],
];

for (const [url, expected] of tests) {
    const got = domainName(url);
    console.log(got === expected ? "OK  " : "FAIL", url, "->", got);
}
