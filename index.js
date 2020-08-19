//config
var config = require('config');
console.log("NODE_ENV=%s", process.env.NODE_ENV);

//discord js
const Discord = require('discord.js')
const client = new Discord.Client()

//express
const mysql = require('mysql');
const mysql_setting = {
  host: config.MYSQL_SET_H,
  user: config.MYSQL_SET_U,
  password: config.MYSQL_SET_P,
  database: config.MYSQL_SET_D
}

client.on('ready', () => {
  console.log(`${client.user.username} でログインしています。`)
})

client.on('messageReactionAdd', async (reaction, user) => {
  //discord channel_id
  const channel_id = 'channel_id';
  if (channel_id == 'xxxxx') {
    //message content
    const content = 'content';
    //reaction user id
    const user_id = 'user_id';

    //insert param
    const post = { 
      'content': content,
      'reaction_user_id': user_id
    };

    // insert
    const connection = mysql.createConnection(mysql_setting);
    connection.connect();
    connection.query('INSERT INTO name SET ?', post, function (error, results, fields) {
      if (error) throw error;
      res.redirect('./');
      console.log('ID:', results.insertId);
    });
    console.log(`${reaction.message.guild} で ${user.tag} が ${reaction.emoji.name} をリアクションしました`)
  }
})

client.on('message', async msg => {
  if (msg.content === '!user') {
    console.log('test');
  }
})

client.login(config.BOT_TOKEN)
