/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help9",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}help9`,
		        dm: true,
                        aliases: ['h9','?9','well9','menu9']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/7ZzPY3wgX_4AAAPo/zero-two-002.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `━━❰•𝙇𝙤𝙜𝙤•❱━━
🌫️ ${this.client.config.prefix}ʙʟᴀᴄᴋᴘɪɴᴋ

───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
