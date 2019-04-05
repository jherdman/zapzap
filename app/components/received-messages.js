import Component from '@ember/component';

import { computed } from '@ember/object';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { getMessages } from '../reducers/messages';

import { getMyNickname } from '../reducers/nicknames';

const ReceivedMessages = Component.extend({
  roomChannel: service(),

  //didInsertElement() {
  //  this._super(...arguments);

  //  this.roomChannel.backfillMessages();
  //},

  mostRecentMessageSentAt: readOnly('roomChannel.mostRecentMessageSentAt'),
});

const stateToComputed = state => ({
  messages: getMessages(state),
  nickname: getMyNickname(state),
});

export default connect(stateToComputed)(ReceivedMessages);
