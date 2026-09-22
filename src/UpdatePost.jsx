import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdatePost() {

    const {id} = useParams()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch the post')
            }
            return response.json()
        })
        .then((data) => {
            setTitle(data.title)
            setBody(data.body)
        })
        .catch(() => {
            setError('Failed to fetch the post')
        })
    }, [id])

    const handleSubmit = (event) => {
        event.preventDefault()

        setError(null)

        if (title.trim() === '' || body.trim() === '') {
            setError('Title and body are required')
            return
        }

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
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to update the post')
            }    
            return response.json()}
        )
        .then((data) => {
            console.log(data)
            setSubmitting(false)
            navigate(`/posts/${id}`)
        })
        .catch(() => {
            setError('Failed to update the post')
            setSubmitting(false)
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
                    {error && <p>{error}</p>}
                    <button type="submit" className="update-btn" disabled={submitting}>
                        {submitting ? 'Updating...' : 'Update'}
                    </button>
                </form>
        </div>
    );
}

export default UpdatePost