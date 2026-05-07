import { useContext, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FiEdit2, FiBookOpen, FiAward, FiCalendar, FiLink } from 'react-icons/fi'
import { Helmet } from 'react-helmet'

const CreateAssignment = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [marks, setMarks] = useState('')
    const [thumbnailURL, setThumbnailURL] = useState('')
    const [difficultyLevel, setDifficultyLevel] = useState('easy')
    const [dueDate, setDueDate] = useState(new Date())
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // Check if the description has at least 40 words
        const wordsCount = description.trim().split(/\s+/).length;
        if (wordsCount < 10) {
            setError('Description must have at least 20 words. Please ensure each word is separated by a space, comma, or period.');
            return;
        }

        const AddAssignment = {
            title,
            description,
            marks,
            uid: user?.uid,
            thumbnailURL,
            difficultyLevel,
            dueDate,
        }

        fetch('https://group-grid-server.vercel.app/assignment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(AddAssignment)
        })
            .then(response => response.json())
            .then(() => {
                Swal.fire(
                    'Assignment Added',
                    'Your Assignment has been Added.',
                    'success'
                );
                navigate('/assignments')
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <Helmet>
                <title>StudyBuddy | Create Assignment</title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FiEdit2 className="mr-2" /> Create New Assignment
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiBookOpen className="mr-2" /> Title
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiEdit2 className="mr-2" /> Description
                    </label>
                    <textarea
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2 ${error && 'shake'}`}
                        required
                    />
                    {error && <p className="text-red-500 text-right">{error}</p>}
                </div>
                <div>
                    <label htmlFor="marks" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiAward className="mr-2" /> Marks
                    </label>
                    <input
                        type="number"
                        name="marks"
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
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
                        value={thumbnailURL}
                        onChange={(e) => setThumbnailURL(e.target.value)}
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
                        value={difficultyLevel}
                        onChange={(e) => setDifficultyLevel(e.target.value)}
                        className="mt-1 block w-full sm:text-lg py-2 px-4 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dueDate" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiCalendar className="mr-2" /> Due Date
                    </label>
                    <DatePicker
                        name="dueDate"
                        selected={dueDate}
                        onChange={(date) => setDueDate(date)}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Assignment
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateAssignment