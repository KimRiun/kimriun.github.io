import styled from 'styled-components';

export default function FooterPage() {
  return (
    <FooterPageContainer>
      <p>010-4508-9842</p>
      <p>kimriun27@gmail.com</p>
      <p>ⓒ 2025.KimRiun All rights reserved.</p>
    </FooterPageContainer>
  );
}

const FooterPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 2rem 0rem;
  color: ${({ theme }) => theme.colors.gray.default};
  background-color: ${({ theme }) => theme.colors.gray.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
