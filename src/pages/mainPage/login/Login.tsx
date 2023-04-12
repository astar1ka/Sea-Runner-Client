import { useRef, useState } from "react"
import './Login.css';
import useSubcriber from "../../../hooks/useSubcriber";
import logo from '../../../source/logo.png';

export default function Login(props: any) {
    const {socket, setPage} = props;

    const [loginStatus, setLoginStatus] = useState(true);

    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const subscriber = useSubcriber(() => setPage('GamePage'), () => setLoginStatus(false));

    const loginHandler = () => {
        if (login.current?.value && password.current?.value){
            socket.login(login.current.value, password.current.value, subscriber);
        }
    }

    return (<div className="login-image">
        <div className="login-window">
            <div className='login-logo'>
            <img className='login-logo-image' src={logo}/>
            <p className="GameName">Sea</p>
            <p className="GameName">Runner</p>
            </div>
        <div>
            <p>Логин</p>
            <input className="mainPageInput" ref={login} />
        </div>
        <div>
            <p>Пароль</p>
            <input type="password" className="mainPageInput" ref={password} />
        </div>
            <button className="mainPageButton" onClick={loginHandler}><p className='loginButtonCaption'>Вход</p></button>
            <p className={'errorLogin' + ((loginStatus) ? ' hide' : '')}>Неверный логин или пароль</p>
        </div>
        </div>
)
}