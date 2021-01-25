import styled from 'styled-components';
import bgtop from './img/bgtop.png';
import bgtopmobile from './img/bgtopmobile.png';


const StyledDiv1 = styled.div`
width: 100%;
margin: auto;
background-image: url(${bgtop});   
background-size: 100%;
background-repeat: no-repeat;

@media (max-width: 500px) {
    background-image: url(${bgtopmobile});
} 
`;


const StyledDivBackgr = styled.div`
width: 85%;
margin: auto;
display: flex;
justify-content: space-between;
flex-wrap: wrap-reverse;


    @media (max-width: 500px) {
        flex-wrap: wrap;
    }

    p {    
        flex: 1 0 300px;
        font-family: 'Arial';
        font-size: 2.2vw;
        color: #FD8A49;
        text-align: right;
        padding-top: 2em;

        @media (max-width: 1000px) {
        font-size: 2.5vw;
        }

        @media (max-width: 500px) {
        flex: 1 0 220px;
        text-align: center; 
        padding-top: 4em;
        padding-bottom: 3em;
        }

    }
`;


const StyledDiv = styled.div`

    h1 {
        font-family: 'Permanent Marker', cursive;
        font-size: 7vw;
        text-align: left;
        color: white;
            @media (max-width: 1060px) {
                font-size: 9vw; 
            }
    }

    h1:first-of-type {
        padding-top: 90px;
            @media (max-width: 1060px) {
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

function Header() {
    return (
        <StyledDiv1>
        <StyledDivBackgr>
            <StyledDiv>
                <h1>ANNA</h1>
                <h1>PETTERSSON</h1>
                <h1>PORTFOLIO</h1>
            </StyledDiv>
            <p>&lt;Front End Developer/&gt;</p>
        </StyledDivBackgr>
        </StyledDiv1>
    )
}

export default Header;