import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveJobApplication } from "../../Utility/localStorage";

import { Helmet } from 'react-helmet-async';

const Jobdetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);

    const handleApplyJob = () => {
        SaveJobApplication(idInt);
        toast("You have applied successfully");
    }
    console.log(id, job);

    return (

        <div>
            <Helmet>
                <title>
                    Career Hub | Job Details
                </title>
            </Helmet>
            <div className="flex w-full justify-between">
                <figure className="border w-1/6 content-end"><img className="" src="../src/assets/images/bg1.png" alt="Album" /></figure>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-4/6">
                        <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
                    </div>
                </div>
                <figure className="border w-1/6"><img className="" src="../src/assets/images/bg2.png" alt="Album" /></figure>
            </div>
            <div className="grid md:grid-cols-3 my-8 mx-4">
                <div className="md:col-span-2 pr-6">
                    <h2 className="text-base mb-4"><b>Job Description:</b> {job.job_description}</h2>
                    <h2 className="text-base mb-4"><b>Job Responsibility:</b> {job.job_responsibility}</h2>
                    <h2 className="text-base mb-4"><b>Educational Requirement:</b></h2>
                    <h2 className="text-base mb-4">{job.educational_requirements}</h2>
                    <h2 className="text-base mb-4"><b>Experience:</b></h2>
                    <h2 className="text-base mb-4">{job.experiences}</h2>
                </div>
                <div>
                    <div className="border rounded-md bg-blue-100 p-4">
                        <h2 className="font-bold mb-2">Job Details</h2>
                        <hr className="my-4 border-gray-300" />
                        <p className="mb-2"><b>Salary:</b> {job.salary}</p>
                        <p className="mb-2"><b>Job Title:</b> {job.job_title}</p>
                        <h2 className="font-bold mb-2">Contact Information</h2>
                        <hr className="my-4 border-gray-300" />
                        <p className="mb-2"><b>Phone:</b> {job.contact_information.phone}</p>
                        <p className="mb-2"><b>Email:</b> {job.contact_information.email}</p>
                        <p className="mb-2"><b>Address:</b> {job.contact_information.address}</p>
                    </div>
                    <div className="text-center my-4 ">
                        <button onClick={handleApplyJob} className="w-full btn bg-[#9873FF] text-white font-bold">Apply Now</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Jobdetails;