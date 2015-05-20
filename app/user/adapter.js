import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  find: function(store, type, id, snapshot) {
    return Ember.$.getJSON(`https://api.github.com/users/${id}`)
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
