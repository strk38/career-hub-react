import { useEffect, useState } from "react";

const JobCategoryList = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])
    console.log(jobs);
    return (
        <div>
            <div className="text-center my-4">
                <h2 className="text-4xl mb-2">Job Category List</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className="md:flex justify-between mx-4 my-8">
                    {
                        jobs.map(job => <div className='' key={job.id}>
                            <div className="card border bg-base-100">

                                <div className="card-body text-left">
                                    <img className="h-10 w-14" src={job.logo} alt="" />
                                    <h2 className="text-lg font-bold">{job.category_name}</h2>
                                    <p className="text-sm font-light">{job.availability}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategoryList;