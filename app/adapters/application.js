import DS  from 'ember-data';
import ENV from 'open-event-webapp/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.API_HOST,
  namespace: ENV.API_NAMESPACE
});
