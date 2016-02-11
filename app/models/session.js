import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  abstract: DS.attr(),
  description: DS.attr(),
  startTime: DS.attr(),
  endTime: DS.attr(),
  date: DS.attr(),
  category: DS.attr(),
  venue: DS.attr()
});
