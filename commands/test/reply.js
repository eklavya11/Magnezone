const {Command} = require('awesome-commando');

module.exports = class ReplyCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'reply',
      group: 'test',
      memberName: 'reply',
      description: 'Replies with a message.',
      examples: ['reply'],
      guildOnly: true
    });
  }

  run (msg) {
    return msg.say('Hi, I\'m awake!');
  }
};