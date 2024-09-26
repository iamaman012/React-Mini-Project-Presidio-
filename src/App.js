
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryInfo from './pages/CountryInfo';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/:name' element={<CountryInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
