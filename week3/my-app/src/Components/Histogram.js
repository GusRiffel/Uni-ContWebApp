import React from "react";

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

const Histogram = (props) => {
    const {days} = props;
    let daysReverse = Object.assign([], days);
    const daysToDisplay = daysReverse.slice(0,10).reverse();

    return (
        <div style={graphHolder}>
            {daysToDisplay.map((p, key) =>
                <div style={myProgress} key={key}>
                    <div style={{...myBar , height:`${(100 / 20) * p.score}%`}}></div>
                </div>
            )}
        </div>
    )
}

export default Histogram;