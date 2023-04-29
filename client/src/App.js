import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';
import Signup from './components/Signup';
import NotFound from './screens/NotFound';
import AdminPanel from './screens/AdminPanel';

function App() {
  return (
    <>
      <Navbar />  
      
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/admin' element ={<AdminPanel />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
