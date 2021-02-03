import React from 'react';
import { useQuery } from 'relay-hooks';
import reviewQuery from './queries/reviewQuery';

const options = {
  fetchPolicy: 'store-or-network',
  networkCacheConfig: undefined,
};

const variables = {
  id: '5fff8a86e8687eebfea83e04',
};

function App() {
  const { data, error, retry, isLoading } = useQuery(reviewQuery, variables, options);
  console.log(isLoading);
  if (data && data.review) {
    return <h1> {data.review.title} </h1>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <h1> Loading </h1>;
}

export default App;
