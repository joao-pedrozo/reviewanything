import React, { useEffect } from 'react';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

import Review from '../components/ReviewCard';
import Topbar from '../components/Topbar';
import SearchReviewArea from '../components/SearchReviewArea';

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

function App() {
  const reviewData = useQuery(query, {
    id: '5fff8a86e8687eebfea83e04',
  });

  if (reviewData.data) {
    return (
      <>
        <Topbar />
        <SearchReviewArea />
        <Review data={reviewData.data} />
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
