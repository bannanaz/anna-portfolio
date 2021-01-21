import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledDiv = styled.div`
width: 100%;
background-color: #F4F9F7;
margin-top: 20px;

    ul {
    width: 85%;
    background-color: #F4F9F7;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    margin-left: 40px;
    margin-right; 40px;
    }
`;

const StyledLink = styled(Link)`
font-size: 32px;
font-weight: bold;
color: black;
text-decoration: none;
font-family: 'Permanent Marker', cursive;
`;


function Nav() {
    return (
        <StyledDiv>
            <ul>
                <StyledLink to="/work">Work</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/contact">Contact</StyledLink>
            </ul>
        </StyledDiv>
    )
}

export default Nav;