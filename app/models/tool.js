import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  released: DS.attr('date'),
  initial_commit: DS.attr('date'),
  type: DS.attr('string'),
  description: DS.attr('string'),
  active_development: DS.attr('boolean')
});
