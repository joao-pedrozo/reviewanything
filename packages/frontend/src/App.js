import React from 'react';
import { useQuery } from 'relay-hooks';
import styled from 'styled-components';
import reviewQuery from './queries/reviewQuery';
import Review from './components/ReviewsList/Review';

function App() {
  const options = {
    fetchPolicy: 'store-or-network',
    networkCacheConfig: undefined,
  };

  const variables = {
    id: '5fff8a86e8687eebfea83e04',
  };

  const { data, error, retry, isLoading } = useQuery(
    reviewQuery,
    variables,
    options,
  );

  if (data && data.review) {
    return <Review title={data.review.title} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <h1> Loading </h1>;
}

export default App;
