import Component from '@ember/component';

import { computed } from '@ember/object';

export default Component.extend({
  classNames: 'bg-grey-lightest border-2 border-grey border-solid ember-view p-4 rounded shadow mb-4',

  classNameBindings: [
    'isSentToSelf:bg-blue-lightest:bg-green-lightest',
  ],

  didRender() {
    this.element.scrollIntoView();
  },

  isSentToSelf: computed('nickname', 'from', function() {
    let {
      from,
      nickname,
    } = this;

    return from === nickname;
  }),

  localSentAt: computed('sentAt', function() {
    return new Date(`${this.sentAt}Z`);
  }),

  fancyPantsBody: computed('body', 'isSentToSelf', 'nickname', function() {
    let {
      body,
      isSentToSelf,
      nickname,
    } = this;

    if (isSentToSelf) {
      return body;
    } else {
      return body
        .replace(nickname, '<b class="font-semibold">$&</b>')
        .htmlSafe();
    }
  }),
});
