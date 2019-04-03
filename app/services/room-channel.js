import Service, { inject as service } from '@ember/service';

export const SOCKET_URL = 'ws://localhost:4000/socket';

export const CHANNEL_NAME = 'room:lobby';

export const CHANNEL_EVENTS = {
  NEW_MESSAGE: 'new:msg',
};

export default Service.extend({
  shittyStore: service(),

  socket: service(),

  isJoined: false,

  connect() {
    this.socket.connect(SOCKET_URL);
  },

  disconnect() {
    this.channel.leave();
    this.socket.disconnect();

    this.set('isJoined');
  },

  join(nickname) {
    this.channel = this.socket.joinChannel(CHANNEL_NAME, {
      nickname,
    });

    this._registerChannelHandlers();

    this.set('isJoined', true);
  },

  _registerChannelHandlers() {
    this.channel.on(
      CHANNEL_EVENTS.NEW_MESSAGE,
      (payload) => {
        let newMessage = this.shittyStore.addItem(payload);

        this.set('mostRecentMessageSentAt', newMessage.sentAt);

        return newMessage;
      }
    );
  },

  publishMessage(newMessage) {
    this.channel.push(
      CHANNEL_EVENTS.NEW_MESSAGE,
      {
        data: {
          attributes: {
            message: newMessage,
            sentAt: new Date(),
          },
          type: 'message',
        }
      }
    );
  },
});
