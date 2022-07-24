import React from "react";

import PropTypes from "prop-types";
import Tile from './Tile';
import ProgressBar from './ProgressBar';
import Histogram from './Histogram';
import PercentageToGoal from './PercentageToGoal';
import styled from "styled-components";



const DaysCompleteHeading = styled.h2`
  
  color: ${(props) => props.theme.colors.purple};
  margin: 0;
  font-size: 45px;
  word-spacing: 10px;
  letter-spacing: 2px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
`;

const DaysCompleted = (props) => {
    const {days} = props;


    return (
        <Tile height={13} width={30}>
            <DaysCompleteHeading> {days.length} Days Completed!</DaysCompleteHeading>
            <Histogram days={days}/>
            <ProgressBar days={days}/>
            <PercentageToGoal days={days}/>
        </Tile>
    );
}

DaysCompleted.propTypes = {
    days: PropTypes.array.isRequired,
};

export default DaysCompleted;