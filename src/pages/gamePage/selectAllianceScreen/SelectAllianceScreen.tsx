import SelectAllice from "./SelectAllice";
import './SelectAllianceScreen.css';
import { TCaptain } from "../GamePage";

export default function SelectAllianceScreen(props: any) {
    const callback = (captain: TCaptain) => {
        props.callback(captain);
    }
    return (<div className='firstRun'>
        <SelectAllice callback={callback} 
        id={1} 
        mediator = {props.mediator}/>
        <SelectAllice callback={callback} 
        id={2} 
        mediator = {props.mediator}/>
        <SelectAllice callback={callback} 
        id={3} 
        mediator = {props.mediator}/>
    </div>)
}