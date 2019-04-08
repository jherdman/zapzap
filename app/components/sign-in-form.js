import Component from '@ember/component';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { signIn } from '../actions/nicknames';

const SignInForm = Component.extend({
  classNames: 'bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4',

  roomChannel: service(),

  nickname: undefined,

  //tryToJoinAndConnect() {
  //  let { nickname } = this;

  //  this.roomChannel.connect();
  //  this.roomChannel.join(nickname);
  //},

  //didInsertElement() {
  //  this._super(...arguments);

  //  this.tryToJoinAndConnect();
  //},
});

const dispatchToActions = {
  signIn,
};

export default connect(null, dispatchToActions)(SignInForm);
