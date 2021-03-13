import React, { useEffect } from 'react';
import { useQuery } from 'relay-hooks';
import graphql from 'babel-plugin-relay/macro';

import Review from '../components/ReviewCard';
import Topbar from '../components/Topbar';
import SearchReviewArea from '../components/SearchReviewArea';

import { useAuth } from '../context/AuthContext';

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

  const { isLoggedIn } = useAuth();

  useEffect(() => {
    async function teste() {
      console.log(await isLoggedIn());
    }

    teste();
  }, []);

  if (data) {
    return (
      <>
        <Topbar />
        <SearchReviewArea />
        <Review data={data} />
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default App;
