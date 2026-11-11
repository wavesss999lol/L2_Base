function bingo(ticket, win) {
    const wins = ticket.filter(([str, num]) => [...str].some(c => c.charCodeAt(0) === num)).length;
    return wins >= win ? 'Winner!' : 'Loser!';
}

const t = [['ABC', 65], ['HGR', 74], ['BYHT', 74]];

console.log(bingo(t, 2));                                       // "Loser!"
console.log(bingo(t, 1));                                       // "Winner!"
console.log(bingo([['AA', 65]], 1));                            // "Winner!"
console.log(bingo([['abc', 65]], 1));                           // "Loser!"
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 2)); // "Winner!"
