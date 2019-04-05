import Component from '@ember/component';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { addMessage } from '../actions/messages';

import { getMyNickname } from '../reducers/nicknames';

const NewMessageForm = Component.extend({
  tagName: 'form',

  classNames: 'bg-white px-8 pt-6 pb-8',

  roomChannel: service(),

  submit(event) {
    event.preventDefault();
    event.stopPropagation();

    let {
      nickname: from,
      messageToSend: body,
    } = this;

    //this.roomChannel.publishMessage(messageToSend);

    this.actions.addMessage({
      from,
      body,
      sentAt: new Date(),
    });

    this.set('messageToSend');
  },

  willDestroyElement() {
    //this.roomChannel.disconnect();
  },
});

const stateToComputed = state => ({
  nickname: getMyNickname(state),
});

const dispatchToActions = {
  addMessage,
};

export default connect(stateToComputed, dispatchToActions)(NewMessageForm);
