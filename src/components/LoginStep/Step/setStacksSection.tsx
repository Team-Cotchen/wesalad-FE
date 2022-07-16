import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/store';
import { nextStep } from 'redux/reducers/loginSlice';
import { Select } from 'antd';
import { ITitle, IInfoSection } from 'components/LoginStep/loginStep.types';
import 'antd/dist/antd.min.css';
const { Option } = Select;
import BackButton from 'components/BackButton';

const setStacksSection = ({
  handleBasicInfo,
  name,
}: Pick<IInfoSection, 'handleBasicInfo' | 'name'>) => {
  const dispatch = useDispatch();
  const loginStep = useSelector((state: RootState) => state.login.currentStep);
  return (
    <>
      <StacksSection>
        <BackButton />
        <Header>
          <Title fontSize="2rem" marginBottom="20px">
            {name}님, 궁금한게 있어요.
          </Title>
          <Title fontSize="2rem" marginBottom="20px">
            언어, 프레임워크를 선택해주세요!
          </Title>
          <SubTitle fontSize="1rem" marginBottom="0px">
            관심 태그를 기반으로 소식을 추천해드려요.
          </SubTitle>
        </Header>
        <TechSelectSection>
          <StyledSelect
            placeholder="사용할 기술 스택을 골라주세요."
            bordered={false}
            mode="multiple"
            maxTagCount="responsive"
            showArrow
            onChange={(value) => handleBasicInfo(value as string, 'stacks')}
          >
            <Option value="javascript">Javascript</Option>
            <Option value="typescript">Typescript</Option>
            <Option value="react">React</Option>
            <Option value="vue">Vue</Option>
            <Option value="node.js">Node.js</Option>
            <Option value="spring">Spring</Option>
            <Option value="java">Java</Option>
            <Option value="next.js">Next.js</Option>
            <Option value="express">Express</Option>
            <Option value="go">Go</Option>
            <Option value="c">C</Option>
            <Option value="python">Python</Option>
            <Option value="django">Django</Option>
            <Option value="swift">Swift</Option>
            <Option value="kotlin">Kotlin</Option>
            <Option value="mysql">MySQL</Option>
            <Option value="mongodb">MongoDB</Option>
            <Option value="php">php</Option>
            <Option value="graphql">GraphQL</Option>
            <Option value="firebase">Firebase</Option>
            <Option value="reactnative">ReactNative</Option>
            <Option value="unity">Unity</Option>
            <Option value="flutter">Flutter</Option>
            <Option value="aws">AWS</Option>
            <Option value="kubernetes">Kubernetes</Option>
            <Option value="docker">Docker</Option>
            <Option value="git">Git</Option>
            <Option value="figma">Figma</Option>
            <Option value="zeplin">Zeplin</Option>
          </StyledSelect>
        </TechSelectSection>
        <SubmitSection>
          <SubmitBtn
            onClick={() => {
              dispatch(nextStep(loginStep));
            }}
          >
            다음
          </SubmitBtn>
        </SubmitSection>
      </StacksSection>
    </>
  );
};

export default setStacksSection;

const StacksSection = styled.div`
  padding: calc(113px / 2) 70px;
`;

const Header = styled.div`
  margin-top: 3rem;
`;

const Title = styled.h1<ITitle>`
  font-size: ${({ fontSize }) => fontSize};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: center;
`;

const SubTitle = styled.h1<ITitle>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.weightBold};
  color: #d3cece;
  text-align: center;
  margin: 0px 10px 5px 0px;
`;

const TechSelectSection = styled.div`
  padding: 30px 70px 40px 70px;
`;

const StyledSelect = styled(Select)`
  padding: 10px 10px;
  width: 100%;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
  cursor: pointer;
`;

const SubmitSection = styled.div`
  margin-top: 30px;
  ${({ theme }) => theme.flexMixIn('end', 'center')}
`;

const SubmitBtn = styled.button`
  width: 4rem;
  height: 2.5rem;
  background-color: ${({ theme }) => theme.mainGreen};
  color: white;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSemiMedium};
  font-family: 'Jua', sans-serif;
  cursor: pointer;
`;
