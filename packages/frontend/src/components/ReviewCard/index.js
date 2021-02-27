import React from 'react';
import styled from 'styled-components';

import { AiFillStar } from 'react-icons/ai';

const App = ({ data }) => {
  return (
    <Wrapper>
      <TitleArea>
        <p> {data.review.title}</p>
      </TitleArea>

      <ImageArea>
        <img
          src={data.review.imageUrl}
          alt={`Imagem de ${data.review.title}`}
        />
      </ImageArea>

      <BottomContainer>
        <OverallContainer>
          <AiFillStar size={18} />
          <Overall>{data.review.overall}</Overall>
        </OverallContainer>

        <TagContainer></TagContainer>
      </BottomContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 15px;
  border-radius: 4px;

  border: 1px solid black;
`;

const TitleArea = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  padding: 6px;
  background: #ccc;

  p {
    font-size: 14px;
  }
`;

const ImageArea = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 2px;
`;

const OverallContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Overall = styled.p`
  font-size: 18px;
`;

const TagContainer = styled.div``;

export default App;
