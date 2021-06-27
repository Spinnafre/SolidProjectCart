import { MsgType } from "./TypeMsg";

export interface SendMessageProtocol{
    sendMessage(obj:MsgType):void
}
