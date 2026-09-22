import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"

function PostDetail() {
    const {id} = useParams()

    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const[deleting, setDeleting] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch post')
            }
            return response.json()
        })
        .then((data) => {
            setPost(data)
            setLoading(false)
        })
        .catch(() => {
            setError('Error fetching post')
            setLoading(false)
        })
    }, [id])

    const handleDelete = () => {
        const confirmed = window.confirm('Are you sure you want to delete this post?')

        if (!confirmed) return

        setDeleting(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                navigate('/posts')
            }
            else {
                setError('Post could not be deleted')
                setDeleting(false)
            }
        })
        
        .catch(() => {
            setError('Failed to delete the post')
            setDeleting(false)
        })
    }


    return(
        loading ? (<div className="loader"></div>) : error ? (
            <p>{error}</p>
        ) :
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
                        <button className="del-btn" onClick={handleDelete} disabled={deleting}>
                            {deleting ? 'Deleting...' : 'Delete'}
                        </button>
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