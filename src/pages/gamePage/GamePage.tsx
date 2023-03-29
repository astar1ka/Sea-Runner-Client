import Chat from "./chat/Chat";
import Game from "./game/Game";
import GameMenu from "./gameMenu/GameMenu";
import './GamePage.css'

export default function GamePage(props: any) {
    return (<div className="gamePage_window">
        <Game
        server = {props.server}
        setState = {props.setState}
        />
        <Chat
        server = {props.server}
        setState = {props.setState}
        />
        <GameMenu
        server = {props.server}
        setState = {props.setState}
        />
    </div>)
}