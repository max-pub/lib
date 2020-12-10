# various javascript libraries

## wiki.js
```javascript
await wiki('de').page('Acetylsalicylsäure').languages() // -> [  hi: "एस्पिरिन", hr: "Acetilsalicilna kiselina", ...]
await wiki('de').page('Acetylsalicylsäure').box('Infobox Chemikalie') // ->  { PubChem: "2244",  DrugBank: "DB00945", ... }

```