import { RefObject } from 'react';
import styled from 'styled-components';
import ArrowDownSVG from '@images/arrowDown.svg';

interface MoveNextPageButtonProps {
  sectionsRef: RefObject<HTMLDivElement[]>;
  isResponsive?: boolean;
}

export default function MoveNextPageButton({ sectionsRef, isResponsive }: MoveNextPageButtonProps) {
  const handleMoveDown = () => {
    if (sectionsRef.current) {
      const nextSection = sectionsRef.current.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top > 10; // 현재 스크롤보다 아래에 있는 첫 번째 섹션
      });

      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <MoveNextPageButtonContainer onClick={handleMoveDown} $isResponsive={isResponsive}>
      <MoveDownImage src={ArrowDownSVG} />
    </MoveNextPageButtonContainer>
  );
}

const MoveNextPageButtonContainer = styled.button<{ $isResponsive?: boolean }>`
  position: absolute;
  display: block;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2.5rem;
  height: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    ${({ $isResponsive }) => $isResponsive && 'display: none;'}
  }
`;

const MoveDownImage = styled.img`
  width: 2.5rem;

  animation: upDown 3s infinite ease-in-out;
  animation-delay: 2s;
  opacity: 0;
  animation-fill-mode: forwards;

  @keyframes upDown {
    0% {
      opacity: 0;
      transform: translateY(0) scale(0.9);
    }
    20% {
      opacity: 0.5;
      transform: translateY(10px);
    }
    40% {
      opacity: 0.5;
      transform: translateY(4px);
    }
    60% {
      opacity: 0.5;
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
`;
