let handler = async m => m.reply(`

❏ *OTHER MENU KIMMY BOT MD*

 *❏ R P G - A B S E N*
≻ .daily
≻ .gethadiah
≻ .hadiah
≻ .monthly
≻ .weekly


  *❏ R P G - M E N U*
≻ .adventure
≻ .pull <jumlah>
≻ .pullall
≻ .atm <jumlah>
≻ .atmall
≻ .berkebon
≻ .feed [pet type]
≻ .open <crate>
≻ .heal
≻ .inv
≻ .kolam
≻ .leaderboard [jumlah user]
≻ .membunuh *@tag*
≻ .meracik [type]
≻ .merampok *@tag*
≻ .mulung
≻ .nambang
≻ .nebang
≻ .ramuan [pet type]
≻ .shop <sell|buy> <args>
≻ .shopfish <sell|buy> <args>
≻ .transfer


 *❏ G A M E S - M E N U*
≻ .asahotak
≻ .caklontong
≻ .delttt
≻ .dungeon [nama room]
≻ .family100
≻ .fighting
≻ .hunter
≻ .pancing <type>
≻ .iqtest
≻ .judi <jumlah>
≻ .lengkapikalimat
≻ .math <mode>
≻ .siapakahaku
≻ .suit
≻ .suitpvp @tag
≻ .susunkata
≻ .tebakanime
≻ .tebakbendera
≻ .tebakgambar
≻ .tebakgame
≻ .tebakkata
≻ .tebakkimia
≻ .tebaklagu
≻ .tebaklirik
≻ .tekateki
≻ .tictactoe [custom room name]
≻ .ttt [custom room name]


 *❏ EXP & L I M I T*
≻ .buy <jumlah limit>
≻ .buyall
≻ .cupon [@user]
≻ .dompet [@user]
≻ .exp [@user]
≻ .levelup
≻ .limit [@user]


 *❏ F U N - M E N U*
≻ .alay
≻ .artinama [name]
≻ .alay
≻ .dare
≻ .darkjokes
≻ .halah <teks>
≻ .hilih <teks>
≻ .huluh <teks>
≻ .heleh <teks>
≻ .holoh <teks>
≻ .jadian
≻ .namaninja <teks>
≻ .rate
≻ .simi <teks>
≻ .my <teks>
≻ .kimy <teks>
≻ .taugasih
≻ .truth

 *❏ K E R A N G - M E N U*
≻ .apakah <teks>?
≻ .kapan <text>?
≻ .kapankah <text>?
≻ .siapa <teks>
≻ .siapakah <teks>

 *❏ P A C A R A N*
≻ .cekpacar
≻ .ikhlasin
≻ .putus
≻ .tembak *@tag*
≻ .terima *@tag*
≻ .tolak *@tag*

 *❏ M A I N - M E N U*
≻ .afk [alasan]
≻ .ceksn
≻ .menu
≻ .ref
≻ .daftar <nama>.<umur>
≻ .sewa
≻ .unreg <SERIAL NUMBER>


 *❏ Q U O T E S*
≻ .quotesanime
≻ .bucin
≻ .kata <opsi>
≻ .pantun
≻ .quotes

_*Simple WhatsApp bot By Fardev*_

`.trim()) // Tambah sendiri kalo mau
handler.help = ['other']
handler.tags = ['main']
handler.command = /^oth(er|te)$/i

module.exports = handler