import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'gender',
            description: 'ik it will fail.',
            aliases: ['trans'],
            category: 'fun',
            usage: `${client.config.prefix}zerotwo (text)`
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void M.reply('Enter The Name Darling')
        const chitoge = joined.trim()
        await axios.get(`https://api.genderize.io/?name=${chitoge}+name`)
        .then((response) => {
                // console.log(response);
                const text = `${data.name} is ${data.gender} with ${data.probability} probability`
                M.reply(text);
            }).catch(err => {
                M.reply(`Enter The Name Darling`)
            }
            )
    };
}
