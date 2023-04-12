import { useState } from "react";

import Chat from "./chat/Chat";
import Game from "./game/Game";
import GameMenu from "./gameMenu/GameMenu";
import HelloScreen from "./helloScreen/HelloScreen";

import './GamePage.css'



export default function GamePage(props: any) {
    return (<div className="gamePage_window">
        <HelloScreen/>
        <Game
        socket = {props.socket}
        />
        <Chat
        socket = {props.socket}
        />
        <GameMenu
        socket = {props.socket}
        setPage = {props.setState}
        />
    </div>)
}