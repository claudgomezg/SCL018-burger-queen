import './App.css';
import Home from './components/Home';
import Waitress from './components/Waitress';
import Kitchen from './components/Kitchen';
import {Route, Routes } from 'react-router-dom';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waitress" element={<Waitress />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </>

  );
}

export default App;