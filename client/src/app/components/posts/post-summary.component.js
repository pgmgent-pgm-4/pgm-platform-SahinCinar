import { NavLink } from "react-router-dom";

const PostSummaryComponent = ({post}) => {
  return (
    <div class="row">
    <div class="col-md-12 col-xs-12">
    <div className="post-summary">
    <h2>{post.title}</h2>

      <div class="wrapper">
                        <div class="box"></div>
                        <p >{ post.summary} </p>
                        <NavLink to={`/posts/${post.id}`}>

                        <button type="button" class="btn btn-success">Lees meer</button>
                        </NavLink>  

                     </div>
					  <hr></hr>
                  </div>
				 
    </div>
    </div>
  )
};

export default PostSummaryComponent;