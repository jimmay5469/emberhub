import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function(store, primaryTypeClasss, payload, recordId) {
    payload = { user: payload };
    return this._super(store, primaryTypeClasss, payload, recordId);
  },
  normalize: function(typeClass, hash, prop) {
    hash = {
      id: hash.login,
      login: hash.login,
      avatarUrl: hash.avatar_url,
      links: {
        repositories: hash.repos_url
      }
    };
    return this._super(typeClass, hash, prop);
  }
});
