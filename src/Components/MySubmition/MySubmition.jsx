import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const MySubmition = () => {
    const data = useLoaderData()
    return (
        <div>
            <Helmet>
                <title>StudyBuddy | My Submition</title>
            </Helmet>
            <div className="max-w-lg mx-auto mt-[100px]">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-blue-500 text-white py-4 px-6">
                        <h2 className="text-3xl font-bold">My Submition</h2>
                    </div>
                    <div className="px-6 py-8">
                        <form className="space-y-4" >
                            <div>
                                <label htmlFor="pdfLink" className="block text-gray-700 text-sm font-semibold mb-2">
                                    PDF Preview:
                                </label>
                                <iframe
                                    title="PDF Preview"
                                    src={data.pdfLink}
                                    className="w-full h-64 border border-gray-300 rounded-md"
                                    type='application/pdf'
                                ></iframe>
                            </div>
                            <div>
                                <label htmlFor="pdfLink" className="block text-gray-700 text-sm font-semibold mb-2">
                                    PDF/DOC Link:
                                </label>
                                <input
                                    defaultValue={data.pdfLink}
                                    type="text"
                                    name="pdfLink"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Enter PDF/DOC link"

                                    readOnly
                                />
                            </div>

                            {/* Additional Notes */}
                            <div>
                                <label htmlFor="additionalNotes" className="block text-gray-700 text-sm font-semibold mb-2">
                                    Additional Notes:
                                </label>
                                <textarea
                                    defaultValue={data.additionalNotes}
                                    name="additionalNotes"
                                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                                    placeholder="Add any additional notes or comments"
                                    readOnly
                                />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySubmition;