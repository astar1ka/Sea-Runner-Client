import { useRef, useState } from 'react';
import { MainPages } from '../MainPage';
import './Header.css';

export default function Header(props:any) {
    const {activeMainPage, setActiveMainPage} = props;
    const [activeButton, setActiveButton] = useState(MainPages.Login);

    if (activeButton != activeMainPage) setActiveButton(activeMainPage);

    const onCliclHandler = (page:MainPages)=> {
        setActiveMainPage(page);
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