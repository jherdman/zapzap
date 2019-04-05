import Component from '@ember/component';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { addMessage } from '../actions/messages';

const NewMessageForm = Component.extend({
  tagName: 'form',

  classNames: 'bg-white px-8 pt-6 pb-8',

  roomChannel: service(),

  submit(event) {
    event.preventDefault();
    event.stopPropagation();

    let { messageToSend } = this;

    //this.roomChannel.publishMessage(messageToSend);

    this.actions.addMessage(messageToSend);

    this.set('messageToSend');
  },

  willDestroyElement() {
    //this.roomChannel.disconnect();
  },

  actions: {
    setNewMessage(newMessage) {
      this.set('messageToSend', newMessage);
    },
  },
});

const dispatchToActions = {
  addMessage,
};

export default connect(null, dispatchToActions)(NewMessageForm);
