import string from './string.mjs';

Object.defineProperties(String.prototype, {
	toTitleCase: { value: function () { return string.toTitleCase(this) } },
	toCamelCase: { value: function () { return string.toCamelCase(this) } },
	removeTags: { value: function () { return string.removeTags(this) } },
	findGroups: { value: function (regex) { return string.findGroups(this, regex) } },
});