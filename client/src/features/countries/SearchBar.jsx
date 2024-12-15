import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch, setRegion } from './state/slice';
import searchIcon from '../../assets/img/search_icon.png';
import './searchBar.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const searchRef = useRef();
    const regionRef = useRef();

    const search = useSelector(state => state.countries.search);
    const region = useSelector(state => state.countries.region);

    const handleSearch = () => {
        const search = searchRef.current.value;
        dispatch(setSearch({search}));
    };

    const handleSelect = () => {
        const region = regionRef.current.value;
        dispatch(setRegion({region}));
    };

    return (
        <>
            <div className="searchBarContainer">
                <div className="searchInputContainer">
                    <img className='searchIcon' src={searchIcon} alt="search icon" />
                    <input
                    type="text"
                    placeholder='Search for a country...'
                    className='searchInput'
                    ref={searchRef}
                    onChange={handleSearch}
                    defaultValue={search}
                    />
                </div>
                <select
                className='selectRegion'
                onChange={handleSelect}
                ref={regionRef}
                value={region}
                name="region"
                id="region"
                >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </>
    );
}
 
export default SearchBar;