import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Icons
import LooksOneOutlinedIcon from '@material-ui/icons/LooksOneOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

// SVG
import Home from "../../assets/home-solid.svg";
import Social from "../../assets/social.svg";
import Draft from "../../assets/draft.svg";

const Sidebar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [profileClick, setprofileClick] = useState(false);
    const handleProfileClick = () => setprofileClick(!profileClick);

    return (
        <>
            <Container>
            <Button clicked={click} onClick={() => handleClick()}>
                
            </Button>
            <SidebarContainer>
                <Logo>
                <LooksOneOutlinedIcon className="logoSb" />
                </Logo>
                <SlickBar clicked={click}>
                
                <Item
                    onClick={() => setClick(false)}
                    exact
                    activeClassName="active"
                    to="/banking-app"
                >
                    <img src={Home} alt="Home" />
                    <Text clicked={click}>Home</Text>
                </Item>

                <Item
                    onClick={() => setClick(false)}
                    activeClassName="active"
                    to="/transactions"
                    exact
                >
                    <img src={Draft} alt="Transactions" />
                    <Text clicked={click}>Transactions</Text>
                </Item>

                <Item
                    onClick={() => setClick(false)}
                    activeClassName="active"
                    to="/members"
                    exact
                >
                    <img src={Social} alt="Members" />
                    <Text clicked={click}>Members</Text>
                </Item>
                </SlickBar>

                <Profile clicked={profileClick}>
                <AccountCircleIcon
                    className="accSb" 
                    onClick={() => handleProfileClick()}
                />
                <Details clicked={profileClick}>

                    <Name>
                    <h3>&nbsp;Admin</h3>
                    </Name>

                </Details>
                </Profile>
            </SidebarContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
  padding-top: 3vh;
  padding-left: 0vw;
  position: fixed;
  .active {
    border-right: 4px solid #fff;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
`;

const Button = styled.button`
  background-color: #000;
  border: none;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin: 0.5rem 0 0 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
  }
  &::before {
    top: ${(props) => (props.clicked ? "1.5" : "1rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const SidebarContainer = styled.div`
  background-color: #000;
  width: 3.5rem;
  height: 80vh;
  margin-top: 1rem;
  border-radius: 0 30px 30px 0;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Logo = styled.div`
  width: 2rem;

  .logoSb {
    color: var(--white);
  }
`;

const SlickBar = styled.ul`
  z-index: 999;
  overflow: ${(props) => (props.clicked ? "visible" : "hidden")};
  color: var(--white);
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000;
  padding: 2rem 0;
  position: fixed;
  top: 15rem;
  left: 0;
  width: ${(props) => (props.clicked ? "12rem" : "3.5rem")};
  transition: all 0.5s ease;
  border-radius: 0 30px 30px 0;
`;

const Item = styled(NavLink)`
  text-decoration: none;
  color: var(--white);
  width: 100%;
  padding: 1rem 0;
  cursor: pointer;
  display: flex;
  padding-left: 1rem;
  &:hover {
    border-right: 4px solid var(--white);
    text-decoration: none;
    img {
      filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
        brightness(103%) contrast(103%);
    }
  }
  img {
    width: 1.2rem;
    height: auto;
    filter: invert(92%) sepia(4%) saturate(1033%) hue-rotate(169deg)
      brightness(78%) contrast(85%);
  }
`;

const Text = styled.span`
  color: #fff;
  text-decoration: none;
  width: ${(props) => (props.clicked ? "100%" : "0")};
  overflow: hidden;
  margin-left: ${(props) => (props.clicked ? "1.5rem" : "0")};
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    color: #f5f5f5;
  }
`;

const Profile = styled.div`
  width: ${(props) => (props.clicked ? "14rem" : "3rem")};
  height: 3rem;
  bottom: 45px;
  position: fixed;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${(props) => (props.clicked ? "9rem" : "0")};
  background-color: #000;
  color: var(--white);
  transition: all 0.3s ease;
  .accSb {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      border: 2px solid var(--grey);
      padding: 2px;
    }
  }
`;

const Details = styled.div`
  display: ${(props) => (props.clicked ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

export default Sidebar;
