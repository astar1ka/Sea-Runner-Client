import './Chat.css';
import { useRef, useEffect, useState, ReactNode } from "react"
import Message from './Message/Message';

interface IMessage {
    id: number,
    from: number,
    name: string,
    message: string,
    to: number
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
        if (newMessage.current?.value) Server.sendMessange(newMessage.current?.value, 0);
    }

    const logoutHandler = () => {
        clearInterval(getMessagesInterval);
        Server.logout();
        setState('login');
    }

    return (<div className="chat_window">
        <div className="chat-messages_window">
            <div className="chat-messages_window --allMessages" >
                {messages.map((mes: IMessage) => {
                    return (<Message key={mes.id} name={mes.name} message={mes.message} />)
                })}
            </div>
            <div className="chat-messages_window --newMessage">
                <input ref={newMessage} />
                <button onClick={sendHandler}>Send</button>
            </div>
        </div>
        <div>
            <button onClick={logoutHandler}>logOut</button>
        </div>
    </div>)
}