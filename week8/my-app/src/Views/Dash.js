import React from "react";
import DashComponent from "../Components/DaysCompleted";
import CheckinComment from "../Components/CheckinComment";

const Dash = (props) => {

    return (
        <div>
            <DashComponent days={props.days} checkins={props.checkins}>
                {" "}
            </DashComponent>
            <CheckinComment/>
        </div>
    );
};

export default Dash;