import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div class="flex flex-col justify-center my-12 items-center">
            <div class="card w-96 ">
                <h2 className='text-center text-4xl text-gray font-bold mb-10'>Admin Panel</h2>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/add-bus'>Add Bus</Link>
                </button>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/add-employee'>Add Employee</Link>
                </button>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/update-bus'>Update Bus</Link>
                </button>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/update-employee'>Update Employee</Link>
                </button>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/booking'>Book Bus</Link>
                </button>
                <button class="btn btn-block rounded-lg my-4">
                    <Link to='/booking-history'>Booking History</Link>
                </button>
                
            </div>
        </div>
    );
};

export default Admin;