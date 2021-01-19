import styled from 'styled-components';
import bgtop from './img/bgtop.png';
import bgtopmobile from './img/bgtopmobile.png';


const StyledDivBackgr = styled.div`
height: 100%;
background-image: url(${bgtop});   
background-size: 100%;
background-repeat: no-repeat;
    @media (max-width: 700px) {
        background-image: url(${bgtopmobile}); 
        background-size: 100%;
        background-repeat: no-repeat; 
        height: 500px; 
    }
`;

const StyledP = styled.p`
    font-family: 'Arial';
    font-size: 28px;
    color: #FD8A49;
    text-align: right;
    padding left: 2em;
    padding-right: 2em; 
    padding-top: 2em;
        @media (max-width: 900px) {
        font-size: 20px;
        }
`;

const StyledDiv = styled.div`
    padding-top: 1em;
    padding-bottom: 5em;
`;


const StyledH1 = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 9vw;
    text-align: left;
    padding-left: 1em;
    color: white;
      @media (max-width: 700px) {
        font-size: 11vw; 
    }
`;

function Header() {
    return (
        <StyledDivBackgr>
            <StyledP>&lt;Front End Developer/&gt;</StyledP>
            <StyledDiv>
                <StyledH1>ANNA</StyledH1>
                <StyledH1>PETTERSSON</StyledH1>
                <StyledH1>PORTFOLIO</StyledH1>
            </StyledDiv>
        </StyledDivBackgr>
    )
}

export default Header;