let xfar = require('xfarr-api')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text }) => {
    if (!text) throw 'Masukkan Link\n\nContoh: .fb https://facebook.com/xxxxxx'
  let res = await xfar.Facebook(text)
m.reply('*Tunggu Sebentar...*')
conn.sendFile(m.chat,res.medias[1].url, 'fb.mp4', `Tittle: ${res.tittle}
Link Video: ${res.url}
`, m)

}
handler.help = ['fb2 <url>', 'facebook2 <url>']
handler.tags = ['downloader']
handler.command = /^fb2|facebook2$/i


module.exports = handler
