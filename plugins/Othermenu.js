let handler = async m => m.reply(`

❏ *OTHER MENU KIMMY BOT MD*

 *❏ R P G - A B S E N*
≻ %pdaily
≻ %pgethadiah
≻ %phadiah
≻ %pmonthly
≻ %pweekly


 *❏ R P G - M E N U*
≻ %padventure
≻ %ppull <jumlah>
≻ %ppullall
≻ %patm <jumlah>
≻ %patmall
≻ %pberkebon
≻ %pfeed [pet type]
≻ %popen <crate>
≻ %pheal
≻ %pinv
≻ %pkolam
≻ %pleaderboard [jumlah user]
≻ %pmembunuh *@tag*
≻ %pmeracik [type]
≻ %pmerampok *@tag*
≻ %pmulung
≻ %pnambang
≻ %pnebang
≻ %pramuan [pet type]
≻ %pshop <sell|buy> <args>
≻ %pshopfish <sell|buy> <args>
≻ %ptransfer


 *❏ G A M E S - M E N U*
≻ %pasahotak
≻ %pcaklontong
≻ %pdelttt
≻ %pdungeon [nama room]
≻ %pfamily100
≻ %pfighting
≻ %phunter
≻ %ppancing <type>
≻ %piqtest
≻ %pjudi <jumlah>
≻ %plengkapikalimat
≻ %pmath <mode>
≻ %psiapakahaku
≻ %psuit
≻ %psuitpvp @tag
≻ %psusunkata
≻ %ptebakanime
≻ %ptebakbendera
≻ %ptebakgambar
≻ %ptebakgame
≻ %ptebakkata
≻ %ptebakkimia
≻ %ptebaklagu
≻ %ptebaklirik
≻ %ptekateki
≻ %ptictactoe [custom room name]
≻ %pttt [custom room name]


 *❏ EXP & L I M I T*
≻ %pbuy <jumlah limit>
≻ %pbuyall
≻ %pcupon [@user]
≻ %pdompet [@user]
≻ %pexp [@user]
≻ %plevelup
≻ %plimit [@user]


 *❏ F U N - M E N U*
≻ %palay
≻ %partinama [name]
≻ %palay
≻ %pdare
≻ %pdarkjokes
≻ %phalah <teks>
≻ %philih <teks>
≻ %phuluh <teks>
≻ %pheleh <teks>
≻ %pholoh <teks>
≻ %pjadian
≻ %pnamaninja <teks>
≻ %prate
≻ %psimi <teks>
≻ %pmy <teks>
≻ %pkimy <teks>
≻ %ptaugasih
≻ %ptruth

 *❏ K E R A N G - M E N U*
≻ %papakah <teks>?
≻ %pkapan <text>?
≻ %pkapankah <text>?
≻ %psiapa <teks>
≻ %psiapakah <teks>

 *❏ P A C A R A N*
≻ %pcekpacar
≻ %pikhlasin
≻ %pputus
≻ %ptembak *@tag*
≻ %pterima *@tag*
≻ %ptolak *@tag*

 *❏ M A I N - M E N U*
≻ %pafk [alasan]
≻ %pceksn
≻ %pmenu
≻ %pref
≻ %pdaftar <nama>%p<umur>
≻ %psewa
≻ %punreg <SERIAL NUMBER>


 *❏ Q U O T E S*
≻ %pquotesanime
≻ %pbucin
≻ %pkata <opsi>
≻ %ppantun
≻ %pquotes

_*Simple WhatsApp bot By Fardev*_

`.trim()) // Tambah sendiri kalo mau
handler.help = ['other']
handler.tags = ['main']
handler.command = /^oth(er|te)$/i

module.exports = handler