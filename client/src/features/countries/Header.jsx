import { useSelector, useDispatch } from 'react-redux';
import { toggleNightMode } from './state/slice';
import Logo from './Logo';
import moonIcon from '../../assets/img/icon-moon.svg';
import './header.css';

const Header = () => {
    const dispatch = useDispatch();

    const nightMode = useSelector(state => state.countries.nightMode);

    console.log(nightMode);

    const handleToggleNightMode = () => {
        dispatch(toggleNightMode());
    };

    return (
        <>
            <div className="headerContainer">
                <Logo />
                <div className="nightModeContainer" onClick={handleToggleNightMode}>
                    <img className='nightModeIcon' src={moonIcon} alt="moon icon" />
                    <p className="nightModeDescription">Night Mode</p>
                </div>
            </div>
        </>
    );
}
 
export default Header;