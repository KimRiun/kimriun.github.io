import React from 'react';
import styled from 'styled-components';
import SectionHead from '../components/SectionHead';
import HistoryCard from '../components/HistoryCard';
import historyData from '../data/historyData.json';

export default function HistoryPage() {
  return (
    <HistoryPageContainer>
      <SectionHead title='History' color='default' />
      <CardContainer>
        {historyData.map((item, index) => (
          <HistoryCard key={index} item={item} />
        ))}
      </CardContainer>
    </HistoryPageContainer>
  );
}

const HistoryPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    height: fit-content;
    padding-bottom: 4rem;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.minDesk}) {
    flex-direction: column;
  }
`;
