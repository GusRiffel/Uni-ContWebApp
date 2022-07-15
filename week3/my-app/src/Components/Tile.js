import React from "react";

const divStyle = {
    height: "184px",
    width: "425px",
    left: "23px",
    top: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

const Tile = (props) => {
    const { children } = props;


    return (
        <div className={"card"} style={divStyle}>
            <div className={"card-content"}>
                <div className={"content"}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Tile;