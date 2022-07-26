import React, {useState, useEffect} from "react";
import theme from "./config/theme.js";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "./config/GlobalStyles";
import {Routes, Route, useLocation} from "react-router-dom";
import styled from "styled-components";

import Header from "./Components/Header";
import Dash from "./Views/Dash";
import Checkin from "./Views/Checkin";
import Join from "./Views/Join";
import Login from "./Views/Login";
import Profile from "./Views/Profile";
import PageNotFound from "./Views/PageNotFound";

const checkins = [
    {
        date: "Wed Jan 29 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 20
    },
    {
        date: "Wed Jan 28 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 15
    },
    {date: "Wed Jan 27 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 8},
    {date: "Wed Jan 26 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 2},
    {
        date: "Wed Jan 25 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 20
    },
    {
        date: "Wed Jan 23 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 12
    },
    {
        date: "Wed Jan 22 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 19
    },
    {
        date: "Wed Jan 21 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 10
    },
    {
        date: "Wed Jan 20 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 15
    },
    {date: "Wed Jan 19 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 6},
    {
        date: "Wed Jan 18 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 20
    },
    {
        date: "Wed Jan 17 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 20
    },
    {
        date: "Wed Jan 16 2020 07:17:11 GMT+0000 (Greenwich Mean Time)",
        score: 20
    },
    {date: "Wed Jan 15 2020 07:17:11 GMT+0000 (Greenwich Mean Time)", score: 20}
];

const ClickWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

function App() {
    const location = useLocation();
    const [closeHeader, setCloseHeader] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(location);

    useEffect(() => {
        if (location.pathname === '/login' || location.pathname === '/join') {
            setCloseHeader(true);
        } else if (location.pathname !== currentLocation.pathname) {
            setCurrentLocation(location);
            setDropDownState(false);
        }
    }, [location])

    const setDropDownState = (bool) => {
        setOpenDropDown(bool);
    }

    return (
        <div>
            <ThemeProvider theme={theme}>
                {!closeHeader ? <Header dropDown={openDropDown} dropDownState={setDropDownState}/> : null}
                <GlobalStyles/>
                <ClickWrapper onClick={() => setOpenDropDown(false)}>
                    <Routes>
                        <Route path="/" element={<Dash days={15} checkins={checkins}/>}/>
                        <Route path="/join" element={<Join/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/checkin" element={<Checkin/>}/>
                        <Route path="/*" element={<PageNotFound/>}/>
                    </Routes>
                </ClickWrapper>
            </ThemeProvider>
        </div>
    );
}

export default App;
