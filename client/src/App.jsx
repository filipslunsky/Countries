import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './features/countries/Header';
import CountryList from './features/countries/CountryList';
import CountryDetail from './features/countries/CountryDetail';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/countries' element={<CountryList />} />
          <Route path='/country/:countryCode' element={<CountryDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
