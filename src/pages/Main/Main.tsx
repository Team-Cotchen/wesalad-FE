import Nav from 'components/Nav';
import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from 'assets/images/logo.png';
import { AiOutlineCheck } from 'react-icons/ai';

const Main: FunctionComponent = () => {
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
        <PromoBox>
          <Head>
            <Description>서두르세요! 한 자리 남았어요!</Description>
            <HighlightLabel>
              비니빈 드레싱만 있으면 완성되는 샐러드!
            </HighlightLabel>
          </Head>
          <PromoCards>
            <PromoCard>
              <StackLogos>
                <StackLogo>
                  <Img src={logo} alt="" />
                </StackLogo>
                <StackLogo>
                  <Img src={logo} alt="" />
                </StackLogo>
              </StackLogos>
              <CardTitle>프로젝트 팀원 구해요</CardTitle>
              <CardDescriptions>
                <CardDescription>
                  <DescriptionIcon>
                    <AiOutlineCheck />
                  </DescriptionIcon>
                  <DescriptionText>오프라인 / 3개월</DescriptionText>
                </CardDescription>
              </CardDescriptions>
            </PromoCard>
            <PromoCard></PromoCard>
            <PromoCard></PromoCard>
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

const PromoBox = styled.div`
  margin: 100px 70px;
`;

const Head = styled.div``;

const HighlightLabel = styled.span`
  display: inline-block;
  background-color: black;
  color: white;
  margin-top: 5px;
  padding: 10px;
`;

const PromoCards = styled.div`
  margin-top: 15px;
  display: flex;
`;

const PromoCard = styled.div`
  width: 350px;
  height: 250px;
  margin-right: 15px;
  background-color: ${({ theme }) => theme.mainViolet};
`;

const StackLogos = styled.div`
  display: flex;
`;

const StackLogo = styled.div`
  height: 50px;
  width: 50px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.mainViolet};
`;

const CardTitle = styled.div`
  color: white;
  font-weight: ${({ theme }) => theme.weightSemiBold};
  font-size: ${({ theme }) => theme.fontSemiMedium};
`;

const CardDescriptions = styled.div``;

const CardDescription = styled.div`
  color: white;
`;

const DescriptionIcon = styled.span``;

const DescriptionText = styled.span``;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontMicro};
  padding-top: 5px;
  padding-left: 3px;
`;
