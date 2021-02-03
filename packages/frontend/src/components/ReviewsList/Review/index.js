import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  background: orange;
`;

const ReviewImageContainer = styled.div``;

const ReviewInfoContainer = styled.div``;

const App = (props) => {
  return (
    <Wrapper>
      {props.imageUrl}
      <ReviewImageContainer>
        <img src={props.imageUrl} />
      </ReviewImageContainer>

      <ReviewInfoContainer></ReviewInfoContainer>
    </Wrapper>
  );
};

export default App;
