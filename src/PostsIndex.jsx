export function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All Posts</h1>
      {props.posts.map((post) => (
        <div key={post.id} className="posts">
          <div className="card">
            <img src={post.image} className="d-block w-30" alt="..." />
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <button onClick={() => props.onSelectPost(post)} className="btn btn-outline-info">
              Go somewhere
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
