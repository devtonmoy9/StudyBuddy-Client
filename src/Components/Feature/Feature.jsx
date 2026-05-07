import React from 'react';
import { MdAssignment, MdFilterList, MdDescription, MdBrightness2, MdAssignmentTurnedIn } from 'react-icons/md';
import { RiUserStarLine } from 'react-icons/ri';
import { HiDocumentText } from 'react-icons/hi';

const Feature = () => {
    return (
        <section className="py-12  ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Key Features</h2>
                    <p className="text-lg text-gray-600">Discover the key features of our platform</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature Card 1 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <MdAssignment className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Create Assignments</h3>
                                <p className="text-gray-600">Easily create assignments for group study sessions.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature Card 2 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <MdFilterList className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Filter Assignments</h3>
                                <p className="text-gray-600">Filter assignments based on difficulty level.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature Card 3 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <HiDocumentText className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Submit Assignments</h3>
                                <p className="text-gray-600">Submit assignments with PDF/doc links and notes.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature Card 4 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <MdBrightness2 className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Theme Toggling</h3>
                                <p className="text-gray-600">Toggle between light and dark mode.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature Card 5 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <HiDocumentText className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">View My Assignments</h3>
                                <p className="text-gray-600">Access all your submitted assignments in one place.</p>
                            </div>
                        </div>
                    </div>
                    {/* Feature Card 6 */}
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6 flex items-center">
                            <RiUserStarLine className="text-4xl text-blue-500 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Grade Assignments</h3>
                                <p className="text-gray-600">Grade assignments submitted by your peers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;
