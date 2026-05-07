import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet';

const MySubmitted = () => {
    const { user } = useContext(AuthContext);
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://group-grid-server.vercel.app/submited')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch submissions');
                }
                return res.json();
            })
            .then(data => {
                setSubmissions(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching submitted data:', error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const isAssignmentSubmitted = () => {
        return submissions.some(submission => submission.email === user.email);
    };



    if (loading) {
        return <div className='flex justify-center items-center text-center'>
            <span className="loading loading-bars loading-lg  text-[#1D4EDE]"></span>

        </div>;
    }

    if (error) {
        return <div className="text-center">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto mt-8">
            <Helmet>
                <title>StudyBuddy | MySubmited</title>
            </Helmet>
            <h2 className="text-3xl font-semibold text-center mb-4">My Submitted Assignments</h2>
            {user && isAssignmentSubmitted() ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {submissions.map(submission => (
                        <div key={submission._id} className={`  rounded-lg shadow-md p-6`}>
                            <img src={submission.thumbnail} alt={submission.title} className="w-full h-[300px] object-cover mb-4 rounded-md" />
                            <h3 className="text-xl font-semibold mb-2">{submission.title}</h3>
                            <p className="text-gray-600 text-xl">Total Marks: {submission.mark}</p>
                            {/* <p className="text-gray-600 text-xl mb-2">You'r Result: {submission.result ? submission.result : "Pending"}</p> */}

                            <div className='mt-5'>
                                {
                                    submission.result ? (<p className="text-gray-600 text-xl mb-2">You'r Result: {submission.result}</p>) : (
                                        null
                                    )
                                }

                            </div>
                            {/* <p className="text-gray-600 text-xl mb-2">Feedback: {submission.feedback ? submission.feedback : "Pending"}</p> */}

                            {
                                submission.feedback ? (<p className="text-gray-600 text-xl mb-2">Feedback: {submission.feedback}</p>) : (
                                    null
                                )
                            }

                            <p className='text-xl'>
                                Status: <span className={`text-gray-600 text-xl mb-2 ${submission.feedback ? "bg-green-200 px-2 rounded-3xl" : "bg-red-200 px-2 rounded-3xl"}`}>{submission.feedback ? "Compleate" : "Pending"}</span>
                            </p>
                            <div className="flex justify-end mt-2">
                                <Link to={`/mysubmition/${submission._id}`}>
                                    <button className='btn bg-blue-400 text-white'>My Submition</button></Link>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Found_nothing.png" alt="Nothing Found" className="mx-auto my-8 w-48" />
                    <h3 className="text-4xl mb-5">You Haven't Completed Any Assignments Yet</h3>
                    <Link to="/assignments" className="btn bg-green-500 text-white font-semibold text-lg px-6 py-3 rounded hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit An Assignment</Link>
                </div>
            )}
        </div>
    );
};

export default MySubmitted;