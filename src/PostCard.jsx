
function PostCard(props) {

    let post = props.post



    return(
        <div className="card">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default PostCard