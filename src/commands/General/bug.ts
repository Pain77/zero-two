import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
//import { Character } from "mailist";
import request from "../../lib/request";
import { MessageType } from "@adiwajshing/baileys";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'bug',
            dm: true,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      if (!joined) return void (await M.reply(`*Report the bugs*`));
		const pr = joined.trim();
        return void this.client.sendMessage("120363021490891365@g.us",pr, MessageType.text, {quoted:M.WAMessage })
    }
}
