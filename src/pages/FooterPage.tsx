import styled from 'styled-components';

export default function FooterPage() {
  return (
    <FooterPageContainer>
      <div>
        <a href='https://github.com/KimRiun' target='_blank' style={{ paddingRight: '1rem' }}>
          Github
        </a>
        <a href='https://velog.io/@sue1199842/posts' target='_blank'>
          Blog
        </a>
      </div>
      <p>kimriun27@gmail.com</p>

      <p>ⓒ 2025.KimRiun All rights reserved.</p>
    </FooterPageContainer>
  );
}

const FooterPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 3rem 0rem;
  color: ${({ theme }) => theme.colors.gray.default};
  background-color: ${({ theme }) => theme.colors.gray.lightest};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
