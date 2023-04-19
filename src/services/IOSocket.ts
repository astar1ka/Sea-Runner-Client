import { io } from "socket.io-client";

type TUser  = {
    readonly id: number;
    readonly token: string;
    readonly name: string;
} | null;

export enum MESSAGES {
    //USER
    LOG_IN='LOG_IN',
    LOG_OUT='LOG_OUT',
    REGISTRATION='REGISTRATION',
    //CHAT
    GET_ALL_USERS='LOG_OUT',
    GET_MESSAGES_PRIVATE='LOG_OUT',
    GET_MESSAGES_ALL='LOG_OUT',
    GET_MESSAGES='GET_MESSAGES',
    //GAME
    GET_CAPTAIN='GET_CAPTAIN',
    GET_START='GET_START',
    GAME_LOADED='GAME_LOADED'
}

export default class IOSocket{
    private socket = io('http://localhost:3001');
    private user: TUser = null;
    constructor(){
    }

    public login(login: string, password: string, subscriber: Function):void{
        this.socket.once('LOG_IN', (user: TUser) => {
            this.user = user;
            subscriber(user ? true : false);
        });
        this.socket.emit('LOG_IN', login, password);
    }

    public logout(subscriber: Function):void{
        if (this.user){
            this.socket.once('LOG_OUT', (result: boolean) => {
                if (result)this.user = null;
                subscriber(result);
            });
            this.socket.emit('LOG_OUT', this.user.token);
        }
    }

    public registration(login:string, password: string, name: string, subscriber: Function){
        this.socket.once('REGISTRATION', (result: boolean) => {
            subscriber(result);
        });
        this.socket.emit('REGISTRATION', login, password, name);
    }

    public getMessagesToAll(subscriber:Function){
        if(this.user) {
        this.socket.removeListener('GET_MESSAGES_ALL');
        this.socket.once('GET_MESSAGES_ALL', (data) => {
            subscriber(true,data);
        })
        }
    }

    public getMessagesPrivate(subscriber:Function){
            this.socket.removeListener('GET_MESSAGES_PRIVATE');
            this.socket.on('GET_MESSAGES_PRIVATE', (data) => subscriber(true, data));
    }

    public sendMessage(message:string, toUserId:number | null){
        if(this.user) {
            this.socket.emit('SEND_MESSAGE', toUserId, message, this.user.token);
        }
    }

    public gameLoaded(){
        if (this.user) this.socket.emit(MESSAGES.GAME_LOADED);
    }
}