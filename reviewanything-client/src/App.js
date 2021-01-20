import logo from './logo.svg';
import './App.css';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

function App() {
  const query = graphql`
    review(id: "5ffb950068a611a459fa1e63"){
      id
      title
      text
    }
  }
`;

const options = {
  fetchPolicy: 'store-or-network', //default
  networkCacheConfig: undefined,
}

  const { data } = useQuery(query);

  return (
    <div className="App">
      <h1>
        {data}
      </h1>
    </div>
  );
}

export default App;
