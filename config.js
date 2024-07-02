const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/colombo";
global.github=process.env.GITHUB|| "https://github.com/maxboygit/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94761681904";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_06_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgNzksXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY2LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDkxLFxuICAgICAgICA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDY2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc2LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTcsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDg5LFxuICAgICAgICA5NSxcbiAgICAgICAgNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICA1OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MixcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMTI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5MCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDExM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgODksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzLFxuICAgICAgICA2MixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4MixcbiAgICAgICAgNDYsXG4gICAgICAgIDY1LFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDksXG4gICAgICAgIDYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDYzLFxuICAgICAgICA0MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NyxcbiAgICAgICAgMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieG9NUGR1MVBrbHlqc2Y0WlBSeVNUSG9sSXFDZjMzWi84UkFDWkExN0RkOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMEpPSUpsamlURjY1Ui0zSGJUdkJnQVwiLFxuICBcInBob25lSWRcIjogXCI5MTdhYWM1OC00ZjNlLTQ1MzEtODQyYi1kOGRjMjljMzFmMTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzYsXG4gICAgICA0NixcbiAgICAgIDU4LFxuICAgICAgMTIsXG4gICAgICAyMjMsXG4gICAgICAyNTQsXG4gICAgICAxODMsXG4gICAgICAyNTEsXG4gICAgICAyMjIsXG4gICAgICAxOTcsXG4gICAgICAxNDQsXG4gICAgICA1MixcbiAgICAgIDE3MyxcbiAgICAgIDk1LFxuICAgICAgMjMwLFxuICAgICAgMjIzLFxuICAgICAgNzYsXG4gICAgICAxODAsXG4gICAgICAxOTUsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMTkwLFxuICAgICAgMzAsXG4gICAgICAyMDQsXG4gICAgICA4MyxcbiAgICAgIDIyNSxcbiAgICAgIDI0MSxcbiAgICAgIDIyOSxcbiAgICAgIDUsXG4gICAgICAyMCxcbiAgICAgIDIzNixcbiAgICAgIDE4NixcbiAgICAgIDg4LFxuICAgICAgMjEzLFxuICAgICAgMTE5LFxuICAgICAgMTkzLFxuICAgICAgMTUxLFxuICAgICAgNTMsXG4gICAgICAxNjcsXG4gICAgICA3N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQVlFLOEZSWVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTQ3NjE2ODE5MDQ6NTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLhtLnhtL8u0L3OscKi0LrRlNGPXCIsXG4gICAgXCJsaWRcIjogXCIxNDc2OTE0OTM0MTcxOTI6NTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTkhpNmQ0Q0VKUytqN1FHR0NRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZTU9FaFVIbVhWRXVxK2F6M0FhL2h2ams0cms5ZkVpUVU5R3VWd0IxMDN3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkRCZ0lZRm1ra0VFRnowNXd1czJsdTRBQnlRSlZIdm9GSGFYeFZIcTBmYktzbXBkckhta1dEbTdyb3RsYUQ5ME9DUjE3ZHVhMG9wU0RDeEtOVmRSNkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImErcGZRL2FmS0FhTXRFaWpGYTlUK2FBUmFRZmNRS1hEbHM2dTBuRU9WQU9aZnNWc3poR2dpdGJwa2JWeE5vUm5YdHZiM1hZSjZFN1ZEeVVJUTNsNmd3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzYxNjgxOTA0OjU2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk5MTgzNjAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFIeVVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUh5VS5qc29uIjogIntcImtleURhdGFcIjpcIkpVOWhneFYyd1NtSzBjMDVwN01xamhsZUppWHVldW1yTmtxS3pyV0xLcVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzM1NzM2MTQ1LFwiY3VycmVudEluZGV4XCI6MjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMjIsMjMsMjVdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "sathmin🇱🇰",
  packname: process.env.PACK_NAME || "mrs boy",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Sathmi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
