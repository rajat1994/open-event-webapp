import Ember from 'ember';
import DS    from 'ember-data';

export default DS.JSONSerializer.extend({
  keyForAttribute (attr) {
    return Ember.String.underscore(attr);
  },

  normalizeResponse (store, primaryModel, payload, id, requestType) {
    return this._super(store, primaryModel, payload.sessions, id, requestType);
  }
});
