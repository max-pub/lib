

export function toTitleCase(string) {
	return string.split(' ')
		.map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
		.join(' ')
}

export function toCamelCase(string) {
	string = toTitleCase(string.replace(/[^a-zäöüß1-9]/gi, ' ')).replace(/\s/g, '')
	// string[0] = string[0].toLowerCase();
	return string[0].toLowerCase() + string.slice(1);
}

export function findAll(string, regex) {
	return Array.from(string.matchAll(regex))
		.map(i => i.slice(1)) // only groups, not full match
	// .flat();
}

export function removeTags(string) {
	return this.replace(/<.*?>/g, '')
}

export default {
	toTitleCase, toCamelCase, findAll, removeTags
}