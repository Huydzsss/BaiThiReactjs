import logo from './logo.svg';
import  { Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import './App.css';
import About from './Component/About';
import Register from './Component/Register'
import Posting from './Component/Posting';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Res" element={<About />} />
        <Route path="Register" element={<Register />} />
        <Route path="Posting" element={<Posting />} />
      </Routes>
    </div>
  );
}

export default App;
