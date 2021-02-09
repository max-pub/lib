import './raw.js';
console.log('toTitleCase', 'crazy SHIT <b>big</b> mAn'.toTitleCase())
console.log('toCamelCase', 'crazy SHIT <b>BIG</b> mAn'.toCamelCase())
console.log('toCamelCase', 'crazy SHIT <b>BIG</b> mAn'.removeTags().toCamelCase())
console.log('findGroups', "{{ATC|N02|BA01}} {{ATC|B01|AC06}} {{ATC|A01|AD05}}".findGroups(/{{(.*?)}}/g))
console.log('blocks',`jewfasdf\r\n\r\nfajsdkadgf\nafsd\rfsadf\r\rasdjfkasdf`.blocks.map(x=>x.lines))