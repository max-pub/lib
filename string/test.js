import './raw.js';
import test from '../test/raw.js'


test.equal('title case', 'jo MAN waSSup?'.titleCase, 'Jo Man Wassup?')
test.equal('title case', 'jo MAN waSSup?'.camelCase, 'joManWassup')