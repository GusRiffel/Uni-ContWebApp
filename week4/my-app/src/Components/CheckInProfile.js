import React from 'react';
import Histogram from './Histogram';
import styled, {css} from 'styled-components';
import profile1 from '../config/profile1.jpg';

const ProfileWrapper = styled.div`
  display: flex;
  width: 90%;
`;

const ProfilePicture = styled.img`
  background-image: url(${profile1});
  background-size: cover;
  width: 100px;
  height: 80px;
  border-radius: 50%;
`;

const ProfileTextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 5%;
`;

const UserCheckInText = styled.div`
  display: flex;
  font-size: 25px;
  font-weight: bold;
`;

const UserCheckIn = styled.div`
  color: ${(props) => props.theme.colors.purple};
  margin-left: 5%;
`;

const CheckInTime = styled.div`
  padding: 1%;
  font-size: 20px;
  color: #1F2041;
`;

const CheckInProfile = () => {
    return (
        <ProfileWrapper>
            <ProfilePicture></ProfilePicture>
            <ProfileTextWrapper>
                <UserCheckInText>
                    <div>Joe Appleton</div>
                    <UserCheckIn>Checked In</UserCheckIn>
                </UserCheckInText>
                <CheckInTime>2 hours ago</CheckInTime>
            </ProfileTextWrapper>
        </ProfileWrapper>
    )
}

export default CheckInProfile;