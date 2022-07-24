import React from 'react';
import Tile from './Tile';
import CheckIn from './CheckIn';

const MainDash = (props) => {
    const {days} = props;

    return (
        <Tile height={30} width={30}>
            <CheckIn days={days}></CheckIn>
        </Tile>
    )
}

export default MainDash;