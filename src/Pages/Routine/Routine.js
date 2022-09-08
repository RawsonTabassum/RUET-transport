import React, { useState } from 'react';
import RoutineRow from '../RoutineRow/RoutineRow';

const Routine = () => {
    const routine = [
        {
            "_id" : 1,
            "Driver": "Mr. A",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 2,
            "Driver": "Mr. B",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 3,
            "Driver": "Mr. C",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 4,
            "Driver": "Mr. D",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 5,
            "Driver": "Mr. E",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 6,
            "Driver": "Mr. F",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 7,
            "Driver": "Mr. G",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 8,
            "Driver": "Mr. H",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        },
        {
            "_id" : 9,
            "Driver": "Mr. I",
            "Time" : "6:45 AM",
            "Route" : "Court-Laxmipur",
            "For" : "Students"
        }
    ]

    return (
        <div className='py-20'>
            <div className='text-center text-gray pt-6 pb-10'>
                <h1 className='text-5xl font-bold'>Daily Schedule</h1>
            </div>

            <div class="overflow-x-auto">
                <table class="table w-full text-center">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th>Bus ID</th>
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