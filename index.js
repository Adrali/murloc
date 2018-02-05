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
})

bot.login('NDEwMTM5MDQzNDk4ODE5NjE2.DVpBNA.A9-bYfqv0QPvPRHRTaP0u_pOc9o  ')