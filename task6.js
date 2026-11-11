const toWeirdCase = s => s.split(' ').map(w => w.split('').map((c, i) => i % 2 == 0 ? c.toUpperCase() : c.toLowerCase()).join('')).join(' ');
