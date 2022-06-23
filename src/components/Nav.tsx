import React, { useState } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const checkIfLoggedIn = () => {
    if (!isLoggedIn) {
      return;
    }
    navigate('/creation');
  };

  return (
    <Wrapper>
      <NavBox>
        <NavLeft onClick={() => navigate('/')}>
          <LogoImg src={logo} alt="logo" />
          <Logo>wesalad</Logo>
        </NavLeft>
        <NavRight>
          <NewPost onClick={() => checkIfLoggedIn()}>새 글 쓰기</NewPost>
          <Login>로그인</Login>
        </NavRight>
      </NavBox>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.div`
  padding: 15px 0;
  position: fixed;
  top: 0;
  z-index: 5;
  width: 100%;
  border-bottom: 1px solid #dfe1e6;
  background-color: white;
`;

const NavBox = styled.div`
  padding: 0px 110px;
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
`;

const NavLeft = styled.div`
  ${({ theme }) => theme.flexMixIn}

  &:hover {
    cursor: pointer;
  }
`;

const LogoImg = styled.img`
  margin: 0 10px;
  width: 30px;
  height: 30px;
`;

const Logo = styled.span`
  font-size: ${({ theme }) => theme.fontMedium};
  display: inline-block;
`;

const NavRight = styled.div`
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
`;

const NewPost = styled.div`
  margin-right: 30px;
  font-size: ${({ theme }) => theme.fontRegular};
  &:hover {
    cursor: pointer;
  }
`;

const Login = styled.div`
  font-size: ${({ theme }) => theme.fontRegular};
  background-color: ${({ theme }) => theme.mainGreen};
  padding: 7px 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.mainGreen};

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;
