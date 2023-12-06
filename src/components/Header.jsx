import log from '../assets/investment-calculator-logo.png'

export default function Header() {
    return(
        <header id='header'>
            <img src={log} alt='invester image'/>
            <h1>Inverster</h1>
        </header>
    )
}