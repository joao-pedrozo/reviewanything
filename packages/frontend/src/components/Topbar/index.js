import React from 'react';
import styled from 'styled-components';

import { AiOutlineUser } from 'react-icons/ai';

const TopBar = () => {
  return (
    <MainWrapper>
      <LogoWrapper>
        <LogoReviewTerm>review</LogoReviewTerm>
        <LogoAnythingTerm>anything</LogoAnythingTerm>
      </LogoWrapper>

      <SignArea >
        <AiOutlineUser size={28} />
        <SignUpText>Entrar</SignUpText>
      </SignArea>
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

export default TopBar;
