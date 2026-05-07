import React from 'react';

const FAQ = () => {
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center my-10'>Frequently Asked Questions</h1>
            <div className=' px-2 flex md:flex-row flex-col justify-center items-center  gap-5'>
                <div className='md:w-1/2'>
                    <img className='rounded-2xl' src="https://www.searchenginejournal.com/wp-content/uploads/2022/07/faq-632c0874710c1-sej.png" alt="" />
                </div>
                <div className="join join-vertical 1/2">
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" id="faq1" />
                        <div className="collapse-title text-xl font-medium">
                            What is the purpose of this application?
                        </div>
                        <div className="collapse-content">
                            <p>The purpose of this application is to facilitate online group study sessions among friends.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" id="faq2" />
                        <div className="collapse-title text-xl font-medium">
                            How can I create a new assignment?
                        </div>
                        <div className="collapse-content">
                            <p>To create a new assignment, you need to navigate to the "Create Assignment" page and fill out the required information.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow join-item border border-base-300">
                        <input type="radio" name="faq-accordion" id="faq3" />
                        <div className="collapse-title text-xl font-medium">
                            Can I delete an assignment created by another user?
                        </div>
                        <div className="collapse-content">
                            <p>No, you can only delete assignments that you have created yourself.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
