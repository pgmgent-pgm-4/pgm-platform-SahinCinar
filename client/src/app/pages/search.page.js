
import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { settings } from '../config';
  import { NavLink } from "react-router-dom";

  // GraphQL queries
const POST = gql`
query Team {
    teams {
      id
      name
      type
      image
    }
  }
  
`;


const data = null;


const SearchPage = () => {
    const obj = {};
    const { loading, error, data } = useQuery(POST);
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    const change = (e) => {
        const value = e.target.value.toLowerCase();
        console.log(data)
    } 


    return (
    <div class="mx-auto p-center align-middle">
            <div class="container-fluid py-5 text-center">
            <h1 class="text-purple-500">Zoeken</h1>
        </div>
        <div class="col-md-4 offset-md-4 mt-5 pt-3">
<div class="input-group mb-3">
  <input type="text" class="form-control" onChange={change}  placeholder="Zoeken..." aria-label=""></input>
  <div class="input-group-append">
    <span class="input-group-text"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"/></svg></span>
  </div>
  </div>
  
  <ul>
    {data.teams.map((team) => (
          <div class="card mx-auto p-center align-middle m-4" style={{width: "18rem"}}>
          <div class="card-body">
              <h5 class="card-title"> { team.name } </h5>
                <NavLink to={`/posts/${team.id}`}>
                    <button type="button" class="btn btn-success">View team member</button>
                </NavLink>  
          </div>
      </div>
    ))}
    </ul>
</div>

    </div>
    );
  };
  
  export default SearchPage;

  