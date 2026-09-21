import { useEffect, useState } from "react"
import PostCard from "./PostCard"

function Posts() {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    const filteredPosts = posts.filter((post) => {
        
    })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
        .catch((error) => console.error('Error fetching Posts: ', error))
    }, [])

    return(
        <div className="container">
            <h1>Posts</h1>

            <input className="search" type="search" placeholder="Search posts..." value={search} onChange={(event) => setSearch(event.target,value)} />
                {posts.map((post) => (
                    <PostCard key={post.id}  post={post}/>
                ))}
        </div>
    );

}

export default Posts