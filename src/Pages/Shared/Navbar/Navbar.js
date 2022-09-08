import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/ruetlogo.png'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    if(loading){
        return <div className='flex justify-center h-screen items-center'>
            <button class="btn btn-ghost loading ">loading</button>
        </div>
    }

    const logOut = ()=> {
        signOut(auth);
        navigate('/admin-login');
    }

    return (
        <div className="navbar bg-neutral text-white">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/information'>Bus List</Link></li>
                    <li><Link to='/employee'>Employee</Link></li>
                    <li><Link to='/booking'>Booking</Link></li>
                    <li><Link to='/admin'>Admin Panel</Link></li>
                </ul>
                </div>
            </div>
            <div className="navbar-center font-sans">
            <div className="w-12 rounded-xl">
                <img src={logo} alt=''/>
            </div>
                <a href='/home' className="btn btn-ghost normal-case text-xl">RUET Transport System</a>
            </div>

            <div className="navbar-end">
                
                    {user ? <button onClick={logOut}  className="btn btn-ghost"><Link to='/admin-login'>Sign Out</Link></button> : <button className="btn btn-ghost"><Link to='/admin-login'>Login</Link></button>}
                
            </div>
        </div>
    );
};

export default Navbar;