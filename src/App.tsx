import {useState, useEffect} from 'react';
import Socket from './services/Socket';
import Mediator from './services/Mediator';

import MainPage from './pages/mainPage/MainPage';
import GamePage from './pages/gamePage/GamePage';

import './App.css';

export enum Pages {MainPage = 'MainPage', GamePage = 'GamePage'};

const mediator = new Mediator;
const socket = new Socket(mediator);

export default function App() {
  const [page, setPage] = useState<Pages>(Pages.MainPage);

  useEffect(()=>{
    mediator.subscribe('SET_PAGE', (page: Pages) =>setPage(page))
  },[])

  return (
    <div className="App">
      {
        (page === Pages.MainPage) ? 
        (<MainPage mediator = {mediator}/>) :
        (page === Pages.GamePage) ? 
        (<GamePage mediator = {mediator}/>) : ''
      }
    </div>
  );
}
