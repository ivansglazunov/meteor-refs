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
var a = Collection.findOne('a');
var ref = a.Ref(); // { id: 'a', collection: 'collection' }
Refs(ref); // { _id: 'a' } }
```

## Prefix

```js
Collection.insert({ _id: 'a' });
var a = Collection.findOne('a');
Collection.insert({ _id: 'b', _source: a.Ref() });
var ref = a.Ref('_source'); // { '_source.id': 'a', '_source.collection': 'collection' }
Collection.findOne(ref); // { { _id: 'b', _source: { id: 'a', collection: 'collection' } } }
a.Ref('other.field'); // { 'other.field.id': 'a', 'other.field.collection': 'collection' }
```

## Versions

### 0.0.1
* Added prefix to `document.Ref`