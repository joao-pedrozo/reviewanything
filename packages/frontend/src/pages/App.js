import React from 'react';
import { useQuery } from 'relay-hooks';
import Review from '../components/ReviewsList/Review';
import graphql from 'babel-plugin-relay/macro';

const query = graphql`
  query AppQuery($id: String) {
    review(id: $id) {
      _id
      title
      overall
      imageUrl
    }
  }
`;

function App() {
  const options = {
    fetchPolicy: 'store-or-network',
    networkCacheConfig: undefined,
  };

  const variables = {
    id: '5fff8a86e8687eebfea83e04',
  };

  const { data, error, retry, isLoading } = useQuery(query, variables, options);

  if (data && data.review) {
    return <Review title={data.review.title} imageUrl={data.review.imageUrl} />;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  return <h1> Loading </h1>;
}

export default App;
