

const Banner = () => {
    return (
        <div className="md:flex flex-row my-4">
            <div className="py-6 mx-4 md:w-1/2">
                <h2 className="text-left text-5xl my-6">One Step <br /> Closer To Your <br /><span className="text-blue-300">Dream Job</span></h2>
                <p className="text-left text-small mb-4">Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                <button className="btn bg-[#9873FF] text-white font-bold">Get Started</button>

            </div>

            <figure className=" border md:w-1/2"><img className="" src="../src/assets/images/user.png" alt="Album" /></figure>
        </div>

    );
};

export default Banner;