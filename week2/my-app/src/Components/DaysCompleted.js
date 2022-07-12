import React from "react";

import PropTypes from "prop-types";
import Tile from './Tile';
import ProgressBar from './ProgressBar';
import HistoryGraph from './HistoryGraph';
import PercentageToGoal from './PercentageToGoal';

const DaysCompleted = (props) => {
    const { days } = props;
    const divStyle = {
        color: "#BC9CFF",
    }
    return (
        <Tile>
            <h1 style={divStyle}> {days} Days Completed!</h1>
            <HistoryGraph />
            <ProgressBar days={days} />
            <PercentageToGoal days={days} />
        </Tile>
    );
}

DaysCompleted.propTypes = {
    days: PropTypes.number.isRequired,
};

export default DaysCompleted;