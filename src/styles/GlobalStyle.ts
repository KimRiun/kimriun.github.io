import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  @font-face {
    font-family: 'GangwonEdu';
    src: url('/fonts/강원교육현옥샘.ttf') format('truetype');
  }

  body {
    font-family: Pretendard, Arial, sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.responsiveFont};
  }
`;

export default GlobalStyle;
