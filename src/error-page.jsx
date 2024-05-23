import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="my-64 text-center">
            <h1 className="font-bold text-4xl my-8">Oops!</h1>
            <p className="font-semibold mb-6">Sorry, an unexpected error has occurred.</p>
            <p className="italic">
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={`/`}>
                <button className="btn bg-[#d6a6e0] text-white font-bold">Return Home</button>
            </Link>
        </div>
    );
}