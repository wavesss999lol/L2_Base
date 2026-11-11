function bingo(ticket, win) {
    const wins = ticket.filter(([str, num]) => [...str].some(c => c.charCodeAt(0) === num)).length;
    return wins >= win ? 'Winner!' : 'Loser!';
}
