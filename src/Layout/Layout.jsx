import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <div className='mx-auto max-w-7xl'>
                <Navbar />
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;