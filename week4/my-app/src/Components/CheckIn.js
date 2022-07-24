import React from 'react';
import CheckInProfile from './CheckInProfile';
import CheckInHistogram from './CheckInHistogram';
import styled, {css} from 'styled-components';

const CheckIn = (props) => {
    const {days} = props;

    const Wrapper = styled.div`
      height: 100%;
      width: 95%;
    `;

    const CheckInWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 35%;
    `;

    return (
        <Wrapper>
            <CheckInWrapper>
                <CheckInProfile></CheckInProfile>
                <CheckInHistogram days={days}></CheckInHistogram>
            </CheckInWrapper>
            <hr/>
        </Wrapper>
    )
}

export default CheckIn;