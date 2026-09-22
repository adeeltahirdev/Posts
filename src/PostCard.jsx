import { Link, Links } from "react-router-dom";

function PostCard(props) {

    let post = props.post



    return(
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}>
            <button>Read More</button>
            </Link>
            <Link to={'/posts/update'}>
                <button className="update-btn">Update</button>
            </Link>
        </div>
    );
}

export default PostCard