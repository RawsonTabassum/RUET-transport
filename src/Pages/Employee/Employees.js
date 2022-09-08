import React, { useEffect, useState } from 'react';
import Employee from './Employee';

const Employees = () => {
    const [employee, setEmployee] = useState([]);

    useEffect(()=> {
        fetch('https://gentle-dusk-90329.herokuapp.com/employee')
        .then(res=> res.json())
        .then(data=> setEmployee(data));
    }, [])
    return (
        <div className='py-8'>
            <div className='text-center text-gray pt-6 pb-10'>
                <h1 className='text-5xl font-bold'>Employee Info</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Phone No.</th>
                        <th>Address</th>
                        <th>Joined</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        employee.map(e=> <Employee 
                            row={e}
                            key={e._id}>
                        </Employee>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Employees;