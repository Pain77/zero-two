/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "help3",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}zerotwo`,
		        dm: true,
                        aliases: ['h3','?3','well3','menu3']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/KslZTP0KezsAAAPo/zero-two-beach.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `━━❰•𝙂𝙚𝙣𝙚𝙧𝙖𝙡•❱━━
🏮 ${this.client.config.prefix}admins 
🏮 ${this.client.config.prefix}exp 
🏮 ${this.client.config.prefix}hi 
🏮 ${this.client.config.prefix}grouplink 
🏮 ${this.client.config.prefix}mods 
🏮 ${this.client.config.prefix}profile 
🏮 ${this.client.config.prefix}zerotwo 
🏮 ${this.client.config.prefix}info 
🏮 ${this.client.config.prefix}rank
───────────
🎗 ɴᴏᴛᴇ: ᴜꜱᴇ ${this.client.config.prefix}ʜᴇʟᴘ <ᴄᴏᴍᴍᴀɴᴅ_ɴᴀᴍᴇ> ᴛᴏ ᴠɪᴇᴡ ᴛʜᴇ ᴄᴏᴍᴍᴀɴᴅ ɪɴꜰᴏ.
───────────    
    `,
			}
		);
	};
}
