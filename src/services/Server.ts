interface IUser {
    token?: string,
    name?: string
}

interface IData {
    [key: string]: any
}

export default class Server {
    private token: string | null = null;
    private chatHash: string = '123';
    constructor() {
    }

    private async send(params: IData = {}) {
        if (this.token) {
            params.token = this.token;
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
            if (data?.token) {
                this.token = data.token;
                delete data.token;
            }
            return data;
        }
    }

    public logout() {
        const result = this.send({ method: 'logout' });
        this.token = null;
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