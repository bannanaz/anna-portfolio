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
    }

    p {    
        flex: 1 0 300px;
        font-family: 'Arial';
        font-size: 2vw;
        color: #FD8A49;
        text-align: right;
        padding left: 2em;
        padding-right: 3em; 
        padding-top: 2em;

        @media (max-width: 1000px) {
        flex: 1 0 220px;
        padding-right: 2em;
        font-size: 3vw;
        }

        @media (max-width: 500px) {
        flex: 1 0 220px;
        font-size: 5vw;
        text-align: center; 
        padding left: 0px;
        padding-right: 0px;
        padding-top: 4em;
        padding-bottom: 3em;
        }

    }
`;


const StyledDiv = styled.div`

    h1 {
        font-family: 'Permanent Marker', cursive;
        font-size: 9vw;
        text-align: left;
        margin-left: 110px;
        color: white;
            @media (max-width: 1060px) {
                font-size: 11vw; 
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
        <StyledDivBackgr>
            <StyledDiv>
                <h1>ANNA</h1>
                <h1>PETTERSSON</h1>
                <h1>PORTFOLIO</h1>
            </StyledDiv>
            <p>&lt;Front End Developer/&gt;</p>
        </StyledDivBackgr>
    )
}

export default Header;