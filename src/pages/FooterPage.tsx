import React from 'react';
import styled from 'styled-components';

export default function FooterPage() {
  return <FooterPageContainer>FooterPage</FooterPageContainer>;
}

const FooterPageContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${({ theme }) => theme.colors.gray.lightest};
`;
