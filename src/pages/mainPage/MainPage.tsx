import { useState, useEffect } from 'react';

import Header from "./header/Header";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import About from "./about/About";

import './MainPage.css';


export enum MainPages { Login, Registration, About };

export default function MainPage(props: any) {
    const [activeMainPage, setActiveMainPage] = useState(MainPages.Login);

    useEffect(() => props.mediator.subscribe('SET_ACTIVE_MAIN_PAGE', (page: MainPages) => setActiveMainPage(page)), [])

    return (<div className="mainPageWindow">
        <Header mediator={props.mediator} />
        <div className={'page' + ((activeMainPage != MainPages.Login) ? ' inactive' : '')}>
            <Login mediator={props.mediator}/>
        </div>
        <div className={'page' + ((activeMainPage != MainPages.Registration) ? ' inactive' : '')}>
            <Registration
                socket={props.socket} />
        </div>
        <div className={'page' + ((activeMainPage != MainPages.About) ? ' inactive' : '')}>
            <About />
        </div>
    </div>)
}