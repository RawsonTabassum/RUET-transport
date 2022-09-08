import React, { useEffect, useState } from 'react';
import BookingData from './BookingData';
import BookingModal from './BookingModal';

const Booking = () => {
    const [bus, setBus] = useState([]);
    const [booking, setBooking] = useState({});

    useEffect(()=> {
        fetch('http://localhost:5000/bus')
        .then(res=> res.json())
        .then(data=> setBus(data));
    }, [])
    return (
        <div className='py-8'>
            <div className='text-center text-gray pt-6 pb-10'>
                <h1 className='text-5xl font-bold'>Bus Booking</h1>
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
                        <th>Availablity</th>
                        <th>Place Booking</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        bus.map(b=> <BookingData 
                            row={b}
                            key={b._id}
                            setBooking={setBooking}>
                        </BookingData>)
                    }
                    </tbody>
                </table>
                {booking && <BookingModal setBooking={setBooking} booking={booking}></BookingModal>}
            </div>
        </div>
    );
};

export default Booking;