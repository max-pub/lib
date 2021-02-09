

// export function trim(array) {
// 	return array.map(x => x.trim());
// }

export function remove(array, val) {
	let index = array.indexOf(val)
	if (index < 0) return array;
	return [...array.slice(0, index), ...array.slice(index + 1)] // splice alters the source?
}

export function unique(array) {
	return [...new Set(array)]
}

/**
 * remove empty values like null, undefined, ''
 * @param array 
 */
export function clean(array) {
	return array.filter(x => x);
}



export function first(array, def = '') {
	return array[0] ?? def;
}

export function last(array, def = '') {
	return array.slice(-1)[0] ?? def;
}

export function shuffle(array) {
	let a = JSON.parse(JSON.stringify(array)); // deep copy
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}







/**
 * create a new array from various inputs
 * more powerful than Array.from()
 * @param a 
 */
export function array(a) {
	if (!a) return []; // null, undefined, NaN return empty array
	if (Array.isArray(a)) return a;
	if (a * 1 == a) return Array(a)
	return Array.from(a);
}



export function union(array, other) {
	return [...array, ...other]
}


export function intersection(...arrays) {
	// if (arrays.length < 2) return [];
	let output = arrays[0] ?? [];
	for (let a of arrays?.slice(1) ?? [])
		output = output.filter(value => a.includes(value))
	return output;
}

// https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript
export function cartesian(...a) {
	a = a.filter(x => x.length)
	// console.log(a)
	if (a.length <= 1) return (a[0] ?? []).map(x => [x])
	return a.filter(x => x.length).reduce((acc, val) => acc.flatMap(d => val.map(e => [d, e].flat())));
}



export default {
	remove, unique, clean, first, last, shuffle, array, intersection, union, cartesian
}