import './App.css';
import Server from './services/Server';
import { useState } from 'react';
import MainPage from './pages/mainPage/MainPage';
import GamePage from './pages/gamePage/GamePage';

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
        (state === "game") ? 
        (<GamePage 
          server={API}
          setState={setState}/>) : ''
      }
    </div>
  );
}
