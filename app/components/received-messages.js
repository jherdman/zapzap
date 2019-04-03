import Component from '@ember/component';

import { computed } from '@ember/object';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

export default Component.extend({
  roomChannel: service(),

  shittyStore: service(),

  didInsertElement() {
    this._super(...arguments);

    this.roomChannel.backfillMessages();
  },

  mostRecentMessageSentAt: readOnly('roomChannel.mostRecentMessageSentAt'),

  messages: computed('mostRecentMessageSentAt', function() {
    return this.shittyStore.listItems('message');
  }),
});
