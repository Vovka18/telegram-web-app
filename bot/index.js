const TelegramBot = require('node-telegram-bot-api');

// https://t.me/testWalletScreen_bot
const token = '7654538117:AAEw9CCZ2-ilm8-Brn581MhrjrLTwTV5dzs';
const webAppUrl = 'https://30f6-46-150-92-199.ngrok-free.app/';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'app', {
    reply_markup: {
        inline_keyboard:[
            [{text: 'Open', web_app: {url: webAppUrl}}]
        ]
    }
  });
});