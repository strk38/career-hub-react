import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOPS !!! You run into Error </h2>
            <Link to='/'>Return to Home</Link>
        </div>
    );
};

export default ErrorPage;