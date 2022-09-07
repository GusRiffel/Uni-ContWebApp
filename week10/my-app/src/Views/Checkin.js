import React from "react";
import {useNavigate} from "react-router-dom";
import Tile from "../Components/Tile";
import styled from "styled-components";
import CheckinForm from "../Components/CheckinForm";
import useAuth from "../services/firebase/useAuth";
import useCheckin from "../services/firebase/useCheckin";

const StyledTile = styled(Tile)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  justify-content: center;
  grid-row-gap: 20px;
  width: 100%;
`;

const StyledHeading = styled.h4`
  text-align: center;
  margin-top: 2%;
  color: ${({theme}) => theme.colors.purple};
`;


const Checkin = props => {
    const navigate = useNavigate();
    const {user} = useAuth();
    const { createCheckin } = useCheckin();

    const handleCheckin = async (data) => {
        const checkinData = {
            ...data, ...{
                photo: user.photoURL,
                userId: user.uid,
                userName: user.displayName || user.email,
                time: new Date()
            }
        }
        try{
            await createCheckin(checkinData);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };


    return (
        <StyledTile>
            <StyledHeading> Log Your Progress For May 18 </StyledHeading>
            <CheckinForm onCheckinSubmit={handleCheckin}/>
        </StyledTile>
    );
};

Checkin.propTypes = {};

export default Checkin;