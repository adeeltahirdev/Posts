import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div>
            <h1>This Page does not exist!</h1>
            <Link to={'/'}>
                <button>Go Back Home</button>
            </Link>
        </div>
    );
}

export default NotFound