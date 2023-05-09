import { useEffect, useRef, useState } from 'react';
import { MainPages } from '../MainPage';
import './Header.css';

export default function Header(props:any) {
    const [activeButton, setActiveButton] = useState(MainPages.Login);

    const onCliclHandler = (page:MainPages)=> {
        props.mediator.call('SET_ACTIVE_MAIN_PAGE', [page])
        setActiveButton(page);
    }

    const setClassActive = (buttonPage: MainPages):string => {
        return (activeButton === buttonPage) ? 'active': ''
    }

    return (<div className='header'>
        <div className={'button login ' + setClassActive(MainPages.Login)} onClick={() => onCliclHandler(MainPages.Login)}>Вход</div>
        <div className={'button registration ' + setClassActive(MainPages.Registration)}  onClick={() => onCliclHandler(MainPages.Registration)}>Регистрация</div>
        <div className={'button about ' + setClassActive(MainPages.About)} onClick={() => onCliclHandler(MainPages.About)}>Об игре</div>
    </div>)
}