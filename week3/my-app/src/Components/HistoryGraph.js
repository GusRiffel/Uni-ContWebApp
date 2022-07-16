import React from "react";

const graphProgress = [1, 2, 3, 4, 2, 0, 1, 4, 2, 3];

const graphHolder = {
    display: "flex",
    flexDirection: "row",
}

let myProgress = {
    width: "7%",
    height: "37px",
    backgroundColor: "#e6e6e6",
    marginLeft: "2.5%",
    marginBottom: "3%",
    transform: "rotate(180deg)",
    borderRadius: "5px"
}

const myBar = {
    width: "100%",
    height: "0%",
    backgroundColor: "#6FCF97",
    borderRadius: "5px"
}

const HistoryGraph = (props) => {
    const {days} = props;
    let daysReverse = Object.assign([], days);
    const daysToDisplay = daysReverse.reverse();

    return (
        <div style={graphHolder}>
            {daysToDisplay.slice(0,10).map((p, key) =>
                <div style={myProgress} key={key}>
                    <div style={{...myBar , height:`${(100 / 20) * p.score}%`}}></div>
                </div>
            )}
        </div>
    )
}

export default HistoryGraph;