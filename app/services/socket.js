import PhoenixSocket from 'ember-phoenix/services/phoenix-socket';

export default PhoenixSocket.extend({
  init() {
    this._super(...arguments);

    this.on('open', () => {
      console.log('OPENED CONNECTION');
    });

    this.on('error', () => {
      console.error('ERROR:', arguments);
    });

    this.on('close', () => {
      console.warn('CLOSED CONNECTION');
    });
  },
});
