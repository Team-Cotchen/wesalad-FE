import { message } from 'antd';
import React, {
  FunctionComponent,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import styled from 'styled-components';

import Card from 'components/Card';

import theme from '../../styles/theme';
import logo from 'assets/images/logo.png';
import { GrFormClose } from 'react-icons/gr';

interface ModalProps {
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  additionalCards: string[];
  primaryCards: string[];
  setAdditionalCards: Dispatch<SetStateAction<string[]>>;
  setPrimaryCards: Dispatch<SetStateAction<string[]>>;
}

const CreationModal: FunctionComponent<ModalProps> = ({
  additionalCards,
  primaryCards,
  setAdditionalCards,
  setPrimaryCards,
  setIsModalOpen,
}: ModalProps) => {
  const [clickedModalIndex, setClickedModalIndex] = useState<number>(0);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePrimaryCards = (selectedCard: string) => {
    const isPrimary = primaryCards.includes(selectedCard);

    if (primaryCards.length <= 2) {
      isPrimary
        ? setPrimaryCards(primaryCards.filter((item) => item !== selectedCard))
        : setPrimaryCards([...primaryCards, selectedCard]);
    }

    if (primaryCards.length === 3 && isPrimary) {
      setPrimaryCards(primaryCards.filter((item) => item !== selectedCard));
    }

    if (additionalCards.includes(selectedCard)) {
      setAdditionalCards(
        additionalCards.filter((item) => item !== selectedCard),
      );
    }
  };

  const handleAdditionalCards = (selectedCard: string) => {
    const isAdditional = additionalCards.includes(selectedCard);

    if (!primaryCards.includes(selectedCard)) {
      isAdditional
        ? setAdditionalCards(
            additionalCards.filter((item) => item !== selectedCard),
          )
        : setAdditionalCards([...additionalCards, selectedCard]);
    }
  };

  const handleSelectedCards = (e: React.MouseEvent<HTMLElement>) => {
    const selected = (e.target as Element).closest('.wrapper');

    const selectedCard = selected?.id || 'card';

    clickedModalIndex === 0
      ? handlePrimaryCards(selectedCard)
      : handleAdditionalCards(selectedCard);
  };

  const goToNextOption = () => {
    if (primaryCards.length !== 3) {
      message.warn('3가지의 메인 카드를 골라주세요.');
      return;
    }
    setClickedModalIndex((prev) => prev + 1);
  };

  const showSuccessMsg = () => {
    message.success('성향카드들이 선택되었습니다!');
    closeModal();
  };

  return (
    <Wrapper>
      <ModalBox>
        <ModalNav>
          <Logo src={logo} alt="logo" />
          Wesalad
          <CloseBtn onClick={closeModal} />
        </ModalNav>
        <Main>
          {clickedModalIndex === 0 ? (
            <Label>
              팀 성향을 대표할 수 있는 <span>세 가지</span>의 카드를 골라주세요.
              <Description>
                (해당 카드들은 메인 페이지에 보여집니다.)
              </Description>
            </Label>
          ) : (
            <Label>
              추가로 선택하고 싶은 성향들이 있다면
              <span> 갯수에 제한 없이 </span>
              골라주세요.
              <Description>
                (해당 카드들은 프로젝트 상세 페이지에 보여집니다.)
              </Description>
            </Label>
          )}

          <CardBox>
            {Card_List.map(({ ingredient, name }, index) => (
              <Card
                id={name}
                key={name + index}
                ingredient={ingredient}
                name={name}
                handleSelectedCards={handleSelectedCards}
                type={() => {
                  if (primaryCards.includes(name)) return 'primary';
                  else if (
                    additionalCards.includes(name) &&
                    clickedModalIndex === 1
                  )
                    return 'additional';
                }}
              />
            ))}
          </CardBox>
        </Main>
        <SubmitBtn
          onClick={clickedModalIndex === 0 ? goToNextOption : showSuccessMsg}
        >
          선택 완료!
        </SubmitBtn>
      </ModalBox>
    </Wrapper>
  );
};

export default CreationModal;

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
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const ModalBox = styled.div`
  position: relative;
  width: 700px;
  height: 550px;
  background-color: #fff;
  border-radius: 3px;
`;

const ModalNav = styled.nav`
  position: absolute;
  display: flex;
  align-items: center;
  left: 0;
  top: 0;
  padding: 10px;
  width: 700px;
  height: 50px;
  font-weight: ${theme.weightBold};
  border: 0;
  background-color: #d9d9d9;
`;

const Logo = styled.img`
  margin: 0 10px;
  width: 30px;
  height: 30px;
`;

const CloseBtn = styled(GrFormClose)`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: ${theme.fontMedium};
  cursor: pointer;
`;

const Main = styled.main`
  position: relative;
  margin: 80px 30px 10px 30px;
  height: 530px;
  font-size: ${theme.fontSemiMedium};
`;

const Label = styled.label`
  span {
    color: ${theme.mainViolet};
  }
`;

const Description = styled.div`
  margin-top: 10px;
  font-size: ${theme.fontSmall};
  color: #808080;
`;

const CardBox = styled.ul`
  margin-top: 30px;
  border: 1px solid #dbdbdb;
  padding: 20px;
  border-radius: 3px;
`;

const SubmitBtn = styled.button`
  position: absolute;
  padding: 10px;
  bottom: 30px;
  right: 30px;
  border: 0;
  border-radius: 30px;
  background-color: ${theme.mainViolet};
  color: #fff;
  font-weight: bold;
  font-size: ${theme.fontSmall};
  cursor: pointer;
`;
