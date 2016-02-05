Mongo.Collection.prototype.attachRefs = function() {
  var This = this;
  This.helpers({
    Ref: function(prefix) {
      if (typeof(prefix) == 'string') {
        var result = {};
        result[prefix+'.collection'] = This._name;
        result[prefix+'.id'] = this._id;
        return result
      } else {
        return { collection: This._name, id: this._id };
      }
    }
  });
};

Refs = function(ref) {
  return Mongo.Collection.get(ref.collection).findOne(ref.id);
};

Refs.Schema = new SimpleSchema({
  collection: {
    type: String
  },
  id: {
    type: String
  }
});