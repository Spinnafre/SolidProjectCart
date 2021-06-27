import { SendMessageProtocol } from "../classes/interfaces/MsgProtocol"
import { MsgType } from "../classes/interfaces/TypeMsg"
export class SendMessage implements SendMessageProtocol{
    sendMessage(obj:MsgType):void{
        console.log(`\u007E ${obj.msg} -> Status: ${obj.name}`)
    }
}
