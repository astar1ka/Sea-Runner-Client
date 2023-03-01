import './Header.css';

export default function Header(props:any) {
    const stateHeader = props.stateHeader;
    const setStateHeader = props.setStateHeader;
    const sheetState = ['enter','registration','contacts']
    document.querySelectorAll('.button')?.forEach((el) => el.classList.remove('active'));
    document.querySelector(`.${sheetState[stateHeader]}`)?.classList.add('active');

    return (<div className='header'>
        <div className="button enter active" onClick={() => setStateHeader(0)}>Вход</div>
        <div className="button registration" onClick={() => setStateHeader(1)}>Регистрация</div>
        <div className="button contacts" onClick={() => setStateHeader(2)}>Контакты</div>
    </div>)
}