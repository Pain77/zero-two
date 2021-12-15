/** @format */

import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from 'axios'

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "news",
			aliases: ["ns"],
			description: "Gives you the info of the given element. ",
			category: "educative",
			usage: `${client.config.prefix}element [name/number/symbol]`,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
   const q: any = joined.trim();
     var newT = q || `anime`
      var animeNews = await axios.get(`https://newsapi.org/v2/everything?q=${newT}&apiKey=b5ed04ca0d874ea0b6fabc72ec47539f`)
      var kik = animeNews.articles
      var nKik = kik[Math.floor(Math.random() * kik.length )]
  const cp=`*TITLE : ${nKik.title}*\n*DESCRIPTION* : ${nKik.description}\n*CONTENT* : ${nKik.content} `
    return void M.reply(cp)
    }
}
