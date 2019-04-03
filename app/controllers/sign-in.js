import Controller from '@ember/controller';

import { inject as service } from '@ember/service';

export default Controller.extend({
  roomChannel: service(),

  actions: {
    afterJoin() {
      this.transitionToRoute('feed');
    },
  },
});
