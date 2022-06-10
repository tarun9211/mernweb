import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes ,Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        {/* <Route path='/welcome' element={<Home/>} /> */}
        <Route path= "/" element={<Home/>} />
        <Route path = "/about" element={<About/>} />
        <Route path = "/services" element={<Services/>} />
        <Route path = "/contact" element={<Contact/>} />
        <Route path = "/login" element={<Login/>} />
        <Route path = "/register" element={<Register/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
