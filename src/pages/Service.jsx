import React, { useEffect, useState } from 'react';
import Services from './Services';

const Service = () => {

const [service,setService] = useState([]);


useEffect( () => {
    fetch('service.json')
    .then(res => res.json())
    .then( data => setService(data))
},[])


    return (
        <div>
            <div className='text-center my-20'>
                <h3 className='text-[#FF3811]'>Service</h3>
                <h1 className='text-4xl mt-3 mb-3 font-bold text-[#151515]'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised  <br />
                 words which don't look even slightly believable. </p>
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  p-2'>
                 {
                    service.map(services => <Services 
                    services={services}></Services> )
                 }
            </div>
        </div>
    );
};

export default Service;