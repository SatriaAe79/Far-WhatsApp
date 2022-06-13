let handler = async (m, { conn, text }) => {

    conn.sendMessage(m.chat, {
          react: {
            text: `${pickRandom(['😨','😅','😂','😳','😎', '🥵', '😱', '🐦', '🙄', '🐤','🗿','🐦','🤨','🥴','😐','🫣','😔', '🫡','⏳'])}`,
            key: m.key,
          }})
  
  }
handler.customPrefix = /(.menu|memek|kontol|ajg|anjing|.s|p|.play|i)?c?(o|i)?(t|d)?|wibu|p(a)?nt(e)?k|fahri|owner)/i
handler.command = new RegExp
  
handler.mods = false

module.exports = handler

  function pickRandom(list) {
     return list[Math.floor(Math.random() * list.length)]
  }