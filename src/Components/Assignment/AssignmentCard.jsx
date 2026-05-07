import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AssignmentCard = ({ data }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [shortDescription, setShortDescription] = useState(data.description.split(/\s+/).slice(0, 40).join(' '));

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const formattedDueDate = new Date(data.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="capitalize bg-white rounded-lg overflow-hidden shadow-lg">
            <img src={data.thumbnailURL} alt={data.title} className="w-full h-64 object-cover" />

            <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{data.title}</h2>

                <p className="text-gray-600">
                    {showFullDescription ? data.description : shortDescription}
                    <Link to={`/assignment/${data._id}`}>
                        <button className="ml-2 text-blue-500 hover:underline focus:outline-none">View Details...</button>
                    </Link>
                </p>

                <div className="flex items-center mt-4">
                    <span className="text-gray-500">Marks:</span>
                    <span className="ml-2 text-blue-500 font-semibold">{data.marks}</span>
                </div>

                <div className="flex items-center mt-2">
                    <span className="text-gray-500">Difficulty:</span>
                    <span className="ml-2 text-blue-500 font-semibold">{data.difficultyLevel}</span>
                </div>

                <div className="flex items-center mt-2">
                    <span className="text-gray-500">Due Date:</span>
                    <span className="ml-2 text-blue-500 font-semibold">{formattedDueDate}</span>
                </div>
            </div>

            <div className=" bg-gray-100 p-4 flex justify-end">
                <Link to={`/assignment/${data._id}`}>
                    <button className="text-blue-500 hover:text-blue-700 font-semibold focus:outline-none">View Assignment</button>
                </Link>
            </div>
        </div>
    );
};

export default AssignmentCard;