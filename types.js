const tests = {
	date: /\d{4}-\d{2}-\d{2}/,
	time: /\d{2}:\d{2}:\d{2}/,
	datetime: /\d{4}-\d{2}-\d{2}[T\s]\d{2}:\d{2}:\d{2}/,
	int: /\d+/,
	real: /\d+\.\d+/,
	range: /\d+\s+-\s+\d+/,
	bool: /true|false/,
	letters : /[a-z]+/i,
	// letters: /[\p{L}\s]+/u, // deno can't do that yet!
	// letters: /[\p{L}\s]+/,  // https://stackoverflow.com/questions/50178498/no-pl-for-javascript-regex-use-unicode-in-js-regex
	//https://caniuse.com/mdn-javascript_builtins_regexp_unicode
	hexColor: /#[0-9a-f]{6}/,
	// url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/,
	url: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
	// email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
	email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	phone: /\+\d{1,3}\s\d+\s\d+/,    // https://en.wikipedia.org/wiki/E.123
}
// ↦  tab    ⇥
// ↩  enter  ↵
export default function (string) {
	string = String(string);
	// if (!string) return '';
	for (let name in tests) {
		if (tests[name].exec(string)?.[0] == string)
			return name;
	}
	return 'string';
}

const superTypes = {
	date: 'time',
	time: 'time',
	datetime: 'time',
	int: 'number',
	real: 'number',
	range: 'number',
	bool: 'bool',
	letters : 'string',
	hexColor: 'color',
	url: 'contact',
	email: 'contact',
	phone: 'contact',
}

export function superType(type){
	return superTypes[type] ?? '';
}