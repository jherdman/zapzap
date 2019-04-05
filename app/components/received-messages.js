import Component from '@ember/component';

import { computed } from '@ember/object';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { getMessages } from '../reducers/messages';

const ReceivedMessages = Component.extend({
  roomChannel: service(),

  //shittyStore: service(),

  //didInsertElement() {
  //  this._super(...arguments);

  //  this.roomChannel.backfillMessages();
  //},

  mostRecentMessageSentAt: readOnly('roomChannel.mostRecentMessageSentAt'),

  //messages: computed('mostRecentMessageSentAt', function() {
  //  return this.shittyStore.listItems('message');
  //}),
});

const stateToComputed = state => ({
  messages: getMessages(state),
});

export default connect(stateToComputed)(ReceivedMessages);
