import DS from 'ember-data';

export default DS.Model.extend({
  biography: DS.attr(),
  country: DS.attr(),
  email: DS.attr(),
  facebook: DS.attr(),
  github: DS.attr(),
  linkedin: DS.attr(),
  name: DS.attr(),
  organisation: DS.attr(),
  photo: DS.attr(),
  position: DS.attr(),
  twitter: DS.attr(),
  web: DS.attr()
});
