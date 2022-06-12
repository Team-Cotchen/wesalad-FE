import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface CardProps {
  id?: string;
  ingredient?: string;
  name?: string;
  handleSelectedCards?: (e: React.MouseEvent<HTMLElement>) => void;
  isSelected?: boolean;
  size?: string;
}

const Card: FunctionComponent<CardProps> = ({
  ingredient,
  name,
  handleSelectedCards,
  isSelected,
  id,
  size,
}: CardProps) => {
  return (
    <CardWrapper
      onClick={handleSelectedCards}
      id={id}
      className="wrapper"
      isSelected={isSelected}
      size={size}
    >
      <Center>
        <Icon src={`/images/ingredients/${ingredient}.png`} />
        {name}
      </Center>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div<{ isSelected?: boolean; size?: string }>`
  display: inline-block;
  flex: 1;
  padding: ${(props) => (props.size === 'small' ? '7px ' : '10px')};
  margin: 10px 10px;
  border: 1px solid
    ${(props) => (props.isSelected ? theme.mainViolet : '#dbdbdb')};
  border-radius: 20px;
  cursor: pointer;
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
