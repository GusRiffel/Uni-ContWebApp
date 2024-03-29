import React from "react";
import {Link, useLocation} from "react-router-dom";
import styled from "styled-components";
import avatarLarge from "../assets/avatar_small.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../services/firebase/useAuth";

function Menu() {
    const location = useLocation();

    const StyledNav = styled.nav`
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `;

    const StyledLi = styled.li`
      margin-bottom: 10%;
      cursor: pointer;
      width: 100%;
      text-align: center;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${({theme, active}) => active ? theme.colors.darkShade[25] : ""}
    `;

    return (
        <div>
            <StyledNav>
                <ul>
                    <StyledLi active={location.pathname === '/'}>
                        <Link to="/">Dash </Link>
                    </StyledLi>
                    <StyledLi active={location.pathname === '/profile'}>
                        <Link to="/profile">Profile </Link>
                    </StyledLi>
                    <StyledLi active={location.pathname === '/checkin'}>
                        <Link to="/checkin">Checkin </Link>
                    </StyledLi>
                </ul>
            </StyledNav>
        </div>
    )
}


function Header(props) {
    let {dropDown, dropDownState, signOut} = props;
    const {user} = useAuth();


    const StyledBurgerMenu = styled.div`
      width: 90px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      hr {
        margin: 4px 0 0 4px;
        width: 20%;
        border: 1px solid ${({theme}) => theme.colors.darkShade[100]};
      }
    `;

    const StyledUserAvatar = styled.div`
      color: ${({theme}) => theme.colors.darkShade[50]};
      display: flex;
      align-items: center;

      img {
        margin-top: 8%;
      }
    `;

    const StyledMenuWrapper = styled.div`
      transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
      height: 100vh;
      width: 304px;
      background: linear-gradient(180deg, #6fcf9d 0%, #67d2e8 100%);
      position: absolute;
      padding-top: 10%;
      top: 0;
      left: 0;
    `;

    const StyledWrapper = styled.div`
      width: 100%;
      background: linear-gradient(180deg,
      ${({theme}) => theme.colors.lightPurple} 0%,
      ${({theme}) => theme.colors.purple} 100%);
      height: 50px;
      display: flex;
      justify-content: space-between;
    `;

    return (
        <div>
            <StyledMenuWrapper open={dropDown}>
                <Menu/>
            </StyledMenuWrapper>

            <StyledWrapper>
                <StyledBurgerMenu onClick={() => dropDownState(true)}>
                    <hr/>
                    <hr/>
                    <hr/>
                </StyledBurgerMenu>
                <StyledUserAvatar>
                    <FontAwesomeIcon style={{fontSize: "16px"}} icon={faChevronDown}/>
                    <h6>
                        {user.displayName ? user.displayName : user.email}
                        <span style={{cursor: "pointer"}} onClick={() => signOut()}>(sign out)</span>
                    </h6>
                    <img src={avatarLarge} alt="avatar"/>
                </StyledUserAvatar>
            </StyledWrapper>
        </div>
    );
}

export default Header;
