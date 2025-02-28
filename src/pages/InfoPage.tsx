import { RefObject, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import ComputerSVG from '@images/computer.svg';
import DeskSVG from '@images/desk.svg';
import MailSVG from '@images/mail.svg';
import OpenMailSVG from '@images/openMail.svg';
import BookSVG from '@images/book.svg';
import StandSVG from '@images/stand.svg';
import DangdangeeSVG from '@images/dangdangee.svg';

import useModal from '../hooks/useModal';
import MoveNextPageButton from '../components/MoveNextPageButton';
import Modals from '../hooks/Modals';

interface InfoPageProps {
  sectionsRef: RefObject<HTMLDivElement[]>;
}

const texts = [
  {
    name: 'computer',
    text: '"경륜이가 가끔 눈도 깜빡여주면 좋겠어요..."',
  },
  { name: 'desk', text: '"무겁다... 괜찮다. 난 책상이니까."' },
  { name: 'book', text: '"깊은 속마음도 잘 알고 있어요. 저는 일기장이거든요."' },
  { name: 'stand', text: '"밤에도 책 읽는 경륜이를 보면 흐뭇해요."' },
  { name: 'dangdangee', text: '"제 이름은 당당이에요! 2018년부터 함께 했어요."' },
];

export default function InfoPage({ sectionsRef }: InfoPageProps) {
  const { isOpen, onOpen, onClose } = useModal('info');
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [hoverText, setHoverText] = useState<string | null>(null);

  const handleMailClick = () => {
    isOpen ? onClose() : onOpen();
    setIsFirstOpen(false);
  };

  const handleMouseEnter = (name: string) => {
    const matchedText = texts.find((item) => item.name === name);
    if (matchedText) {
      setHoverText(matchedText.text);
    }
  };

  const handleMouseLeave = () => {
    setHoverText(null);
  };

  return (
    <InfoPageContainer>
      <WindowContainer>
        <Bright />
        <WindowText>내 삶에서 가장 좋은 날은 바로 오늘이야</WindowText>
      </WindowContainer>
      <DeskContainer>
        <ComputerImage
          src={ComputerSVG}
          alt='computer'
          $offset='50%'
          $duration='1.6s'
          onMouseEnter={() => handleMouseEnter('computer')}
          onMouseLeave={handleMouseLeave}
        />
        <MailButton
          onClick={handleMailClick}
          $offset='200%'
          $duration='1.7s'
          $isFirstOpen={isFirstOpen}
          $isOpen={isOpen}
        >
          <MailImage src={!isOpen ? MailSVG : OpenMailSVG} alt='mail' $isFirstOpen={isFirstOpen} />
          {isFirstOpen && (
            <Notification $isFirstOpen={isFirstOpen}>
              <PingAnimation />
              <NotificationDot />
            </Notification>
          )}
        </MailButton>
        <DeskImage
          src={DeskSVG}
          alt='desk'
          $offset='40%'
          $duration='1.3s'
          onMouseEnter={() => handleMouseEnter('desk')}
          onMouseLeave={handleMouseLeave}
        />
        <BookImage
          src={BookSVG}
          alt='book'
          $offset='100%'
          $duration='1.3s'
          onMouseEnter={() => handleMouseEnter('book')}
          onMouseLeave={handleMouseLeave}
        />
        <StandImage
          src={StandSVG}
          alt='stand'
          $offset='55%'
          $duration='1.2s'
          onMouseEnter={() => handleMouseEnter('stand')}
          onMouseLeave={handleMouseLeave}
        />
        <DangdangeeImage
          src={DangdangeeSVG}
          alt='plant'
          $offset='100%'
          $duration='1.5s'
          onMouseEnter={() => handleMouseEnter('dangdangee')}
          onMouseLeave={handleMouseLeave}
        />
        <DeskTextContainer $offset='100%' $duration='1.5s'>
          <p>GyeongRyun Kim</p>
          <b>kimriun27@gmail.com</b>
        </DeskTextContainer>
      </DeskContainer>
      <TalkContainer>
        <TalkText $isHover={!!hoverText}>{hoverText}</TalkText>
      </TalkContainer>
      <MoveNextPageButton sectionsRef={sectionsRef} />
      <Modals />
    </InfoPageContainer>
  );
}

const InfoPageContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const WindowContainer = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  top: 0rem;
  max-width: 33.5rem;
  width: 100%;
  height: 200px;
  border-radius: 20px;
  background-color: #b5efff;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    border-radius: 0;
  }
`;

const Bright = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 150%;
  background-color: #fff4ad;
  opacity: 25%;
  filter: brightness(1) blur(100px);

  animation: lightAnimation 3s ease-in-out infinite alternate;

  @keyframes lightAnimation {
    0% {
      opacity: 0%; /* 처음엔 거의 어두운 상태 */
      filter: brightness(1) blur(100px); /* 어두운 빛 */
    }
    50% {
      opacity: 25%;
      filter: brightness(1.2) blur(100px); /* 밝아지기 시작 */
    }
    70% {
      opacity: 60%;
      width: 130%;
      height: 160%;
      filter: brightness(1.5) blur(100px); /* 밝아지기 시작 */
    }
    90%,
    100% {
      opacity: 100%;
      width: 130%;
      height: 160%;
      filter: brightness(1.5) blur(100px); /* 가장 밝은 상태 */
    }
  }
`;

const WindowText = styled.p`
  position: absolute;
  top: 30%;

  font-size: 1.7rem;
  font-family: 'GangwonEdu';
  height: fit-content;
  color: #91d7ea;
`;

const DeskContainer = styled.div`
  position: relative;
  top: -4.5rem;
  min-width: 22.5rem;
  min-height: 15rem;
  width: 22.5rem;
  height: 15rem;
`;

const slideDown = ($offset: string) => keyframes`
  0% {
    opacity: 0%;
    transform: translate(0%, -${$offset});
  }
  100% {
    transform: translate(0%, 0);
  }
`;

export const SlideDownImage = styled.img<{ $offset: string; $duration?: string }>`
  position: absolute;
  animation: ${({ $offset, $duration = '1s' }) =>
    css`
      ${slideDown($offset)} ${$duration} ease-in-out
    `};
`;

const ComputerImage = styled(SlideDownImage)`
  z-index: 2;
  top: 0.25rem;
  left: 26%;
  width: 11.25rem;
  height: auto;

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const MailButton = styled.button<{
  $offset: string;
  $duration?: string;
  $isFirstOpen: boolean;
  $isOpen: boolean;
}>`
  position: absolute;
  z-index: 2;
  top: ${({ $isOpen }) => ($isOpen ? `2.2rem` : `3rem`)};
  left: 45.5%;
  padding: 0;

  animation: ${({ $isFirstOpen, $offset, $duration = '1s' }) =>
    $isFirstOpen &&
    css`
      ${slideDown($offset)} ${$duration} ease-in-out
    `};

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const blink = keyframes`
  0%, 100% {
    visibility: visible;
  }
  50% {
    visibility: hidden;
  }
`;

const MailImage = styled.img<{ $isFirstOpen: boolean }>`
  width: 2.5rem;

  ${({ $isFirstOpen }) =>
    $isFirstOpen &&
    css`
      animation: ${blink} 2s steps(1, end) infinite;
      animation-delay: 2s;
    `}
`;

const Notification = styled.span<{ $isFirstOpen: boolean }>`
  position: relative;
  top: -2rem;
  left: 50%;
  transform: translateX(1rem);
  display: flex;
  width: 0.75rem;
  height: 0.75rem;

  ${({ $isFirstOpen }) =>
    $isFirstOpen &&
    css`
      animation: ${blink} 2s steps(1, end) infinite;
      animation-delay: 2s;
    `}
`;

const PingAnimation = styled.span`
  position: absolute;
  top: -0.125rem;
  left: -0.125rem;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #ff7b96;
  opacity: 0.8;
  animation: ping 1.5s infinite;

  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const NotificationDot = styled.span`
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: #ff5375;
`;

const DeskImage = styled(SlideDownImage)`
  width: 100%;
  bottom: 0;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translateX(5px);
  }
`;

const BookImage = styled(SlideDownImage)`
  right: 1.5rem;
  bottom: 0.9rem;
  width: 1.75rem;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translate(-4px, -2px) rotate(8deg);
  }
`;

const StandImage = styled(SlideDownImage)`
  top: 1.875rem;
  left: 1.5rem;
  width: 3.75rem;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translate(-8px, -7px) rotate(-11deg);
  }
`;

const DangdangeeImage = styled(SlideDownImage)`
  top: 5.375rem;
  right: 1.5rem;
  width: 2.5rem;

  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translate(10px, -7px) rotate(11deg);
  }
`;

const DeskTextContainer = styled.div<{ $offset: string; $duration?: string }>`
  position: absolute;
  left: 2rem;
  bottom: 0.5rem;
  font-size: 1rem;
  color: white;
  display: flex;
  flex-direction: column;

  animation: ${({ $offset, $duration = '1s' }) =>
    css`
      ${slideDown($offset)} ${$duration} ease-in-out
    `};
`;

const TalkContainer = styled.div`
  position: relative;
  top: -2rem;
  height: 1.5rem;
`;

const TalkText = styled.p<{ $isHover: boolean }>`
  width: fit-content;
  font-family: 'GangwonEdu';
  font-size: 1.5rem;
  color: white;
  animation: ${({ $isHover }) => ($isHover ? 'fadeIn 2s ease forwards' : 'none')};

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
