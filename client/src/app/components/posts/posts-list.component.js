import { Outlet } from "react-router-dom";
import PostSummaryComponent from "./post-summary.component";

const PostsListComponent = ({posts}) => {
  return (
                <div class="mx-auto p-center align-middle col-md-10 m-4">

    <div className="container-fluid">
      {posts && posts.map((post) => (
       
        <PostSummaryComponent key={post.id} post={post} />

      ))}
      <Outlet />
    </div>
    </div>
  )
};

export default PostsListComponent;