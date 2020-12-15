import array from './array.mjs';

Object.defineProperties(Array.prototype, {
	trim: { value: function () { return array.trim(this) } },
	unique: { value: function () { return array.unique(this) } },
	clean: { value: function () { return array.clean(this) } },
	remove: { value: function (value) { return array.remove(this,value) } },
	intersection: { value: function (other) { return array.intersection(this,other) } },
	union: { value: function (other) { return array.union(this,other) } },



	union: {
		value: function (other) {
			return [...this, ...other]
		}
	},
	first: {
		value: function (def = '') {
			return this[0] ?? def;
		}
	},
	last: {
		value: function (def = '') {
			return this.slice(-1)[0] ?? def;
		}
	},
	shuffle: {
		value: function () {
			let a = JSON.parse(JSON.stringify(this)); // deep copy
			for (let i = a.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[a[i], a[j]] = [a[j], a[i]];
			}
			return a;
		}
	},
});



