import React from "react";

import PropTypes from "prop-types";
import Tile from './Tile';
import ProgressBar from './ProgressBar';
import Histogram from './Histogram';
import PercentageToGoal from './PercentageToGoal';

const DaysCompleted = (props) => {
    const { days } = props;
    const divStyle = {
        color: "#BC9CFF",
    }
    return (
        <Tile>
            <h1 style={divStyle}> {days.length} Days Completed!</h1>
            <Histogram days={days} />
            <ProgressBar days={days} />
            <PercentageToGoal days={days} />
        </Tile>
    );
}

DaysCompleted.propTypes = {
    days: PropTypes.array.isRequired,
};

export default DaysCompleted;