const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('ready',function () {
    bot.user.setGame('Mrgrgl').catch(console.error)
})

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
    if (message.content === 'tic') {
        message.reply('tac !')
    }
    if (message.content === 'nyd') {
        message.reply('pourrite !')
    }
})

bot.login(process.env.TOKEN)
