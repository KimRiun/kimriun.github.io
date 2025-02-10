import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    font-family: Pretendard, Arial, sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: ${({ theme }) => theme.fontSizes.responsiveFont};
  }

  b {
    font-weight: bold;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    &:focus {
      outline: none;
    }
    -webkit-tap-highlight-color : transparent; // 하이라이트 투명
  }
`;

export default GlobalStyle;
