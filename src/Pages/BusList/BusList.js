import React, { useEffect, useState } from 'react';
import RoutineRow from '../RoutineRow/RoutineRow';
import Bus from './Bus';


const BusList = () => {
    const [bus, setBus] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:5000/bus')
        .then(res=> res.json())
        .then(data=> setBus(data));
    }, [])


    return (
        <div className='py-8'>
            <div className='text-center text-gray pt-6 pb-10'>
                <h1 className='text-5xl font-bold'>Bus Info</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>Bus Licence</th>
                        <th>Driver</th>
                        <th>Helper</th>
                        <th>Upcoming Maintenance</th>
                        <th>Since</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bus.map(b=> <Bus 
                            row={b}
                            key={b._id}>
                        </Bus>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BusList;