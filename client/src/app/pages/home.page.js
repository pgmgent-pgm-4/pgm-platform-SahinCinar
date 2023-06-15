import {
  gql,
  useQuery,
} from "@apollo/client";
import { PostsListComponent } from '../components/posts';

// GraphQL queries
const POSTS = gql`
query GetPosts {
  posts(first: 3) {
    id
    title
  }
}
`;

const HomePage = () => {
  const { loading, error, data } = useQuery(POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
    <div class="p-5 mb-4 bg-light rounded-3">
    <div class="container-fluid py-5 text-center">
      <h1 class="display-5 fw-bold">PGM</h1>
      <p class="col-md-8 fs-4 text-center mx-auto">Tijdens het Graduaat Programmeren leer je het zichtbare (front-end) en onzichtbare (backend) deel van web- en mobiele toepassingen ontwikkelen. Je wordt specialist in JavaScript, HTML, CSS en vult jouw skills aan met o.a. PHP, Python, UI/UX. Naast deze technische kant, vergaar je ook algemene ICT-skills. Je leert ook hoe digital agencies werken en wat jouw rol hierbinnen zal zijn. Na deze opleiding kan je aan de slag als front-end developer, full-stack JavaScript developer, PHP developer, Web Designer + Coder of CMS Themer.</p>
      <a href="https://www.arteveldehogeschool.be/bij-ons-studeren/kom-kennismaken/infodagen" target="_blank"><button class="btn btn-primary btn-lg" type="button">Schrijf je in voor onze infodag van 25 juni!</button></a>
    </div>
  </div>
  <div class="mx-auto p-center align-middle">
<div class="container-fluid py-5 text-center">
            <h1 class="text-purple-500">Blogposts</h1>
            <PostsListComponent posts={data.posts} />
            </div>
          </div>
<div class="mx-auto p-center align-middle">
<div class="container-fluid py-3 text-center">
            <h1 class="text-purple-500">Services</h1>
            </div>
<div class="card mx-auto p-center align-middle m-4" style={{width: "30rem"}}>
<div class="card-body">
    <h5 class="card-title">Trajecten op maat</h5>
    <p class="card-text">Je kan deze opleiding spreiden over drie jaar. Mogelijk heb je ook recht op vrijstellingen.</p>
</div>
</div>
<div class="card mx-auto p-center align-middle m-4" style={{width: "30rem"}}>
<div class="card-body">
    <h5 class="card-title">Studieprogramma</h5>
    <p class="card-text">Bekijk het studieprogramma van de opleiding: vakken, modules, praktijk, projecten en aantal studiepunten.</p>
</div>
</div>
<div class="card mx-auto p-center align-middle m-4" style={{width: "30rem"}}>
<div class="card-body">
    <h5 class="card-title">Online inschrijven en studiegeld</h5>
    <p class="card-text">Keuze gemaakt? Bekijk hier hoe je kan inschrijven (volledig online), welke documenten je nodig hebt en hoeveel het studiegeld bedraagt.</p>
</div>
</div>
</div>
<footer class="d-flex justify-content-between flex-wrap bg-dark p-4">
     
     <ul class="list-inline">
       <li class="list-inline-item pl-2 border-left border-light">
         <a href="https://be.linkedin.com/company/graduaat-programmeren" class="text-white">Linkedin</a>
       </li>
     </ul>
     
     <div class="text-white">
       <small>&copy; PGM</small>
     </div>
    </footer>

</div>

  );
};

export default HomePage;