import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import { Link } from "react-router-dom"

function Posts() {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const filteredPosts = posts.filter((post) => {
        const searchTerm = search.toLowerCase()
        const postTitle = post.title.toLowerCase()
        const postBody = post.body.toLowerCase()

        return postTitle.includes(searchTerm) || postBody.includes(searchTerm)
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch the posts')
            }
            return response.json()
        })
        .then((data) => {
            setPosts(data)
            setLoading(false)
        })
        .catch(() => {
            setError('Error fetching posts')
            setLoading(false)
        })
    }, [])

    return(
        <div className="container">
            <h1>Posts</h1>
            <div>
                <Link to={'/posts/create'}>
                <button className="crt-btn">Create</button>
                </Link>
                <input className="search" type="text" placeholder="Search posts..." value={search} onChange={(event) => setSearch(event.target.value)} />
            </div>
                {loading ? (<div className="loader"></div>) : error ? (
                    <p className="error-message">{error}</p>
                ) : filteredPosts.length > 0 ? (
                    <>
                        {filteredPosts.map((post) => (
                        <PostCard key={post.id}  post={post}/>
                ))}
                </>
                ) : (
                    <p>No posts found</p>
                )}
        </div>
    );

}

export default Posts