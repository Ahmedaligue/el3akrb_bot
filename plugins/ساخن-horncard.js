const handler = async (m, {conn}) => {
  const who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
try {
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/horny', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', '*Tu estas Caliente 🥵🔥*', m);
} catch (e) {
console.log(e)}}
handler.help = ['hornycard', 'hornylicense'];
handler.tags = ['maker'];
handler.command = /^(horny(كارد|license))$/i;
handler.limit = 1
handler.register = true
export default handler;
