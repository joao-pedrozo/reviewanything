import React from 'react';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

import Review from '../components/ReviewCard';
import Topbar from '../components/Topbar';
import SearchReviewArea from '../components/SearchReviewArea';

function App() {
  const query = graphql`
    query pages_indexQuery($id: String) {
      review(id: $id) {
        _id
        title
        overall
        imageUrl
      }
    }
  `;

  const options = {
    fetchPolicy: 'store-or-network',
    networkCacheConfig: undefined,
  };

  const variables = {
    id: '5fff8a86e8687eebfea83e04',
  };

  const { data, error, retry, isLoading } = useQuery(query, variables, options);

  if (data && data.review) {
    return (
      <>
        <Topbar />
        <SearchReviewArea />
        <Review data={data} />
      </>
    );
  } else if (error) {
    return <div>{{error}}</div>;
  }
  return <h1> Loading </h1>;
}

export default App;
