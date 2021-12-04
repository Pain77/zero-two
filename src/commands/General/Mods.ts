/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "mods",
			description: "Generally used to check if bot is Up",
			category: "general",
            usage: `${client.config.prefix}mods`,
            dm: true,
            aliases: ['moderators', 'mod', 'owner'],
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const kacchan =
			"https://c.tenor.com/KvfvoRnys6UAAAPo/anime-zero-two.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: kacchan },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `🎗 ᴍᴏᴅᴇʀᴀᴛᴏʀꜱ \n╰• ᴡᴇʟʟ300/>
                                          🎀 ᴄᴏɴᴛᴀᴄᴛ🎗: wa.me/917842346461?text=𝙝𝙚𝙡𝙡𝙤
                                          ──────────────
                                          ╰• ᴘᴀɪɴ
                                          🎀 ᴄᴏɴᴛᴀᴄᴛ🎗: wa.me/919662713165?text=𝙝𝙚𝙡𝙡𝙤
                                          ──────────────
                                          ╰• ʟᴏʀᴅ ʀᴀᴋᴇꜱʜ
                                          🎀 ᴄᴏɴᴛᴀᴄᴛ🎗: wa.me/918473956301?text=𝙝𝙚𝙡𝙡𝙤
                                          ──────────────
                                          ╰• ʙʟᴀᴢᴇ
                                          🎀 ᴄᴏɴᴛᴀᴄᴛ🎗: wa.me/917721059975?text=𝙝𝙚𝙡𝙡𝙤
                                          ──────────────────
                                          🅂🅄🄿🄿🄾🅁🅃 🄶🅁🄾🅄🄿
                                        
                                          🎗 https://chat.whatsapp.com/JboXSiHnBLBLE9cJ5Ai8ur
                                          ──────────────────
                                          ──────────────────`,
			}
		);
	};
}
