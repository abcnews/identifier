#util-identifier

Get an identifier function to assist in generating classes, etc.

```
var identifier = require('util-identifier')('MyThing');

identifier('component'); // 'MyThing-component'
identifier('component', 'state'); // 'MyThing-component--state'
identifier('component', 'state', '.'); // '.MyThing-component--state'
identifier('component', null, '.'); // '.MyThing-component'
```

Test
----

```
npm test
```
