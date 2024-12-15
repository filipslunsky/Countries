import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './features/countries/Header';
import CountryList from './features/countries/CountryList';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CountryList />} />
          <Route path='/countries' element={<CountryList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
