import React, { useState, FunctionComponent } from 'react';
import { Select, DatePicker, Checkbox } from 'antd';
const { Option } = Select;

import 'antd/dist/antd.min.css';

import styled from 'styled-components';
import theme from '../../styles/theme';
import CreationModal from './CreationModal';

import { FaPepperHot } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { ImPointRight } from 'react-icons/im';

import Card from '../../components/Card';
import Nav from 'components/Nav';

interface BasicInfoProps {
  type?: string;
  process?: string;
  technologies?: string[];
  frontNum?: string;
  backNum?: string;
  period?: string;
  date?: string;
  contact?: string;
  contactDetail?: string;
}

const Creation: FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contactInput, setContactInput] = useState<string>('오픈 채팅방 링크');

  // need to send to back
  const [selectedAllCards, setSelectedAllCards] = useState<string[]>([]);
  const [selectedMainCards, setSelectedMainCards] = useState<string[]>([]);
  const [basicInfo, setBasicInfo] = useState<BasicInfoProps>({
    type: '',
    process: '',
    technologies: [],
    frontNum: '',
    backNum: '',
    period: '',
    date: '',
    contact: '',
    contactDetail: '',
  });
  const [control, setControl] = useState('');
  const [detailInfo, setDetailInfo] = useState({
    title: '',
    description: '',
  });

  const allCards = selectedAllCards.map((name) => {
    return {
      name,
      ingredient: Card_List.find((card) => card.name === name)?.ingredient,
    };
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const changeContactInput = (value: string | unknown) => {
    switch (value) {
      case 'open-chatting': {
        setContactInput('오픈 채팅방 링크');
        break;
      }
      case 'email': {
        setContactInput('이메일 주소');
        break;
      }
      case 'text': {
        setContactInput('핸드폰 번호');
        break;
      }
    }
  };

  const handleBasicInfo = (value: string | unknown, id: string) => {
    setBasicInfo({ ...basicInfo, [id]: value });
  };

  const handleDetailInfo = (e: React.ChangeEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;

    setDetailInfo({ ...detailInfo, [target.name]: target.value });
  };

  const handleControl = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLInputElement).nodeName !== 'INPUT') return;

    const checkbox = e.target as HTMLInputElement;

    checkbox.checked && setControl(checkbox.name);
  };

  return (
    <>
      <Nav />
      <Wrapper>
        {isModalOpen && (
          <CreationModal
            setIsModalOpen={setIsModalOpen}
            selectedAllCards={selectedAllCards}
            setSelectedAllCards={setSelectedAllCards}
            selectedMainCards={selectedMainCards}
            setSelectedMainCards={setSelectedMainCards}
          />
        )}
        <BasicInfo>
          <Title>
            <Num>1</Num>원하는 프로젝트 레시피를 알려주세요.
          </Title>
          <Line></Line>
          <Main>
            <SelectList>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 프로젝트 타입
                </Label>
                <StyledSelect
                  defaultValue="스터디/프로젝트"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'type')}
                >
                  <Option value="study" name="study">
                    스터디
                  </Option>
                  <Option value="project" name="study">
                    프로젝트
                  </Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 진행 방식
                </Label>
                <StyledSelect
                  defaultValue="온라인/오프라인"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'process')}
                >
                  <Option value="online">온라인</Option>
                  <Option value="offline">오프라인</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 기술 스택
                </Label>
                <StyledSelect
                  placeholder="사용할 기술 스택을 골라주세요."
                  defaultValue={['javascript']}
                  bordered={false}
                  mode="multiple"
                  optionLabelProp="label"
                  showArrow
                  onChange={(value) => handleBasicInfo(value, 'technologies')}
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
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 프론트 엔드 모집 인원
                </Label>
                <StyledSelect
                  defaultValue="인원 미정 ~ 5명 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'frontNum')}
                >
                  <Option value="none">인원 미정</Option>
                  <Option value="1">1명</Option>
                  <Option value="2">2명</Option>
                  <Option value="3">3명</Option>
                  <Option value="4">4명</Option>
                  <Option value="5">5명 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 백엔드 모집 인원
                </Label>
                <StyledSelect
                  defaultValue="인원 미정 ~ 5명 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'backNum')}
                >
                  <Option value="none">인원 미정</Option>
                  <Option value="1">1명</Option>
                  <Option value="2">2명</Option>
                  <Option value="3">3명</Option>
                  <Option value="4">4명</Option>
                  <Option value="5">5명 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 진행 기간
                </Label>
                <StyledSelect
                  defaultValue="기간 미정 ~ 6개월 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'period')}
                >
                  <Option value="undefined">기간 미정</Option>
                  <Option value="2weeks">2주 이내</Option>
                  <Option value="1month">1개월</Option>
                  <Option value="2months">2개월</Option>
                  <Option value="3months">3개월</Option>
                  <Option value="4months">4개월</Option>
                  <Option value="5months">5개월</Option>
                  <Option value="6months">6개월 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 시작 예정일
                </Label>
                <StyledDatePicker
                  placeholder="날짜를 골라주세요."
                  onChange={(value) =>
                    handleBasicInfo(JSON.stringify(value), 'date')
                  }
                />
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 연락 방법
                </Label>
                <StyledSelect
                  defaultValue="카카오톡 오픈 채팅"
                  bordered={false}
                  onSelect={changeContactInput}
                  onChange={(value) => handleBasicInfo(value, 'contact')}
                >
                  <Option value="open-chatting">카카오톡 오픈채팅</Option>
                  <Option value="email">이메일</Option>
                  <Option value="text">문자메세지</Option>
                </StyledSelect>
                <ContactInput
                  placeholder={contactInput}
                  onChange={(e) =>
                    handleBasicInfo(e.target.value, 'contactDetail')
                  }
                />
              </ListItem>
              <ListItem>
                <Label>
                  <AiFillCheckCircle />
                  &nbsp; 우리 팀 성향
                </Label>
                <TagBox>
                  <Button onClick={openModal}>
                    <ImPointRight /> &nbsp;
                    {selectedMainCards.length === 0
                      ? '팀 성향 고르기 Click!'
                      : '다시 고르기 Click!'}
                  </Button>
                  <CardList>
                    {allCards?.map(({ ingredient, name }, index) => (
                      <Card
                        id={name}
                        key={name + index}
                        ingredient={ingredient}
                        name={name}
                        size={'small'}
                      />
                    ))}
                  </CardList>
                </TagBox>
              </ListItem>
            </SelectList>
            <ControlBox>
              <ControlTitle>프로젝트 맵기 조절</ControlTitle>
              <ControlList onClick={handleControl}>
                <ControlListItem>
                  <StyledCheckbox name="매운맛"></StyledCheckbox>
                  <Description>
                    <div>
                      매운 맛
                      <Chili />
                      <Chili />
                      <Chili />
                    </div>
                    <span>주 00 시간 이상</span>
                  </Description>
                </ControlListItem>
                <ControlListItem>
                  <StyledCheckbox name="중간맛"></StyledCheckbox>
                  <Description>
                    <div>
                      중간 맛 <Chili />
                      <Chili />
                    </div>
                    <span>주 00 시간 ~ 00시간</span>
                  </Description>
                </ControlListItem>
                <ControlListItem>
                  <StyledCheckbox name="순한맛"></StyledCheckbox>
                  <Description>
                    <div>
                      순한 맛 <GreenChili />
                    </div>
                    <span>주 00 시간 이하</span>
                  </Description>
                </ControlListItem>
              </ControlList>
            </ControlBox>
          </Main>
        </BasicInfo>

        <DetailInfo>
          <Title>
            <Num>2</Num>프로젝트에 대해 소개해주세요.
          </Title>
          <Line></Line>
          <Label>제목</Label>
          <TitleInput
            type="text"
            name="title"
            onChange={handleDetailInfo}
            value={detailInfo.title}
          ></TitleInput>
          <Label>자세한 소개</Label>
          <Textarea
            name="description"
            onChange={handleDetailInfo}
            value={detailInfo.description}
          ></Textarea>
          <ButtonBox>
            <StyledButton mode="cancle">취소</StyledButton>
            <StyledButton mode="submit">등록</StyledButton>
          </ButtonBox>
        </DetailInfo>
      </Wrapper>
    </>
  );
};

export default Creation;

const Card_List = [
  { ingredient: 'tomato', name: '적극적인 토마토' },
  { ingredient: 'lettuce', name: '수용적인 양상추' },
  { ingredient: 'paprika', name: '도전적인 파프리카' },
  { ingredient: 'broccoli', name: '안정적인 브로콜리' },
  { ingredient: 'avocado', name: '리더쉽의 아보카도' },
  { ingredient: 'olives', name: '책임감의 올리브' },
  { ingredient: 'mayo', name: '계획적인 마요네즈' },
  { ingredient: 'balsamic', name: '즉흥적인 발사믹' },
  { ingredient: 'salmon', name: '사교적인 연어' },
  { ingredient: 'bacon', name: '워커홀릭 베이컨' },
];

const Wrapper = styled.div`
  ${({ theme }) => theme.wrapper()}
`;

//BasicInfo
const BasicInfo = styled.div`
  margin: 140px 0;
`;

const Title = styled.h1`
  font-family: 'Jua', sans-serif;
  font-size: 35px;
`;

const Num = styled.span`
  display: inline-block;
  margin-right: 10px;
  text-align: center;
  line-height: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: ${theme.mainGreen};
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 20px 0;
  background-color: #dfe1e6;
`;

const Main = styled.main`
  display: flex;
`;

const SelectList = styled.ul`
  width: 690px;
`;

const ListItem = styled.li`
  position: relative;
  font-family: ‘Black Han Sans’, sans-serif;
  margin: 30px 0;
`;

const Label = styled.label`
  font-size: ${theme.fontSemiMedium};
  font-weight: ${theme.weightMiddle};
`;

const StyledSelect = styled(Select)`
  position: absolute;
  padding: 0 10px;
  right: 50px;
  width: 340px;
  height: 35px;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
  cursor: pointer;
`;

const ContactInput = styled.input`
  display: block;
  font-family: ‘Black Han Sans’, sans-serif;
  padding: 0 10px 0 20px;
  margin: 30px 0;
  transform: translateX(300px);
  width: 340px;
  height: 35px;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
  font-size: 14px;
`;

const TagBox = styled.div`
  position: relative;
  font-family: 'Jua', sans-serif;
  padding: 0 10px;
  transform: translate(270px, -30px);
  width: 100%;
`;

const CardList = styled.div`
  transform: translateX(10px);
  position: absolute;
`;

const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  padding: 0 10px 0 20px;
  right: 50px;
  font-family: ‘Black Han Sans’, sans-serif;
  width: 340px;
  height: 35px;
  border: 1px transparent solid;
  border-radius: 3px;
  background-color: #f4f5f7;
`;

const Button = styled.button`
  font-family: ‘Black Han Sans’, sans-serif;
  margin: 10px 0 10px 20px;
  display: block;
  padding: 0 10px;
  right: 30px;
  height: 35px;
  border-radius: 30px;
  border: 0;
  color: #fff;
  font-weight: ${theme.weightBold};
  background-color: ${theme.mainViolet};
  cursor: pointer;
`;

const ControlBox = styled.div`
  margin: 25px 0;
  padding: 40px;
  width: 350px;
  height: 335px;
  background-color: #f4f5f7;
  border-radius: 3px;
  box-shadow: 7px 5px 7px -6px #4e4e4e;
`;

const ControlTitle = styled.h2`
  font-size: ${theme.fontSemiMedium};
  text-align: center;
`;

const ControlList = styled.ul`
  margin: 30px 0;
`;

const ControlListItem = styled.li`
  display: flex;
  margin: 30px 0;
`;

const StyledCheckbox = styled(Checkbox)`
  margin-right: 10px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 10px;
    font-size: 14px;
  }
`;

const Chili = styled(FaPepperHot)`
  margin: 0 1px;
  color: #f5390f;
`;

const GreenChili = styled(FaPepperHot)`
  color: #7fd64f;
`;

// DetailInfo
const DetailInfo = styled.div`
  font-family: ‘Black Han Sans’, sans-serif;
  position: relative;
  margin: 80px 0;
`;

const TitleInput = styled.input`
  font-family: ‘Black Han Sans’, sans-serif;
  margin: 20px 0;
  padding: 20px;
  width: 100%;
  height: 40px;
  font-size: ${theme.fontSemiMedium};
  border: 1px solid #dfe1e6;
  border-radius: 3px;
`;

const Textarea = styled.textarea`
  font-family: ‘Black Han Sans’, sans-serif;
  margin: 20px 0 100px 0;
  padding: 10px;
  width: 100%;
  height: 500px;
  font-size: ${theme.fontSemiMedium};
  border: 1px solid #dfe1e6;
  border-radius: 3px;
  resize: none;
`;

const ButtonBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 50px;
`;

const StyledButton = styled.button<{ mode: string }>`
  margin: 0 10px;
  padding: 10px;
  width: 80px;
  font-size: ${theme.fontRegular};
  font-weight: ${theme.weightSemiBold};
  border: 0;
  border-radius: 3px;
  background-color: ${(props) =>
    props.mode === 'submit' ? theme.mainGreen : '#99999'};
  color: ${(props) => (props.mode === 'submit' ? '#fff' : 'black')};
  cursor: pointer;
`;
