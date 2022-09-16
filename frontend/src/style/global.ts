import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const CardMain = styled.main`
  width: 100vw;
  height: 100vh;
`;

export const FlexCardMain = styled(CardMain)<{
  flexDirection?: "row" | "column";
}>`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "column" || !flexDirection ? "column" : "row"};
`;

export const CenterCardMain = styled(FlexCardMain)`
  justify-content: center;
  align-items: center;
`;

// export const FullContainer = styled.div`
//   width: 100vw;
//   height: 100vh;
// `;

// export const CenterContainer = styled(FullContainer)<{
//   flexDirection?: "row" | "column";
// }>`
//   display: flex;
//   flex-direction: ${({ flexDirection }) =>
//     flexDirection === "column" || !flexDirection ? "column" : "row"};
//   justify-content: center;
//   align-items: center;
// `;

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
    font-family: 'BMJUA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMJUA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }

    html {
        font-size: 10px;
    }
    body  {
        overflow: hidden;
        font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    }

    input::placeholder, button {
        font-family: "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    }
`;

export default GlobalStyle;
