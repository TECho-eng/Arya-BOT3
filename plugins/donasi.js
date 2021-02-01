let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Three.    [0895412691100]
│ • Telkomsel [082313021398]
│ • Gopay [0895412691100]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/13312765614
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
