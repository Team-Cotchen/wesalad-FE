import React, { useCallback, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { ModalHeaderSection } from './ModalHeader';
import { useSelector, useDispatch } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import logIn from '../../redux/actions/login';
import { RootState } from '../../redux/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();

interface ITitle {
  fontSize: string;
  marginBottom: string;
}

const Login: React.FC = () => {
  const login = useSelector((state: RootState) => state.login.data);
  const dispatch = useDispatch<AppDispatch>();

  const getGoogleNumber = useCallback(() => {
    dispatch(logIn());
  }, []);

  console.log(login);

  return (
    <Wrapper>
      <ModalWrapper>
        <ModalHeaderSection />
        <LoginContext>
          <TitleSection>
            <IconSection>
              <IoIosArrowBack className="arrow" size={30} />
            </IconSection>
            <Title fontSize="80px" marginBottom="40px">
              환영합니다!
            </Title>
            <SubTitle fontSize="24px" marginBottom="70px">
              우선, 로그인부터 해볼까요?
            </SubTitle>
            <LoginTitleSection>
              <LoginBtn onClick={getGoogleNumber}>
                <FcGoogle size={50} />
                <div>구글로 로그인하기</div>
              </LoginBtn>
            </LoginTitleSection>
          </TitleSection>
        </LoginContext>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.section`
  ${({ theme }) => theme.wrapper()}
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  height: 100vh;
`;

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 675px;
  height: 30rem;

  box-shadow: rgb(0 0 0 / 2%) -14px -14px 20px, rgb(0 0 0 / 5%) 14px 14px 20px;
  background-color: white;
  z-index: 10;
`;

const LoginContext = styled.div`
  height: 100%;
  border-radius: 0px 0px 3px 3px;
`;

const IconSection = styled.div`
  padding: 10px 20px;

  .arrow {
    position: absolute;
    left: 15px;
    top: 80px;
  }
`;

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

const SubTitleHightLight = keyframes`
  0% {
    width:0%;
    box-shadow: inset 0 -25px #2de466;
  }
  50% {
    width:20%;
    box-shadow: inset 0 -25px #2de466;
  }
  100% {
    width:40%;
    box-shadow: inset 0 -25px #2de466;
  }
`;

const TitleSection = styled.div`
  padding: 35px 70px 0px 70px;
`;

const Title = styled.h1<ITitle>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;

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
`;

const SubTitle = styled.h1<ITitle>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  height: 40px;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.weightBold};

  &:after {
    content: '';
    display: block;
    width: 40%;
    height: 20px;
    position: absolute;
    transform: translateY(-10px);
    z-index: -100;
    animation: ${SubTitleHightLight} 1.5s linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`;

const LoginTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: none;
  cursor: pointer;
`;

const LoginBtn = styled.button`
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightBold};
  cursor: pointer;

  div {
    height: 50px;
    margin-left: 5px;
    line-height: 50px;
    font-family: 'Jua', sans-serif;
  }
`;
