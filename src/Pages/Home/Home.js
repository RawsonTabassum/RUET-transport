import React from 'react';
import b1 from '../../images/b3.jpg'
import b2 from '../../images/b2.jpg'
import b3 from '../../images/b1.jpg'
import bus from '../../images/bus.jpg'
import b4 from '../../images/b4.jpg'
import './Home.css'
import Routine from '../Routine/Routine';

const Home = () => {
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={b4} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div className='pl-10'>
                        <h1 class="text-5xl font-bold text-gray">Transportation</h1>
                        <p class="py-6 text-lg text-gray">
                        Rajshahi University of Engineering & Technology (RUET) provides its own regular bus service almost everywhere in Rajshahi city for the convenience of student transportation. Students who are residing in the city outside the campus can take this transport service to reach the campus in time. This service helps the students to attend the classes at the morning without any delay. Besides, all kinds of mechanized transports are provided by the university between the city and campus for the teachers, staffs and students as regular basis.
                        </p>
                    </div>
                </div>
            </div>
            <Routine id='routine'></Routine>
        </div>
    );
};

export default Home;