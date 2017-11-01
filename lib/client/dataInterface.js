function DataInterface() {
  var store = {};

  function getKey(collection, id) {
    if (typeof collection !== 'string') throw 'Invalid document collection!';
    if (typeof id === 'undefined') throw 'Invalid document id!';
    return collection + '.' + id;
  };

  this.delete = function (collection, id) {
    var key = getKey(collection, id);
    delete store[key];
  };

  this.select = function (collection, id) {
    var key = getKey(collection, id);
    return store[key];
  }

  this.write = function (snapshot) {
    var key = getKey(snapshot.collection, snapshot.id);
    store[key] = snapshot;
  }
};

module.exports = DataInterface;
