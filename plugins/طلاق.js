let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)},  وش رأيك في ثالثة😂*
*${toM(b)},*متزعليش اتزعلي 😂
╯────────────────⟢ـ
\n\*هجوزك  مارك وش رأيك*
╯────────────────⟢ـ`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['الطلاق','طلاق']
handler.group = true
export default handler

