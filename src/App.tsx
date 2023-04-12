import {useState} from 'react';
import IOSocket from './services/IOSocket';

import MainPage from './pages/mainPage/MainPage';
import GamePage from './pages/gamePage/GamePage';

import './App.css';

enum Pages {MainPage = 'MainPage', GamePage = 'GamePage'};

const socket = new IOSocket;

export default function App() {
  const [page, setPage] = useState<Pages>(Pages.MainPage);

  return (
    <div className="App">
      {
        (page === Pages.MainPage) ? 
        (<MainPage
          setPage = {setPage}
          socket = {socket}/>) :
        (page === Pages.GamePage) ? 
        (<GamePage 
          setPage = {setPage}
          socket = {socket}/>) : ''
      }
    </div>
  );
}
