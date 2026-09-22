import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePost() {

    const {id} = useParams()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((data) => {
            setTitle(data.title)
            setBody(data.body)
        })
        .catch((error) => console.log('Error fetching post: ', error))
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault()

        setSubmitting(true)

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body,
                userId: 1,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setSubmitting(false)
            navigate(`/posts/${id}`)
        })
    }

    return(
        <div className="container">
            <h1>Edit Post</h1>
                <form onSubmit={handleSubmit} className="post-card">
                    <label className="label">Title:</label>
                    <input
                        className="title"
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <label className="label">Body:</label>
                    <textarea
                        className="text-area"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    ></textarea>
                    <button type="submit" className="update-btn" disabled={submitting}>
                        {submitting ? 'Updating...' : 'Update'}
                    </button>
                </form>
        </div>
    );
}

export default UpdatePost