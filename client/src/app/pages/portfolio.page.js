import {
    gql,
    useQuery,
  } from "@apollo/client";
  import { Spinner } from 'reactstrap';


const POSTS = gql`
query GetUsers {
  users {
    id
    name
  }
}
`;
const OpleidingPage = () => {
    const { loading, error, data } = useQuery(POSTS);

    if (loading) return <Spinner
      color="primary"
      size=""
      type="grow"
    >
      Loading...
    </Spinner>;
    if (error) return <p>Error :(</p>;

    return (
    <div class="mx-auto p-center align-middle">
            <div class="container-fluid py-5 text-center">
            <h1 class="text-purple-500">Portfolio</h1>
            </div>

        {data.users && data.users.map((user) => (
        <div class="card mx-auto p-center align-middle m-4" style={{width: "60rem"}}>
            <div class="card-body">
                <h5 class="card-title">{user.name}</h5>
                <a>

                <button type="button" class="btn btn-success">Klik voor portfolio</button>
                </a>  
            </div>
        </div>
        ))};
    </div>
    );
  };
  
  export default OpleidingPage;