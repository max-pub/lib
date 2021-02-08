// %s → Formats the value as a string
// %i or %d → Formats the value as an integer
// %f → Formats the value as a floating point value
// %o → Formats the value as an expandable DOM element. As seen in the Elements panel
// %O → Formats the value as an expandable JavaScript object
// %c → Applies CSS style rules to the output string as specified by the second parameter

export class Log {
	static ERROR = 1;
	static WARNING = 2;
	static SUCCESS = 3;
	static INFO = 4;

	_level = Log.INFO;

	_autoFlush = true;
	constructor() { this.reset() }


	autoFlush(p = true) { this._autoFlush = p; return this; }
	get line() { return this.autoFlush(false) }
	get end() { return this.autoFlush(true).flush() }


	level(p = Log.INFO) { this._level = p; return this; }

	string(s) { if (this._mode > this._level) return this; this._string.push(s); return this; }
	get tab() { return this.string('\t') }
	get break() { return this.string('\n') }
	get dash() { return this.string(' - ') }


	format(f) { if (this._mode > this._level) return this; this._format.push(f); return this; }


	// color(c) { this._color = c; return this; }
	color(c) { return this.string('%c').format(`color:${c};`) }
	get lime() { return this.color('lime') }
	get red() { return this.color('red') }
	get orange() { return this.color('orange') }
	get silver() { return this.color('silver') }


	mode(m) { this._mode = m; return this; }
	get success() { return this.mode(Log.SUCCESS).lime }
	get warning() { return this.mode(Log.WARNING).orange }
	get error() { return this.mode(Log.ERROR).red }


	done() {
		if (this._autoFlush) this.flush()
		return this;
	}
	pad(left, right) {
		this._pad = { left, right }
		return this;
	}
	text(text, options = {}) {
		text = String(text)
		// if (options.r) text = text.padEnd(options.r, ' ')
		// if (options.l) text = text.padStart(options.l, ' ')
		text = text
			.padEnd(this._pad?.right ?? 0, ' ')
			.padStart(this._pad?.left ?? 0, ' ')
		this._pad = null
		return this.string(text).done()
	}

	number(n, options = {}) {
		n = Number.parseFloat(n)
		if (options.r) n = n.toFixed(options.r)
		if (options.l) n = String(n).padStart(options.l, '0')
		return this.string(n).done()
		// return this.string('%f').format(n).done()
	}
	object(o) {
		return this.color('auto').string('%o').format(o).done()
	}

	reset() {
		this._string = [];
		this._format = [];
		// this._color = 'auto';
		this._mode = Log.INFO;
		return this;
	}

	flush() {
		if (this._string.length)
			console.log(this._string.join(''), ...this._format)
		return this.reset();
	}
}


export default new Log()

