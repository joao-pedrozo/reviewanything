import React from 'react';
import styled from 'styled-components';

const SearchReviewArea = () => {
  return (
    <MainWrapper>
      <ContentWrapper>
        <ReviewAnything>ReviewAnything</ReviewAnything>

        <InformationText>Pesquise por um review ou faça um!</InformationText>

        <SearchReviewInput></SearchReviewInput>
      </ContentWrapper>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: #e74c3c;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 300px;
`;

const ReviewAnything = styled.h1`
  font-size: 32px;
  color: #fff;
`;

const InformationText = styled.p`
  font-size: 14px;
  color: #fff;
`;

const SearchReviewInput = styled.input`
  width: 100%;
`;

export default SearchReviewArea;
