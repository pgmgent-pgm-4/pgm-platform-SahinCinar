const PostDetailsComponent = ({post}) => {
  return (
    <div className="post-details">
      <h1>{post.title}</h1>
      <p>{post.summary}</p>
      <div className="">
        { post.text }
      </div>
    </div>
  )
};

export default PostDetailsComponent;