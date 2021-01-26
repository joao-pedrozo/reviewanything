import logo from './logo.svg';
import './App.css';
import { useLazyLoadQuery, useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

function App() {
  const query = graphql`
    query reviewQuery($id: String){
      review(id: $id){
        _id
        title
        overall
      }
    }
`;

const options = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
}

const variables = {
  id: "5fff8a86e8687eebfea83e04"
}

  const teste = useQuery(query, variables, options);
console.log(teste);
  return (
    <div className="App">
      <h1>
        {teste.data.review.title}
      </h1>
    </div>
  );
}

export default App;
