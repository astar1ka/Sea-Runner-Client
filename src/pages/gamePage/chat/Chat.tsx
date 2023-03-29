import './Chat.css';
import { useRef, useEffect, useState} from "react"
import Message from './Message/Message';
import { isNullOrUndefined } from 'util';

type TMessage = {
    id: number;
    userIdFrom: number;
    message: string;
    userIdTo: number;
}

export default function Chat(props: any) {
    const Server = props.server;
    const setState = props.setState;
    const newMessage = useRef<HTMLInputElement | null>(null);
    const [messages, getMessages] = useState([]);
    const getMessagesInterval = setInterval(async () => {
        let messages = await Server.getMessages();
        if (messages) {
            clearInterval(getMessagesInterval);
            getMessages(messages);
        }
    }, 1000);

    const sendHandler = () => {
        if (newMessage.current?.value) {
            Server.sendMessange(newMessage.current?.value, 'null');
            newMessage.current.value = '';
        };
    }


    return (<div className="chat_window">
        <div className="chat-messages_window">
            <div className="chat-messages_window --allMessages" >
            {messages.map((mes: TMessage) => { if (mes)
                    return (<Message key={mes.id} from={mes.userIdFrom} message={mes.message} to={mes.userIdTo}/>)
                })}
            </div>
            <div className="chat-messages_window --newMessage">
                <input className="chat_input" autoComplete="off" ref={newMessage} />
                <button className="chat_button" onClick={sendHandler}>Send</button>
            </div>
        </div>
    </div>)
}