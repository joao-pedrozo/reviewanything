import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const PageTopCicle = styled.div`
    width: 250px;
    height: 250px;
    background-color:#e74c3c;
    position: absolute;
    border-radius: 50%;
    right: 0;
`;

const PageBottomCicle = styled.div`
    width: 250px;
    height: 250px;
    background-color:#e74c3c;
    position: absolute;
    border-radius: 50%;
`;

const ContentWrapper = styled.div`

`;

const Logo = styled.p`

`;

const SignUp = () => {
    return (
        <PageWrapper>
            <PageTopCicle />
            <PageBottomCicle/>
        </PageWrapper>
    )
}

export default SignUp;