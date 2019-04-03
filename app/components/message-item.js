import Component from '@ember/component';

import { computed } from '@ember/object';

//import moment from 'moment';

export default Component.extend({
  classNames: 'bg-grey-lightest border-2 border-grey border-solid ember-view p-4 rounded shadow mb-4',

  localSentAt: computed('sentAt', function() {
    return new Date(`${this.sentAt}Z`);
  }),
});
