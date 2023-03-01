import './App.css';
import Login from './components/mainPage/login/Login';
import Server from './services/Server';
import Chat from './components/chat/Chat';
import { useState } from 'react';
import Game from './components/game/Game';
import MainPage from './components/mainPage/MainPage';

const API = new Server;

export default function App() {

  const [state, setState] = useState("mainPage");
  return (
    <div className="App">
      {
        (state === "mainPage") ? 
        (<MainPage
          server={API}
          setState={setState}/>) :
        (state === "chat") ? 
        (<Chat 
          server={API}
          setState={setState}/>) :
        (state === "game") ? 
        (<Game 
          server={API}
          setState={setState}/>) : ''
      }
    </div>
  );
}
