import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface CardProps {
  ingredient?: string;
  name?: string;
}

const Card: FunctionComponent<CardProps> = ({
  ingredient,
  name,
}: CardProps) => {
  return (
    <CardWrapper>
      <Center>
        <Icon src={`/images/ingredients/${ingredient}.png`} />
        {name}
      </Center>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div<{ isSelected?: boolean }>`
  display: inline-block;
  flex: 1;
  padding: 10px;
  margin: 10px 10px;
  border: 1px solid
    ${(props) => (props.isSelected ? theme.mainViolet : '#dbdbdb')};
  border-radius: 20px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  margin-right: 4px;
  width: 21px;
  height: 21px;
`;
