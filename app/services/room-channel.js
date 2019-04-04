import Service, { inject as service } from '@ember/service';

export const SOCKET_URL = 'ws://localhost:4000/socket';

export const CHANNEL_NAME = 'room:lobby';

export const CHANNEL_EVENTS = {
  NEW_MESSAGE: 'new:msg',
  QUERY_MESSAGES: 'query:msgs',
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
      ({ data }) => {
        let newMessage = this.shittyStore.addItem(data);

        this.set('mostRecentMessageSentAt', newMessage.sentAt);

        return newMessage;
      }
    );
  },

  backfillMessages() {
    this.channel.push(CHANNEL_EVENTS.QUERY_MESSAGES)
      .receive(
        'ok',
        ({ data }) => {
          let messages = data
            .map((payload) => {
              return this.shittyStore.addItem(payload);
            })
            .sortBy('sentAt');

          let mostRecentMessage = messages.get('lastObject');

          if (mostRecentMessage) {
            this.set('mostRecentMessageSentAt', mostRecentMessage.sentAt);
          }

          return messages;
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
