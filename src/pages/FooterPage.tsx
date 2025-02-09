import React from 'react';
import styled from 'styled-components';

export default function FooterPage() {
  return <FooterPageContainer>FooterPage</FooterPageContainer>;
}

const FooterPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.lightest};
  height: 30vh;
`;
