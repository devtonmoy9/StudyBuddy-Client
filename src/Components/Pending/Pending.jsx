import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const Pending = () => {
    const { user } = useContext(AuthContext);
    const [submissions, setSubmissions] = useState([]);


    useEffect(() => {
        fetch('https://group-grid-server.vercel.app/submited')
            .then(res => res.json())
            .then(data => setSubmissions(data))
            .catch(error => console.error('Error fetching submitted data:', error));

    }, []);


    const isAssignmentSubmitted = (submission) => {
        return submission.uid === user.uid;
    };

    const openSwal = () => {
        Swal.fire({
            title: 'You Cannot Give Mark',
            text: 'This assignment was submitted by you. You cannot give marks for your own submission.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    };

    return (
        <div>
            <Helmet>
                <title>StudyBuddy | Pending</title>
            </Helmet>
            {user ? (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-3'>
                    {submissions.map(data => (
                        !data.feedback && (
                            <div key={data._id} className="bg-white rounded-lg shadow-md p-6">
                                <img className='w-full h-[220px]' src={`${data.thumbnail}`} alt="" />
                                <h3 className="text-xl font-semibold mb-2">{data.title}</h3>
                                <p className="text-gray-600 mb-4">Marks: {data.mark}</p>
                                <p className="text-gray-600">Examinee: {data.name}</p>
                                {!isAssignmentSubmitted(data) ? (
                                    <Link to={`/giveMark/${data._id}`}>
                                        <button className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Give Mark</button>
                                    </Link>
                                ) : (
                                    <button onClick={openSwal} className="mt-4 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Give Mark</button>
                                )}

                            </div>
                        )
                    ))}
                </div>
            ) : (
                <div className='text-center'>
                    <img className='mx-auto my-2 w-[250px]' src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Found_nothing.png" alt="" />
                    <h3 className="text-4xl mb-5 mt-5">No Pending Assignment's Founded</h3>
                    <Link to={'/create'} className='btn bg-[#4CB27C] text-white font-semibold text-2xl'>Create Assignment</Link>
                </div>
            )}
        </div>
    );
};

export default Pending;
