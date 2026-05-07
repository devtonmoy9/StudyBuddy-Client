import React from 'react';
import Banner from '../Header/Banner';
import Feature from '../Feature/Feature';
import FAQ from '../Faq/FAQ';
import Assignment from '../Assignment/Assignment';
import Testimonials from '../Testimonials/Testimonial';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>StudyBuddy | Home</title>
            </Helmet>
            <Banner></Banner>
            <Feature></Feature>
            <Assignment></Assignment>
            <FAQ></FAQ>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;