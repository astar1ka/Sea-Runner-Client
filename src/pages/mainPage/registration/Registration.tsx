import { useRef } from 'react';
import './Registration.css';

export default function Registration(props:any){
    const Server = props.server;
    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const name = useRef<HTMLInputElement | null>(null);

    const registrationHandler = async () => {
        if (login.current?.value && password.current?.value && name.current?.value) {
            const data = await Server.registration(login.current.value, password.current.value, name.current.value);
        }
    }

    return (<div className="registration-image">
        <div className='registrationWindow'>
            <p>Представьтесь, капитан</p>
            <p>Логин</p>
            <input className='mainPageInput' ref={login}/>
            <p>Пароль</p>
            <input className='mainPageInput' ref={password}/>
            <p>Имя</p>
            <input className='mainPageInput' ref={name}/>
            <button className="mainPageButton" onClick={registrationHandler}>Регистрация</button>
        </div>
    </div>)
}