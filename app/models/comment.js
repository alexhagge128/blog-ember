import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  message: DS.attr(),
  date: DS.attr(),
  post: DS.belongsTo('post', {async: true})
});
