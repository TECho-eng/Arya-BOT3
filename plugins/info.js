let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Dibuat dengan javascript via NodeJs,Ffmpeg,dan ImageMagick

Rec: Drawl Nag
Script: @Sadboy.Edtz
Github: 
https://github.com/B4MBANG-94NT3NG/BTR-BOT

*Sosmed :*
Kritik kami di sosmed ataupun YouTube.
Instagram: @Sadboy.Edtz
➥ YouTube:
youtube.com/BTRChannel

*Thanks To :*
AllahSwt
Orang Tua
Indihome
Dan kawan yang lain :)

╠═〘 DONASI 〙 ═
╠➥ Thre: 0895-4126-91100
╠➥ Tsel: 0823-1302-1398
╠➥ Indosat: 0858-6612-1929
║>Request? Wa.me/13312765614
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

