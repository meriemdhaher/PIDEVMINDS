import { MessageStatus } from "./message-status";
import { MessageType } from "./message-type";

export class Message {
    dMesg!: number ;
    content!: string;
    dateMesg!: Date;
    status!: MessageStatus;
    type!: MessageType;
    replymessage!: string;
    senderEmail!: string;

    constructor() {

    }
}
