import { useState } from 'react';

import Header from "./header/Header";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import About from "./about/About";

import './MainPage.css';


export enum MainPages { Login, Registration, About };
export default function MainPage(props: any) {
    const [activeMainPage, setActiveMainPage] = useState(MainPages.Login);

    return (<div className="mainPageWindow">
        <Header
            activeMainPage={activeMainPage}
            setActiveMainPage={setActiveMainPage} />
        <div className = { ((activeMainPage != MainPages.Login) ? ' inactive' : '')}>
            <Login
                socket={props.socket}
                setPage={props.setPage} />
        </div>
        <div className = {((activeMainPage != MainPages.Registration) ? ' inactive' : '')}>
            <Registration
                socket={props.socket} />
            </div>
        <div className = { ((activeMainPage != MainPages.About) ? ' inactive' : '')}>   
            <About />
        </div>
    </div>)
}