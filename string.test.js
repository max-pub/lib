import './string.js';
console.log('toTitleCase', 'crazy SHIT <b>big</b> mAn'.toTitleCase())
console.log('toCamelCase', 'crazy SHIT <b>BIG</b> mAn'.toCamelCase())
console.log('toCamelCase', 'crazy SHIT <b>BIG</b> mAn'.removeTags().toCamelCase())
console.log('findGroups', "{{ATC|N02|BA01}} {{ATC|B01|AC06}} {{ATC|A01|AD05}}".findGroups(/{{(.*?)}}/g))
