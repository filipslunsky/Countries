import { useSelector, useDispatch } from 'react-redux';
import { toggleNightMode } from './state/slice';
import Logo from './Logo';
import moonIcon from '../../assets/img/dark_mode.svg';
import './header.css';

const Header = () => {
    const dispatch = useDispatch();

    const nightMode = useSelector(state => state.countries.nightMode);

    const handleToggleNightMode = () => {
        dispatch(toggleNightMode());
    };

    return (
        <>
            <div className={nightMode ? "headerContainer nightMode" : "headerContainer"}>
                <Logo />
                <div className="nightModeContainer" onClick={handleToggleNightMode}>
                    <img className='nightModeIcon' src={moonIcon} alt="moon icon" />
                    <p className="nightModeDescription">{nightMode ? 'Night Mode On' : 'Night Mode Off'}</p>
                </div>
            </div>
        </>
    );
}
 
export default Header;