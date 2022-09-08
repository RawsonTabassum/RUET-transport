import React from 'react';
import b1 from '../../images/b3.jpg'
import b2 from '../../images/b2.jpg'
import b3 from '../../images/b1.jpg'
import bus from '../../images/bus.jpg'
import b4 from '../../images/b4.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={b4} class="max-w-sm rounded-lg shadow-2xl" alt=''/>
                    <div className='pl-10'>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button href="#routine" class="btn btn-secondary rounded-lg">View Routine</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;