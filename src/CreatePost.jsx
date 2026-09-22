import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost() {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const [submitting, setSubmitting] = useState(false)

    const navigate = useNavigate()
    
    const handleSubmit = (event) => {
        event.preventDefault()

        setSubmitting(true)

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title,
                body: body,
                userId: 1
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setSubmitting(false)
            navigate('/posts')
        })
    }
 
    return(
        <div className="container">
            <h1>Create A Post</h1>
            <form onSubmit={handleSubmit}>    
                <div className="post-card">
                    <label className="label">Post title:</label>
                    <input className="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    <label className="label">Post Body:</label>
                    <textarea className="text-area" value={body} onChange={(event) => setBody(event.target.value)}></textarea>
                    <button className="submit-btn" type="submit" disabled={submitting}>
                        {submitting ? 'Creating...' : 'Submit'}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreatePost