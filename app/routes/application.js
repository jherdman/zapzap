import Route from '@ember/routing/route';

import { inject as service } from '@ember/service';

export default Route.extend({
  current: service(),

  roomChannel: service(),

  beforeModel() {
    let {
      current: {
        nickname,
      },
    } = this;

    if (nickname) {
      this.roomChannel.connect();
      this.roomChannel.join(nickname);

      this.transitionTo('feed');
    } else {
      return this.transitionTo('sign-in');
    }
  },
});
