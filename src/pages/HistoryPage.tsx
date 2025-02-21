import styled from 'styled-components';
import SectionHead from '../components/SectionHead';
import HistoryCard from '../components/HistoryCard';
import historyData from '../data/historyData.json';
import { RefObject } from 'react';
import MoveNextPageButton from '../components/MoveNextPageButton';

interface HistoryPageProps {
  sectionsRef: RefObject<HTMLDivElement[]>;
}

export default function HistoryPage({ sectionsRef }: HistoryPageProps) {
  return (
    <HistoryPageContainer>
      <SectionHead title='History' color='default' />
      <CardContainer>
        {historyData.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </CardContainer>
      <MoveNextPageButton sectionsRef={sectionsRef} isResponsive />
    </HistoryPageContainer>
  );
}

const HistoryPageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    height: fit-content;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  margin: auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding-bottom: 8rem;
`;
