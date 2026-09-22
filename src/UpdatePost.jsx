import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UpdatePost() {

    const {id} = useParams()

    const [post, setPost] = useState(null)
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => setPost(data))
        .catch((error) => console.log('Error fetching post: ', error))
    }, [id])

    return(
        <div className="edit-page">
            <h1>Edit Post</h1>
                        {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </>
            )}
        </div>
    );
}

export default UpdatePost