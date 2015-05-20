import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params, transition) {
    return Ember.RSVP.hash({
      user: Ember.$.getJSON(`https://api.github.com/users/${params.userId}`),
      repositories: Ember.$.getJSON(`https://api.github.com/users/${params.userId}/repos`)
    });
  }
});
