import React from "react";

// const barColour = {
//     margin: "0",
// }

const myProgress = {
    width: "100%",
    backgroundColor: "rgba(188, 156, 255, 0.25)",
    borderRadius: "5px"
}

const myBar = {
    width: "1%",
    height: "15px",
    backgroundColor: "#BC9CFF",
    borderRadius: "5px"
}

const ProgressBar = (props) => {
    const {days} = props;

    return (
        <div style={myProgress}>
            <div style={{...myBar, width: `${(100/30)*days}%`}}></div>
        </div>
        // <progress style={barColour} className="progress is-normal is-purple" value={days} max={30}></progress>
    )
};

export default ProgressBar;