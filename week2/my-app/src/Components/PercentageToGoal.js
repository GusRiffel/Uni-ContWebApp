import React from "react";

const percentageStyle = {
    margin: "0"
}

const goalStyle = {
    margin: "0"
}

const PercentageToGoal = (props) => {
    const {days} = props;

    return (
        <div>
            <p style={percentageStyle}>{`${(100/30)*days}%`} TO</p>
            <p>GOAL</p>
        </div>
    )
}

export default PercentageToGoal;