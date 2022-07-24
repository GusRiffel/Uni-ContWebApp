import React from "react";
import styled, {css} from 'styled-components';

const TileStyle = styled.div`
  ${(props) => props.height && css`
    height: ${props.height}rem;
  `};
  ${(props) => props.width && css`
    width: ${props.width}%;
  `};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 40px 10px 20px rgba(31, 32, 32, 0.05);
  padding: 1%;
  margin-top: 2%;
  margin-bottom: 0%;
  border-radius: 3%;
`;

const Tile = (props) => {
    const {children} = props;
    const {height} = props;
    const {width} = props;
    console.log(height, width);

    return (
        <TileStyle height={height} width={width}>{children}</TileStyle>
    );
}

export default Tile;