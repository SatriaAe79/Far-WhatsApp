let handler = async m => m.reply(`

*RULES KIMMY BOT*
-JANGAN SPAM BOT
-JANGAN GUNAKAN FUTUR KICK SECARA BERLEBIHAN
-JANGAN TELPON/VC BOT
-JANGAN CHAT BOT UNTUK MINTA SV
*MELANGGAR?* ( *BANED PERMANEN* )

SCRIPT NYA : https://youtu.be/RMixpZRoDOk
Jangan lupa like nya
Donasi
 • 083168004413 dana/gopay/Ovi
 • 083811034750 Pulsa [Axis]
 • 0896-5436-0447 [pulsa]

`.trim()) // Tambah sendiri kalo mau
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
