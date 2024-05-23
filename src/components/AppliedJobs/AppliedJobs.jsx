import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";

import { MdLocationOn } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { Helmet } from 'react-helmet-async';

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [AppliedJobs, setAppliedJobs] = useState([]);
    const [DisplayJobs, setDisplayJobs] = useState([]);

    const handleJobFilter = filter => {
        if (filter == 'all') {
            setDisplayJobs(AppliedJobs);
        }
        else if (filter == 'remote') {
            const remoteJobs = AppliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter == 'onsite') {
            const OnsiteJobs = AppliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(OnsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            //console.log(jobsApplied);

            // Alternate
            // const appliedJobs =[];
            // for (const id of storedJobIds){
            //     const job =jobs.find(job => job.id ===id);
            //     if(job){
            //         appliedJobs.push(job)
            //     }
            // }
        }
    }, [])

    return (
        <div>
            <Helmet>
                <title>
                    Career Hub | Applied Jobs
                </title>
            </Helmet>
            <div className="flex w-full justify-between mb-6 ">
                <figure className="border w-1/6 content-end"><img className="" src="../src/assets/images/bg1.png" alt="Album" /></figure>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-4/6">
                        <h1 className="mb-5 text-5xl font-bold">Applied Jobs</h1>
                    </div>
                </div>
                <figure className="border w-1/6"><img className="" src="../src/assets/images/bg2.png" alt="Album" /></figure>
            </div>

            <div className='text-right'>
                {/* flex justify-between */}
                {/* <div>
                    <Link to={`/`}>
                        <button className="m-1 btn bg-[#d6a6e0] text-white font-bold">Return Home</button>
                    </Link>
                </div> */}
                <details className="dropdown">
                    <summary className="m-1 btn">Filter</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>Onsite</a></li>
                    </ul>
                </details></div>
            <div>
                {
                    DisplayJobs.map(AppliedJob => <div key={AppliedJob.id}>
                        {/* <span>{AppliedJob.job_title}</span>

                        <span>{AppliedJob.remote_or_onsite}</span>
                        <span>{AppliedJob.job_type}</span>

                        <span>{AppliedJob.location}</span>
                        <span>{AppliedJob.salary}</span> */}

                        <div className="flex flex-row card border my-6 mx-4 py-2 px-4">
                            <figure className="bg-slate-100 rounded-lg py-2 px-2"><img className="h-20" src={AppliedJob.logo} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {AppliedJob.job_title}

                                </h2>
                                <p>{AppliedJob.company_name}</p>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline px-4 py-2 border-[#7E90FE] font-bold text-[#9873FF]">{AppliedJob.remote_or_onsite}</div>
                                    <div className="badge badge-outline px-4 py-2 border-[#7E90FE] font-bold text-[#9873FF]">{AppliedJob.job_type}</div>
                                </div>
                                <div className="flex my-2">
                                    <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-1" />{AppliedJob.location}</h2>
                                    <h2 className="flex"><RiMoneyDollarBoxLine className="text-2xl mr-1" />{AppliedJob.salary}</h2>
                                </div>
                            </div>
                            <div className="card-actions content-center">
                                <Link to={`../job/${AppliedJob.id}`}>
                                    <button className="btn bg-[#9873FF] text-white font-bold">View Details</button>
                                </Link>
                            </div>
                        </div >
                    </div>
                    )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;

{/* <div className="card bg-slate-100 shadow-xl mt-2 py-2">
<figure className="py-2 px-1"><img className="h-20" src={logo} alt="" /></figure>
<div className="card-body">
    <h2 className="card-title">
        {job_title}

    </h2>
    <p>{company_name}</p>
    <div className="card-actions justify-start">
        <div className="badge badge-outline px-4 py-2 border-[#7E90FE] font-bold text-[#9873FF]">{remote_or_onsite}</div>
        <div className="badge badge-outline px-4 py-2 border-[#7E90FE] font-bold text-[#9873FF]">{job_type}</div>
    </div>
    <div className="flex my-2">
        <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-1" />{location}</h2>
        <h2 className="flex"><RiMoneyDollarBoxLine className="text-2xl mr-1" />{salary}</h2>
    </div>
    <div className="card-actions justify-start">
        <Link to={`job/${id}`}>
            <button className="btn bg-[#9873FF] text-white font-bold">View Details</button>
        </Link>
    </div>
</div>
</div > */}