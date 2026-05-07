import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            course: 'Computer Science',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula est eget lorem elementum, sit amet consequat turpis tincidunt. Integer fringilla eros vel purus convallis, sed interdum nisi placerat.',
            image: 'https://stylesatlife.com/wp-content/uploads/2014/02/Good-Boy.jpg' // Replace with actual image URL
        },
        {
            id: 2,
            name: 'Jane Smith',
            course: 'Engineering',
            message: 'Suspendisse potenti. Phasellus dictum magna at justo consequat aliquet. Morbi eget velit nec tortor aliquam blandit. Nunc id pharetra risus, nec tincidunt est. Nulla ac efficitur velit, in efficitur urna.',
            image: 'https://cdn.aglty.io/boys-town/quotes/ryan_20230915120925.jpg' // Replace with actual image URL
        },
        {
            id: 3,
            name: 'David Johnson',
            course: 'Mathematics',
            message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Ut sit amet lorem ut tortor ultricies sollicitudin nec ac turpis. Aliquam ultricies quam ut fermentum luctus.',
            image: 'https://d2jyir0m79gs60.cloudfront.net/news/images/successful-college-student-lg.png' // Replace with actual image URL
        }
    ];

    return (
        <section className=" my-20 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Student Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 relative">
                            <FaQuoteLeft className="text-3xl absolute top-0 left-0 text-blue-500" />
                            <p className="text-gray-600 mb-4">{testimonial.message}</p>
                            <div className="flex items-center mb-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                                <div>
                                    <div className="text-gray-800 font-semibold">{testimonial.name}</div>
                                    <div className="text-gray-600">{testimonial.course}</div>
                                </div>
                            </div>
                            <div className="text-blue-500 hover:underline cursor-pointer">Read More</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
