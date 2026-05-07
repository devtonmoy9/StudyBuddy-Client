import React, { useState } from 'react';
import { FiBookOpen, FiEdit2, FiAward, FiCalendar, FiLink } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import DatePicker from 'react-datepicker'
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const UpdateAssignment = () => {
    const [NewdueDate, setDueDate] = useState(new Date())
    const data = useLoaderData();
    const {
        _id,
        title,
        thumbnailURL,
        description,
        difficultyLevel,
        dueDate,
        marks
    } = data;
    //console.log(_id)
    const handleUpdate = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value
        const thumbnailURL = form.thumbnailURL.value
        const marks = form.marks.value
        const difficultyLevel = form.difficultyLevel.value
        const description = form.description.value
        const dueDate = form.dueDate.value

        const updateAssignment = {
            title,
            thumbnailURL,
            marks,
            difficultyLevel,
            description,
            dueDate
        };

        //console.log(updateAssignment);


        fetch(`https://group-grid-server.vercel.app/assignment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateAssignment)
        })

            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                }
            });




    };


    //console.log(title)



    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <Helmet>
                <title>StudyBuddy | Update</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FiEdit2 className="mr-2" /> Update Assignment
            </h1>
            <form onSubmit={handleUpdate} className="space-y-4">
                <div>
                    <label htmlFor="title" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiBookOpen className="mr-2" /> Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={title} // Set default value for title

                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="thumbnailURL" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiLink className="mr-2" /> Thumbnail URL
                    </label>
                    <input
                        type="url"
                        name="thumbnailURL"
                        defaultValue={thumbnailURL} // Set default value for thumbnailURL
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="marks" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiAward className="mr-2" /> Marks
                    </label>
                    <input
                        type="number"
                        name="marks"
                        defaultValue={marks} // Set default value for marks
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="difficultyLevel" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiEdit2 className="mr-2" /> Difficulty Level
                    </label>
                    <select
                        name="difficultyLevel"
                        defaultValue={difficultyLevel} // Set default value for difficultyLevel
                        className="mt-1 block w-full sm:text-lg py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    >
                        <option defaultValue="easy">Easy</option>
                        <option defaultValue="medium">Medium</option>
                        <option defaultValue="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="description" className="text-sm font-medium text-gray-700 flex items-center">
                        Description
                    </label>
                    <textarea
                        name="description"
                        defaultValue={description} // Set default value for description
                        rows={5}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiCalendar className="mr-2" /> Due Date
                    </label>
                    <DatePicker
                        name="dueDate"
                        selected={dueDate}

                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update Assignment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAssignment;