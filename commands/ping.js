import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 Akatsuki Bot Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `𝐀𝐊𝐀𝐓𝐒𝐔𝐊𝐈_𝐌𝐃🥀`
        )
    }, { quoted: message })
}