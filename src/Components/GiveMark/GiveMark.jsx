import { FiStar, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const GiveMark = () => {
    const data = useLoaderData();

    const handleSubmit = (e) => {

        e.preventDefault();
        const form = e.target
        const result = form.result.value
        const feedback = form.feedback.value
        const status = "Compleat"

        const giveMark = {
            result: result,
            feedback: feedback,
            status: status
        }

        fetch(`https://group-grid-server.vercel.app/submited/${data._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(giveMark)
        })

            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                }
            });


        form.reset()

    };

    return (
        <div className=" mx-auto mt-10 p-6 bg-white shadow-md rounded-md">

            <div className="my-10 p-6 bg-white shadow-2xl rounded-md">
                <p className="text-center font-bold text-xl mb-4">Student Submitted</p>
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
                <div className="mb-2 mt-5 ">
                    <p className="text-base font-medium text-gray-700">PDF/DOC LINK: <a className='text-blue-400' href={data.pdfLink}>{data.pdfLink}</a></p>

                    <p className="text-base font-medium mt-2 text-gray-700">Assignment Mark: {data.mark}  </p>
                    <p className="text-base font-medium mt-2 text-gray-700">Examinee: {data.name}  </p>

                </div>
                <div>
                    <p className="text-base mt-2 font-medium text-gray-700">Additional Notes: {data.additionalNotes}</p>
                </div>

            </div>

            <h1 className="text-2xl font-bold mb-4 flex items-center">
                <FiStar className="mr-2" /> Give Marks and Feedback
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">

                <div>
                    <label htmlFor="marks" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiStar className="mr-2" /> Marks
                    </label>
                    <input
                        type="text"
                        name="result"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="feedback" className="text-sm font-medium text-gray-700 flex items-center">
                        <FiMessageSquare className="mr-2" /> Feedback
                    </label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-lg border-gray-300 rounded-md px-4 py-2 border-2"
                        rows={4}
                        required
                    ></textarea>
                </div>
                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex justify-center items-center"
                    >
                        <FiCheckCircle className="mr-2" /> Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default GiveMark;
