const Discord = require('discord.js')
const bot = new Discord.Client()
var prefix = 'm.'
var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
var Document

bot.on('ready',function () {
    bot.user.setGame('Mrgrgl').catch(console.error)
})

bot.on('message', message => {
    if (message.content === prefix + 'ping') {
      message.reply('pong !')
    }
    if (message.content === prefix + 'tic') {
        message.reply('tac !')
    }
    if (message.content === 'nyd') {
        message.reply('pourrite !')
    }
    if (message.content === prefix + 'festin') {
        Document=fileSystem.OpenTextFile("Ce_qu_il_faut pour_un_bon_repas.txt", 1 ,true);
        message.channel.send(Document.ReadAll())
    }
    if (message.content === prefix + 'merde') {
        message.channel.send('!play https://www.youtube.com/watch?v=KyXW64L-XZA')
    }
})

bot.login(process.env.TOKEN)
