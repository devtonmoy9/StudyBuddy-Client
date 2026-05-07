import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/30'>
                <div className='text-center'>
                    <div className='md:px-[300px] mb-5'>
                        <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                            {text}
                        </h1>
                    </div>
                    <br />
                    <Link
                        to='/create'
                        className='w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gradient-to-r from-blue-500 to-purple-500 rounded-md lg:w-auto hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                    >
                        Create Assignment
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Slide
