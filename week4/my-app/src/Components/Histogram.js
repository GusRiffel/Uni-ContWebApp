import React from "react";

import styled, {css} from 'styled-components';

const HistogramPlaceHolder = styled.div`
  display: flex;
  width: 60%;
  height: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding: 2%;
`;

const HistoProgressBar = styled.div`
  width: 7%;
  height: 100%;
  background-color: #e6e6e6;
  margin-bottom: 3%;
  transform: rotate(180deg);
  border-radius: 5px;
`;

const HistoBarFill = styled.div`
  ${(props) => props.score && css`
    height: ${props.score}%;
  `}
  width: 100%;
  background: ${(props) => props.theme.colors.greenGradient};
  border-radius: 5px;
`;

const Histogram = (props) => {
    const {days} = props;
    let daysReverse = Object.assign([], days);
    const daysToDisplay = daysReverse.slice(0, 10).reverse();

    return (
        <HistogramPlaceHolder>
            {daysToDisplay.map((p, key) =>
                <HistoProgressBar key={key}>
                    <HistoBarFill score={100 / 20 * p.score}></HistoBarFill>
                </HistoProgressBar>
            )}
        </HistogramPlaceHolder>
    )
}

export default Histogram;