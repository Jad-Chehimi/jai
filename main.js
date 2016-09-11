const Discord = require("discord.js");
const jai = new Discord.Client();
jai.login("MjIyMDg0NjA2MDEzMjEwNjI1.Cq4SdQ.T_1d19Qeb5V3dH7BZNGrkz54tGA");

jai.on("message", function(message){/////////////////////////////////////
  "use strict";
    //Variables
    var msg = message.cleanContent.toLowerCase();
    var args = msg.split(" ");
    var rng = 1;
    var d = function(str){
      console.log(" [Jai] DEBUG: " + str);
    }
    var say = function(str){
        message.channel.sendMessage(":gear: " + str)
    }
    var shuffle = function(am){
        rng = Math.floor((Math.random() * am) + 1);
    }

    //Code
    if( (msg.startsWith("@jai") || msg.startsWith("jai") || msg.startsWith("j") || msg.startsWith("jadjai")) ){



    }
	
});//////////////////////////////////////////////////////////////////////
