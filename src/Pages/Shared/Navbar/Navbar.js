import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/ruetlogo.png'

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);

    const logOut = ()=> {
        signOut(auth);
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
                    <li><Link to='/'>Booking</Link></li>
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
                <button className="btn btn-ghost">
                    {user ? <Link onClick={logOut} to='/staff-login'>Sign Out</Link> : <Link to='/staff-login'>Login</Link>}
                </button>
            </div>
        </div>
    );
};

export default Navbar;