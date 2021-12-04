mport { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}kacchan`,
		        dm: true,
                        aliases: ['yo']
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const zerotwo = 
			"https://c.tenor.com/dE_Ph_z5kz0AAAPo/anime-pink-hair.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: zerotwo },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `ooh`,
			}
		);
	};
}
