import MainMenu from "../mainMenu/MainMenu";
import { useState } from "react";
import './MenuButton.css'

export default function MenuButton(props:any){
    const [active, setActive] = useState(false);

    return (<div className="gameMenu">
        <button className="menuButton">Меню</button>
    </div>)
}