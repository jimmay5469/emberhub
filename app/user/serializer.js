import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractSingle: function(store, primaryTypeClasss, payload, recordId) {
    payload = {
      user: {
        id: payload.login,
        login: payload.login,
        avatarUrl: payload.avatar_url
      }
    };
    return this._super(store, primaryTypeClasss, payload, recordId);
  }
});
