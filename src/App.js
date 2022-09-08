import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Admin from './Pages/Admin/Admin';
import RequireAuth from './Pages/Login/Login/RequireAuth';
import BusList from './Pages/BusList/BusList';
import Booking from './Pages/Booking/Booking';
import BookingHistory from './Pages/Booking/BookingHistory';
import Employees from './Pages/Employee/Employees';


function App() {
  return (
    <div className='container sm:mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/information' element={<BusList></BusList>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/admin-login' element={<Login></Login>}></Route>
        <Route path='/admin' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/add-bus' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/add-employee' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/employee' element={<Employees></Employees>}></Route>
        <Route path='/update-bus' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/update-employee' element={<RequireAuth><Admin></Admin></RequireAuth>}></Route>
        <Route path='/booking' element={<RequireAuth><Booking></Booking></RequireAuth>}></Route>
        <Route path='/booking-history' element={<RequireAuth><BookingHistory></BookingHistory></RequireAuth>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
