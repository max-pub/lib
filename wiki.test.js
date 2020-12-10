import wiki from './wiki.js';
// wiki.search('de', 'telgte').then(x => console.log('wiki.search', x))

// let search = await wiki('de').search('aspirin')
// console.log('search', search)

// let category = await wiki('de').category('ATC-Code')
// let category = await wiki('de').category('Arzneimittel')
// console.log('category', category)


// let languages = await wiki('de').page('Acetylsalicylsäure').languages()
// console.log('languages', languages)


// let box = await wiki('de').page('Acetylsalicylsäure').box('Infobox Chemikalie', { lowerCaseKeys: true, alphaNumericalKeys: true })
let box = await wiki('de').page('Acetylsalicylsäure').box('Infobox Chemikalie')
console.log('box', box)
