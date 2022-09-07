import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/ruetlogo.png'

const Navbar = () => {
    return (
        <div class="navbar bg-neutral text-white">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>Schedule</Link></li>
                    <li><Link to='/'>Bus List</Link></li>
                    <li><Link to='/'>About</Link></li>
                </ul>
                </div>
            </div>
            <div class="navbar-center font-sans">
            <div class="w-10 rounded-xl">
                <img src={logo} />
            </div>
                <a class="btn btn-ghost normal-case text-xl">RUET Transport System</a>
            </div>

            <div class="navbar-end">
            <button class="btn btn-ghost btn-circle">
                <Link to='/login'>Login</Link>
            </button>
  </div>
        </div>
    );
};

export default Navbar;