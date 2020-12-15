var pos = 0
var neg = 0
const POS = 'color: lime;';
const NEG = 'color: red;'
const STD = 'color: white;'
const BIG = 'font-weight: bold;'
const NAME_PAD = 20;

export function equal(name, a, b) {
	let a2 = JSON.stringify(a)
	let b2 = JSON.stringify(b)
	let result = a2 == b2
	if (result)
		console.log(`${++pos + neg} %c${name.padEnd(NAME_PAD, ' ')} %c${a2}`, POS, STD)
	// console.log(`%c${++pos}%c / %c${neg} %c${name.padEnd(NAME_PAD, ' ')} %c${a2}`, POS, STD, NEG, POS, STD)
	else
		console.log(`${pos + ++neg} %c${name.padEnd(NAME_PAD, ' ')} %c${a2}   |||   %c${b2}`, NEG, STD, NEG)
	// console.log(`%c${pos}%c / %c${++neg} %c${name.padEnd(NAME_PAD, ' ')} %c${a2}   |||   ${b2}`, POS, STD, NEG, NEG, STD)
}
export function summary() {
	let total = pos + neg;
	console.log('-------------------------')
	console.log(`%c${total} tests`, STD + BIG)
	console.log(`%c${pos} successful`, POS)
	console.log(`%c${neg} failures`, NEG)
	console.log('-------------------------')
}

export default {
	equal, summary
}