export default function SelectAllice(props: any){
    const allianceid = props.id;
    const allianceName = (allianceid === 1) ? 'Компания':
    (allianceid === 2) ? 'Армада':
    (allianceid === 3) ? 'Альянс': ''
    const callback = props.callback;

    const onClickHandler = () => {
        props.mediator.call('ADD_CAPTAIN', [allianceid, callback]);
    }

    return <div className='selectAllice' onClick={onClickHandler}>
        <img className={'image' + allianceid} onClick={onClickHandler} />
        <a>{allianceName}</a>
    </div>
}