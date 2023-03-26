type TUser  = {
    readonly id: number;
    readonly token: string;
    readonly name: string;
}

interface IData {
    [key: string]: any
}

export default class Server {
    private user: TUser | null = null;
    private token: string | null = null;
    private chatHash: string = '123';
    constructor() {
    }

    private async send(params: IData = {}) {
        if (this.user) {
            params.id = this.user.id;
            params.token = this.user.token;
        }
        const query = Object.keys(params).map(key => {
            return params[key]
        }).join('/');
        const responce = await fetch(`http://localhost:3001/api/${query}`);
        const answer = await responce.json();
        return (answer?.result === "ok") ? answer?.data : null;
    }

    public async login(login: string, password: string) {
        if (login && password) {
            const time = new Date();
            const data = await this.send({ method: 'login', login, password, time: time.getTime() });
            if (data as TUser) {
                this.user = data as TUser;
            }
            return data;
        }
    }

    public logout() {
        const result = this.send({ method: 'logout' });
        this.user = null;
        this.chatHash = '123';
        return result;
    }

    public async registration(login: string, password: string, name: string) {
        if (login && password && name) {
            const data = await this.send({ method: 'registration', login, password, name });
            return data;
        }
    }

    public sendMessange(message: string, to: number = 0): void {
        if (message) {
            console.log(message);
            this.send({ method: 'sendMessage', message, to });
        }
    }

    public async getMessages() {
        const data = await this.send({ method: 'getMessages', chatHash: this.chatHash});
        if (data?.chatHash) {
            this.chatHash = data.chatHash;
        }
        return data?.messages;
    }

    public async getAllUsers() {
        return await this.send({ method: 'getAllUsers'});
    }
}