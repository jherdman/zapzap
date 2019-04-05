import Component from '@ember/component';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

export default Component.extend({
  tagName: 'form',

  classNames: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',

  current: service(),

  roomChannel: service(),

  nickname: readOnly('current.nickname'),

  //tryToJoinAndConnect() {
  //  let { nickname } = this;

  //  this.roomChannel.connect();
  //  this.roomChannel.join(nickname);
  //},

  submit(event) {
    event.preventDefault();
    event.stopPropagation();

    //this.tryToJoinAndConnect();

    this.onSubmit();
  },

  //didInsertElement() {
  //  this._super(...arguments);

  //  this.tryToJoinAndConnect();
  //},

  actions: {
    updateNickname(newNickname) {
      this.set('current.nickname', newNickname);
    },
  },
});
