import { MdLocationOn } from "react-icons/md";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div>


            <div className="card bg-slate-100 shadow-xl mt-2 py-2 my-4">
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
            </div >
        </div >
    );
};

export default Job;