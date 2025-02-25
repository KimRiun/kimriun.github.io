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
import InfoModal from '../components/InfoModal';
import MoveNextPageButton from '../components/MoveNextPageButton';

interface InfoPageProps {
  sectionsRef: RefObject<HTMLDivElement[]>;
}

export default function InfoPage({ sectionsRef }: InfoPageProps) {
  const { isOpen, onOpen, onClose } = useModal('info');
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const handleMailClick = () => {
    isOpen ? onClose() : onOpen();
    setIsFirstOpen(false);
  };

  return (
    <InfoPageContainer>
      <WindowContainer>
        <Bright />
        <WindowText>내 삶에서 가장 좋은 날은 바로 오늘이야</WindowText>
      </WindowContainer>
      <DeskContainer>
        <ComputerImage src={ComputerSVG} alt='computer' $offset='50%' $duration='1.6s' />
        <MailButton
          as={!isOpen ? 'button' : 'div'}
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
        <DeskImage src={DeskSVG} alt='desk' $offset='40%' $duration='1.3s' />
        <BookImage src={BookSVG} alt='book' $offset='100%' $duration='1.3s' />
        <StandImage src={StandSVG} alt='stand' $offset='55%' $duration='1.2s' />
        <DangdangeeImage src={DangdangeeSVG} alt='plant' $offset='100%' $duration='1.5s' />
        <BottomTextContainer $offset='100%' $duration='1.5s'>
          <p>Frontend Engineer</p>
          <b>GyeongRyun Kim</b>
        </BottomTextContainer>
      </DeskContainer>
      <MoveNextPageButton sectionsRef={sectionsRef} />
      <InfoModal />
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
  top: 2rem;
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
  z-index: 1;
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
      opacity: 10%; /* 처음엔 거의 어두운 상태 */
      filter: brightness(1) blur(100px); /* 어두운 빛 */
    }
    50% {
      opacity: 25%;
      filter: brightness(1.2) blur(100px); /* 밝아지기 시작 */
    }
    70% {
      opacity: 55%;
      width: 130%;
      height: 160%;
      filter: brightness(1.5) blur(100px); /* 밝아지기 시작 */
    }
    100% {
      opacity: 80%;
      width: 130%;
      height: 160%;
      filter: brightness(1.5) blur(100px); /* 가장 밝은 상태 */
    }
  }
`;

const WindowText = styled.p`
  z-index: 2;
  position: absolute;
  top: 30%;

  font-size: 1.7rem;
  font-family: 'GangwonEdu';
  height: fit-content;
  color: #91d7ea;
`;

const DeskContainer = styled.div`
  position: relative;
  top: -2.5rem;
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
`;

const BookImage = styled(SlideDownImage)`
  right: 1.5rem;
  bottom: 0.9rem;
  width: 1.75rem;
`;

const StandImage = styled(SlideDownImage)`
  top: 1.875rem;
  left: 1.5rem;
  width: 3.75rem;
`;

const DangdangeeImage = styled(SlideDownImage)`
  top: 5.375rem;
  right: 1.5rem;
  width: 2.5rem;
`;

const BottomTextContainer = styled.div<{ $offset: string; $duration?: string }>`
  position: absolute;
  left: 2rem;
  bottom: 0.5rem;
  font-size: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 4px;

  animation: ${({ $offset, $duration = '1s' }) =>
    css`
      ${slideDown($offset)} ${$duration} ease-in-out
    `};
`;
