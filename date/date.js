
import date from './date.mjs';

Object.defineProperties(Date.prototype, {
	format: { value: function (f, l) { return date.format(this, f, l) } },
	weekNumber: { get: function () { return date.getWeekNumber(this) } },
	hour: { get: function () { return String(this.getHours()).padStart(2, '0') } },
	minute: { get: function () { return String(this.getMinutes()).padStart(2, '0') } },
	second: { get: function () { return String(this.getSeconds()).padStart(2, '0') } },
});