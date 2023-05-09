import { useRef, useState, useEffect } from "react"

import logo from '../../../source/logo.png';
import './Login.css';
import { Pages } from "../../../App";

export default function Login(props: any) {

    const [loginStatus, setLoginStatus] = useState(true);

    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);

    const loginCallback = (data: object | null) => {
        if (data) props.mediator.call('SET_PAGE',[Pages.GamePage]);
        else setLoginStatus(false);
    }

    const loginHandler = () => {
        if (login.current?.value && password.current?.value){
            props.mediator.call('LOG_IN',[login.current.value, password.current.value, loginCallback]);
        }
    }

    return (
        <div className="login-image">
            <div className="login-window">
                <img className='login-logo-image' src={logo}/>
                <h2 className="h2-login">Sea Runner</h2>
                <div className="login-window-elems">
                <div>
                    <div className="inputbox">
                        <i className="icon-user"></i>
                        <input ref={login} placeholder=' ' required/>    
                        <label htmlFor='login'>Логин</label>
                    </div>
                    <div className="inputbox" id="passIn"> 
                        <i className="icon-lock"></i>   
                        <input  type="password" ref={password} placeholder=' ' required/>
                        <label htmlFor='password'>Пароль</label>
                    </div>
                    <button className="loginButton" onClick={loginHandler}>Войти</button>
                    <p className={'errorLogin' + ((loginStatus) ? ' hide' : '')}>Неверный логин или пароль</p>
                    </div>
                </div>
            </div>
        </div>
    )
}