import styled from 'styled-components';

export default function FooterPage() {
  return (
    <FooterPageContainer>
      <div>kimriun27@gmail.com</div>
      <div>ⓒ 2025.KimRiun All rights reserved.</div>
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
