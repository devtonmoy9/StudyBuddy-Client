import React, { useEffect, useState } from 'react';
import AssignmentCard from './AssignmentCard';


const Assignment = () => {
    const [datas, setDatas] = useState([]);
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    useEffect(() => {
        fetch(`https://group-grid-server.vercel.app/assignment`)
            .then(res => res.json())
            .then(data => setDatas(data));
    }, []);


    const handleFilterChange = (e) => {
        setDifficultyFilter(e.target.value);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold   text-center my-20">Assignments</h2>
            <div className="flex mb-20 items-center justify-center  ">
                <label htmlFor="difficultyFilter" className="mr-2 text-xl font-semibold">Filter by Difficulty Level:</label>
                <select
                    id="difficultyFilter"
                    value={difficultyFilter}
                    onChange={handleFilterChange}
                    className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none bg-green-600 text-white font-bold focus:border-blue-500"
                >
                    <option value="All">All</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                {datas.length > 0 ? (
                    datas
                        .filter(datas => difficultyFilter === 'All' || datas.difficultyLevel.toLowerCase() === difficultyFilter.toLowerCase())
                        .map(data => (
                            <AssignmentCard key={data._id} data={data}></AssignmentCard>
                        ))
                ) : (
                    <p className="text-center text-gray-600">No assignments available.</p>
                )}

            </div>
        </div>
    );
};

export default Assignment;