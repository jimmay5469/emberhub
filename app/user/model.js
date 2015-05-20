import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  repositories: DS.hasMany('repository', { async: true })
});
