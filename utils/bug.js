async function bug(message, client, texts, num) {
    try {
        const remoteJid = message.key?.remoteJid;
        await client.sendMessage(remoteJid, {
            image: { url: `database/${num}.jpg` },
            caption: `> ${texts}`,
            contextInfo: {
                externalAdReply: {
                    title: "𝐫𝐞𝐣𝐨𝐢𝐧𝐝𝐫𝐞 𝐥𝐞 𝐜𝐥𝐚𝐧 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈 ",
                    body: " 𓆩 𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃🥀 𓆪 ",
                    mediaType: 1,
                    thumbnailUrl: `https://whatsapp.com/channel/0029Vb6tDtJIN9ighY2YZK1t`,
                    renderLargerThumbnail: false,
                    mediaUrl: `${num}.jpg`,
                    sourceUrl: `${num}.jpg`
                }
            }
        });
    } catch (e) {
        console.log(e);
    }
}

export default bug;