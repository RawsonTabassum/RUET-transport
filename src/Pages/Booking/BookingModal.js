import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({booking, setBooking}) => {
    const {_id} = booking;
    const [user, loading] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const date = event.target.date.value;
        const dept = event.target.dept.value;
        const reason = event.target.reason.value;

        console.log(name, date, user.email, dept, reason);
        setBooking(null);
    }
    return (
        <div>
            {/* <label for="my-modal-6" class="btn modal-button">open modal</label> */}
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-xl">Booking for Bus No. {_id}</h3>
                <div className='mt-6'>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <div>
                            <label className='label'>
                                <span class="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="Type name" class="rounded-lg input input-bordered w-96 max-w-sm" />
                        </div>
                        <div>
                            <label className='label'>
                                <span class="label-text">email</span>
                            </label>
                            <input name='email' type="email" value={user?.email} readOnly class="rounded-lg input input-bordered w-96 max-w-sm" />
                        </div>
                        <div>
                            <label className='label'>
                                <span class="label-text">Date</span>
                            </label>
                            <input name='date' type="text" placeholder="dd/mm/yyyy" class="rounded-lg input input-bordered w-96 max-w-sm" />
                        </div>
                        <div>
                            <label className='label'>
                                <span class="label-text">Department Name</span>
                            </label>
                            <input name='dept' type="text" placeholder="Dept. Name" class="rounded-lg input input-bordered w-96 max-w-sm" />
                        </div>
                        <div>
                            <label className='label'>
                                <span class="label-text">Reason for Booking</span>
                            </label>
                            <input name='reason' type="text"  class="rounded-lg input input-bordered w-96 max-w-sm" />
                        </div>
                        
                        
                        <input type="submit" value="Book" class="mt-3 btn rounded-lg w-96 max-w-sm" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookingModal;