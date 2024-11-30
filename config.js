const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_57_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDQ1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDc5LFxuICAgICAgICA3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OCxcbiAgICAgICAgNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODUsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjQyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA0OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA1NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI5LFxuICAgICAgICA1OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNDIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDMwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzMixcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRHBDMElKZDUwbXN1clNJY2dlVUEzRUE4S0g2cnFvT3JpUEVoNnQ5Y3QvST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTUh3WHBRUDVTS1cwLXJjTFNCMW10QVwiLFxuICBcInBob25lSWRcIjogXCI5OTEyNmU0ZS0yY2VhLTQ1NDMtYTA0Ni1hNGMxOWM4NWQzNjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA1LFxuICAgICAgNzQsXG4gICAgICA2MyxcbiAgICAgIDIyNixcbiAgICAgIDE4MixcbiAgICAgIDYzLFxuICAgICAgMSxcbiAgICAgIDExNCxcbiAgICAgIDc3LFxuICAgICAgMTMzLFxuICAgICAgMTI0LFxuICAgICAgMjQyLFxuICAgICAgMjAxLFxuICAgICAgNDEsXG4gICAgICA1MCxcbiAgICAgIDEzMyxcbiAgICAgIDU1LFxuICAgICAgMjQwLFxuICAgICAgNTgsXG4gICAgICAzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxMjksXG4gICAgICAyMTcsXG4gICAgICA0LFxuICAgICAgMzUsXG4gICAgICAzNixcbiAgICAgIDgyLFxuICAgICAgMjI5LFxuICAgICAgMzksXG4gICAgICA5OCxcbiAgICAgIDIxLFxuICAgICAgNCxcbiAgICAgIDE2NCxcbiAgICAgIDQ1LFxuICAgICAgMzYsXG4gICAgICAyMDYsXG4gICAgICAzOSxcbiAgICAgIDIyLFxuICAgICAgNTksXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0UUxSUVlGN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM3NjczODA1MjA4OjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ09WRU5BTlQgUFJPU1BFUlwiLFxuICAgIFwibGlkXCI6IFwiMTA0MjczMjMyODAyMDA5OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0piMnY2Z0NFT21IcmJvR0dCa2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQXMxSUh1OUlnVDk5TlRFQWs1M0dobWVCL2xEemN4Zm5mdTc1OW85K2Yzbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPNEJyTFNNTEpvMGxxWERSMnJnb2dVM3ZsNnlsbFVIa1dJMWJzcVdBZ2ZKMXhPcnpPWkhBenZ1YVpnZjRISEtGNTllb3kwTU0yVThFR29iNjVqaENBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXbVFFdU5iRFRxbmUxMWhnUnFlVGsyMUI4UjNCZzJjREtWOEZvc2JyMDNsM3hhbEVSZ0k5WXd5L1NxYlFoTEcrTmJzUjd3N1RyMERUR3UrSlQ3MGtqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzc2NzM4MDUyMDg6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI5ODU4MzgsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMaVdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxpVy5qc29uIjogIntcImtleURhdGFcIjpcInowM2lsWnJxU3pKczF4c1U1bUJrVkRrdEpMV2ZqRndyQlhKTCtHcFR4M0U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjIxODA0MzEwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "3.0.2-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "PROTECH-XMD",
  ownername:process.env.OWNER_NAME|| "X-MASS",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
