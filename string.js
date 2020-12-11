import string from './string.mjs';

Object.defineProperties(String.prototype, {
	toTitleCase: { value: () => string.toTitleCase(this) },
	toCamelCase: { value: () => string.toCamelCase(this) },
	removeTags: { value: () => string.removeTags(this) },
	findAll: { value: (regex) => string.findAll(this, regex) },
});