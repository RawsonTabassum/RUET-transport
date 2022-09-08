import React, { useEffect, useState } from 'react';
import RoutineRow from '../RoutineRow/RoutineRow';

const Routine = () => {
    const [routine, setRoutine] = useState([]);

    useEffect(()=> {
        fetch('https://gentle-dusk-90329.herokuapp.com/routine')
        .then(res=> res.json())
        .then(data=> setRoutine(data));
    }, [])

    return (
        <div className='py-20'>
            <div className='text-center text-gray pt-6 pb-10'>
                <h1 className='text-5xl font-bold'>Daily Schedule</h1>
            </div>

            <div className="overflow-x-auto">
                <table className="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>Bus Licence</th>
                        <th>Driver</th>
                        <th>Time</th>
                        <th>Route</th>
                        <th>For</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        routine.map(r=> <RoutineRow 
                            row={r}
                            key={r._id}>
                        </RoutineRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Routine;