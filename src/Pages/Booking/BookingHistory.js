import React, { useEffect, useState } from 'react';
import History from './History';

const BookingHistory = () => {
    const [history, setHistory] = useState([]);

    useEffect(()=> {
        fetch('https://gentle-dusk-90329.herokuapp.com/booking')
        .then(res=> res.json())
        .then(data=> setHistory(data));
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
                        <th>Bus Id</th>
                        <th>Person</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Dept</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        history.map(b=> <History
                            row={b}
                            key={b._id}>
                        </History>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookingHistory;