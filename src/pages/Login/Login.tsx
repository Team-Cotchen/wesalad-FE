import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { ModalHeaderSection } from './ModalHeader';

interface TitleType {
  fontSize: string;
  marginBottom: string;
}

const Login: FunctionComponent = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isCheckBox, setIsCheckBox] = useState<boolean>(false);

  const activeCheckBox = () => {
    setIsCheckBox(!isCheckBox);
  };

  return (
    <Wrapper>
      <ModalWrapper>
        <ModalHeaderSection />
        {isLogin ? <LoginTab /> : <JoinTab />}
      </ModalWrapper>
    </Wrapper>
  );
};

const LoginTab = () => {
  return (
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
          <FcGoogle size={50} />
          <LoginTitle>구글로 로그인하기</LoginTitle>
        </LoginTitleSection>
      </TitleSection>
    </LoginContext>
  );
};

const JoinTab = () => {
  return (
    <JoinContext>
      <TitleSection>
        <IconSection>
          <IoIosArrowBack className="arrow" size={30} />
        </IconSection>
        <Title fontSize="28px" marginBottom="30px">
          KeunHwee님 환영합니다!
        </Title>
        <SubTitle fontSize="20px" marginBottom="20px">
          추가정보를 입력해주세요.
        </SubTitle>
        <JoinUserDetailSection>
          <JoinProfile
            alt="profile"
            src="https://avatars.githubusercontent.com/u/56650238?v=4"
          ></JoinProfile>
          <JoingDetail>
            <DetailTitle>기수</DetailTitle>
            <input />
            <DetailTitle>이름</DetailTitle>
            <input />
          </JoingDetail>
        </JoinUserDetailSection>
        <JoinSubmit>
          <JoinSubmitCheck>
            <input type="checkbox" />
            <label>개인정보수집 동의(필수)</label>
          </JoinSubmitCheck>
          <JoinSubmitBtn>제출</JoinSubmitBtn>
        </JoinSubmit>
      </TitleSection>
    </JoinContext>
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

const JoinContext = styled.div`
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

const TitleSection = styled.div`
  padding: 35px 70px 0px 70px;
`;

const Title = styled.h1<TitleType>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: 800;
`;

const SubTitle = styled.h1<TitleType>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.weightBold};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

const LoginTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginTitle = styled.h1`
  margin-left: 5px;
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightBold};
`;

const JoinUserDetailSection = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')};
`;

const JoinProfile = styled.img`
  width: 130px;
  height: 130px;
  margin-right: 30px;
  border-radius: 50%;
`;

const JoingDetail = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;

  input {
    height: 40px;
    padding: 0px 10px;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    font-size: 24px;
    line-height: 40px;
  }
`;

const DetailTitle = styled.h1`
  margin-top: 15px;
  font-size: 20px;
`;

const JoinSubmit = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.flexMixIn('end', 'center')}
`;

const JoinSubmitCheck = styled.div`
  ${({ theme }) => theme.flexMixIn(`center`, `end`)}
  height: 2.5rem;
  margin-bottom: 5px;

  input {
    width: 20px;
    height: 20px;
    cursor: pointer;
    ${({ theme }) => theme.flexMixIn(`center`, `center`)}
  }
`;

const JoinSubmitBtn = styled.button`
  width: 4rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.mainGreen};
  color: white;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  cursor: pointer;
`;
