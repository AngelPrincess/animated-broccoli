require('dotenv').config();

const SlackBot = require('slackbots');

const name = 'ARBOTER';
const token = process.env.TOKEN_SLACKBOT;

const myBot = new SlackBot({
    token: token,
    name: name
});

myBot.on('start', function () {
    const channel = 'rocket_lunch'
    const params = { icon_emoji: ':cat:' };
    bot.postMessageToChannel(channel, 'message', params)
    bot.postMessageToUser('Jay Lee', 'message', { slackbot: true, ...params })
})