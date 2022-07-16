import React from "react";

const percentageStyle = {
    margin: "0"
}

const goalStyle = {
    margin: "0"
}

const PercentageToGoal = (props) => {
    const {days} = props;

    const progress = Math.round(100/30*days.length);
    return (
        <div>
            <p style={percentageStyle}>{`${100 - progress}%`} TO</p>
            <p>GOAL</p>
        </div>
    )
}

export default PercentageToGoal;