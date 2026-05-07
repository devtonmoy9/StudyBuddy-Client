import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 py-8 mt-20 text-gray-300 text-center">
            <div className="container mx-auto">
                <p className="text-base md:text-lg">
                    &copy; {new Date().getFullYear()} StudyBuddy. All Rights Reserved.
                </p>
                <div className="mt-4 md:mt-6">
                    <a href="/about" className="mx-3 md:mx-4 hover:text-gray-400">About</a>
                    <a href="/contact" className="mx-3 md:mx-4 hover:text-gray-400">Contact</a>
                    <a href="/terms" className="mx-3 md:mx-4 hover:text-gray-400">Terms of Service</a>
                    <a href="/privacy" className="mx-3 md:mx-4 hover:text-gray-400">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
