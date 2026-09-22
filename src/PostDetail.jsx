import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

function PostDetail() {
    const {id} = useParams()

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setPost(data)
            setLoading(false)
        })
        .catch((error) => {
            console.log('error fetching the Post: ', error)
            setLoading(false)
        })
    }, [id])

    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this post?')

        if (!confirmed) return
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                navigate('/posts')
            }
        })
    }


    return(
        loading ? (<div className="loader"></div>) :
        (<div className="pd">
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <div className="pd-btn">
                        <Link to={'/posts'}>
                        <button className="back-btn">Posts</button>
                        </Link>
                        <Link to={`/posts/${id}/update`}>
                        <button className="edit-btn">Edit</button>
                        </Link>
                        <button className="del-btn" onClick={handleDelete}>Delete</button>
                        <Link to={'/'}>
                        <button className="home-btn">Home</button>
                        </Link>
                    </div>
                </>
            )}
        </div>)
    );
}

export default PostDetail