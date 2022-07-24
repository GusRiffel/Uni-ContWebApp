import React from "react";
import styled, {css} from 'styled-components';

const ToGoal = styled.div`
  padding: 1%;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;


const PercentageToGoal = (props) => {
    const {days} = props;
    const progress = Math.round(100 / 30 * days.length);

    return (
        <ToGoal>
            <div><strong>{`${100 - progress}%`}</strong> TO</div>
            <div> GOAL</div>
        </ToGoal>
    )
}

export default PercentageToGoal;