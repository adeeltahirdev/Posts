import { Link } from "react-router-dom";

function App() {
  return(
    <div className="container">
      <h1>Post App</h1>
      <Link to='/posts'>
        <button>Posts</button>
      </Link>
    </div>
  );
}

export default App
