import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import useModal from '../hooks/useModal';

export const InfoModal = React.memo(function InfoModal() {
  const { isOpen, onClose } = useModal('info');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // 모달이 사라지는 애니메이션 기다림
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [isOpen]);

  if (!isVisible) return null;
  return (
    <InfoModalContainer $isOpen={isOpen} onClick={onClose}>
      <ModalContent>
        <p>안녕하세요 😊</p>
        <p>
          <b>코드로 즐거움을 더하고 싶은 </b>
          프론트엔드 개발자 김경륜입니다.
        </p>
        <p>코드로 시각화하고 상호작용하는 부분을 만드는 데 관심이 많습니다.</p>
        <p>
          소통하고 성장하며
          <b> 함께 일하고 싶은 개발자</b>가 되고 싶습니다.
        </p>
      </ModalContent>
      <CloseButton onClick={onClose}>확인</CloseButton>
    </InfoModalContainer>
  );
});

export default InfoModal;

const InfoModalContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 14%;
  background-color: white;
  border-radius: 1.2rem;
  padding: 1.5rem;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  max-width: 28rem;
  z-index: 999;
  box-shadow: 0 4px 10px rgba(251, 46, 46, 0.25);

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          animation: ${fadeIn} 0.5s ease forwards;
        `
      : css`
          animation: ${fadeOut} 0.5s ease forwards;
        `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: 16%;
    gap: 3rem;
    padding: 2rem;
    padding-top: 4rem;
    margin-left: 1rem;
    margin-right: 1rem;
    word-break: keep-all;
    transform: translate(-50%, -50%);
  }
`;

const ModalContent = styled.div`
  font-size: 1rem;
  line-height: 1.6rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    line-height: 2.3rem;
    font-size: 1.2rem;
  }
`;

const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.gray.default};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;
