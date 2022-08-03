import React, {useState} from "react";
import {SocialIcon} from "react-social-icons";
import {useForm} from "react-hook-form";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

import Button from "../Components/Button";
import ErrorLabel from "../Components/ErrorLabel";

const StyledHeading = styled.h2`
  text-align: center;
  margin-top: 2%;
  color: ${({theme}) => theme.colors.purple};
`;

const StyledSocialIconArea = styled.div`
  display: flex;
  justify-content: space-around;
`;

function LoginForm(props) {
    const {buttonText, onSocialSubmit, onEmailSubmit, serverErrorMessage} = props;
    const [displayEmail, setDisplayEmail] = useState(false);

    const onSubmitHandler = () => reset();

    const loginFormSchema = yup.object().shape({
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Please enter an email"),
        password: yup
            .string()
            .required("Please enter a password")
            .min(6, "Password must be 6 characters long")
    });

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(loginFormSchema),
    });

    const errorBorder = (error) => error && {borderColor: "red"};

    return (
        <>
            <StyledSocialIconArea>
                <SocialIcon
                    style={{cursor: "pointer"}}
                    network="facebook"
                    onClick={() => onSocialSubmit("facebook")}
                />
                <SocialIcon style={{cursor: "pointer"}} network="google" onClick={() => onSocialSubmit("google")}/>
                <SocialIcon
                    style={{cursor: "pointer"}}
                    network="twitter"
                    onClick={() => onSocialSubmit("facebook")}
                />
            </StyledSocialIconArea>
            <StyledHeading> OR </StyledHeading>

            {!displayEmail && <Button onClick={() => setDisplayEmail(!displayEmail)} text="Email"/>}

            {displayEmail && (
                <form onSubmit={handleSubmit(onEmailSubmit)}>
                    <p>
                        <label> Email </label>
                    </p>
                    <p>
                        <input
                            type="email"
                            name="email"
                            style={errorBorder(errors.email)}
                            {...register('email')}
                            required
                        />
                        <br/>
                        <ErrorLabel> {errors.email && errors.email.message} </ErrorLabel>
                    </p>

                    <label> Password </label>

                    <p>
                        <input
                            type="password"
                            name="password"
                            style={errorBorder(errors.password)}
                            {...register('password')}
                            required
                        />
                        <br/>
                        <ErrorLabel> {errors.password && errors.password.message} </ErrorLabel>
                        <ErrorLabel> {serverErrorMessage && serverErrorMessage} </ErrorLabel>
                    </p>
                    <Button text={buttonText}/>
                </form>
            )}
        </>
    );
}

LoginForm.propTypes = {
    buttonText: PropTypes.string,
};

LoginForm.defaultProps = {
    buttonText: "JOIN",
};

export default LoginForm;