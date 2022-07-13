import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowBack } from 'react-icons/io';
import { QuestionData } from 'assets/data/QuestionData';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { nextStep, setModalVisible } from '../../redux/reducers/joinSlice';

import { Select } from 'antd';
import 'antd/dist/antd.min.css';
const { Option } = Select;

interface TitleType {
  fontSize: string;
  marginBottom: string;
}

interface ProgressBarType {
  min: number;
  max: number;
  value: number;
}

interface IhandleBasicInfo {
  handleBasicInfo: (value: string, name: string) => void;
}

interface IQuestionModalSectionProps {
  questionNum: number;
  handleBtnNum(num: number, name: string): void;
}

interface JoinInputValues {
  name: string;
  generation: string;
  answers: number[];
  stacks: string[];
}

interface IJoinModalSection {
  handleBasicInfo: (value: string, name: string) => void;
  handleCheckBox: (event: React.MouseEvent<HTMLInputElement>) => void;
  basicInfo: JoinInputValues;
}

// const SOCIAL_LOGIN = 1;
const SET_JOININFO = 1;
const SET_QUESTION = 2;
const SET_INTEREST = 3;
const SET_RESULT = 4;

const Join: FunctionComponent = () => {
  const dispatch = useDispatch();
  const joinStep = useSelector((state: RootState) => state.join.currentStep);
  const [questionNum, setQuestionNum] = useState<number>(0);
  const [isCheckBox, setIsCheckBox] = useState<boolean>(false);
  const [basicInfo, setBasicInfo] = useState<JoinInputValues>({
    name: '',
    generation: '',
    answers: [],
    stacks: [],
  });

  const handleBasicInfo = (value: string | unknown, name: string) => {
    setBasicInfo({ ...basicInfo, [name]: value });
  };

  const handleBtnNum = (num: number, name: string) => {
    setBasicInfo({ ...basicInfo, [name]: [...basicInfo.answers, num] });

    if (QuestionData.length !== questionNum + 1) {
      setQuestionNum(questionNum + 1);
    } else {
      dispatch(nextStep(joinStep));
    }
  };

  const handleCheckBox = () => {
    setIsCheckBox((prev) => !prev);
  };

  const renderByJoinStep = (joinStep: number) => {
    switch (joinStep) {
      case SET_JOININFO:
        return (
          <JoinModalSection
            {...{
              handleBasicInfo,
              handleCheckBox,
              basicInfo,
            }}
          ></JoinModalSection>
        );
      case SET_QUESTION:
        return <QuestionModalSection {...{ questionNum, handleBtnNum }} />;
      case SET_INTEREST:
        return <InterestTechModalSection {...{ handleBasicInfo }} />;

      case SET_RESULT:
        return <ResultModalSection />;
    }
  };

  console.log(basicInfo);

  return (
    <Wrapper>
      <ModalWrapper>
        <div>{renderByJoinStep(joinStep)}</div>
      </ModalWrapper>
    </Wrapper>
  );
};
export default Join;

export const JoinModalSection = ({
  handleBasicInfo,
  handleCheckBox,
}: IJoinModalSection) => {
  const joinStep = useSelector((state: RootState) => state.join.currentStep);
  const dispatch = useDispatch();
  return (
    <>
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
            <input
              type="number"
              onChange={(e) => handleBasicInfo(e.target.value, 'generation')}
            />
            <DetailTitle>이름</DetailTitle>
            <input
              type="text"
              onChange={(e) => handleBasicInfo(e.target.value, 'name')}
            />
          </JoingDetail>
        </JoinUserDetailSection>
        <JoinSubmit>
          <JoinSubmitCheck>
            <input type="checkbox" onClick={handleCheckBox} />
            <label>개인정보수집 동의(필수)</label>
          </JoinSubmitCheck>
          <JoinSubmitBtn
            onClick={() => {
              dispatch(nextStep(joinStep));
            }}
          >
            다음
          </JoinSubmitBtn>
        </JoinSubmit>
      </TitleSection>
    </>
  );
};

export const QuestionModalSection = ({
  questionNum,
  handleBtnNum,
}: IQuestionModalSectionProps) => {
  return (
    <>
      <IconSection>
        <IoIosArrowBack className="arrow" size={30} />
      </IconSection>
      <QuestionHeader>
        <Title fontSize="60px" marginBottom="20px">
          {`Q${QuestionData[questionNum].num}`}
        </Title>
        <SubTitle fontSize="20px" marginBottom="5px">
          {`${QuestionData[questionNum].num}/5`}
        </SubTitle>
        <QuestionProgressBar
          min={0}
          max={100}
          value={(QuestionData[questionNum].id / 5) * 100}
        ></QuestionProgressBar>
        <Questionnaire>{QuestionData[questionNum].question}</Questionnaire>
      </QuestionHeader>

      <QuestionChoiceSection>
        <QuestionChoice onClick={() => handleBtnNum(0, 'answers')}>
          <Icon
            src={`/images/ingredients/${QuestionData[questionNum].ingredientA}.png`}
          />
          {QuestionData[questionNum].answerA}
        </QuestionChoice>
        <QuestionChoice onClick={() => handleBtnNum(1, 'answers')}>
          <Icon
            src={`/images/ingredients/${QuestionData[questionNum].ingredientB}.png`}
          />
          {QuestionData[questionNum].answerB}
        </QuestionChoice>
      </QuestionChoiceSection>
    </>
  );
};

export const InterestTechModalSection = ({
  handleBasicInfo,
}: IhandleBasicInfo) => {
  const dispatch = useDispatch();
  const joinStep = useSelector((state: RootState) => state.join.currentStep);
  return (
    <>
      <TitleSection>
        <IconSection>
          <IoIosArrowBack className="arrow" size={30} />
        </IconSection>
        <TechHeader>
          <Title fontSize="2rem" marginBottom="20px">
            000님, 궁금한게 있어요.
          </Title>

          <Title fontSize="2rem" marginBottom="20px">
            언어, 프레임워크를 선택해주세요!
          </Title>

          <SubTitle fontSize="1rem" marginBottom="0px">
            관심 태그를 기반으로 소식을 추천해드려요.
          </SubTitle>
        </TechHeader>

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
        <JoinSubmit>
          <JoinSubmitBtn
            onClick={() => {
              dispatch(nextStep(joinStep));
            }}
          >
            다음
          </JoinSubmitBtn>
        </JoinSubmit>
      </TitleSection>
    </>
  );
};

export const ResultModalSection = () => {
  return <div>하이</div>;
};

const Wrapper = styled.section`
  ${({ theme }) => theme.wrapper()}
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  height: 100vh;
`;

// display: ${(props) => (props.visible ? 'flex' : 'none')}

const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  width: 675px;
  height: 30rem;

  box-shadow: rgb(0 0 0 / 2%) -14px -14px 20px, rgb(0 0 0 / 5%) 14px 14px 20px;
  background-color: white;
  border-radius: 3px;
  z-index: 10;
`;

const QuestionHeader = styled.div`
  padding: 30px 50px 10px 30px;
`;

const Title = styled.h1<TitleType>`
  font-size: ${({ fontSize }) => fontSize};
  /* color: ${({ theme }) => theme.mainGreen}; */
  margin-bottom: ${({ marginBottom }) => marginBottom};
  text-align: center;
`;

const SubTitle = styled.h1<TitleType>`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ theme }) => theme.weightBold};
  color: #d3cece;
  text-align: center;
  margin: 0px 10px 5px 0px;
`;

const QuestionProgressBar = styled.progress<ProgressBarType>`
  appearance: none;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;

  &::-webkit-progress-bar {
    background: #ededed;
    border-radius: 30px;
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.mainGreen};
    border-radius: 30px;
  }
`;

const Questionnaire = styled.h1`
  width: 100%;
  font-size: 25px;
  text-align: center;
  line-height: 40px;
`;

const QuestionChoiceSection = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  flex-direction: column;
`;

const QuestionChoice = styled.button`
  background: ${({ theme }) => theme.mainGreen};
  opacity: 0.5;
  width: 75%;
  padding: 22px;
  border: none;
  border-radius: 20px;
  font-size: 22px;
  font-family: 'Jua', sans-serif;
  color: white;
  text-align: center;
  margin: 5px 0px;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 1;
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

const Icon = styled.img`
  margin-right: 8px;
  width: 25px;
  height: 25px;
`;

const JoinUserDetailSection = styled.div`
  ${({ theme }) => theme.flexMixIn('center', 'center')};
  margin-bottom: 70px;
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

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    height: 40px;
    padding: 0px 10px;
    border: none;
    border-bottom: 3px solid rgba(0, 0, 0, 0.3);
    font-size: 20px;
    line-height: 40px;
    font-family: 'Jua', sans-serif;
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

  label {
    margin-bottom: 4px;
    margin-left: 5px;
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
  font-family: 'Jua', sans-serif;
  cursor: pointer;
`;

const TitleSection = styled.div`
  padding: 35px 70px 0px 70px;
`;

const TechHeader = styled.div`
  margin-top: 3rem;
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
