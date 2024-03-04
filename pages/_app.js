import styled, {ThemeProvider} from "styled-components";
import theme from "@/theme";
import {media} from "@/theme/media";
import {GlobalStyles} from "@/styles";

const RootContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 30px;

    ${media.md`padding:0;`}
`

function App({Component, pageProps}) {
  return <ThemeProvider theme={theme}>
    <GlobalStyles/>
    <RootContainer>
      <Component {...pageProps} />
    </RootContainer>
  </ThemeProvider>;
}

export default App
