import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface CardProps {
  id?: string;
  ingredient?: string;
  name?: string;
  handleSelectedCards?: (e: React.MouseEvent<HTMLElement>) => void;
  isAdditional?: boolean;
  isPrimary?: boolean;
  size?: string;
  type?: () => 'additional' | 'primary' | undefined;
  image_url?: string;
}

const Card: FunctionComponent<CardProps> = ({
  ingredient,
  name,
  handleSelectedCards,
  isAdditional,
  isPrimary,
  id,
  size,
  type,
  image_url,
}: CardProps) => {
  return (
    <CardWrapper
      onClick={handleSelectedCards}
      id={id}
      className="wrapper"
      isAdditional={isAdditional}
      isPrimary={isPrimary}
      size={size}
      type={type ? type() : undefined}
    >
      <Center>
        <Icon src={image_url} />
        {name}
      </Center>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div<{
  isPrimary?: boolean;
  isAdditional?: boolean;
  size?: string;
  type: 'additional' | 'primary' | undefined;
}>`
  display: inline-block;
  flex: 1;
  padding: ${({ size }) => (size === 'small' ? '7px ' : '10px')};
  margin: 10px 10px;

  border: ${({ type }) => {
    const borderType = type ? type : 'default';
    const borderStyle = {
      primary: `1px solid #F23D3D`,
      additional: `1px solid ${theme.mainViolet}`,
      default: '1px solid #dbdbdb',
    };

    return borderStyle[borderType];
  }};
  border-radius: 20px;
  background: white;
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
