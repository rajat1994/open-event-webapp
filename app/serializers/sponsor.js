import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse (store, primaryModel, payload, id, requestType) {
    return this._super(store, primaryModel, payload.sponsors, id, requestType);
  }
});
