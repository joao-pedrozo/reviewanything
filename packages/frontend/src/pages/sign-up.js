import React from 'react';
import styled from 'styled-components';

const SignUp = () => {
    return (
        <PageWrapper>
            <PageTopCicle />
            <PageBottomCicle/>
            <ContentWrapper>
                <Logo>
                    RA
                </Logo>

                <DisclaimerText>
                    É rapidinho :)
                </DisclaimerText>

                <CreateAccountTitle>
                    Crie uma conta
                </CreateAccountTitle>
                <FormSeparator>
                    <hr></hr>
                    <hr></hr>
                </FormSeparator>
            </ContentWrapper>
        </PageWrapper>
    )
}

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageTopCicle = styled.div`
    width: 250px;
    height: 250px;
    background-color:#e74c3c;
    position: absolute;
    border-radius: 50%;
    right: -125px;
    top: -125px;
`;

const PageBottomCicle = styled.div`
    width: 250px;
    height: 250px;
    background-color:#e74c3c;
    position: absolute;
    border-radius: 50%;
    bottom: -125px;
    left: -125px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 55px;

    hr {
        width: 91px;
        padding: 0 5px;
    }
`;

const FormSeparator = styled.div`
    display: flex;
`;

const Logo = styled.p`
    color: #e74c3c;
    font-size: 44px;
    letter-spacing: -6px;
    margin-bottom: 62px;
    font-weight: bold;
`;

const DisclaimerText = styled.p`
    font-size: 16px;
`;

const CreateAccountTitle = styled.h2`
    font-size: 24px;
`;

export default SignUp;