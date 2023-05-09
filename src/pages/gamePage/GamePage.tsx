import { useState,useEffect } from "react";

import Chat from "./chat/Chat";
import Game from "./game/Game";
import GameMenu from "./gameMenu/GameMenu";
import HelloScreen from "./helloScreen/HelloScreen";
import SelectAllianceScreen from "./selectAllianceScreen/SelectAllianceScreen";
import LoadScreen from "./loadScreen/LoadScreen";


import './GamePage.css'

export type TCaptain = {
    id: number,
    userid: number,
    allianceid: number,
    shipId: number,
    x: number,
    y: number
} | null;

export default function GamePage(props: any) {
    const [gameStatus, setGameStatus] = useState('load');
    const getCaptainCallback = (captain: TCaptain) => {
        (captain) ? setGameStatus('game') : setGameStatus('selectAlliance');
    }
    useEffect(()=>{
        props.mediator.call('GET_CAPTAIN', [(captain: TCaptain) => getCaptainCallback(captain)]);
    },[])
    return (<div className="gamePage_window">{
        (gameStatus === 'load') ?
        (<LoadScreen />) :
        (gameStatus === 'selectAlliance') ? 
        (<SelectAllianceScreen callback={getCaptainCallback} mediator = {props.mediator}/>): 
        (gameStatus === 'game') ?
        <HelloScreen/> : ''}
        <Game/>
        <Chat/>
        <GameMenu/>
    </div>)
}