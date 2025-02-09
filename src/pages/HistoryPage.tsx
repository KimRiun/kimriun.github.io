import React from 'react';
import styled from 'styled-components';

export default function HistoryPage() {
  return <HistoryPageContainer>HistoryPage</HistoryPageContainer>;
}

const HistoryPageContainer = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;
