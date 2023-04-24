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
    console.log(subscriber);
    const loginHandler = () => {
        if (login.current?.value && password.current?.value){
            socket.login(login.current.value, password.current.value, subscriber);
            (() => setPage('GamePage'))();
        }
    }

    return (
        <div className="login-image">
            <div className="login-window">
                <div className='login-logo'>
                    <img className='login-logo-image' src={logo}/>
                </div>
                <div className="window-elems">
                    <h2 className="h2-login">Sea Runner</h2>
                    <div className="login-inputbox">
                        <i className="icon-user"></i>
                        <input ref={login} placeholder=' ' required/>    
                        <label htmlFor='login'>Логин</label>
                    </div>
                    <div className="login-inputbox"> 
                        <i className="icon-lock"></i>   
                        <input  type="password" ref={password} placeholder=' ' required/>
                        <label htmlFor='password'>Пароль</label>
                    </div>
                    <button className="loginButton" onClick={loginHandler}>Войти</button>
                    <p className={'errorLogin' + ((loginStatus) ? ' hide' : '')}>Неверный логин или пароль</p>
                </div>
            </div>
        </div>
    )
}