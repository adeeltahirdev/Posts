import { useEffect, useState } from "react"
import PostCard from "./PostCard"
import { Link } from "react-router-dom"

function Posts() {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    const [loading, setLoading] = useState(true)

    const filteredPosts = posts.filter((post) => {
        const searchTerm = search.toLowerCase()
        const postTitle = post.title.toLowerCase()
        const postBody = post.body.toLowerCase()

        return postTitle.includes(searchTerm) || postBody.includes(searchTerm)
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            setPosts(data)
            setLoading(false)
        })
        .catch((error) => console.error('Error fetching Posts: ', error))
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
                {loading ? (<div className="loader"></div>) : (
                    <>
                        {filteredPosts.map((post) => (
                        <PostCard key={post.id}  post={post}/>
                ))}
                </>
                )}
        </div>
    );

}

export default Posts