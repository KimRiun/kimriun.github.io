import React, { useState } from 'react';
import styled from 'styled-components';
import ComputerSVG from '@images/computer.svg';
import DeskSVG from '@images/desk.svg';
import MailSVG from '@images/mail.svg';
import BookSVG from '@images/book.svg';
import StandSVG from '@images/stand.svg';
import DangdangeeSVG from '@images/dangdangee.svg';

export default function InfoPage() {
  return (
    <InfoPageContainer>
      <WindowContainer>
        <Bright />
        <WindowText>내 삶에서 가장 좋은 날은 오늘이야</WindowText>
      </WindowContainer>
      <DeskContainer>
        <ComputerImage src={ComputerSVG} alt='computer' />
        <MailContainer>
          <MailImage src={MailSVG} alt='mail' />
          <Notification>
            <PingAnimation />
            <NotificationDot />
          </Notification>
        </MailContainer>
        <DeskImage src={DeskSVG} alt='desk' />
        <BookImage src={BookSVG} alt='book' />
        <StandImage src={StandSVG} alt='stand' />
        <DangdangeeImage src={DangdangeeSVG} alt='plant' />
      </DeskContainer>
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

  animation: lightAnimation 4s ease-in-out infinite alternate;

  @keyframes lightAnimation {
    0% {
      opacity: 10%; /* 처음엔 거의 어두운 상태 */
      filter: brightness(1) blur(100px); /* 어두운 빛 */
    }
    50% {
      opacity: 25%;
      filter: brightness(1.2) blur(100px); /* 밝아지기 시작 */
    }
    80% {
      opacity: 55%;
      width: 130%;
      height: 160%;
      filter: brightness(1.5) blur(100px); /* 밝아지기 시작 */
    }
    100% {
      opacity: 60%;
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
  height: fit-content;
  font-family: 'GangwonEdu';
  color: #91d7ea;
  font-size: larger;
`;

const DeskContainer = styled.div`
  position: relative;
  top: -2.5rem;
  min-width: 22.5rem;
  min-height: 15rem;
  width: 22.5rem;
  height: 15rem;
`;

const ComputerImage = styled.img`
  z-index: 2;
  position: absolute;
  top: 0.25rem;
  left: 50%;
  transform: translateX(-50%);
  width: 11.25rem;
  height: auto;
`;

const MailContainer = styled.div`
  z-index: 2;
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`;

const MailImage = styled.img`
  width: 2.5rem;
`;

const Notification = styled.span`
  position: relative;
  top: -2rem;
  left: 50%;
  transform: translateX(1rem);
  display: flex;
  width: 0.75rem;
  height: 0.75rem;
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

const DeskImage = styled.img`
  position: absolute;
  width: 100%;
  bottom: 0;
`;

const BookImage = styled.img`
  position: absolute;
  right: 1.5rem;
  bottom: 0.875rem;
  width: 1.75rem;
`;

const StandImage = styled.img`
  position: absolute;
  top: 1.875rem;
  left: 1.5rem;
  width: 3.75rem;
`;

const DangdangeeImage = styled.img`
  position: absolute;
  top: 5.375rem;
  right: 1.5rem;
  width: 2.5rem;
`;
