import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import prevIcon from '../../assets/img/arrow_back.svg';
import prevIconLight from '../../assets/img/arrow_back_light.svg';
import './countryDetail.css';

const CountryDetail = () => {
    const navigate = useNavigate();

    const { countryCode } = useParams();

    const countries = useSelector(state => state.countries.countries);
    const nightMode = useSelector(state => state.countries.nightMode);

    const country = countries.filter(item => item.alpha3Code === countryCode)[0];

    const getNeighbors = () => {
        if (!country.borders) return [];
        const borders = country.borders;
        let neighbors = [];
        for (let border of borders) {
            let neighbor = countries.filter(item => item.alpha3Code === border)[0];
            neighbors.push(neighbor)
        }
        return neighbors;
    };

    const neighbors = getNeighbors();

    const navigateBack = () => {
        navigate('/');
    };

    const navigateToNeighbor = (countryCode) => {
        navigate(`/country/${countryCode}`);
    };

    return (
        <>
            <div className={nightMode ? "detailMainContainer nightMode" : "detailMainContainer"}>
                <button className={nightMode ? 'backButton nightMode' : 'backButton'} onClick={navigateBack}>
                    <img className='backArrow' src={nightMode ? prevIconLight : prevIcon} alt="left arrow" />Back
                </button>
                <div className="detailContainer">
                    <div className="detailFlagContainer">
                        <img className='flagLarge' src={country.flag} alt="flag image" />
                    </div>
                    <div className="detailInfoContainer">
                        <h2 className="detailCountryName">{country.name}</h2>
                        <div className="detailInfoItems">
                            <div className="detailInfoItemsLeft">
                                <p className="detailInfoItem">Native Name: <span className="detailInfoValue">{country.nativeName}</span></p>
                                <p className="detailInfoItem">Population: <span className="detailInfoValue">{country.population.toLocaleString()}</span></p>
                                <p className="detailInfoItem">Region: <span className="detailInfoValue">{country.region}</span></p>
                                <p className="detailInfoItem">Sub Region: <span className="detailInfoValue">{country.subregion ? country.subregion : 'no sub region'}</span></p>
                                <p className="detailInfoItem">Capital: <span className="detailInfoValue">{country.capital && country.capital.length > 0 ? country.capital : 'no capital'}</span></p>
                            </div>
                            <div className="detailInfoItemsRight">    
                                <p className="detailInfoItem">Top Level Domain: <span className="detailInfoValue">{country.topLevelDomain ? country.topLevelDomain.join(', ') : 'no domain'}</span></p>
                                <p className="detailInfoItem">Currencies: <span className="detailInfoValue">{country.currencies ? country.currencies.map(currency => currency.name).join(', ') : 'no currency'}</span></p>
                                <p className="detailInfoItem">Languages: <span className="detailInfoValue">{country.languages ? country.languages.map(language => language.name).join(', ') : 'no language'}</span></p>
                            </div>
                        </div>
                        <div className="neigborsContainer">
                            <p className="detailInfoItem">Border Countries: {neighbors.length === 0 ? 'no border countries' : ''}</p>
                            {
                                neighbors.map(item => {
                                    return (
                                        <div
                                        className={nightMode ? "neighborItem nightMode" : "neighborItem"}
                                        key={item.alpha3Code}
                                        onClick={() => {navigateToNeighbor(item.alpha3Code)}}
                                        >
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CountryDetail;