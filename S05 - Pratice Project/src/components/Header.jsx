import HEADER_IMAGE from '../assets/investment-calculator-logo.png'

const Header = () => {
    return(
        <div id="header">
            <img src={HEADER_IMAGE}/>
            <h1>Investment Calculator</h1>
        </div>
    );
};

export default Header;