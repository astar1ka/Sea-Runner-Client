import MainMenu from "./mainMenu/MainMenu";
import './GameMenu.css'
import { useState } from "react";

export default function GameMenu(props:any){
    const [menu, setMenu] = useState(false);
    const [menu_hold, setMenuHold] = useState(false);
    function showHideMenu (): void {
        if(!menu)
            setMenu(true);
        else
            setMenu(false);
    }

    function showHideMenuHold (): void {
        if(!menu_hold)
            setMenuHold(true);
        else
            setMenuHold(false);
        setMenu(false);
    }

    return (
        <>
            {menu_hold &&
                <div className="MenuHold">
                    <img className="imgHold" src="https://chakiris.club/uploads/posts/2022-11/1669335947_chakiris-club-p-tryum-korablya-oboi-8.jpg"></img>
                    <div className="close" onClick={showHideMenuHold}></div>
                </div> 
            }
            {menu && 
                <div className="gameMenu_window"> 
                    <div className="buttonMenu_hold" onClick={showHideMenuHold}>Трюм</div>          
                </div>
            }
            <button className="menuButton" onClick={showHideMenu}>Меню</button>
        </>
    )
}