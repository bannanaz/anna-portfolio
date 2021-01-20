import styled from 'styled-components';
import bgtop from './img/bgtop.png';
import bgtopmobile from './img/bgtopmobile.png';


const StyledDivBackgr = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap-reverse;
background-image: url(${bgtop});   
background-size: 100%;
background-repeat: no-repeat;
    @media (max-width: 500px) {
        flex-wrap: wrap;
        background-image: url(${bgtopmobile}); 
        background-size: 100%;
        background-repeat: no-repeat; 
        height: 500px; 
    }
`;

const StyledP = styled.p`
    flex: 1 0 300px;
    font-family: 'Arial';
    font-size: 28px;
    color: #FD8A49;
    text-align: right;
    padding left: 2em;
    padding-right: 3em; 
    padding-top: 2em;
        @media (max-width: 1000px) {
        flex: 1 0 220px;
        font-size: 22px;
        padding-right: 2em;
        }

        @media (max-width: 500px) {
        flex: 1 0 220px;
        font-size: 22px;
        text-align: center; 
        padding left: 0px;
        padding-right: 0px;
        padding-top: 1em
        }
`;

const StyledDiv = styled.div`

h1:first-of-type {
    padding-top: 90px;
     @media (max-width: 1000px) {
         padding-top: 0px;
    }
     @media (max-width: 500px) {
         padding-top: 2em;
    }
}

h1:last-of-type {
    padding-bottom: 0.8em;
}

`;


const StyledH1 = styled.h1`
    font-family: 'Permanent Marker', cursive;
    font-size: 9vw;
    text-align: left;
    padding-left: 1.3em;
    color: white;
      @media (max-width: 1000px) {
        font-size: 11vw; 
    }
`;

function Header() {
    return (
        <StyledDivBackgr>
            <StyledDiv>
                <StyledH1>ANNA</StyledH1>
                <StyledH1>PETTERSSON</StyledH1>
                <StyledH1>PORTFOLIO</StyledH1>
            </StyledDiv>
            <StyledP>&lt;Front End Developer/&gt;</StyledP>
        </StyledDivBackgr>
    )
}

export default Header;