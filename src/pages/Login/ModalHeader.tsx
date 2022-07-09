import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from 'assets/images/logo.png';
import { CgClose } from 'react-icons/cg';

export const ModalHeaderSection: FunctionComponent = () => {
  return (
    <ModalHeader>
      <Logo>
        <img alt="logo" src={logo} />
        <span>Wesalad</span>
      </Logo>
      <IconSection>
        <CgClose size={25} />
      </IconSection>
    </ModalHeader>
  );
};

const ModalHeader = styled.div`
  background-color: #dedede;
  height: 3rem;
  ${({ theme }) => theme.flexMixIn('space-between', 'center')}
  border-radius: 3px 3px 0px 0px;
`;

const Logo = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'flex-end')}
  width: 100px;
  padding: 10px 0px;

  img {
    width: 30px;
    height: 30px;
  }

  span {
    font-weight: ${({ theme }) => theme.weightBold};
    margin-left: 3px;
  }
`;

const IconSection = styled.div`
  padding: 10px 20px;

  .arrow {
    position: absolute;
    left: 15px;
    top: 80px;
  }
`;
