import Nav from 'components/Nav';
import React, { FunctionComponent, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from 'assets/images/logo.png';
import { AiOutlineCheck } from 'react-icons/ai';
import { CARDS_DATA } from 'pages/Main/cardsdata';

// interface PromocardsInterface {
//   id: string;
// }

const Main: FunctionComponent = () => {
  // const [promoCards, setPromoCards] = useState<PromocardsInterface>([]);
  return (
    <>
      <Nav />
      <Wrapper>
        <MainTypo>
          <MainText>
            <Text>FIND</Text>
            <TextTwo>YOUR</TextTwo>
            <TextThree>SALAD</TextThree>
          </MainText>
          <BtnWrapper>
            <FindCharacterBtn>내 협업 성향 알아보기</FindCharacterBtn>
            <BoardBtn>자랑보드 보러가기</BoardBtn>
          </BtnWrapper>
        </MainTypo>
        <SubTitle>
          <TitleText>
            다양한 재료가 만나 맛있는 샐러드가 만들어지듯이, 서로 다른 사람들이
            만나 특별하고 멋진 프로젝트가 만들어지지요.
          </TitleText>
          <TitleText>
            이번달 인기샐러드 구경하고 내 샐러드 찾으러 가보세요!
          </TitleText>
        </SubTitle>
        <DivisionLine />
        <PromoBox>
          <Head>
            <Description>서두르세요! 한 자리 남았어요!</Description>
            <HighlightLabel>
              비니빈 드레싱만 있으면 완성되는 샐러드!
            </HighlightLabel>
          </Head>
          <PromoCards>
            {CARDS_DATA.map(
              ({
                id,
                post_answer,
                post_stack,
                title,
                number_of_front,
                number_of_back,
                period,
                start_date,
                post_place,
              }) => (
                <PromoCard key={id}>
                  <StackLogos>
                    {post_stack.map(({ stack }) => (
                      <StackLogo key={stack.image_url}>
                        <Img src={stack.image_url} alt={stack.title} />
                      </StackLogo>
                    ))}
                  </StackLogos>
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
                        {number_of_front + number_of_back}명(프{' '}
                        {number_of_front}명 / 백 {number_of_back}명)
                      </DescriptionText>
                    </CardDescription>
                    <CardDescription>
                      <DescriptionIcon>
                        <AiOutlineCheck />
                      </DescriptionIcon>
                      <DescriptionText>{start_date} 시작</DescriptionText>
                    </CardDescription>
                  </CardDescriptions>
                  <ChacracterCardsWrapper>
                    {post_answer.map(({ answer }, index) => (
                      <ChacracterCardWrapper color="#693BFB" key={index}>
                        <CharacterCardImg
                          src={answer.image_url}
                          alt={answer.description}
                        />
                        <ChacracterCardText>
                          {answer.description}
                        </ChacracterCardText>
                      </ChacracterCardWrapper>
                    ))}
                  </ChacracterCardsWrapper>
                </PromoCard>
              ),
            )}
          </PromoCards>
        </PromoBox>
        <DivisionLineTwo />
        <PromoBox>
          <Head>
            <Description>나에게 꼭 맞는 샐러드 찾아볼까요?</Description>
            <HighlightLabel>내 취향에 맞는 샐러드 고르기</HighlightLabel>
          </Head>
          <FilterWrapper>
            {FILTER_LIST.map(({ id, name }) => (
              <FilterBtn key={id}>{name}</FilterBtn>
            ))}
          </FilterWrapper>
          <PromoCards>
            {CARDS_DATA.map(
              ({
                id,
                post_answer,
                post_stack,
                title,
                number_of_front,
                number_of_back,
                period,
                start_date,
                post_place,
              }) => (
                <RegularCard key={id}>
                  <StackLogos>
                    {post_stack.map(({ stack }) => (
                      <StackLogo key={stack.image_url}>
                        <Img src={stack.image_url} alt={stack.title} />
                      </StackLogo>
                    ))}
                  </StackLogos>
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
                        {number_of_front + number_of_back}명(프{' '}
                        {number_of_front}명 / 백 {number_of_back}명)
                      </DescriptionText>
                    </CardDescription>
                    <CardDescription>
                      <DescriptionIcon>
                        <AiOutlineCheck />
                      </DescriptionIcon>
                      <DescriptionText>{start_date} 시작</DescriptionText>
                    </CardDescription>
                  </CardDescriptions>
                  <ChacracterCardsWrapper>
                    {post_answer.map(({ answer }, index) => (
                      <ChacracterCardWrapper color="#b9b9b9" key={index}>
                        <CharacterCardImg
                          src={answer.image_url}
                          alt={answer.description}
                        />
                        <ChacracterCardText>
                          {answer.description}
                        </ChacracterCardText>
                      </ChacracterCardWrapper>
                    ))}
                  </ChacracterCardsWrapper>
                </RegularCard>
              ),
            )}
          </PromoCards>
        </PromoBox>
      </Wrapper>
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  margin: 65px 100px;
`;

const MainTypo = styled.div`
  margin-top: 120px;
`;

const MainText = styled.div`
  margin-top: 70px;
  ${({ theme }) => theme.flexMixIn}
  flex-direction: column;
`;

const linearAnimationOne = keyframes`

0% {
  background-color: black;
  -webkit-text-fill-color : transparent;
  -webkit-background-clip: text;
}
25%{
  background: linear-gradient(90deg, #2de466, #693bfb);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
50%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
100%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
`;

const linearAnimationTwo = keyframes`
0% {
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
25%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

}
50%{
  background: linear-gradient(90deg, #2de466, #693bfb);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
100%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
`;

const linearAnimationThree = keyframes`
0% {
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
25%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

}
50%{
  background-color: black;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
75%{
  background: linear-gradient(90deg, #2de466, #693bfb);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
`;

const Text = styled.h1`
  font-size: 160px;
  margin: 0 auto;
  font-weight: ${({ theme }) => theme.weightBold};
  letter-spacing: 5px;
  animation: ${linearAnimationOne} 8s infinite;
`;

const TextTwo = styled(Text)`
  animation: ${linearAnimationTwo} 8s infinite;
`;

const TextThree = styled(Text)`
  animation: ${linearAnimationThree} 8s infinite;
`;

const BtnWrapper = styled.div`
  margin: 60px auto;
  text-align: center;
`;

const FindCharacterBtn = styled.button`
  width: 250px;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  box-shadow: none;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const BoardBtn = styled(FindCharacterBtn)`
  background-color: white;
  border: 1px solid #c1c0c0;
  color: #5b5b5b;
  box-shadow: none;
  margin-left: 20px;
  &:hover {
    border: 1px solid black;
  }
`;

const SubTitle = styled.div`
  text-align: center;
`;

const TitleText = styled.div`
  color: #b9b9b9;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  line-height: 1.6em;
  background: none;
  ::selection {
    background-color: ${({ theme }) => theme.mainViolet};
  }
`;

const DivisionLine = styled.div`
  width: 2px;
  display: block;
  height: 100px;
  background: linear-gradient(#2de466, #693bfb);
  margin: 50px auto;
`;

const PromoBox = styled.div`
  margin: 40px 30px;
`;

const Head = styled.div`
  text-align: center;
  color: #b9b9b9;
`;

const HighlightLabel = styled.span`
  display: inline-block;
  color: black;
  font-size: 35px;
  line-height: 1.6em;
  margin-top: 10px;
  ::selection {
    background-color: ${({ theme }) => theme.mainGreen};
  }
`;

const PromoCards = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const PromoCard = styled.div`
  width: 33%;
  margin: 10px auto;
  padding: 20px 25px;
  border: 1px solid ${({ theme }) => theme.mainViolet};
  border-radius: 5px;
  background-color: white;
`;

const StackLogos = styled.div`
  display: flex;
  margin-bottom: 20px;
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
  font-size: ${({ theme }) => theme.fontMedium};
  line-height: 1.6em;
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

const CharacterCardImg = styled.img`
  width: 30px;
  height: 30px;
`;
const ChacracterCardText = styled.div`
  font-size: ${({ theme }) => theme.fontSemiMedium};
  margin-left: 5px;
`;

const DivisionLineTwo = styled(DivisionLine)`
  background: linear-gradient(#693bfb, #2de466);
`;

const FilterWrapper = styled.ul``;

const FilterBtn = styled.li`
  display: inline-block;
  margin-right: 10px;
  padding: 15px 25px;
  border-radius: 5px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.mainGreen};
  font-size: ${({ theme }) => theme.fontSemiMedium};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.mainGreen};
    color: black;
  }

  &:first-child {
    background-color: ${({ theme }) => theme.mainGreen};
  }
`;

const RegularCard = styled(PromoCard)`
  border: 1px solid #b9b9b9;
`;

const FILTER_LIST = [
  { id: 0, name: '모두 보기' },
  { id: 1, name: '위샐러드 추천!' },
  { id: 2, name: '매운맛' },
  { id: 3, name: '중간맛' },
  { id: 4, name: '순한맛' },
  { id: 5, name: '프론트엔드' },
  { id: 6, name: '백엔드' },
  { id: 7, name: '기술 스택' },
];

const STACK_LIST = [
  { id: 0, value: 'Javascript' },
  { id: 1, value: 'Typescript' },
  { id: 2, value: 'React' },
  { id: 3, value: 'Vue' },
  { id: 4, value: 'Node.js' },
  { id: 5, value: 'Spring' },
  { id: 6, value: 'Java' },
  { id: 7, value: 'Next.js' },
  { id: 8, value: 'Express' },
  { id: 9, value: 'Go' },
  { id: 10, value: 'C' },
  { id: 11, value: 'Python' },
  { id: 12, value: 'Django' },
  { id: 13, value: 'Swift' },
  { id: 14, value: 'Kotlin' },
  { id: 15, value: 'MySQL' },
  { id: 16, value: 'MongoDB' },
  { id: 17, value: 'PHP' },
  { id: 18, value: 'GraphQL' },
  { id: 19, value: 'Firebase' },
  { id: 20, value: 'ReactNative' },
  { id: 21, value: 'Unity' },
  { id: 22, value: 'Flutter' },
  { id: 23, value: 'AWS' },
  { id: 24, value: 'Kubernetes' },
  { id: 25, value: 'Docker' },
  { id: 26, value: 'Git' },
  { id: 27, value: 'Figma' },
  { id: 28, value: 'Zeplin' },
];
