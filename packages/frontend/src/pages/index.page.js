import React from 'react';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

import { useSession } from 'next-auth/client';
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
  const { data, error, retry, isLoading } = useQuery(query, {
    id: '5fff8a86e8687eebfea83e04',
  });

  const [session, loading] = useSession();
  if (data) {
    return (
      <>
        <Topbar />
        <SearchReviewArea />
        <Review data={data} />
      </>
    );
  } else {
    return <h1>Loading</h1>
  }
}

export default App;