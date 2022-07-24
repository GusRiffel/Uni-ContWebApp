import React from "react";
import styled, { css } from 'styled-components';

const Progress = styled.div`
    width: 90%;
    background-color: rgba(188, 156, 255, 0.25);
    border-radius: 5px;
`;

const BarProgressStyle = styled.div`
  ${(props) => props.days && css`
      width: ${props.days}%;
    `}
  
  height: 18px;
  background: linear-gradient(180deg, #BC9CFF 0%, #8BA4F9 100%);
  border-radius: 5px;
`;

const ProgressBar = (props) => {
    const {days} = props;
    const progressValue = Math.round(100/30 * days.length);
    return (
        <Progress>
            <BarProgressStyle days={progressValue}></BarProgressStyle>
        </Progress>
    )
};

export default ProgressBar;