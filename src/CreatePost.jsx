
function CreatPost() {
    return(
        <div className="container">
            <h1>Create A Post</h1>
            <div className="post-card">
                <label className="label">Post title:</label>
                <input className="title" type="text" />
                <label className="label">Post Body:</label>
                <textarea className="text-area"></textarea>
                <button className="submit-btn" type="submit">Submit</button>
            </div>
        </div>
    );
}

export default CreatPost