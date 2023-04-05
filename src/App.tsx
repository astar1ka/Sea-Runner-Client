import { useState } from 'react';
import {io, Socket} from 'socket.io-client';

import Server from './services/Server';

import MainPage from './pages/mainPage/MainPage';
import GamePage from './pages/gamePage/GamePage';

import './App.css';

const API = new Server;

export default function App() {
  const socket: Socket = io('http://localhost:3001');
  socket.on('connect', () => {
    socket.on('GET_MESSAGES', (data) => console.log(data));
    const message = Math.round(Math.random() * 100000).toString;
    socket.emit('SEND_MESSAGE', message);
  })
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
