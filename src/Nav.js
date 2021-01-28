import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


const StyledDiv = styled.div`
width: 100%;
background-color: #F4F9F7;
margin-top: 20px;

    ul {
    background-color: #F4F9F7;
    display: flex;
    justify-content: left;
    list-style-type: none;
  
     @media screen and (max-width: 900px) {
     display: flex;    
     justify-content: center;
    }

    @media screen and (max-width: 500px) {
        width: 50%;
        margin: auto;
        padding-top: 5px;
        padding-bottom: 50px;
        display: flex;    
        justify-content: center;
        flex-wrap: wrap;
       }
    }
`;

const activeClassName = 'nav-item-active'

const StyledLink = styled(NavLink).attrs({ activeClassName })`
font-size: 30px;
font-weight: bold;
color: black;
text-decoration: none;
font-family: 'Permanent Marker', cursive;
margin-top: 10px;
margin-right: 60px;
margin-bottom: 40px;

&:hover{
    cursor: pointer;
    color: lightgray;
}

 &.${activeClassName} {
    color: #FD8A49;
  }

   @media screen and (max-width: 1200px) {
        font-size: 28px;
        margin-right: 40px;
    }

 @media screen and (max-width: 900px) {
        margin-right: 30px;
        margin-left : 30px;
    }

    @media screen and (max-width: 500px) {
        margin-right: 15px;
        margin-left : 15px;
    }

    @media screen and (max-width: 500px) {
        font-size: 30px;
        margin-bottom: 0px;
        margin-top: 10px;
       }
`;


function Nav() {
    return (
        <StyledDiv>
            <ul>
                <StyledLink exact to="/">Work</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </ul>
        </StyledDiv>
    )
}

export default Nav;