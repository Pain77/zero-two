import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['sup'],
            description: 'Get the group invite link',
            category: 'general',
            usage: `${client.config.prefix}support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

await this.client.sendMessage( M.sender.jid,`Join our support group to add our bot in your group or you can ask any query regarding the bot 
*Invite link:* https://chat.whatsapp.com/BpNKPx2m6FpHklshLUv73k`, MessageType.text ) 
return void M.reply('*Sent you the Group Link in personal message*')
    }
}
