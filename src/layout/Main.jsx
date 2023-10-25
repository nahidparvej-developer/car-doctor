import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import NavBar from '../navbar/NavBar';

const Main = () => {
    return (
        <div>
            <div className='my-12'>
                <NavBar></NavBar>
            </div>
            <Outlet></Outlet>
            <div className='my-20'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;