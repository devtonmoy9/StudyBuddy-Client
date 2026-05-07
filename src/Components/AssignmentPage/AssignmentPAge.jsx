import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import axios from 'axios';


const AssignmentPage = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [assignments, setAssignments] = useState([]);

    useEffect(() => {
        const fetchAssignments = async () => {
            try {
                const response = await axios.get('https://group-grid-server.vercel.app/assignment');
                setAssignments(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching assignments:', error);
            }
        };
        fetchAssignments();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`https://group-grid-server.vercel.app/assignment/${id}`);
            if (response.status === 200) {
                setAssignments(assignments.filter(assignment => assignment._id !== id));
                Swal.fire(
                    'Deleted!',
                    'Your Assignment has been deleted.',
                    'success'
                );
            }
        } catch (error) {
            console.error('Error deleting Assignment:', error);
        }
    };

    const handleDeleteError = () => {
        Swal.fire(
            'Deleted!',
            'This assignment was not created by you, so you cannot delete it.',
            'error'
        );
    };

    const renderDescription = (assignment) => {
        const words = assignment.description.trim().split(/\s+/);
        const maxWordsToShow = 25;

        if (words.length <= maxWordsToShow) {
            return <p className="text-gray-600">{assignment.description}</p>;
        } else {
            const truncatedDescription = words.slice(0, maxWordsToShow).join(' ');
            return (
                <>
                    <p className="text-gray-600">{truncatedDescription}</p>
                    <Link to={`/assignment/${assignment._id}`} className="text-blue-500 hover:underline">Show Details</Link>
                </>
            );
        }
    };

    const handleFilterChange = (e) => {
        setDifficultyFilter(e.target.value);
    };

    const formatDueDate = (dueDate) => {
        const date = new Date(dueDate);
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        const fdate = date.getDate();
        return `  ${month}, ${fdate}, ${year} `;
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center my-20">Assignments</h2>
            <div className="flex mb-20 items-center justify-center  ">
                <label htmlFor="difficultyFilter" className="mr-2 text-xl font-semibold">Filter by Difficulty Level:</label>
                <select
                    id="difficultyFilter"
                    value={difficultyFilter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none bg-green-600 text-white font-bold focus:border-blue-500"
                >
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            {loading ? (
                <div className='flex justify-center items-center text-center'>
                    <span className="loading loading-bars loading-lg  text-[#1D4EDE]"></span>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {assignments.length > 0 ? (
                        assignments
                            .filter(assignment => difficultyFilter === 'All' || assignment.difficultyLevel.toLowerCase() === difficultyFilter.toLowerCase())
                            .map(assignment => (
                                <div key={assignment._id} className="capitalize bg-white rounded-lg overflow-hidden shadow-lg">
                                    <img src={assignment.thumbnailURL} alt={assignment.title} className="w-full h-64 object-cover" />
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2">{assignment.title}</h2>
                                        {renderDescription(assignment)}
                                        <div className="flex items-center mt-4">
                                            <span className="text-gray-500">Marks:</span>
                                            <span className="ml-2 text-blue-500 font-semibold">{assignment.marks}</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-500">Difficulty:</span>
                                            <span className="ml-2 text-blue-500 font-semibold">{assignment.difficultyLevel}</span>
                                        </div>
                                        <div className="flex items-center mt-2">
                                            <span className="text-gray-500">Due Date:</span>
                                            <span className="ml-2 text-blue-500 font-semibold">{formatDueDate(assignment.dueDate)}</span>
                                        </div>
                                        {user && user.uid === assignment.uid ? (
                                            <div className="bg-gray-100 p-4 flex justify-end">
                                                <button onClick={() => handleDelete(assignment._id)} className="text-red-500 hover:text-red-700 font-semibold mr-2">Delete</button>

                                                <Link to={`/update/${assignment._id}`}>
                                                    <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                                                </Link>
                                                <Link to={`/assignment/${assignment._id}`}>
                                                    <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                                                </Link>
                                            </div>
                                        ) : (
                                            <div className="bg-gray-100 p-4 flex justify-end gap-2">
                                                <button onClick={handleDeleteError} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                                <Link to={`/update/${assignment._id}`}>
                                                    <button className="text-blue-500 hover:text-blue-700 font-semibold mr-2">Update</button>
                                                </Link>
                                                <Link to={`/assignment/${assignment._id}`}>
                                                    <button className="text-blue-500 hover:text-blue-700 font-semibold">View Assignment</button>
                                                </Link>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))
                    ) : (
                        <p className="text-center text-gray-600">No assignments available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default AssignmentPage;