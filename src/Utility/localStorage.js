const getStoredJobApplication = () => {
    const storedJobApplications = localStorage.getItem('job-applications');
    if (storedJobApplications) {
        return JSON.parse(storedJobApplications);
    } else {
        return [];
    }

}


const SaveJobApplication = id => {
    const storedJobApplications = getStoredJobApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobApplications))
    }
}

export { getStoredJobApplication, SaveJobApplication }