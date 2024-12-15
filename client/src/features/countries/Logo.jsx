// import { useSelector } from 'react-redux';
import './logo.css';

const Logo = () => {
    // const nightMode = useSelector(state => state.countries.nightMode);

    return (
        <>
            {/* <h2 className={nightMode ? "logo nightMode" : "logo"}>Where in the world?</h2> */}
            <h2 className="logo">Where in the world?</h2>
        </>
    );
}
 
export default Logo;