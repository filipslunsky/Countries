import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import prevIcon from '../../assets/img/arrow_left.png';

const CountryDetail = () => {
    const navigate = useNavigate();

    const { countryCode } = useParams();

    const countries = useSelector(state => state.countries.countries);
    const country = countries.filter(item => item.alpha3Code === countryCode)[0];

    console.log(countryCode);
    console.log(country);

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

    console.log(neighbors);
    

    const navigateBack = () => {
        navigate('/');
    };

    const navigateToNeighbor = (countryCode) => {
        navigate(`/country/${countryCode}`);
    };

    return (
        <>
            <div className="detailMainContainer">
                <button className='backButton' onClick={navigateBack}><img src={prevIcon} alt="left arrow" />Back</button>
                <div className="detailContainer">
                    <div className="detailFlagContainer">
                        <img className='flagLarge' src={country.flag} alt="flag image" />
                    </div>
                    <div className="detailInfoContainer">
                        <h2 className="detailCountryName">{country.name}</h2>
                        <div className="detailInfoItems">
                            <p className="detailInfoItem">Native Name: <span className="detailInfoValue">{country.nativeName}</span></p>
                            <p className="detailInfoItem">Population: <span className="detailInfoValue">{country.population}</span></p>
                            <p className="detailInfoItem">Region: <span className="detailInfoValue">{country.region}</span></p>
                            <p className="detailInfoItem">Sub Region: <span className="detailInfoValue">{country.subregion ? country.subregion : 'no sub region'}</span></p>
                            <p className="detailInfoItem">Capital: <span className="detailInfoValue">{country.capital && country.capital > 0 ? country.capital : 'no capital'}</span></p>
                            <p className="detailInfoItem">Top Level Domain: <span className="detailInfoValue">{country.topLevelDomain ? country.topLevelDomain.join(', ') : 'no domain'}</span></p>
                            <p className="detailInfoItem">Currencies: <span className="detailInfoValue">{country.currencies ? country.currencies.map(currency => currency.name).join(', ') : 'no currency'}</span></p>
                            <p className="detailInfoItem">Languages: <span className="detailInfoValue">{country.languages ? country.languages.map(language => language.name).join(', ') : 'no language'}</span></p>
                        </div>
                        <div className="neigborsContainer">
                            <p className="detailInfoItem">Border Countries: {neighbors.length === 0 ? 'no border countries' : ''}</p>
                            {
                                neighbors.map(item => {
                                    return (
                                        <div
                                        className="neighborItem"
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