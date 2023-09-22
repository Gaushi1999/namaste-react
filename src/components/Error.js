import { useRouteError } from "react-router-dom";

const Error = () => { 
    // Hook for geeting routing error details
    const error = useRouteError();

    return (
    <div className="error-section">
        <h1>OOPS...</h1>
        <h3>Something went wrong please check you are on right track.</h3>
        <h3>{error.status}: {error.statusText}</h3>
    </div>
    );
}

export default Error;