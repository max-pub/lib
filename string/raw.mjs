

export function toTitleCase(string) {
	return string.split(' ').filter(x => x)
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ')
}

export function toCamelCase(string) {
	// console.log('camel1',string,string.replace(/[^a-zäöüß1-9]/gi, ' '))
	string = toTitleCase(string.replace(/[^a-zäöüß1-9]/gi, ' ')).replace(/\s/g, '')
	// console.log('camel1',string)
	// string[0] = string[0].toLowerCase();
	return string[0].toLowerCase() + string.slice(1);
}

export function findGroups(string, regex) {
	// console.log('find',string,regex)
	return Array.from(string.matchAll(regex))
		.map(i => i.slice(1)) // only groups, not full match
	// .flat();
}

export function removeTags(string) {
	return string.replace(/<.*?>/g, '')
}

export function blocks(string) {
	return string.split('\r\n\r\n').flatMap(x => x.split('\r\r')).flatMap(x => x.split('\n\n'))
}
export function lines(string) {
	return string.split('\r\n').flatMap(x => x.split('\r')).flatMap(x => x.split('\n'))
}

export default {
	toTitleCase, toCamelCase, findGroups, removeTags, blocks, lines
}