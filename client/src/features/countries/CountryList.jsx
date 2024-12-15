import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCountries } from './state/slice';
import SearchBar from './SearchBar';
import Country from "./Country";
import './countryList.css';

const CountryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const countries = useSelector(state => state.countries.countries);
    const region = useSelector(state => state.countries.region);
    const search = useSelector(state => state.countries.search);
    const status = useSelector(state => state.countries.status);
    const nightMode = useSelector(state => state.countries.nightMode);

    useEffect(() => {
        dispatch(getCountries());
    }, [dispatch]);

    const filteredCountries = countries.filter((country) => {
        const matchesRegion = country.region.includes(region);
        const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
        return matchesRegion && matchesSearch;
    });

    const navigateToDetail = (countryCode) => {
        navigate(`/country/${countryCode}`);
    };

    if (status === 'failed') {
        return (<h2 className='errorMessage'>Ooops, failed to load the countries, please refresh or try again later...</h2>)
    };

    if (status === 'idle' || status === 'loading') {
        return (<h2 className='loadingMessage'>Loading...</h2>)
    };

    return (
        <>
            <SearchBar />
            <div className="countriesContainer">
                {   filteredCountries.length === 0
                    ?
                    "No countries match your search criteria."
                    :
                    filteredCountries.map((item) => {
                        return (
                            <div
                            className="countryContainer"
                            key={item.alpha3Code}
                            onClick={() => {navigateToDetail(item.alpha3Code)}}
                            >
                                <Country
                                flag={item.flags.png}
                                name={item.name}
                                population={item.population}
                                region={item.region}
                                capital={item.capital}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}
 
export default CountryList;