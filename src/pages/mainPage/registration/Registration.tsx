import { useRef, useState } from 'react';
import './Registration.css';
import useSubcriber from '../../../hooks/useSubcriber';

enum Status {Success, Fail, Registration}

export default function Registration(props:any){
    const socket = props.socket;
    const [statusRegistration,setStatusRegistration] = useState(Status.Registration);
    const login = useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const name = useRef<HTMLInputElement | null>(null);
    const subscriber = useSubcriber(()=>setStatusRegistration(Status.Success), () => setStatusRegistration(Status.Fail));

    const registrationHandler = async () => {
        if (login.current?.value && password.current?.value && name.current?.value) {
            socket.registration(login.current.value, password.current.value, name.current.value, subscriber)
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