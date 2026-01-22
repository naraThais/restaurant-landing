import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=David+Libre:wght@400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'David Libre', serif;
    background-color: #fafafa;

    /* background com folhas cinza */
    background-image: url('/backgrounds/plants.png');
    background-repeat: repeat;
    background-size: 700px;
  }
`;

export default GlobalStyles;
