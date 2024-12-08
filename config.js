const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


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
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_17_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA1LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNixcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICAxODgsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MSxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MixcbiAgICAgICAgMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTAsXG4gICAgICAgIDQwLFxuICAgICAgICA0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA0MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICA4OCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA3NixcbiAgICAgICAgOTMsXG4gICAgICAgIDY4LFxuICAgICAgICA1MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY0LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDg1LFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICA3NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDM4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDM3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDQ1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICA1OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMzksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNDksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjhBeDJ4bHNmMVZkUUJ5NWIySmVONzdzS2pmZDBGRE5tYTlmUXRzV0NnYTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9LZm9yS1dhUTN1NENyazRKejJWNlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiOTBlYTU0NjYtNmJlNS00YmM1LThiZmYtNjUyNGRkYTBiZmFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwNyxcbiAgICAgIDE0NyxcbiAgICAgIDM1LFxuICAgICAgMTE3LFxuICAgICAgOTgsXG4gICAgICAxMTQsXG4gICAgICAyMjgsXG4gICAgICAyNTEsXG4gICAgICAxMTYsXG4gICAgICAxNjAsXG4gICAgICAxMTEsXG4gICAgICAyMjYsXG4gICAgICAzNCxcbiAgICAgIDIxNCxcbiAgICAgIDIzMyxcbiAgICAgIDQwLFxuICAgICAgOTUsXG4gICAgICA1NSxcbiAgICAgIDIwNSxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzLFxuICAgICAgMTY4LFxuICAgICAgMTUyLFxuICAgICAgMTgwLFxuICAgICAgMTY0LFxuICAgICAgODUsXG4gICAgICAyMjgsXG4gICAgICAzMixcbiAgICAgIDEzNixcbiAgICAgIDIwMyxcbiAgICAgIDUxLFxuICAgICAgNDksXG4gICAgICAxMzksXG4gICAgICAxMDIsXG4gICAgICAzMSxcbiAgICAgIDEwOCxcbiAgICAgIDMsXG4gICAgICAxMjAsXG4gICAgICA4NCxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA4VkpDU0tDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMyODU4NDQ2MzU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjM4MDQ5NTY4MjY4NDY3OjM1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01HWmhxNEZFTFNEMUxvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiemFqc04vSHVOTW9CRlBVUmhvSCtnZmVIelJkR3Iya1VKNFNSYmRHRVNUTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0UnA1MnVPQ09ENDI5QURMckNNdGxEN0RvK0lZNUJDRUtudFF3dllCOHFOVHk1a1pzd0RDYisvUU9aY094ZHhjNXhrcm5DalVZc0lnL2NmZjBzWXBDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIrWisyUkJqNGNITFhVTjVVQm9NdXpIdSt4V012SXA1SHg2Z3hZaFhCdGdMajA5c2d4cjdSNms2UUhQRnpDZnN4azFBWVBOVi8xOWtDT1YreEhKYTVEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMyODU4NDQ2MzU6MzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2MjQyNDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBb1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFvWi5qc29uIjogIntcImtleURhdGFcIjpcImM3QjhnS29ESUoxWjUwUXl1bnFOQ2pSZXVuQWxSZmZoWGVxVVVTTDhzVUk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQzODc0Nzg0MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzYyNDE5NTQ2NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


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
