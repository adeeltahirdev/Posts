import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"

function PostDetail() {
    const {id} = useParams()

    const [post, setPost] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.log('error fetching the Post: ', error))
    }, [id])


    return(
        <div className="pd">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="pd-btn">
                        <Link to={'/posts'}>
                        <button className="back-btn">Back</button>
                        </Link>
                        <Link to={'/'}>
                        <button className="home-btn">Home</button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
}

export default PostDetail