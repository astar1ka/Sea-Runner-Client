import './Registration.css';

export default function Registration(props:any){
    const Server = props.server;


    return (<div className="registration-image">
        <div className='registrationWindow'>
            <p>Представьтесь, капитан</p>
            <p>Логин</p>
            <input className='loginInput'/>
            <p>Пароль</p>
            <input className='loginInput'/>
            <p>Имя</p>
            <input className='loginInput'/>
            <button className="loginButton">Зарегистрироваться</button>
        </div>
    </div>)
}