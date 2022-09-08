import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import AdminLogin from './Pages/Login/Login/AdminLogin';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';


function App() {
  return (
    <div className='container sm:mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/staff-login' element={<Login></Login>}></Route>
        <Route path='/admin-login' element={<AdminLogin></AdminLogin>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
