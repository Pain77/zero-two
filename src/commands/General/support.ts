import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['sp'],
            description: 'Get the support group link',
            category: 'general',
            usage: `${client.config.prefix}invite`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
      let imagee = await this.client.assets.get('supp')
        await this.client.sendMessage(
                M.sender.jid,
                imagee,
                MessageType.image,{caption:`Join our support group to add our bot in your group or you can ask any query regarding the bot
   
*Invite link:* https://chat.whatsapp.com/BpNKPx2m6FpHklshLUv73k`}
            )
            return void M.reply('*Sent you the Group Link in personal message*')
        
      }
      }
