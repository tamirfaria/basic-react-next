import './styles.css'

export const PostCard = ({ post }) => (
  <div className="post">
    <img src={post.cover} alt={post.title} className="post-image" />
    <div className="post-content">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  </div>
);
