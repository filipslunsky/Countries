const Country = ({flag, name, population, region, capital}) => {
    return (
        <>
            <div className="countryContainer">
                <div className="flagContainer">
                    <img src={flag} alt="flag image" />
                </div>
                <div className="countryInfoContainer">
                    <h3 className="countryName">{name}</h3>
                    <p className="countryInfoItem">Population: <span className="countryInfoValue">{population}</span></p>
                    <p className="countryInfoItem">Region: <span className="countryInfoValue">{region}</span></p>
                    <p className="countryInfoItem">Capital: <span className="countryInfoValue">{capital}</span></p>
                </div>
            </div>
        </>
    );
}
 
export default Country;