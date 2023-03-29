import { useState, useRef, useEffect } from 'react';
import Header from "./header/Header";
import Login from "./login/Login";
import Registration from "./registration/Registration";
import './MainPage.css';
import Contacts from "./contacts/Contacts";

type TDiv = HTMLDivElement | null;

export default function MainPage(props: any) {
    useEffect(() => {
        elements[stateMainPage]?.current?.scrollIntoView(true);
    });
    const elements = [useRef<TDiv>(null), useRef<TDiv>(null), useRef<TDiv>(null)];
    const [stateMainPage, setStateMainPage] = useState(0);
    const scrollHandler = function(event: any){
        let deltaState: number = stateMainPage;
        (event.deltaY > 0) ? deltaState++ : deltaState--;
        if (deltaState > 2) deltaState = 2;
        if (deltaState < 0) deltaState = 0;
        setStateMainPage(deltaState);
    }

    

    return (<div className="mainPageWindow" onWheel={scrollHandler}>
        <Header
            stateHeader={stateMainPage}
            setStateHeader={setStateMainPage} />
        <div ref={elements[0]} />
        <Login
            server={props.server}
            setState={props.setState} />
        <div ref={elements[1]} />
        <Registration
            server={props.server}
            setState={props.setState} />
        <div ref={elements[2]} />
        <Contacts />
    </div>)
}