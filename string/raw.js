import string from './raw.mjs';

Object.defineProperties(String.prototype, {
	// toTitleCase: { value: function () { return string.toTitleCase(this) } },
	// toCamelCase: { value: function () { return string.toCamelCase(this) } },
	removeTags: { value: function () { return string.removeTags(this) } },
	findGroups: { value: function (regex) { return string.findGroups(this, regex) } },

	blocks: { get: function () { return string.blocks(this) } },
	lines: { get: function () { return string.lines(this) } },
	camelCase: { get: function () { return string.toCamelCase(this) } },
	titleCase: { get: function () { return string.toTitleCase(this) } },
});