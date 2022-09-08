import React from 'react';

const BookingData = ({row, setBooking}) => {
    return (
        <tr className='hover'>
            <td>{row._id}</td>
            <td>{row.driver}</td>
            <td>{row.helper}</td>
            <td>{row.upcoming_maintenance}</td>
            <td>{row.start_year}</td>
            <td>{row.Availablity}</td>
            <td>{row.Availablity === 'Booked' ? <button className='btn rounded-lg' disabled>Book</button> : <label onClick={()=>setBooking(row)} for="booking-modal" class="modal-button btn rounded-lg">Book</label>}
            </td>
        </tr>
    );
};

export default BookingData;