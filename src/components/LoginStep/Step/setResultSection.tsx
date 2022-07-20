import React from 'react';
import styled from 'styled-components';
import { ITitle, ModalProps } from 'components/LoginStep/loginStep.types';

import { keyframes } from 'styled-components';
import { devices } from 'styles/devices';

const setResultSection = ({ handleClose }: ModalProps) => {
  return (
    <>
      <ResultSection>
        <Header>
          <Title fontSize="80px" marginBottom="20px">
            감사합니다!
          </Title>
        </Header>
        <SubmitSection>
          <SubmitBtn mode="submit" onClick={handleClose}>
            시작하기
          </SubmitBtn>
        </SubmitSection>
      </ResultSection>
    </>
  );
};

export default setResultSection;

const TitleHightLight = keyframes`
  0% {
    width:0%;
    box-shadow: inset 0 -25px #2de466;
  }
  50% {
    width:30%;
    box-shadow: inset 0 -25px #2de466;
  }
  100% {
    width:60%;
    box-shadow: inset 0 -25px #2de466;
  }
`;

const ResultSection = styled.div`
  padding: 9rem 4rem 0 4rem;
`;

const Header = styled.div``;

const Title = styled.h1<ITitle>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  text-align: start;

  &:after {
    content: '';
    display: block;
    width: 60%;
    height: 40px;
    position: absolute;
    background: #2de466;
    transform: translateY(-40px);
    z-index: -100;
    animation: ${TitleHightLight} 1.5s linear;
  }

  @media ${devices.laptop} {
    font-size: 60px;
  }

  @media ${devices.tablet} {
    font-size: ${({ theme }) => theme.fontLarge};
  }
`;

const SubmitSection = styled.div`
  ${({ theme }) => theme.flexMixIn('end', 'center')}
  margin-top : 7rem;
`;

const SubmitBtn = styled.button<{ mode: string }>`
  width: 5rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.mainGreen};
  color: white;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  font-family: 'Jua', sans-serif;
  cursor: pointer;

  @media ${devices.tablet} {
    width: 5rem;
    height: 2rem;
  }
`;
