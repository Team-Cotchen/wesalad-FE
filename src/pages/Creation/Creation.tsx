import axios from 'axios';
import React, { useState, FunctionComponent } from 'react';

import 'antd/dist/antd.min.css';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import theme from '../../styles/theme';
import CreationModal from './CreationModal';
import Card from '../../components/Card';
import Nav from 'components/Nav';

import { Editor } from '@tinymce/tinymce-react';
import { Select, DatePicker, Checkbox, message } from 'antd';
const { Option } = Select;
import 'antd/dist/antd.css';
import { ImPointRight } from 'react-icons/im';
import { VscCircleOutline } from 'react-icons/vsc';

import { BASE_URL, TINYMCE_API_KEY } from 'config';

interface BasicInfoProps {
  category: string;
  place: string;
  stacks: string[];
  frontNum: string;
  backNum: string;
  period: string;
  startDate: string;
  applyway: string;
  applywayInfo: string;
  title: '';
}

const Creation: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [contactInput, setContactInput] = useState<string>('오픈 채팅방 링크');
  const [additionalCards, setAdditionalCards] = useState<string[]>([]);
  const [primaryCards, setPrimaryCards] = useState<string[]>([]);
  const [basicInfo, setBasicInfo] = useState<BasicInfoProps>({
    category: '',
    place: '',
    stacks: [],
    frontNum: '',
    backNum: '',
    period: '',
    startDate: '',
    applyway: '',
    applywayInfo: '',
    title: '',
  });
  const [flavor, setFlavor] = useState('');
  const [detailInfo, setDetailInfo] = useState('');

  const {
    category,
    place,
    stacks,
    frontNum,
    backNum,
    period,
    startDate,
    applyway,
    applywayInfo,
    title,
  } = basicInfo;

  const PrimaryCards = primaryCards.map((name) => {
    return {
      name,
      ingredient: Card_List.find((card) => card.name === name)?.ingredient,
    };
  });

  const AdditionalCards = additionalCards.map((name) => {
    return {
      name,
      ingredient: Card_List.find((card) => card.name === name)?.ingredient,
    };
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const submitToBack = async (formData: FormData) => {
    try {
      const res = await axios({
        method: 'post',
        url: `http://${BASE_URL}/posts/create`,
        headers: {
          'Content-Type': `multipart/form-data`,
        },
        data: formData,
      });

      if (res.status === 200) {
        message.success('프로젝트가 성공적으로 생성되었습니다! 🎉');
        navigate(`/project/아이디`); // 프로젝트 생성 => 상세페이지 해당 글로 바로 이동 (이 때 id 값 필요. how? 생성함과 동시에 바로 id 값 받을 수 있나?)
      }
    } catch (err) {
      console.log(err);
    }
  };

  const storeFormData = () => {
    if (Object.values(detailInfo).some((item) => item.length === 0)) {
      message.warning('모든 값을 다 입력해주세요.');
      return;
    } else {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('title', title);
      formData.append('number_of_front', frontNum);
      formData.append('number_of_back', backNum);
      formData.append('period', period);
      formData.append('start_date', startDate);

      submitToBack(formData);
    }
  };

  const handleBasicInfo = (value: string | unknown, id: string) => {
    setBasicInfo({ ...basicInfo, [id]: value });
  };

  const handleFlavor = (e: React.MouseEvent<HTMLElement>) => {
    if ((e.target as HTMLInputElement).nodeName !== 'INPUT') return;

    const checkbox = e.target as HTMLInputElement;

    checkbox.checked && setFlavor(checkbox.name);
  };

  const handleEditorChange = (content: string) => {
    setDetailInfo(content);
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

  return (
    <>
      <Nav />
      <Wrapper>
        {isModalOpen && (
          <CreationModal
            setIsModalOpen={setIsModalOpen}
            additionalCards={additionalCards}
            setAdditionalCards={setAdditionalCards}
            primaryCards={primaryCards}
            setPrimaryCards={setPrimaryCards}
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
                  <StyledCircle />
                  &nbsp; 프로젝트 타입
                </Label>
                <StyledSelect
                  defaultValue="스터디/프로젝트"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'category')}
                >
                  <Option value="study">스터디</Option>
                  <Option value="project">프로젝트</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 진행 방식
                </Label>
                <StyledSelect
                  defaultValue="온라인/오프라인"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'place')}
                >
                  <Option value="online">온라인</Option>
                  <Option value="offline">오프라인</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 기술 스택
                </Label>
                <StyledSelect
                  placeholder="사용할 기술 스택을 골라주세요."
                  defaultValue={['javascript']}
                  bordered={false}
                  mode="multiple"
                  optionLabelProp="label"
                  maxTagCount="responsive"
                  showArrow
                  onChange={(value) => handleBasicInfo(value, 'stacks')}
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
                  <StyledCircle />
                  &nbsp; 프론트 엔드 모집 인원
                </Label>
                <StyledSelect
                  defaultValue="인원 미정 ~ 5명 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'frontNum')}
                >
                  <Option value="인원 미정">인원 미정</Option>
                  <Option value="1명">1명</Option>
                  <Option value="2명">2명</Option>
                  <Option value="3명">3명</Option>
                  <Option value="4명">4명</Option>
                  <Option value="5명 이상">5명 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 백엔드 모집 인원
                </Label>
                <StyledSelect
                  defaultValue="인원 미정 ~ 5명 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'backNum')}
                >
                  <Option value="인원 미정">인원 미정</Option>
                  <Option value="1명">1명</Option>
                  <Option value="2명">2명</Option>
                  <Option value="3명">3명</Option>
                  <Option value="4명">4명</Option>
                  <Option value="5명 이상">5명 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 진행 기간
                </Label>
                <StyledSelect
                  defaultValue="기간 미정 ~ 6개월 이상"
                  bordered={false}
                  onChange={(value) => handleBasicInfo(value, 'period')}
                >
                  <Option value="기간 미정">기간 미정</Option>
                  <Option value="2주 이내">2주 이내</Option>
                  <Option value="1개월">1개월</Option>
                  <Option value="2개월">2개월</Option>
                  <Option value="3개월">3개월</Option>
                  <Option value="4개월">4개월</Option>
                  <Option value="5개월">5개월</Option>
                  <Option value="6개월 이상">6개월 이상</Option>
                </StyledSelect>
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 시작 예정일
                </Label>
                <StyledDatePicker
                  placeholder="날짜를 골라주세요."
                  onChange={(value) =>
                    handleBasicInfo(
                      JSON.stringify(value).split('"')[1],
                      'startDate',
                    )
                  }
                />
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 연락 방법
                </Label>
                <StyledSelect
                  defaultValue="카카오톡 오픈 채팅"
                  bordered={false}
                  onSelect={changeContactInput}
                  onChange={(value) => handleBasicInfo(value, 'applyway')}
                >
                  <Option value="카카오톡 오픈채팅">카카오톡 오픈채팅</Option>
                  <Option value="이메일">이메일</Option>
                  <Option value="문자메세지">문자메세지</Option>
                </StyledSelect>
                <ContactInput
                  placeholder={contactInput}
                  onChange={(e) =>
                    handleBasicInfo(e.target.value, 'applywayInfo')
                  }
                />
              </ListItem>
              <ListItem>
                <Label>
                  <StyledCircle />
                  &nbsp; 우리 팀 성향
                </Label>
                <TagBox>
                  <Button onClick={openModal}>
                    <ImPointRight /> &nbsp;
                    {primaryCards.length === 0
                      ? '팀 성향 고르기 Click!'
                      : '다시 고르기 Click!'}
                  </Button>
                  <CardList>
                    <CardBox>
                      {PrimaryCards.length > 0 && (
                        <CardBoxLabel>메인 재료</CardBoxLabel>
                      )}

                      {PrimaryCards?.map(({ ingredient, name }, index) => (
                        <Card
                          id={name}
                          key={name + index}
                          ingredient={ingredient}
                          name={name}
                          size={'small'}
                        />
                      ))}
                    </CardBox>
                    <CardBox>
                      {AdditionalCards.length > 0 && (
                        <CardBoxLabel>추가 재료</CardBoxLabel>
                      )}
                      {AdditionalCards?.map(({ ingredient, name }, index) => (
                        <Card
                          id={name}
                          key={name + index}
                          ingredient={ingredient}
                          name={name}
                          size={'small'}
                        />
                      ))}
                    </CardBox>
                  </CardList>
                </TagBox>
              </ListItem>
            </SelectList>
            <ControlBox>
              <ControlTitle>프로젝트 맵기 조절</ControlTitle>
              <ControlList onClick={handleFlavor}>
                <ControlListItem>
                  <StyledCheckbox
                    name="spicy"
                    checked={flavor === 'spicy'}
                  ></StyledCheckbox>
                  <Description>
                    <div>
                      매운 맛
                      <Chili src={'https://i.ibb.co/x3JHb8W/03-hot.png'} />
                    </div>
                    <span>주 00 시간 이상</span>
                  </Description>
                </ControlListItem>
                <ControlListItem>
                  <StyledCheckbox
                    name="medium"
                    checked={flavor === 'medium'}
                  ></StyledCheckbox>
                  <Description>
                    <div>
                      중간 맛
                      <Chili src={'https://i.ibb.co/7pjqfWM/02-medium.png'} />
                    </div>
                    <span>주 00 시간 ~ 00시간</span>
                  </Description>
                </ControlListItem>
                <ControlListItem>
                  <StyledCheckbox
                    name="mild"
                    checked={flavor === 'mild'}
                  ></StyledCheckbox>
                  <Description>
                    <div>
                      순한 맛
                      <Chili src={'https://i.ibb.co/F8Q9Nc1/01-mild.png'} />
                    </div>
                    <span>주 00 시간 이하</span>
                  </Description>
                </ControlListItem>
              </ControlList>
            </ControlBox>
          </Main>
        </BasicInfo>
        {primaryCards.length === 0 && additionalCards.length === 0 && (
          <MiddleLine></MiddleLine>
        )}

        <DetailInfo>
          <Title>
            <Num>2</Num>프로젝트에 대해 소개해주세요.
          </Title>
          <Line></Line>
          <Label>제목</Label>
          <TitleInput
            type="text"
            name="title"
            onChange={(e) => handleBasicInfo(e.target.value, 'title')}
            value={basicInfo.title}
          ></TitleInput>
          <Label>자세한 소개</Label>
          <EditorBox>
            <Editor
              apiKey={TINYMCE_API_KEY}
              init={{
                referrer_policy: 'origin',
                export_cors_hosts: [`${BASE_URL}`],
                icons: 'thin',
                placeholder: '프로젝트에 대해 소개해주세요.',
                height: 700,
                menubar: true,
                plugins: ['image'],
                paste_data_images: true,
                automatic_uploads: true,
                images_upload_url: `${BASE_URL}/posts/create`, // 서버주소 이어야 하지 않을까? => 만약 안되면 image 아이콘 없애고 drag 만 되는 걸로 바꾸기
                toolbar:
                  'undo redo | image | styles | styleselect  | fontsizeselect  | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ',
                resize: false,
              }}
              onEditorChange={handleEditorChange}
            />
          </EditorBox>
          <ButtonBox>
            <StyledButton mode="cancle">취소</StyledButton>
            <StyledButton mode="submit" onClick={storeFormData}>
              등록
            </StyledButton>
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
  margin: 140px 0 160px 0;
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

const MiddleLine = styled.div`
  width: 100%;
  height: 1px;
  margin-top: -150px;
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

const StyledCircle = styled(VscCircleOutline)`
  font-size: ${theme.fontSmall};
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
  width: 100%;
`;

const CardBox = styled.div`
  position: relative;
  margin: 12px 0;
  border: transparant 1px solid;
  border-radius: 10px;
  background: #f4f5f7;
`;

const CardBoxLabel = styled.span`
  position: absolute;
  left: 20px;
  top: -5px;
  font-size: ${theme.fontMicro};
  color: ${theme.mainViolet};
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
  position: relative;
  display: flex;
  flex-direction: column;
  span {
    margin-top: 15px;
    font-size: 14px;
  }
`;

const Chili = styled.img`
  position: absolute;
  top: -10px;
  left: 45px;
  margin: 0 2px;
  width: 35px;
  height: 35px;
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

const EditorBox = styled.div`
  font-family: ‘Black Han Sans’, sans-serif;
  margin: 20px 0 100px 0;
  width: 100%;
  font-size: ${theme.fontSemiMedium};
  border-radius: 3px;
  resize: none;
`;

const ButtonBox = styled.div`
  font-family: 'Jua', sans-serif;
  position: absolute;
  right: 0;
  bottom: -60px;
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
