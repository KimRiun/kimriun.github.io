import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    line-height: 1.5rem;
    font-family: Pretendard, Arial, sans-serif;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background.default};
    color: ${({ theme }) => theme.colors.text.primary};
  }

  b {
    font-weight: bold;
  }

  ul {
    list-style: disc; 
    padding-left: 1rem;
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
