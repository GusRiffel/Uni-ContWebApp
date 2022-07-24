import DaysCompleted from './Components/DaysCompleted';
import MainDash from './Components/MainDash';
import GlobalStyles from './config/GlobalStyles';
import theme from "./config/theme.js";
import { ThemeProvider } from "styled-components";
import styled, {css} from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


function App() {
    const days = 15;
    const checkins = [
        {
          date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
        {
          date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 15,
        },
        { date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8 },
        { date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2 },
        {
          date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
        {
          date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 12,
        },
        {
          date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 19,
        },
        {
          date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 10,
        },
        {
          date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 15,
        },
        { date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6 },
        {
          date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
        {
          date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
        {
          date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
        {
          date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
          score: 20,
        },
      ];

    return (
        <div>
            <ThemeProvider theme={theme}>
            <GlobalStyles />
                <Wrapper>
               <DaysCompleted days={checkins}/>
                <MainDash days={checkins}></MainDash>
                </Wrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
