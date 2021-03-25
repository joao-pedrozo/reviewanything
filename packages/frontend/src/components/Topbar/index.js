import React, { useEffect } from 'react';
import styled from 'styled-components';
import graphql from 'babel-plugin-relay/macro';
import { useQuery } from 'relay-hooks';
import 'draft-js/dist/Draft.css';

import { AiOutlineUser } from 'react-icons/ai';

const meQuery = graphql`
  query Topbar_meQuery {
    me {
      username
    }
  }
`;

const TopBar = () => {
  const { data } = useQuery(meQuery);

  return (
    <MainWrapper>
      <LogoWrapper>
        <LogoReviewTerm>review</LogoReviewTerm>
        <LogoAnythingTerm>anything</LogoAnythingTerm>
      </LogoWrapper>

      {data && data.me ? (
        <PostReviewArea href="/postReview">
          <AiOutlineUser size={28} />
          <p>{data.me.username}</p>
          <p href="/postReview">Postar review</p>
        </PostReviewArea>
      ) : (
        <SignArea href="/signUp">
          <AiOutlineUser size={28} />
          <SignUpText>Entrar</SignUpText>
        </SignArea>
      )}
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dadada;
  background: #fff;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding: 15px 15%;
`;

const LogoWrapper = styled.a`
  display: flex;
  flex-direction: column;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const LogoReviewTerm = styled.p`
  color: black;
`;

const LogoAnythingTerm = styled.p`
  color: #e74c3c;
`;

const SignArea = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpText = styled.p`
  font-size: 16px;
`;

const PostReviewArea = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostReviewLink = styled.p``;

export default TopBar;
