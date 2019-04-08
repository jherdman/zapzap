import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

import { connect } from 'ember-redux';

import { getMyNickname } from '../reducers/nicknames';

const Application = Route.extend({
  roomChannel: service(),

  beforeModel() {
    if (this.nickname) {
      //this.roomChannel.connect();
      //this.roomChannel.join(nickname);

      return this.transitionTo('feed');
    } else {
      return this.transitionTo('sign-in');
    }
  },
});

const stateToComputed = state => ({
  nickname: getMyNickname(state),
});

export default connect(stateToComputed)(Application);
