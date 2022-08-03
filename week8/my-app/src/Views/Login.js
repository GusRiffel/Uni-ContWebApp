import React, {useState} from "react";
import styled from "styled-components";
import Tile from "../Components/Tile";
import { Link } from "react-router-dom";
import Form from "../Components/LoginForm";
import useAuth from "../services/firebase/useAuth";

const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  `;

const StyledTile = styled(Tile)`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    grid-row-gap: 20px;
    width: 100%;
    @media (min-width: 600px) {
      width: 30%;
    }
  `;

const StyledHeading = styled.h2`
    text-align: center;
    margin-top: 2%;
    color: ${({ theme }) => theme.colors.purple};
  `;
const StyledLink = styled(Link)`
    text-align: center;
  `;


function Login() {
    const { signInEmailUser, signInGoogleUser, signInFacebookUser } = useAuth();

    const [severErrorMessage, setServerErrorMessage] = useState("");

    const handleEmailSubmit = async (data) => {
        try {
            const { email, password } = data;
            await signInEmailUser(email, password);
        } catch (e) {
            setServerErrorMessage(e.message);
        }
    };

    const handleSocialSubmit = async (method) => {
        try {
            if (method === "facebook") {
               await signInFacebookUser();
            }
            if (method === "google") {
                await signInGoogleUser();
            }
        } catch (error) {
            console.log("error");
        }
    };

    return (
        <StyledWrapper>
            <StyledTile>

                <StyledHeading>Login With </StyledHeading>
                <Form
                    buttonText="LOGIN"
                    onEmailSubmit={handleEmailSubmit}
                    onSocialSubmit={handleSocialSubmit}
                    serverErrorMessage={severErrorMessage}
                />
                <StyledLink to="/join"> Not a member - Join </StyledLink>
            </StyledTile>
        </StyledWrapper>
    );
}

export default Login;