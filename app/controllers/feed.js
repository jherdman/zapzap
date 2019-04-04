import Controller from '@ember/controller';

import { readOnly } from '@ember/object/computed';

import { inject as service } from '@ember/service';

export default Controller.extend({
  current: service(),

  nickname: readOnly('current.nickname'),
});
