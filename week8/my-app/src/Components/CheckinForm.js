import React, {useState, useEffect} from "react";
import {useForm} from "react-hook-form";

import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import styled from "styled-components";

import drinkIcon from "../assets/drink-icon.svg";
import foodIcon from "../assets/food-icon.svg";
import Button from "../Components/Button";
import ErrorLabel from "../Components/ErrorLabel";

const StyledHeading = styled.h4`
  text-align: center;
  margin-top: 2%;
  color: ${({theme}) => theme.colors.purple};
`;

const StyledLabel = styled.label`
  text-align: left;
  margin-top: 5%;
`;

const StyledForm = styled.form`
  display: grid;
  justify-content: center;
  text-align: left;
`;
const StyledCheckinP = styled.p`
  display: flex;
  font-size: 13px;
  justify-content: space-around;
  margin-top: 5%;

  input:nth-child(1) {
    background: green;
  }

  input:checked {
    background-color: #a77e2d !important;
    color: #ffffff !important;
  }
`;

const StyledFoodDrinkArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
`;

const StyledSelect = styled.select`
  padding-left: 25%;
  text-indent: 40%;
  background: white;
  width: 135px;
  height: 44px;
  font-size: 14px;
  color: rgba(31, 32, 65, 0.75);
`;

const StyledIcon = styled.img`
  margin-right: -10px;
  z-index: 2000;
  display: relative;
  position: absolute;
  margin-top: 10px;
  margin-left: 6px;
`;

const StyledCheckinTitle = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 12px;
    color: ${({theme, error}) => error ? "red" : theme.colors.darkShade[25]};
    margin-top: 5%;
  }
`;

const CheckinForm = (props) => {
    const {onSubmit} = props;
    const maxCommentLength = 25;

    const [score, setScore] = useState(0);
    const [remainingCommentCount, setRemainingCommentCount] = useState(maxCommentLength);

    const checkinFormSchema = yup.object().shape({
        comment: yup
            .string()
            .max(maxCommentLength, `Sorry comments must be under ${maxCommentLength} characters long`),
        exercise: yup
            .string()
            .required("you must tell us if you have exercised"),
        veg: yup
            .string()
            .required("you must tell us if you consumed your veg"),
        water: yup
            .string()
            .required("you must tell us if you drank 2l of water"),
        diet: yup
            .string()
            .required("you must tell us if you kept tour diet")
    });

    const {register, handleSubmit, formState: {errors}, reset, watch} = useForm({
        resolver: yupResolver(checkinFormSchema),
        defaultValues: {comment: "", exercise: "", veg: "", water: "", diet: ""}
    });

    const dietValue = watch("diet");
    const comment = watch('comment');
    useEffect(() => {
        setRemainingCommentCount(maxCommentLength - comment.length);
    }, [comment])

    const formValues = watch();
    let checkinScore = {
        exercise: 0,
        veg: 0,
        water: 0,
        diet: 0
    }

    useEffect(() => {
        checkinScore.exercise = !formValues.exercise ? 0 : parseInt(formValues.exercise);
        checkinScore.veg = !formValues.veg ? 0 : parseInt(formValues.veg);
        checkinScore.water = !formValues.water ? 0 : parseInt(formValues.water);
        if (formValues.diet !== "") {
            checkinScore.diet = formValues.diet === "0" ? 10 - (parseInt(formValues.foodPen) + parseInt(formValues.drinkPen)) : parseInt(formValues.diet);
        }
        setScore(checkinScore.exercise + checkinScore.veg + checkinScore.water + checkinScore.diet);
    }, [formValues])

    const onFormSubmit = (data) => {
        console.log({...data}, {...checkinScore}, {total: score});
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
            <StyledLabel>Did you exercise for at least 20 mins (5) ?</StyledLabel>
            <StyledCheckinP>
                <span>
                    <input type="radio" value="5" name="exercise" {...register('exercise')} /> Yes
                </span>
                <span>
                    <input type="radio" value="0" name="exercise" {...register('exercise')} /> No
                </span>
            </StyledCheckinP>
            <ErrorLabel> {errors.exercise && errors.exercise.message} </ErrorLabel>
            <StyledLabel>Did you eat 5 portions of veg (3)?</StyledLabel>
            <StyledCheckinP>
                <span>
                    <input type="radio" value="3" name="veg" {...register('veg')} /> Yes
                </span>
                <span>
                    <input type="radio" value="0" name="veg" {...register('veg')} /> No
                </span>
            </StyledCheckinP>
            <ErrorLabel> {errors.veg && errors.veg.message} </ErrorLabel>
            <StyledLabel>Did you drink 2l of water (2)?</StyledLabel>
            <StyledCheckinP>
                <span>
                    <input type="radio" value="2" name="water" {...register('water')} /> Yes
                </span>
                <span>
                    <input type="radio" value="0" name="water" {...register('water')} /> No
                </span>
            </StyledCheckinP>
            <ErrorLabel> {errors.water && errors.water.message} </ErrorLabel>
            <StyledLabel>Was Your Diet Perfect (10)?</StyledLabel>
            <StyledCheckinP>
                <span>
                    <input type="radio" value="10" name="diet" {...register('diet')} /> Yes
                </span>
                <span>
                    <input type="radio" value="0" name="diet" {...register('diet')} /> No
                </span>
            </StyledCheckinP>
            <ErrorLabel> {errors.diet && errors.diet.message} </ErrorLabel>

            {dietValue === "0" && (
                <StyledFoodDrinkArea>
                    <StyledLabel>Drinks</StyledLabel>
                    <StyledLabel>Food</StyledLabel>
                    <div>
                        <StyledIcon src={drinkIcon}/>
                        <StyledSelect name="drinkPen" {...register('drinkPen')}>
                            <option value="0"> 0</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                        </StyledSelect>
                    </div>
                    <div>
                        <StyledIcon src={foodIcon}/>
                        <StyledSelect name="foodPen" {...register('foodPen')}>
                            <option value="0"> 0</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                        </StyledSelect>
                    </div>
                </StyledFoodDrinkArea>
            )}

            <StyledCheckinTitle error={remainingCommentCount < 0}>
                <StyledLabel>Comment</StyledLabel> <p>{remainingCommentCount}</p>
            </StyledCheckinTitle>
            <textarea rows="4" cols="40" name="comment" {...register('comment')} />
            <ErrorLabel> {errors.comment && errors.comment.message} </ErrorLabel>
            <StyledHeading> Total: {score} points </StyledHeading>
            <Button text="CHECKIN"> </Button>
        </StyledForm>
    );
};

export default CheckinForm;