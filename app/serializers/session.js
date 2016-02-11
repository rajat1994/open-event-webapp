import Ember from 'ember';
import DS    from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse (store, primaryModel, payload, id, requestType) {
    const sessions = payload.sessions.map((session) => {
      const begin    = new Date(session.begin);
      const beginHrs = begin.getHours() > 12 ? begin.getHours() - 12 : begin.getHours();
      const bTime    = begin.getHours() >= 12 ? 'PM' : 'AM';

      const end    = new Date(session.end);
      const endHrs = end.getHours() > 12 ? end.getHours() - 12 : end.getHours();
      const eTime  = end.getHours() >= 12 ? 'PM' : 'AM';

      session.date = begin.toDateString();

      session.startTime = `${beginHrs}:${begin.getMinutes()} ${bTime}`;
      session.endTime = `${endHrs}:${end.getMinutes()} ${eTime}`;

      return session;
    });

    return this._super(store, primaryModel, sessions, id, requestType);
  }
});
