import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';

const AssignmentDetail = () => {
    const assignment = useLoaderData();
    const [showFullDescription, setShowFullDescription] = useState(false);

    // Function to toggle show more/less
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 capitalize">
            <Helmet>
                <title>StudyBuddy | Assignment Detail</title>
            </Helmet>
            {assignment ? (
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    {/* Title */}
                    <h2 className="text-3xl font-bold  mb-4 bg-blue-500 text-white py-2 px-4">Assignment Details</h2>

                    {/* Description */}
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Description:</h3>
                        <p className="text-gray-600">
                            {showFullDescription ? assignment?.description : `${assignment?.description.split(' ').slice(0, 50).join(' ')}`}
                            <button onClick={toggleDescription} className="text-blue-500 hover:underline ml-3">
                                {showFullDescription ? "Show Less" : "Show More...."}
                            </button>
                        </p>
                    </div>

                    {/* Marks */}
                    <div className="p-4 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Marks:</h3>
                        <p className="text-gray-600">{assignment?.marks}</p>
                    </div>

                    {/* Difficulty Level */}
                    <div className="p-4">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Difficulty Level:</h3>
                        <p className="text-gray-600">{assignment?.difficultyLevel}</p>
                    </div>

                    {/* Due Date */}
                    <div className="p-4 bg-gray-100">
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Due Date:</h3>
                        <p className="text-red-600">{assignment?.dueDate}</p>
                    </div>

                    {/* Submission Form */}
                    <div className="p-4">
                        <Link to={`/submit/${assignment?._id}`}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Take Assignment
                            </button>
                        </Link>
                    </div>
                </div>
            ) : (
                <p>Loading assignment details...</p>
            )}
        </div>
    );
};

export default AssignmentDetail;
