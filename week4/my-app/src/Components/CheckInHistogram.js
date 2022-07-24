import React from 'react';
import Histogram from './Histogram';
import styled, {css} from 'styled-components';
import {TiHeart} from 'react-icons/ti';

const Wrapper = styled.div`
  margin-top: 1%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 15%;
`;

const HistogramWrapper = styled.div`
  margin-left: 5%;
  height: 90%;
  width: 100%;
`;

const HeartIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border: 2px solid #BC9CFF;
  border-radius: 35%;
  color: #BC9CFF;
`;

const DaysTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5%;
`;

const TotalText = styled.div`
  font-size: 25px;
  margin: 0;
`;

const NoDays = styled.div`
  color: ${(props) => props.theme.colors.purple};
  font-size: 30px;

`;

const CheckInHistogram = (props) => {
    const {days} = props;

    return (
        <Wrapper>
            <HeartIcon>
                <TiHeart color="#BC9CFF" fontSize="1.5em"/>
                <div><strong>12</strong></div>
            </HeartIcon>
            <DaysTotal>
                <TotalText><strong>Total</strong></TotalText>
                <NoDays>15</NoDays>
            </DaysTotal>
            <HistogramWrapper>
                <Histogram days={days}/>
            </HistogramWrapper>
        </Wrapper>
    );
}

export default CheckInHistogram;