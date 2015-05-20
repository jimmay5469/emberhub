import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://api.github.com',
  find: function(store, type, id, snapshot) {
    return this._super(store, type, id, snapshot)
    .then(function(data) {
      return {
        user: {
          id: data.login,
          login: data.login,
          avatarUrl: data.avatar_url
        }
      };
    });
  }
});
