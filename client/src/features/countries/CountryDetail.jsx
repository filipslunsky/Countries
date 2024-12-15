import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CountryDetail = () => {
    const navigate = useNavigate();

    const { countryCode } = useParams();

    const countries = useSelector(state => state.countries.countries);
    const country = countries.filter(item => item.alpha3Code === countryCode)[0];

    console.log(countryCode);
    console.log(country);

    const navigateBack = () => {
        navigate('/');
    };

    return (
        <>
            <div className="detailMainContainer">
                <button className='backButton' onClick={navigateBack}>Back</button>
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
                            <p className="detailInfoItem">Sub Region: <span className="detailInfoValue">{country.subregion}</span></p>
                            <p className="detailInfoItem">Capital: <span className="detailInfoValue">{country.capital}</span></p>
                            <p className="detailInfoItem">Top Level Domain: <span className="detailInfoValue">{country.topLevelDomain.join(', ')}</span></p>
                            <p className="detailInfoItem">Currencies: <span className="detailInfoValue">{country.currencies.map(currency => currency.name).join(', ')}</span></p>
                            <p className="detailInfoItem">Languages: <span className="detailInfoValue">{country.languages.map(language => language.name).join(', ')}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default CountryDetail;