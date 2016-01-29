Mongo.Collection.prototype.attachRefs = function() {
  var This = this;
  This.helpers({
    Ref: function() {
      return { collection: This._name, id: this._id };
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