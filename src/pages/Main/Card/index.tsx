import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export interface CardsProps {
  cardtype: string;
  title: string;
  period: string;
  number_of_front: number;
  number_of_back: number;
  start_date: string;
  post_stack: IPostStack[];
  post_place: IPostPlace[];
  post_answer: IPostAnswer[];
}

interface IPostStack {
  stack: {
    title: string;
    image_url: string;
  };
}

interface IPostPlace {
  place: {
    title: string;
  };
}
interface IPostAnswer {
  is_primary: boolean;
  answer: {
    question: {
      content: string;
    };
    content: string;
    description: string;
    image_url: string;
  };
}

const Card: FunctionComponent<CardsProps> = ({
  title,
  period,
  number_of_front,
  number_of_back,
  start_date,
  post_stack,
  post_place,
  post_answer,
  cardtype,
}) => {
  return (
    <MainCard cardtype={cardtype}>
      <CardTitle>{title}</CardTitle>
      <CardDescriptions>
        <CardDescription>
          <DescriptionIcon>
            <AiOutlineCheck />
          </DescriptionIcon>
          <DescriptionText>
            {post_place[0].place.title} / {period}
          </DescriptionText>
        </CardDescription>
        <CardDescription>
          <DescriptionIcon>
            <AiOutlineCheck />
          </DescriptionIcon>
          <DescriptionText>
            {number_of_front + number_of_back}명(프 {number_of_front}명 / 백{' '}
            {number_of_back}명)
          </DescriptionText>
        </CardDescription>
        <CardDescription>
          <DescriptionIcon>
            <AiOutlineCheck />
          </DescriptionIcon>
          <DescriptionText>{start_date} 시작</DescriptionText>
        </CardDescription>
      </CardDescriptions>
      <CharacterCardAndStakLogos>
        <ChacracterCardsWrapper>
          <CardsDescription>이런 분을 찾아요!</CardsDescription>
          {post_answer.map(({ answer }) => (
            <ChacracterCardWrapper color="#693BFB" key={answer.image_url}>
              <CharacterCardImg
                src={answer.image_url}
                alt={answer.description}
              />
              <ChacracterCardText>{answer.description}</ChacracterCardText>
            </ChacracterCardWrapper>
          ))}
        </ChacracterCardsWrapper>
        <StackLogos>
          {post_stack.map(({ stack }) => (
            <StackLogo key={stack.image_url}>
              <Img src={stack.image_url} alt={stack.title} />
            </StackLogo>
          ))}
        </StackLogos>
      </CharacterCardAndStakLogos>
    </MainCard>
  );
};

export default Card;

interface IMainCard {
  cardtype: string;
}

const MainCard = styled.div<IMainCard>`
  width: 400px;
  height: 550px;
  margin-right: 20px;
  padding: 20px 25px;
  border: 1px solid
    ${({ theme, cardtype }) =>
      cardtype === 'promo' ? theme.mainViolet : '#b9b9b9'};
  border-radius: 5px;
`;

const StackLogos = styled.div`
  display: flex;
  margin-top: 20px;
`;

const StackLogo = styled.div`
  height: 40px;
  width: 40px;
  margin-right: 8px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontMedium};
  font-weight: ${({ theme }) => theme.weightSemiBold};
  line-height: 1.3em;
  height: 70px;
`;

const CardDescriptions = styled.div`
  margin: 15px 10px;
`;

const CardDescription = styled.div`
  margin-bottom: 10px;
`;

const DescriptionIcon = styled.span`
  margin-right: 5px;
`;

const DescriptionText = styled.span`
  font-size: ${({ theme }) => theme.fontRegular};
  color: #8e8e8e;
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSmall};
  padding-top: 5px;
  padding-left: 3px;
  letter-spacing: 3px;
`;

const CharacterCardAndStakLogos = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChacracterCardsWrapper = styled.div`
  margin-top: 30px;
`;

const ChacracterCardWrapper = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  margin: 10px;
  padding: 7px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
`;

const CardsDescription = styled.div`
  margin-left: 10px;
`;

const CharacterCardImg = styled.img`
  width: 30px;
  height: 30px;
`;
const ChacracterCardText = styled.div`
  font-size: ${({ theme }) => theme.fontSemiMedium};
  margin-left: 5px;
  font-family: Jua;
`;
