import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, primaryTypeClass, payload) {
    payload = { repositories: payload };
    return this._super(store, primaryTypeClass, payload);
  },
  normalize: function(typeClass, hash, prop) {
    hash = {
      id: hash.full_name,
      fullName: hash.full_name
    };
    return this._super(typeClass, hash, prop);
  }
});
