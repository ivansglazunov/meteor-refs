# Refs

```
meteor add ivansglazunov:refs
```

I recommend using with the package `ivansglazunov:trees`.

## Schema

```js
{
	id: String,
	collection: String
}
```

## SimpleSchema

```js
Refs.Schema
```

## Attach

```js
var Collection = new Mongo.Collection('collection');
Collection.attachRefs();
```

## Documents

```js
Collection.insert({ _id: 'a' });
var document = Collection.findOne('a');
var ref = document.Ref(); // { id: 'a', collection: 'collection' }
Refs(ref); // { _id: 'a' } }
```