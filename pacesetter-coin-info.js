const priceHistoryJson = require('./pacesetter-coin.json');
const priceHistory = priceHistoryJson.map(j => ({ ...j, jsDate: new Date(j.date) }));

const scenarios = priceHistory
  .flatMap(h1 => priceHistory
                   .filter(h2 => h1.jsDate < h2.jsDate)
                   .map(h2 => ({ dateBuy: h1.date, dateSell: h2.date, cost: h1.price, returnValue: h2.price, profit: h2.price - h1.price })));
				   
const bestCase = scenarios.reduce((a, b) => b.profit > a.profit ? b : a, { profit: 0 })

console.log(bestCase);
