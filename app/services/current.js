import Service from '@ember/service';

import { computed } from '@ember/object';

export const NICKNAME_KEY = 'user:nickname';

export default Service.extend({
  nickname: computed({
    get() {
      return localStorage.getItem(NICKNAME_KEY);
    },

    set(_, newNickName) {
      localStorage.setItem(NICKNAME_KEY, newNickName);

      return newNickName;
    }
  }),
});
