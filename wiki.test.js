import wiki from './wiki.js';
// wiki.search('de', 'telgte').then(x => console.log('wiki.search', x))

let box = await wiki.box('de','Acetylsalicylsäure', 'Infobox Chemikalie', {lowerCaseKeys:true,alphaNumericalKeys:true})

console.log('box',box)