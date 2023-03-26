import Chat from "../chat/Chat";
import Game from "../game/Game";

export default function GamePage(props: any) {
    return (<div>
        <Game
        server = {props.server}
        setState = {props.setState}
        />
        <Chat 
        server = {props.server}
        setState = {props.setState}
        />
    </div>)
}