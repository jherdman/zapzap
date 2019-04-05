import Component from '@ember/component';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { signIn } from '../actions/nicknames';

const SignInForm = Component.extend({
  tagName: 'form',

  classNames: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',

  current: service(),

  roomChannel: service(),

  nickname: undefined,

  //tryToJoinAndConnect() {
  //  let { nickname } = this;

  //  this.roomChannel.connect();
  //  this.roomChannel.join(nickname);
  //},

  submit(event) {
    event.preventDefault();
    event.stopPropagation();

    let { nickname } = this;

    this.actions.signIn(nickname);

    //this.tryToJoinAndConnect();

    this.onSubmit();
  },

  //didInsertElement() {
  //  this._super(...arguments);

  //  this.tryToJoinAndConnect();
  //},
});

const dispatchToActions = {
  signIn,
};

export default connect(null, dispatchToActions)(SignInForm);
