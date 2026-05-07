import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';

const SubmitAssignment = () => {
    const { user } = useContext(AuthContext);

    const data = useLoaderData()


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const pdfLink = form.pdfLink.value;
        const additionalNotes = form.additionalNotes.value;
        const mark = data.marks;
        const title = data.title;
        const description = data.description;
        const thumbnail = data.thumbnailURL;
        const name = user?.displayName;
        const uid = user?.uid;
        const email = user?.email;


        const submitData = {
            pdfLink,
            additionalNotes,
            mark,
            title,
            description,
            name,
            thumbnail,
            uid,
            email,
            status: "Pending"
        };

        // Make API request to submit assignment data
        fetch('https://group-grid-server.vercel.app/submited', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        })
            .then(response => response.json())
            .then(() => {
                // Show success notification
                Swal.fire(
                    'Assignment Submited',
                    'Your Assignment has been Submited.',
                    'success'
                );
                //console.log(submitData)
                form.reset()
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    // //console.log(user.displayName)


    return (
        <div className="max-w-lg mx-auto mt-[100px]">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-500 text-white py-4 px-6">
                    <h2 className="text-3xl font-bold">Submit Assignment</h2>
                </div>
                <div className="px-6 py-8">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {/* PDF/DOC Link Input */}
                        <div>
                            <label htmlFor="pdfLink" className="block text-gray-700 text-sm font-semibold mb-2">
                                PDF/DOC Link:
                            </label>
                            <input
                                type="text"
                                name="pdfLink"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter PDF/DOC link"
                                required
                            />
                        </div>

                        {/* Additional Notes */}
                        <div>
                            <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-semibold mb-2">
                                Additional Notes:
                            </label>
                            <textarea
                                name="additionalNotes"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Add any additional notes or comments"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SubmitAssignment;
