import React from 'react';

const Services = ({ services }) => {
    const { img, title, price } = services;
    return (
        <div>
            {/* <div className="card">
                <img src={img} alt="Shoes" className='h-[200px] w-[380px] rounded-xl' />
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className='flex justify-between text-[#FF3811] '>
                        <p> Price: ${price} </p>
                        <span>icon</span>
                    </div>
                </div>
            </div> */}
            <div className="card card-compact ">
                <figure> <img src={img} alt="Shoes" className='h-[200px] w-[380px] rounded-xl' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                  <div className='flex justify-between text-[#FF3811] '>
                        <p> Price: ${price} </p>
                        <span>icon</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;