import log from './log.js';

// log.text('abc ').number(123.34)
// log.line.warning.text('abc ', { l: 10 }).dash.number(123.34, { l: 5, r: 5 }).end

log.line.red.text('abc', { l: 10, r: 5 }).dash.number(123.1, { l: 7, r: 2 }).end

log.level(3)

log.line.success.text(1, { l: 4 }).tab.text('test 123', { r: 20 }).tab.object({ a: 1, b: 2 }).tab.object([1, 2, 3]).end
log.line.error.text(2, { l: 4 }).tab.text('test 123', { r: 20 }).tab.object({ a: 1, b: 2 }).tab.object([1, 2, 3]).end
log.line.text(1, { l: 4 }).tab.text('test 123', { r: 20 }).tab.object({ a: 1, b: 2 }).tab.object([1, 2, 3]).end

// log.line
// 	.info('23', { l: 5 }).tab
// 	.success('success').warning('warning').error('error')
// 	.object({ a: 1, b: 2 }).number(12.54).number('123')
// 	.end


// log.line.success.text().number().object().end