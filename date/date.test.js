import './date.js';

let d = new Date()
console.log(d.hour, d.minute, d.second)
console.log('week',d.weekNumber)
console.log('format',d.format('DDD., DD.','en-US'))