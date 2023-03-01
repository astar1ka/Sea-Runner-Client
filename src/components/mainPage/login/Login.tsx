import './Login.css';
import { useRef } from "react"
import Header from '../header/Header';

export default function Login(props: any) {
    const Server = props.server;
    const setState = props.setState;
    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const loginHandler = async () => {
        if (login.current?.value && password.current?.value) {
            const data = await Server.login(login.current?.value, password.current?.value);
            if (data) setState('game');
        }
    }
    return (<div className="login-image">
            <div className="login-window">
            <p className="GameName">Sea Runner</p>
        <div>
            <p>Логин</p>
            <input className="loginInput" ref={login} />
        </div>
        <div>
            <p>Пароль</p>
            <input type="password" className="loginInput" ref={password} />
        </div>
        <div>
            <button className="loginButton" onClick={loginHandler}><p className='loginButtonCaption'>Вход</p></button>
        </div>
            </div>
        </div>
)
}